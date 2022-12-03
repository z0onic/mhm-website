import React from 'react'

function Services() {
    return (
        <div id="services" className="services-page">
            <div className="wrapper red">
                <div className="service-block">
                    <h3 id="fleet" className="service-title">FLEET MANAGEMENT</h3>
                    <p className="service-intro">Controlling your 
                        fleet of equipment. Including Safe operations, monitoring everything 
                        about your equipment use, reducing costs, training, 
                        maintenance and more. I can <span className="accent-word">HELP YOU</span> implement a 
                        Fleet Management system. Track your entire fleet of equipment including:
                    </p>
                    <ul className="service-list">
                        <li className="service-list-item">
                            <span className="list-accent">Usage:</span> 
                            <p>Hours worked, IDLE time hours, productivity levels.</p>
                        </li>
                        <li className="service-list-item">
                            <span className="list-accent">Fuel Usage:</span> 
                            <p>Learn how to lower your fuel burn. Manage your productive hours.</p>
                        </li>
                        <li className="service-list-item">
                            <span className="list-accent">Maintenance Costs:</span><br />
                            <p>Lower your costs. Focus on $500 repairs instead of
                                $5000 ones, $5000 repairs instead of $25,000 or $50,000 
                                painful fixes.
                            </p>
                        </li>
                        <li className="service-list-item">
                            <p>Setting up a simple and usable Daily Inspection Program. 
                                Tying that into your Fleet Management system so you use 
                                the information gained from inspecting your equipment.
                            </p>
                        </li>
                        <li className="service-list-item">
                            <p>Starting a Preventative Maintenance Program. Whether you 
                                decide to pay by the hour run or quarterly, initiating 
                                and managing a WORKING PM PROGRAM.
                            </p>
                        </li>
                        <li className="service-list-item">
                            <span className="list-accent">Telematics:</span> 
                            <p>Being able to monitor your equipment remotely
                                via your computer or cell phone.
                            </p>
                        </li>
                        <li className="service-list-item">
                            <p>TIE ALL of these together and obtain a 
                                solid grasp of your equipment fleet!
                            </p>
                        </li>
                    </ul>
                    {/* <div className="services-contact">
                        <p>Contact me to discuss how: tom.hickson@mhm.coach or 704-930-9692</p>
                    </div> */}
                </div>
            </div>
            <div className="wrapper purple">
                <div className="service-block">
                    <h3 id="sales" className="service-title">SALES CONSULTING</h3>
                    <p className="service-intro">How we can help you and 
                        the Sales side of your business:
                    </p>
                    <ul className="service-list">
                        <li className="service-list-item">
                            Machine specific training for your sales staff on Material Handlers
                        </li>
                        <li className="service-list-item">
                            Industry specific (Recycling & Scrap Processing) 
                            training for your sales staff
                        </li>
                        <li className="service-list-item">
                            How to walk the walk in the Material Handling world
                        </li>
                        <li className="service-list-item">
                            Take advantage of my many contacts & 
                            relationships with customers in your area
                        </li>
                        <li className="service-list-item">
                            Traveling with your sales staff on customer visits
                        </li>
                        <li className="service-list-item">
                            How to use a Contact Management system as a sales 
                            tool and add benefit for your sales staff instead of as an autonomous manager
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services