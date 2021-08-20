const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  vaccineName: { type: String, require: true },
  user: { type: mongoose.Schema.ObjectId, ref: "User" },
  date: { type: Date,  },
  // Time: { type: String },
});
const booking = mongoose.model("booking", bookingSchema);
module.exports = booking;