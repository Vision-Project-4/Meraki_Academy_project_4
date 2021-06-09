const userData = require("../../db/models/userData");

const createNewUserData = (req,res) => {
    const {id_Number,name,age} = req.body;
    const newUserData = new userData({
        id_Number,name,age
    })
    newUserData
    .save()
    .then((result) => {
        res.status(201);
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
};

const getUserDataById_Number = (req,res) =>{
    const id_Number = req.body.id_Number
    userData
    .findOne({id_Number})
    .then((result) => {
        res.status(201);
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
}



module.exports = {
  createNewUserData,
  getUserDataById_Number
};
