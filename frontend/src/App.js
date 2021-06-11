import React, { useState } from "react";
import { Route } from "react-router-dom";
import Header from "./components/header/index";
import Content from "./components/content/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/footer";


const App = () => {
  const [ordered, setOrdered] = useState(false);
  return (
    <>
      {<Header />}
      {<Content />}
      {<Footer />}
    </>
  );
};

export default App;
