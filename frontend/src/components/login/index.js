import React, { useState  } from "react";
import { useHistory } from "react-router-dom";
import { Route , Link } from 'react-router-dom';
import axios from "axios";
import "./login.css";
const Login = (props) => {
  const [message,setMessage] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const history = useHistory()
  // const [result, setResult] = useState("")
  const funLogin = (e) => { 
    e.preventDefault()

    axios.post("http://localhost:5000/login", { email, password })
      .then((res) => {

        console.log(res.data)

        if(res.data.status === 404){
          setMessage(<div><p>The email is incorrect</p></div>)
          
        }else if (res.data.status === 403){
          setMessage(<div><p>The password is incorrect</p></div>)
          
        }else{

        
          console.log(res.data.token)
          localStorage.setItem("token", res.data.token);
          props.func(res.data.token);

        
         history.push("/articles");
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <>
      <section>
        <div className="container">
          <div
            className="row"
            style={{ justifyContent: "center", padding: "5%" }}
          >
            <form
              className="bg-white rounded form"
              style={{ padding: "5%", width: "450px" }}
            >
              <div className="form-group">
                <label htmlFor="email">
                  {" "}
                  <i className="fas fa-asterisk"></i> Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="email form-control"
                  placeholder="Enter your Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  {" "}
                  <i className="fas fa-asterisk"></i> Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="password form-control"
                  placeholder="Enter your password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="logged"
                  id="checkbox"
                />
                <label className="form-check-label" htmlFor="checkbox">
                  Keep me logged in
                </label>
              </div>
              <br/>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={funLogin}
                style={{ margin: "auto", display: "block", width: "100%" }}
              >
                Login
              </button>
              <Link to="/register"><button className="btn btn-primary" style={{ margin: "auto", display: "block", width: "100%" }}> Sign Up </button></Link>
              {message}
            </form>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
