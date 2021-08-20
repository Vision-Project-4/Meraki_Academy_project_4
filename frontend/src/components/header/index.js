import React, { useState , useEffect} from "react";
import { Route, Link } from "react-router-dom";

const Header = ({token}) => {
  console.log(token)
  const [token1 , setToken1] = useState("")
  useEffect(() => {
    setToken1(token)
    // every time the status state changes the function will run
  }, [token]);


  return ( <>
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="navbar-brand">
        <Link to="/home">
          <i className="fas fa-shield-virus"></i>
          <span>Vaccine</span>
        </Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          {token1 ? <div><li className="nav-item">
            <Link to="/booking"> booking </Link>
          </li>
          <li className="nav-item">
          <Link to="/myBooking"> My Booking </Link>
          </li></div> : "" }
          {!token1 ? <div><li className="nav-item">
            <Link to="/login"> Login </Link>
          </li>
       </div>: "" }
          <li className="nav-item">
            <Link to="/articles"> Articles</Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Header;
