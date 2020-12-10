import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/Nav.css";
import Logo from "../assets/coslogo.png";



function NavBar({ authenticated, currentUser, className, logout }) {



  return !authenticated && !currentUser ? (
    <div className="navbox">
      <nav>
        <ul className="nav-links">
          <Link to="/">
            <img className="navLogo" src={Logo} alt="app logo"></img>
          </Link>

          {/* <Link to="/home">
            <li>Home</li>
          </Link> */}

          <Link to="/signup">
            <li>Sign Up</li>
          </Link>

          <Link to="/login">
            <li>Sign In</li>
          </Link>
        </ul>
      </nav>
    </div>
  ) : (
    
      <div className="navbox">
      <nav>
        <ul className="nav-links">
          <Link to="/">
            <img className="navLogo" src={Logo} alt="app logo"></img>
          </Link>

          <Link to="/home">
            <li>Home</li>
          </Link>

          <Link to="/items/all">
            <li>Browse</li>
          </Link>

          <Link to="/users/user_id">
            <li>Profile</li>
          </Link>

          {/* <Link to="/dms/:user_id">
            <li>DM</li>
          </Link> */}

          <Link 
          to='/'>
            <li>Sign Out</li>
          </Link>
        </ul>
      </nav>
      </div>
    
  );
}

export default NavBar;
