import React from 'react'
import {ReactComponent as Phone} from '../Imgs/phone-solid.svg'
import {ReactComponent as Email} from '../Imgs/envelope-solid.svg'

function Footer() {
    return (
        <footer className="contact">
            <h2 className="cell"><Phone />704-930-9692</h2>
            <h2 className="email"><Email />tom.hickson@mhm.coach</h2>
        </footer>
    )
}

export default Footer