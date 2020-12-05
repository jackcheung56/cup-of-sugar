import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <div>
                <ul>
                    <Link to ='/'>
                        <h1>cup of sugar</h1>
                    </Link>

                    <Link to ='/signup'>
                        <li>Sign Up</li>
                    </Link>

                    <Link to ='/signin'>
                        <li>Sign In</li>
                    </Link>

                    <Link to ='/'>
                        <li>Sign Out</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Nav