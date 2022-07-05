import React from "react";
import "../styles/About.css";
import gif from "../assets/party-event.gif";
import { Link } from "react-router-dom";
function Party() {
return (
<div className="party">
<h1 className="eventTitle">Party Events</h1>
            <img className="gif" src={gif}/>
            <p className="content">A party is a gathering of people who have been invited by a host for the purposes of 
            socializing, conversation, recreation, or as part of a festival or other commemoration or celebration of a special occasion.<br/>
            A party will often feature food and beverages, and often conversation, music, dancing, or other forms of entertainment.
            Some parties are held in honor of a specific person, day, or event, such as a birthday party, a Super Bowl party, or a 
            St. Patrick’s Day party.<br/><br/> Parties of this kind are often called celebrations. A party is not necessarily a private occasion. 
            Public parties are sometimes held in restaurants, pubs, beer gardens, nightclubs, or bars, and people attending such parties 
            may be charged an admission fee by the host.
            </p>
        <Link to="/contact">
            <button>CONTACT US</button>
        </Link>
</div>
);
}

export default Party;
