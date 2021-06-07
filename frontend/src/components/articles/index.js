import axios from "axios";
import React, { useState, useEffect } from "react";
import "./articles.css";
const Articles = () => {
  // const addArticle = () => {
  //   setAdd("")
  //   setForm(<div>
  //     <input
  //       type="text"
  //       placeholder="title here"
  //       onChange={(e) => {
  //         setTitle(e.target.value);
  //       }}
  //     />
  //     <input
  //       type="text"
  //       placeholder="description here"
  //       onChange={(e) => {
  //         setDescription(e.target.value);
  //       }}
  //     />
  //     <input
  //       type="text"
  //       placeholder="img here"
  //       onChange={(e) => {
  //         setImg(e.target.value);
  //       }}
  //     />
  //     <button onClick={createArticle}>create articles</button>
  //   </div>)

  // };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [form, setForm] = useState(false);
  const [result, setResult] = useState("");
  const [articles, setArticles] = useState([]);

  const allAticles = articles.map((elem, i) => {
    return (
      <>
        <div className="article1">
          <h4>{elem.title}</h4>
          <div className="article_1">
            <p>{elem.description}</p>
            <img src={elem.img}></img>
          </div>
        </div>
      </>
    );
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/articles/")

      .then((result) => {
        setArticles(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const CreateArticle = () => {
    console.log(title, description, img);

    axios
      .post("http://localhost:5000/articles/", { title, description, img })

      .then((result) => {
        setForm("");
        setAdd(<button onClick={addArticle}>Add article</button>);
        setResult(
          <div className="article1">
            <h4>{result.data.title}</h4>
            <div className="article_1">
              <p>{result.data.description}</p>
              <img src={result.data.img}></img>
            </div>
          </div>
        );


      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addArticle = () => {
    setAdd("");
    setForm(true);
  };
  const [add, setAdd] = useState(
    <button onClick={addArticle}>Add article</button>
  );

  return (
    <>
      <div className="articles">
        {allAticles}
        {result}
      </div>

      {add}
      {form === true ? (
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
