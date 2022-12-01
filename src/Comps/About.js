import React from 'react'

function About() {
    return (
        <div id="about" className="about-page">
            <h1 className="about-title">Experience</h1>
            <p className="about-subtitle">
                I have been selling or buying heavy equipment, 
                primarily in the Scrap and Recycling industries, for 40 years.
            </p>
            <h2 className="about-list-header">
                With over 20 years of management experience including LEADING: 
            </h2>
            <ul className="about-list">
                <li className="about-list-item">
                    <span className="list-item-subtitle">Division of a Company:</span> 
                    SMH Group-US. National Distributor of Atlas and Mantsinen material handlers.
                </li>
                <li className="about-list-item">
                    <span className="list-item-subtitle">Procurement Group:</span> 
                    PSC Metals. 12-member team responsible for purchasing everything 
                    but raw materials.
                </li>
                <li className="about-list-item">
                    <span className="list-item-subtitle">Fleet Management:</span> 
                    The David J. Joseph Company. Managed nation-wide equipment fleet.
                </li>
                <li className="about-list-item">
                    <span className="list-item-subtitle">Dealer Management:</span> 
                    Republic Crane & Equipment. Moved from end user direct sales 
                    to setting up and managing dealers for National Distribution.
                </li>
            </ul>
            <h2 className="about-list-header">With 18 years of direct sales experience.</h2>
            <ul className="about-list">
                <li className="about-list-item">
                    Front line direct sales roles with high closing rates. 
                    I've knocked on doors, built relationships and trust. 
                    Got the signed orders.
                </li>
                <li className="about-list-item">
                    I specialize in STARTING operations and can help you start 
                    upgrading your operation.
                </li>
                <li className="about-list-item">
                    Changed from direct sales to Dealer management when Republic Crane 
                    went from a regional dealer to National Distributor for 
                    Liebherr Material Handlers.
                </li>
                <li className="about-list-item">
                    DJJ's First Fleet Manager and developed the role.
                </li>
                <li className="about-list-item">
                    PSC Metals First Procurement director and lead a team who implemented 
                    the structure as well as managed their fleet of equipment.
                </li>
                <li className="about-list-item">
                    Initial manager of SMH Group-US, Atlas and Mantsinen National Distributor. 
                    Built the network, set up the distribution management 
                    and built the foundation.
                </li>
            </ul>
            <div className="about-foot">Let me help you start upping your game!</div>
        </div>
    )
}

export default About