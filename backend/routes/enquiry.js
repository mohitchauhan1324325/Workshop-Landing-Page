// backend/routes/enquiry.js
const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');

// POST /api/enquiry
router.post('/', async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }
  try {
    await Enquiry.create({ name, email, phone });
    res.json({ success: true, message: 'Registration submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
