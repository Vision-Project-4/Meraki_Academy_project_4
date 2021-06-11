import React from "react";
import { Route, Link } from "react-router-dom";

const Header = () => {
  return (
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
          <li className="nav-item">
            <Link to="/home"> Home </Link>
          </li>
          <li className="nav-item">
            <Link to="/login"> Login </Link>
          </li>
          <li className="nav-item">
            <Link to="/articles"> Articles</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact"> Contact us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
