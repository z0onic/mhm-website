import React from 'react'

function Services() {
    return (
        <div id="services" className="services-page">
            <div className="service-block">
                <h1 id="fleet" className="service-title">FLEET MANAGEMENT</h1>
                <p className="service-intro">Fleet Management is controlling your 
                    fleet of equipment. From Safe operations, to monitoring everything 
                    about your equipment use, to reducing costs, to training, 
                    to maintenance and more. </p>
                <span className="service-accent">I can HELP you Put into service a 
                    Fleet Management system. Track your entire fleet of equipment including:
                </span>
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
                        <span className="list-accent">Maintenance Costs:</span> 
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
                <div className="services-contact">
                    <p>Contact me to discuss how: tom.hickson@mhm.coach or 704-930-9692</p>
                </div>
            </div>
            <div className="service-block">
                <h1 id="sales" className="service-title">SALES CONSULTING</h1>
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
    )
}

export default Services