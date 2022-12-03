import React from 'react'
import Headshot from '../Imgs/headshot.jpg'

function Title() {
    const log = () => console.log('yo')

    return (
        <div id="home" className="home-page">
            <div className="title-block">
                <h1>MATERIAL HANDLER MANAGEMENT</h1>
                <h2>FLEET MANAGEMENT AND SALES CONSULTING</h2>
                <img className="headshot" src={Headshot} alt="headshot" />
            </div>
            <div className="items">
                <div className="item">
                    <a href="#fleet">
                        <h3>FLEET MANAGEMENT:</h3>
                        <p>How can we save you money? Let us show you. 
                        Decrease your operating costs and increase your productivity.</p>
                    </a>
                </div>
                <div className="item">
                    <a href="#sales">
                        <h3>SALES CONSULTING:</h3>
                        <p>We'll help you improve your sales and closing rate, while improving
                        customer relationships and securing repeat business.</p>
                    </a>
                </div>
                <div className="item">
                    <a href="#about">
                        <h3>My CV:</h3>
                        <p>My experiences and knowledge. 
                        What I have accomplished and can for you.</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Title