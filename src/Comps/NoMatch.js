import React from 'react'
import { Link } from 'react-router-dom'

function NoMatch() {
    return (
        <div>
            <p>No Match Page</p>
            <Link to="/">Go to Home</Link>
        </div>
    )
}

export default NoMatch