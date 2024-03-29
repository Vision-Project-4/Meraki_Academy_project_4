const express = require("express");
const booking = require("../../db/models/booking");
const moment = require("moment")

const create_new_booking = (req, res) => {
  const { vaccineName, name,time } = req.body;
  const date = new Date(req.body.date)
  const date1 =  moment(date).format("YYYY-MM-DD")
  const booking1 = new booking({
    vaccineName,
    user: name,
    date:date1 ,
    time
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

const getBookingByUser=(req,res)=>{
  let id=req.params.id
  booking
  .findOne({user: id})
  .populate('user')
  .exec()
  .then((result) => {
    console.log(result, '+++++++++++++++++++++++++++');
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
  update_booking,
  getBookingByUser
};
