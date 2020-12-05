import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Nav.css';

function Navbar() {
    return (
        <nav>
            <div className="navbox">
                <ul className="nav-links">
                    <Link to ='/'>
                        <ul>cup of sugar</ul>
                    </Link>

                    <Link to ='/signup'>
                        <ul>Sign Up</ul>
                    </Link>

                    <Link to ='/signin'>
                        <ul>Sign In</ul>
                    </Link>

                    <Link to ='/'>
                        <ul>Sign Out</ul>
                    </Link>

                    <Link to ='/browse'>
                        <ul>Browse</ul>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar