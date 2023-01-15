import { Helmet } from 'react-helmet-async'
import React from 'react'
import Nav from './Nav'
import Title from './Title'
import Services from './Services'
import About from './About'


function Page() {
    return (
        <div className="page">
            <Helmet>
                <meta name="keywords" content="heavy machinery, fleet management, 
                    consulting, sales, equipment, industrial, hickson, thomas, mhm, material handler" />
                <meta name="description" content="Our consulting company specializes in the sale of heavy machinery and 
                    fleet management for industrial companies. We offer expert advice and solutions to help optimize your 
                    equipment and operations." />
                <meta name="jon" content="Material Handler Management" />
                <title>Material Handler Management - Consulting by Tom Hickson</title>
            </Helmet>
            <Nav />
            <Title />
            <Services />
            <About />
            <div className="footer">
                <p className="about-foot">Let me help you start upping your game!</p>
            </div>
        </div>
    )
}

export default Page