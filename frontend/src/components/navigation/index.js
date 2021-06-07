import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({token}) => {
	return(  
		<>
		<Link to="/home">Home</Link>
		<Link to="/about">About</Link>
		<Link to="/articles">Articles</Link>
		<Link to="/contact">Contact</Link>
		<Link to="/login">Login</Link>
	 </>
	)
};

export default Navigation;
