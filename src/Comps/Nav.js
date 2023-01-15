import React from 'react'
import Logo from '../Imgs/mhm_logo_white.png'
import {ReactComponent as Phone} from '../Imgs/phone-solid.svg'
import {ReactComponent as Email} from '../Imgs/envelope-solid.svg'

function Nav() {
    const menu = document.querySelector('#menu-toggle')
    const links = document.querySelectorAll('.nav-link')
    
    React.useEffect(() => {
        const phone = document.querySelector('.cell')
        phone.addEventListener('click', () => window.open('tel:7049309692'))
    })

    links.forEach(item => {
        item.addEventListener('click', () => menu.checked = false)
    })

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
                    <a className="nav-link" href="#fleet">Fleet Management</a>
                </li>
                <li>
                    <a className="nav-link" href="#sales">Sales Consulting</a>
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
                    <h2 className="email"><Email /><a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=email@tom.hickson@mhm.coach" 
                        target="_blank" 
                        rel="noreferrer"
                    >tom.hickson@mhm.coach</a></h2>
                </div>
            </div>
        </div>
    )
}

export default Nav