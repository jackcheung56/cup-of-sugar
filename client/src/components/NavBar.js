import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <div>
                <h2>cup of sugar</h2>
                <ul>
                    <Link to ='/'>
                        <ul>Home</ul>
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