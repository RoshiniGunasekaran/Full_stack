// server/controllers/authController.js
const User = require('../models/User'); // Import your user model
const bcrypt = require('bcryptjs'); // For password hashing
const { generateToken } = require('../utils/jwt'); // Utility function to generate token
// User Registration
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists. Please log in.' });
    }

    // Hash password and save new user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({ name, email, password: hashedPassword });
    await user.save();

    // Generate JWT token
    const token = generateToken(user._id);
    res.status(201).json({ 
      message: 'User registered successfully!', 
      token 
    });
  } catch (error) {
    console.error('Error during registration:', error.message);
    res.status(500).json({ message: 'Server error during registration' });
  }
};

// User Login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials. Please register if you are a first-time visitor.' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials. Please check your password.' });
    }

    const token = generateToken(user._id); // Generate JWT token
    res.json({ 
      message: 'Login successful!', 
      token 
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
};
