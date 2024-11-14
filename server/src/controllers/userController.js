// src/controllers/userController.js
const { registerUser, loginUser, getUserProfile } = require('../handlers/userHandler');

const userController = {
  register: async (req, res) => {
    try {
      const user = await registerUser(req.body);
      res.status(201).json({ message: 'User registered', user });
    } catch (error) {
      res.status(500).json({ message: 'Failed to register', error: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { token, user } = await loginUser(req.body);
      res.json({ message: 'Logged in', token, user });
    } catch (error) {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  },

  getProfile: async (req, res) => {
    try {
      const userId = req.params.id || req.user.id;
      const user = await getUserProfile(userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get user', message: error.message });
    }
  },
};

module.exports = userController;
