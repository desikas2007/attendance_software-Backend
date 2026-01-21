// routes/auth.js
const express = require('express');
const router = express.Router();

// Test route to confirm file is loaded
router.get('/test', (req, res) => {
  res.json({ message: 'Auth route is working perfectly!' });
});

// Login route (mock for now - we will add real logic later)
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Mock success (replace with real DB check later)
  if (email && password) {
    res.json({
      message: 'Login successful (mock)',
      token: 'fake-jwt-token-12345',
      user: { email }
    });
  } else {
    res.status(400).json({ message: 'Email and password required' });
  }
});

module.exports = router;