const express = require("express");

 
 const {checkLogin} = require("../../controllers/auth/login");
const loginRouter = express.Router();

loginRouter.post("/", checkLogin);



module.exports = loginRouter;



