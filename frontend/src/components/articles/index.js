import React , { useState, useEffect }from "react";
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
      <section>
      <div    className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div key={elem._id} className="article">
              <div className="container" style={{padding:"5%", backgroundColor:"#fff"}}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={elem.img} />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12" style={{padding:"5% 2%"}}>
                    <h3>
                    {elem.title}
                    </h3>
                    <p>
                    {elem.description}
                    </p>
                    <button type="button" className="btn btn-primary" onClick={() => showMore(elem._id)}>
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </section>

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
    <div>
      {allAticles}
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
