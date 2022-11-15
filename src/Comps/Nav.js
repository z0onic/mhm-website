import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Imgs/mhm_logo.png'

function Nav() {
    return (
        <div className="header">
            <nav className="menu">
                <ul>
                    <li>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/services">Services</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <div className="header-info">
                <div className="logo">
                    <img className="logo-img" src={Logo} alt="mhm logo" />
                </div>
                <div className="contact">
                    <h2 className="cell">cell: 704-930-9692</h2>
                    <h2 className="">email: tom.hickson@mhm.coach</h2>
                </div>
            </div>
        </div>
    )
}

export default Nav