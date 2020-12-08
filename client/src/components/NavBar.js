import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function NavBar({ authenticated, currentUser, className }) {
  console.log(authenticated);
  console.log(currentUser);
  console.log(className);

  return !authenticated && !currentUser ? (
    <div className="navbox">
      <nav>
        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/signup">
            <li>Sign Up</li>
          </Link>
          <Link to="/items/all">
            <li>Browse</li>
          </Link>
          <Link to="/signin">
            <li>Sign In</li>
          </Link>
        </ul>
      </nav>
    </div>
  ) : (
    <header className={className}>
      <div className="navbox">Welcome Back </div>
      <nav>
        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/items/all">
            <li>Browse</li>
          </Link>
          <Link to="/users/:user_id">
            <li>Profile</li>
          </Link>
          <Link to="/">
            <li>Sign Out</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
