const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer: {
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    address: String,
    city: String,
    state: String,
    zip: Number,
  },
  items: [
    {
      title: String,
      price: Number,
      quantity: Number,
    },
  ],
  orderAt: {
    type: Date,
    default: Date.now(),
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
