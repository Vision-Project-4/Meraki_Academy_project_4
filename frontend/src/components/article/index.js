import React, { useState, useEffect } from "react";
import axios from "axios";
import "./article.css"

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
    if (comment === "") {
      return null;
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

  const Comment = ({ comment, id, name, commenterId }) => {
    const userId = localStorage.getItem("userId");
    const [updatedComment, setUpdatedComment] = useState("");

    return (
      <div className="contant">

        <div className="user">
          <div className="userImage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"

              className="bi bi-person-circle"



              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path

                fillRule="evenodd"

                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </div>
          <div className="userName">
            <p>{name}</p>

            
          </div>
          

        </div>
        <input
          type="text"
          defaultValue={comment}
          disabled={updateId !== id}
          onChange={(e) => setUpdatedComment(e.target.value)}
        />

        
        {commenterId === userId ? (
          <div className="comment">
            <p onClick={() => updateComment(id, updatedComment)}>
              {updateId === id ? "Update" : "Edit"}
            </p>
            {updateId === id ? (
              <p onClick={() => setUpdateId(false)}>Cancel</p>
            ) : null}
            {!updateId ? (
              <p onClick={() => deleteComment(id)}>delete</p>

            ) : null}
          </div>
        ) : null}
      </div>
    );
  };

  const ShowComments = () => {
    console.log(article)
    const comments = article.comments.map((comment) => {
      return (
        <Comment
          key={comment._id}
          comment={comment.comment}
          id={comment._id}
          name={comment.commenter.name}
          commenterId={comment.commenter._id}
        />
      );
    });
    return comments;
  };

  return (
    <>
    <div>
      <h4>{article.title}</h4>
      <div className="text_img">
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
        <div className="addComment">
        <input
        className="add"
          type="text"
          placeholder="comment here"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        
        <button id="buttonCommente" onClick={addComment}>comment</button>
        </div>
        
      </div>
    </div>
    </>
  );
};

export default Article;
