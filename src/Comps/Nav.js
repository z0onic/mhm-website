import React from 'react'
// import { Link } from 'react-router-dom'
import Logo from '../Imgs/mhm_logo_white.png'
import {ReactComponent as Phone} from '../Imgs/phone-solid.svg'
import {ReactComponent as Email} from '../Imgs/envelope-solid.svg'

function Nav() {
    return (
        <div className="header">
            <input id="menu-toggle" type="checkbox" />
            <label className="menu-button-container" htmlFor="menu-toggle">
                <div className="menu-button"></div>
            </label>
            <ul className="menu">
                <li>
                    <a className="nav-link" href="#home">Home</a>
                </li>
                <li>
                    <a className="nav-link" href="#services">Services</a>
                </li>
                <li>
                    <a className="nav-link" href="#about">About</a>
                </li>
            </ul>
            <div className="header-info">
                <div className="logo">
                    <img className="logo-img" src={Logo} alt="mhm logo" />
                </div>
                <div className="contact">
                    <h2 className="cell"><Phone />704-930-9692</h2>
                    <h2 className="email"><Email />tom.hickson@mhm.coach</h2>
                </div>
            </div>
        </div>
    )
}

export default Nav