import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

function Page() {
    return (
        <div className="page">
            <Nav />
            <Outlet />
        </div>
    )
}

export default Page