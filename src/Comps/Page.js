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
                <title>Materail Hanldler Management</title>
                <meta name='description' content='Consulting for the heavy machinery industry by Tom Hickson. Get help with fleet management and sales.' />
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