const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const { check, validationResult } = require("express-validator");

router.post(
  "/",
  [
    [check("firstName", "Please enter your first name")],
    [check("lastName", "Please enter your last name")],
    [check("email", "Please enter your email").isEmail()],
    [check("phone", "Please enter your phone").isLength({ min: 10 })],
    [check("address", "Please enter your address")],
    [check("city", "Please enter your city")],
    [check("state", "Please enter your state")],
    [check("zip", "Please enter your zip code").isLength({ min: 5 })],
  ],
  async (req, res) => {
    try {
      const newOrder = new Order({
        customer: req.body.customer, // Extract customer data
        items: req.body.items, // Extract items data
      });

      const savedOrder = await newOrder.save();
      console.log("Saved order:", savedOrder);
      res.status(201).json(savedOrder);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

module.exports = router;
