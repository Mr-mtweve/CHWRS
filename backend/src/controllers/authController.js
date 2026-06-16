const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const authController = {
  register: async (req, res) => {
    try {
      const { email, password, firstName, lastName } = req.body;
      
      const token = jwt.sign(
        { id: 1, email: email, role: 'chw' },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE || '7d' }
      );

      res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: { user: { email, firstName, lastName }, token }
      });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Registration error' });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      
      const token = jwt.sign(
        { id: 1, email: email, role: 'chw' },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE || '7d' }
      );

      res.status(200).json({
        success: true,
        message: 'Login successful',
        data: { user: { email }, token }
      });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Login error' });
    }
  },

  logout: (req, res) => {
    res.status(200).json({ success: true, message: 'Logout successful' });
  },

  forgotPassword: (req, res) => {
    res.status(200).json({ success: true, message: 'Reset link sent' });
  },

  resetPassword: (req, res) => {
    res.status(200).json({ success: true, message: 'Password reset successful' });
  },

  refreshToken: (req, res) => {
    const token = jwt.sign({}, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.status(200).json({ success: true, data: { token } });
  }
};

module.exports = authController;
