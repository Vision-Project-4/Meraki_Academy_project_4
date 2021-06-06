import React, { useState  } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Login = ({setToken}) => {
    
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const history = useHistory()
    // const [resulte, setResulte] = useState("")
    const funLogin = () =>{
        axios
        .post("http://localhost:5000/login", { email, password })
      .then((res) => {
        // console.log(res); 
        setToken(res.data.token);
        // localStorage.setItem("token",res.data.token )
        history.push("/articles");
      })
      .catch((err) => {
        console.log({ err });
      });
    }

    return(
        <>
        <input type="email" placeholder="email here" onChange={(e)=>{
            setEmail(e.target.value)
        }}/>
        <input type="password" placeholder="password here" onChange={(e)=>{
          setPassword(e.target.value)  
        }}/>
        <button onClick={funLogin}>login</button>
        </>
    )

}

export default Login
