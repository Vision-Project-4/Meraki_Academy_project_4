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


module.exports={
    createNewUser
}