import React, { useState  } from "react";// import {useState, createContext} from "react"
import { Route , Link ,Switch} from 'react-router-dom';
// import component after create it in components
import Home from "../home";
import About from "../about"
import Articles from "../articles"
import Contact from "../contact"
import Login from "../login";
import Article from "../article";
import Booking from "../booking/index"
import Register from "../register";



const Content = () => {
  const [token,setToken]  = useState("")
  // style={{ display: "flex", gap: "16px" }
	return( 
    <>
    <Switch>
    <Route exact path="/"   component={Home} />
    <Route exact path="/home"   component={Home} /> 
    <Route exact path="/about"  component={About} />
    <Route exact path="/articles"   component={Articles} />
    <Route exact path="/contact"  component={Contact} />
     <Route exact path="/login" render={()=><Login func={setToken}/>}/> 
     <Route path="/articles/:articlesId" component={Article} />
     <Route exact path="/booking"   component={Booking} />
     <Route exact path="/register"  component={Register} />
     </Switch>
     
     
     
  {console.log(token)}
  </>
  )
};

export default Content;
