import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/nomatch">NoMatch</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav