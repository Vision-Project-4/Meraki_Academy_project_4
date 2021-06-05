const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const commentSchema = new mongoose.Schema({
    comment : {type: String , required : true},
    // commenter : {type: mongoose.Schema.Types.ObjectId ,ref:"userModel" ,  required : true},
})

module.exports = mongoose.model("Comment", commentSchema);