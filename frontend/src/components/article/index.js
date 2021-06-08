import React, { useState, useEffect } from "react";
import axios from "axios";

const Article = (props) => {
  const [article, setArticle] = useState({});
  const [comment, setComment] = useState([]);

  const getArticleById = () => {
    const id = props.match.params.articlesId;

    axios
      .get(`http://localhost:5000/articles/${id}`)
      .then((result) => {
        setArticle(result.data);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getArticleById();
  }, []);

  const addComment = () => {
    const id = props.match.params.articlesId;
    const token = localStorage.getItem("token");
    axios
      .post(`http://localhost:5000/articles/${id}/comments`, {
        comment
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        setComment("");
        getArticleById();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h4>{article.title}</h4>
      <div>
        <p>{article.description}</p>
        <img src={article.img}></img>
      </div>
      <div>
        <input
          type="text"
          placeholder="comment here"
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <button onClick={addComment}>add comment</button>
      </div>
    </div>
  );
};

export default Article;
