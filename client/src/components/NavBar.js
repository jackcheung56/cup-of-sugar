import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
import Logo from "../assets/coslogo.png";


function NavBar({ authenticated, currentUser, className }) {

  const [logout, setLogout] = useState('false')

  const signOut = () => {
    localStorage.clear('token')
    setLogout('true')
  }

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

          <Link to="/users/:owner_id">
            <li>Profile</li>
          </Link>

          {/* <Link to="/dms/:user_id">
            <li>DM</li>
          </Link> */}

          <Link to="/">
            <li>Sign Out</li>
          </Link>
        </ul>
      </nav>
      </div>
    
  );
}

export default NavBar;
