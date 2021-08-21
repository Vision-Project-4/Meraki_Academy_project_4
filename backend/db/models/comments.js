const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const commentSchema = new mongoose.Schema({
    comment : {type: String , required : true},
    commenter : {type: mongoose.Schema.Types.ObjectId , ref:"User" },
})

const comments  = mongoose.model("Comments", commentSchema);
module.exports = comments;