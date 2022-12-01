import React from 'react'
import Headshot from '../Imgs/placeholder.png'

function Title() {
    document.querySelectorAll('a').forEach( item => item.addEventListener('click', () => console.log('yo')))

    return (
        <div id="home" className="home-page">
            <div className="title-block">
                <h1>MATERIAL HANDLER MANAGEMENT</h1>
                <h2>FLEET MANAGEMENT AND SALES CONSULTING</h2>
                <img className="headshot" src={Headshot} alt="headshot" />
            </div>
            <div className="items">
                <div className="item">
                    <a href="#fleet" onClick={console.log('clicked')}>FLEET MANAGEMENT:</a>
                    <p>How can we save you money? Let us show you. 
                    Decrease your operating costs and increase your productivity.</p>
                </div>
                <div className="item">
                    <a href="#sales" onClick={console.log('clicked')}>SALES CONSULTING:</a>
                    <p>We'll help you improve your sales and closing rate, while improving
                    customer relationships and securing repeat business.</p>
                </div>
                <div className="item">
                    <a href="#about" onClick={console.log('clicked')}>My CV:</a>
                    <p>My experiences and knowledge. 
                    What I have accomplished and can for you.</p>
                </div>
            </div>
        </div>
    )
}

export default Title