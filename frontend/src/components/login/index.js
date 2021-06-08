import React, { useState  } from "react";
import { useHistory } from "react-router-dom";
import { Route , Link } from 'react-router-dom';
import axios from "axios";
const Login = (props) => {
    
    const [message,setMessage] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const history = useHistory()
    
    const funLogin = () =>{
        axios
        .post("http://localhost:5000/login", { email, password })
      .then((res) => {
        if(res.data.status === 404){
          setMessage(<div><p>The email is incorrect</p></div>)
          
        }else if (res.data.status === 403){
          setMessage(<div><p>The password is incorrect</p></div>)
          
        }else{
        
        props.func(res.data.token);
        
        history.push("/articles");}
      })
      .catch((err) => {
        console.log({ err });
      });
    }

    return(
        <>
        <h1>login</h1>
        <input type="email" placeholder="email here" onChange={(e)=>{
            setEmail(e.target.value)
        }}/>
        <br/>
        <br/>
        <input type="password" placeholder="password here" onChange={(e)=>{
          setPassword(e.target.value)  
        }}/>
        <br/>
        <br/>
        <button onClick={funLogin}>Sign In</button>
        
        <Link to="/register"><button> Sign Up </button></Link>
        {message}
        
        </>
    )

}

export default Login
