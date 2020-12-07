import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Nav.css';

function Navbar(props) {
    // console.log('nav', props)


    return (
        <nav>
            <div className="navbox">

                <p>hello user</p>

                <ul className="nav-links">

                    <Link to='/landing'>
                        <li>Landing</li>
                    </Link>


                    <Link to='/'>
                        <li>Home</li>
                    </Link>

                    <Link to='/users/all'>
                        <li>User</li>
                    </Link>

                    <Link to='/items/all'>
                        <li>Browse</li>
                    </Link>

                    <Link to='/users/:user_id'>
                        <li>Profile</li>
                    </Link>

                    <Link to='/signup'>
                        <li>Sign Up</li>
                    </Link>

                    <Link to='/signin'>
                        <li>Sign In</li>
                    </Link>

                    <Link to='/'>
                        <li>Sign Out</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

