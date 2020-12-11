import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
import Logo from "../assets/coslogo.png";

function NavBar({ authenticated, currentUser, logout }) {
  return !authenticated && !currentUser ? (
    <div className="navbox">
      <nav>
        <ul className="nav-links">
          <Link to="/">
            <img className="navLogo" src={Logo} alt="app logo"></img>
          </Link>

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

          <Link to="/items/all">
            <li>Browse</li>
          </Link>

          <Link to="/users/:currentUser_id">
            <li>Profile</li>
          </Link>

          <Link to="/" onClick={(event) => logout(event)}>
            <li>Sign Out</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
