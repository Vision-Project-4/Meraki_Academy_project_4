const articles = require("../../db/models/articles");

const createNewArticles = (req, res) => {
  const { title, description, img } = req.body;
  console.log(req.body,"9999")
  const newArticles = new articles({
    title,
    description,
    img,
  });
  newArticles
    .save()
    .then((result) => {
      res.status(201);
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getAllArticles = (req, res) => {
  articles
    .find({})

    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

const getArticlesById = (req, res) => {
  const id = req.params.id;
  console.log(id,"0000");
  articles
    .findOne({ _id: id })
    .populate({ path: 'comments', populate: {path: 'commenter', select:'name _id'} })
    .exec()
    .then((result) => {
      console.log(result,"99999999")
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};


const updateArticlesById = (req,res) =>{
  const _id = req.params.id;

  articles
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

const deleteArticleById = (req,res)=> {
  const _id = req.params.id;
  articles
  .findByIdAndRemove({_id})
  .then((result) => {
    res.send("Deleted Complete");
  })
  .catch((err) => {
    res.send(err);
  });

}


module.exports = {
  createNewArticles,
  getAllArticles,
  getArticlesById,
  updateArticlesById,
  deleteArticleById
};
