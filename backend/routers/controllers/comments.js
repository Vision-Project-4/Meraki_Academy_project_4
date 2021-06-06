const express = require("express");
const Comment = require("../../db/models/comments.js");
const article = require("../../db/models/articles");
const comment = require("../../db/models/comments");

//create new comment
const create_new_comment = async (req, res) => {
  let { comment  } = req.body;
  let _id = req.params.id;
  const comment1 = new Comment({
    comment,
    commenter :req.token.userId
  });

  await comment1

    .save()
    .then(async (result) => {
      await article.findOneAndUpdate(
        { id: _id },
        { $push: { comments: result._id } },
        { new: true }
      );
      res.json(result);
      status(201);
    })
    .catch((err) => {
      res.send(err);
    });
};

//update comments
const update_commentByID = (req, res) => {
  let _id = req.params.id1;

  comment.findOneAndUpdate(
    { _id , commenter: req.token.userId},
    req.body,
    { new: true }
  ).then((result)=>{
   res.json(result);
    status(201); 
  }).catch((err)=>{
    res.send(err)
  })
};



//delete comments

const delete_commentById= (req,res)=>{
  let _id=req.params.id1
comment.findByIdAndRemove({_id , commenter: req.token.userId})
.then((result)=>{
  res.json(result);
   status(201); 
 }).catch((err)=>{
   res.send(err)
 })
}


module.exports = {
   create_new_comment,
  update_commentByID ,
  delete_commentById};
