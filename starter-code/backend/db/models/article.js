const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const articleSchema = new mongoose.Schema({
  Title: { type: String },
  Description: { type: String },
  imgURL: { type: String }
});

module.exports = mongoose.model("Article", articleSchema);