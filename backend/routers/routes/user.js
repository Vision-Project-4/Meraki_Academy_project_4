const express = require("express");

const {createNewUser,getUserDataById} = require("../controllers/user");

const userRouter = express.Router();

userRouter.post("/",createNewUser)
userRouter.get("/:id",getUserDataById)
module.exports = userRouter;
