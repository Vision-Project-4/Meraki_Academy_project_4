const express = require("express");
const {create_new_comment,update_commentByID,delete_commentById} =require("../controllers/comments")
const {authentication ,authorization } = require("../controllers/auth/login")
const commentRouter=express.Router()


 commentRouter.post("/",[authentication,authorization("CreateComment"),create_new_comment])
 commentRouter.put("/:id1",[authentication,authorization("UpdateComment"),update_commentByID])
 commentRouter.delete("/:id1",[authentication,authorization("DeleteComment"),delete_commentById])
 
module.exports = commentRouter