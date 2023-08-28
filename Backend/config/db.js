const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

function connectDB() {
  mongoose
    .connect(db)
    .then(() => {
      console.log("MongoDB Connected...");
    })
    .catch((err) => {
      console.log("MongoDB Connection Error:", err.message);
    });
}

module.exports = connectDB;
