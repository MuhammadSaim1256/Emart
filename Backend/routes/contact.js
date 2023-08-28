const express = require("express");
const router = express.Router();
const Contact = require("../models/ContactUser");

router.post("/", async (req, res) => {
  try {
    const newMessage = new Contact({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    });

    const savedMsg = await newMessage.save();
    console.log("Saved message:", savedMsg);
    res.status(201).json(savedMsg);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
