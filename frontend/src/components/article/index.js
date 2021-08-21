import React, { useState, useEffect } from "react";
import axios from "axios";
import "./article.css";
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
      <>
        <div className="comment mt-2">
          <div class="comment-heading d-flex">
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
            <div className="userName ml-2">
              <p>{name}</p>
            </div>
          </div>
          <div className="comment-body d-flex">
            <input
              type="text"
              defaultValue={comment}
              disabled={updateId !== id}
              onChange={(e) => setUpdatedComment(e.target.value)}
            />
            {commenterId === userId ? (
              <ul>
                <li onClick={() => updateComment(id, updatedComment)}>
                  {updateId === id ? (
                    "Update"
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pen"
                      viewBox="0 0 16 16"
                    >
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                    </svg>
                  )}
                </li>
                {updateId === id ? (
                  <p onClick={() => setUpdateId(false)}>Cancel</p>
                ) : null}
                {!updateId ? (
                  <li className="ml-2" onClick={() => deleteComment(id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </li>
                ) : null}
              </ul>
            ) : null}
          </div>
        </div>
      </>
    );
  };
  const ShowComments = () => {
    const comments = article.comments.map((comment) => {
      return (
        <>
          <Comment
            key={comment._id}
            comment={comment.comment}
            id={comment._id}
            name={comment.commenter.name}
            commenterId={comment.commenter._id}
          />
        </>
      );
    });
    return comments;
  };
  return (
    <>
      <div className="container">
        <h4>{article.title}</h4>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={article.img} className="img-vaccine" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <p className="para-vaccine">{article.description}</p>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12">
            <form class="form-inline">
              <input
                className="form-control"
                type="text"
                placeholder="Type"
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
              <button
                type="submit"
                id="buttonCommente"
                class="btn btn-primary ml-2"
                onClick={addComment}
              >
                Comment
              </button>
            </form>
          </div>
          {article.comments ? (
            <div className="container">
              <ShowComments />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default Article;
