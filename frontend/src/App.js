import React from 'react';
import { Route } from 'react-router-dom';
import Header from "./components/header/index";
import Content from "./components/content/index";



const App = () => {
	return (<> 
	{ <Header /> }
	<Content />
	    

	</>)
};

export default App;
