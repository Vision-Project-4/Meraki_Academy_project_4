const express = require("express");
const booking = require("../../db/models/booking");

const create_new_booking = (req, res) => {
  const { vaccineName, name, Date, Time } = req.body;
  const booking1 = new booking({
    vaccineName,
    name,
    Date,
    Time,
  });
  booking1
    .save()
    .then((result) => {
      res.json(result);
      status(201);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getAll_booking = (req, res) => {
  
  booking
    .find({})

    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

const delete_bookingById = (req, res) => {
  let _id = req.params.id;
  booking
    .findByIdAndRemove({ _id })
    .then((result) => {
      res.json(result);
      status(201);
    })
    .catch((err) => {
      res.send(err);
    });
};


const git_bookingById=(req,res)=>{
    let _id=req.params.id
    booking
    .findOne({_id})

    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
}

const update_booking=(req,res)=>{
    const _id = req.params.id;

  booking
  .findOneAndUpdate(
    { _id },
    req.body,
    { new: true }
  )
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    res.send(err);
  });

}


module.exports = {
  create_new_booking,
  getAll_booking,
  delete_bookingById,
  git_bookingById,
  update_booking
};
