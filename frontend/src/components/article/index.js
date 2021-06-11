import React, { useState, useEffect } from "react";
import axios from "axios";

const Article = (props) => {
  const [article, setArticle] = useState({});
  const [comment, setComment] = useState([]);
  const [updateId, setUpdateId] = useState("");
  const getArticleById = () => {
    const id = props.match.params.articlesId;

    axios
      .get(`http://localhost:5000/articles/${id}`)
      .then((result) => {
        setArticle(result.data);
        console.log(result.data);
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
    console.log(token, "9999");
    axios
      .post(
        `http://localhost:5000/comments/${id}`,
        {
          comment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        setComment("");
        getArticleById();
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateComment = (id, comment) => {
    if (updateId !== id) {
      return setUpdateId(id);
    }
    if(comment === ""){
      return null
    }
    console.log(id);
    const token = localStorage.getItem("token");
    axios
      .put(
        `http://localhost:5000/comments/${id}`,
        {
          comment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        setUpdateId("");
        getArticleById();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteComment = (id) => {
    const token = localStorage.getItem("token");

    axios
      .delete(`http://localhost:5000/comments/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((result) => {
        getArticleById();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  const Comment = ({ comment, id }) => {
    const [updatedComment, setUpdatedComment] = useState("");
    return (
      <div className="comment">
        <input
          type="text"
          defaultValue={comment}
          disabled={!updateId}
          onChange={(e) => setUpdatedComment(e.target.value)}
        />

        <button onClick={() => updateComment(id, updatedComment)}>
          {updateId === id ? "Update" : "Edit"}
        </button>
        {updateId === id ? (
          <button onClick={() => setUpdateId(false)}>Cancel</button>
        ) : null}
        {!updateId ? <button onClick={() => deleteComment(id)}>delete</button>: null}
        
      </div>
    );  
  };

  const ShowComments = () => {
    const comments = article.comments.map((comment) => {
      return (
        <Comment key={comment._id} comment={comment.comment} id={comment._id} />
      );
    });
    return comments;
  };

  return (
    <div>
      <h4>{article.title}</h4>
      <div>
        <p>{article.description}</p>
        <img src={article.img}></img>
      </div>
      <div>
        <br />
        {article.comments ? (
          <div className="comments">
            <ShowComments />
          </div>
        ) : null}
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