const User = require('../models/user');

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { email, password, isAdmin } = req.body;

    const newUser = new User({
      email,
      password,
      isAdmin
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the user.' });
  }
};
