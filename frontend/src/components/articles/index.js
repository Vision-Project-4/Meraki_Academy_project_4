import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./articles.css";

const Articles = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [form, setForm] = useState(false);
  const [result, setResult] = useState("");
  const [articles, setArticles] = useState([]);
  const [oneArticle, setOneArticle] = useState({});
  const [showAdd, setShowAdd] = useState(true);

  const history = useHistory();

  const showMore = (id) => {
    history.push(`articles/${id}`);
  };

  const allAticles = articles.map((elem, i) => {
    return (
        <div key={elem._id} className="article1" onClick={() => showMore(elem._id)}>
          <h4>{elem.title}</h4>
          <div className="article_1">
            <p>{elem.description}</p>
            <img src={elem.img}></img>
          </div>
          
        </div>
    );
  });

  const getArticles = () => {
    return axios
      .get("http://localhost:5000/articles/")

      .then((result) => {
        setArticles(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getArticles();
  }, []);

  const CreateArticle = async () => {
    await axios
      .post("http://localhost:5000/articles/", { title, description, img })

      .then((result) => {
        setForm(false);
        getArticles();
        setShowAdd(true);

        
      })
      .catch((err) => {
        console.log(err);
      });
  };

 
  const addArticle = () => {
    setShowAdd(false);
    setForm(true);
  };

  return (
    <>
      <div className="articles">
        {allAticles}
        {/* {result} */}
      </div>

      {showAdd ? <button onClick={addArticle}>Add article</button> : <></>}
      {form ? (
        <div>
          <input
            placeholder="title here"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="description here"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="img here"
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
          <button onClick={CreateArticle}>create articles</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Articles;
