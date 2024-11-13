const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../database/db');


const registerUser = async ({ name, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashedPassword });
  return user;
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
  return { token, user };
};

const getUserProfile = async (userId) => {
  const user = await User.findByPk(userId);
  return user;
};

module.exports = { registerUser, loginUser, getUserProfile };
