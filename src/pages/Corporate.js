import React from "react";
import "../styles/Events.css";
import gif from "../assets/corporate-gif.gif";
import { Link } from "react-router-dom";

function Corporate() {
return (
<div className="corporate">
    <h1 className="eventTitle">Corporate Events</h1>
    <img className="gif" src={gif} alt="loading..." />
    <p className="content">A corporate event is one that's sponsored by a company and focuses on either its employees or clients.
    Simply put, a corporate event is any form of event, hospitality or social activity which is organised or funded by a business entity.<br /><br/>
    Businesses organise events for many reasons, they may want to educate, reward, motivate, celebrate, mark key milestones, 
    manage organisational change or encourage collaboration. What ever the reason may be, there is an event solution.<br /><br/>
    Below are the most popular formats for corporate events:
    <ul>
        <li>Conference</li>
        <li>Trade Show</li>
        <li>Award Ceremony</li>
        <li>Launch Event</li>
        <li>Company Meeting</li>
    </ul>
    </p>
    <Link to="/contact">
        <button>CONTACT HERE</button>
        </Link>

</div>
);
}

export default Corporate;
