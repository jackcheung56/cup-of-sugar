<<<<<<< HEAD
import React from "react";
import "../styles/Landing.css";
import Logo from "../assets/coslogo.png";

export default function Landing() {
  return (
    <div className="branding">
      <div className="object">
        <img src={Logo} alt="app logo"></img>
        <div className="welcome">
          <h2>cup of sugar</h2>
        </div>
      </div>
      {/* <div className="footer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff"  fill-opacity="1" d="M0,96L80,128C160,160,320,224,480,240C640,256,800,224,960,197.3C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div> */}
    </div>
  );
=======
import React from 'react'
import '../styles/Landing.css'
import Logo from '../assets/coslogo.png'
import { Link } from "react-router-dom";





export default () => {
    return (
        <div className="branding">

            <div className="lifted">
                <div className="object">
                    <img src={Logo} alt="app logo"></img>
                    <div className="welcome"><h2>cup of sugar</h2></div>
                </div>

                <div className="greeting">

                    <Link to="/login">
                        <p className="landingLink">Sign In</p>
                    </Link>

                    <Link to="/signup">
                        <p className="landingLink">Sign Up</p>
                    </Link>

                </div>
            </div>









            <div className="footer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,96L80,128C160,160,320,224,480,240C640,256,800,224,960,197.3C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>



        </div>
    )
>>>>>>> e8af2464ea84b367edb82562e38520bc9e45b5f8
}
