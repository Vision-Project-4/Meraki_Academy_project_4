import React, { useState  } from "react";// import {useState, createContext} from "react"
import { Route , Link ,Switch} from 'react-router-dom';
// import component after create it in components
import Navigation from "../navigation/index";
import Home from "../home";
import About from "../about"
import Articles from "../articles"
import Contact from "../contact"
import Login from "../login";
import Article from "../article";
import Register from "../../components/register/index";




const Content = () => {
  const [token,setToken]  = useState("")
  // style={{ display: "flex", gap: "16px" }
	return( 
    <>
  <div>

    <Switch>
    <Route exact path="/home"   component={Home} /> 
    <Route exact path="/about"  component={About} />
    <Route exact path="/articles"   component={Articles} />
    <Route exact path="/contact"  component={Contact} />
    <Route exact path="/register"  component={Register} />
     <Route exact path="/login" render={()=><Login setToken={setToken}/>}/> 
     <Route path="/articles/:articlesId" component={Article} />
     </Switch>
     
     
  </div>
  </>
  )
};

export default Content;
