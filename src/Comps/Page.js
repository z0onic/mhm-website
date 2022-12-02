import React from 'react'
// import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Title from './Title'
import Services from './Services'
import About from './About'
// import Footer from './Footer'


function Page() {
    return (
        <div className="page">
            <Nav />
            {/* <Outlet /> */}
            {/* <div className="content">
                <Title />
                <Services />
                <About />
            </div> */}
            <Title />
            <div className="wrapper">
                <Services />
            </div>
            <About />
            <div className="footer">
                <p className="about-foot">Let me help you start upping your game!</p>
            </div>
        </div>
    )
}

export default Page