const express = require('express');
const router = express.Router();
const Contact = require('./user');

// Handle POST request to /submit
router.post('/submit', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate the request data
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    // Save the new contact to the database
    const newuser = new Contact({
      name,
      email,
      message,
    });

    console.log('New User:', newuser);
    await newuser.save();

    // Send success response
    res.status(200).json({ success: true, message: 'Submission successful.' });
  } catch (error) {
    console.error('Error saving user:', error);

    // Send error response
    res.status(500).json({ success: false, message: 'Internal server error. Please try again.' });
  }
});

module.exports = router;
