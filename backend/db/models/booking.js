const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  vaccineName: { type: String, require: true },
  name: { type: mongoose.Schema.ObjectId, ref: "user" },
  date: { type: Date,  },
  // Time: { type: String },
});
const booking = mongoose.model("booking", bookingSchema);
module.exports = booking;