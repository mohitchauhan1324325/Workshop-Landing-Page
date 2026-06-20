// backend/routes/enquiry.js
import express from "express";
const router = express.Router();
import Enquiry from "../models/Enquiry.js";

// POST /api/enquiry
router.post('/', async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }

  try {
    const existingUser = await Enquiry.findOne({
      $or: [{ email }, { phone }]
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'You have already registered.'
      });
    }

    await Enquiry.create({ name, email, phone });

    res.status(201).json({
      success: true,
      message: 'Registration submitted successfully'
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

export default router;
