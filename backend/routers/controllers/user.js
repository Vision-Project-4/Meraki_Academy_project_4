const user = require("../../db/models/user");

const createNewUser = (req, res) => {
  const { nationality,
    id_number,
    name,
    age,
    email,
    password, } = req.body;
  const newUser = new user({
    nationality,
        id_number,
        name,
        age,
        email,
        password,
  });
  newUser
    .save()
    .then((result) => {
      res.status(201);
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getUserDataById = (req, res) => {
  const id = req.params.id;
  console.log(id,"0000");
  user
    .findOne({ _id: id })
    .populate()
    .exec()
    .then((result) => {
      console.log(result,"99999999")
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};


module.exports={
    createNewUser,
    getUserDataById
}