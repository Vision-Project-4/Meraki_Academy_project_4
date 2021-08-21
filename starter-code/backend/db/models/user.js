const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  name: { type: String },
  age: { type: Number },
  email: { type: String },
  password: { type: String },
});

module.exports = mongoose.model("User", userSchema);
