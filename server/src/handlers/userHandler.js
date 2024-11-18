const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../database/db");

const registerUser = async ({ name, lastname, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, lastname, email, password: hashedPassword });
  return user;
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }
  const token = jwt.sign(
    { id: user.id, role: user.role, name: user.name, lastname: user.lastname },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
  return { token, user };
};

const getUserProfile = async (id) => {
  return await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
};

module.exports = { registerUser, loginUser, getUserProfile };
