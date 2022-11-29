import React from 'react'
// import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Title from './Title'
import Services from './Services'
import About from './About'


function Page() {
    return (
        <div className="page">
            <Nav />
            {/* <Outlet /> */}
            <Title />
            <Services />
            <About />
        </div>
    )
}

export default Page