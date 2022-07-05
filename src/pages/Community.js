import React from "react";
import "../styles/Events.css";
import gif from "../assets/community-gif.gif";
import { Link } from "react-router-dom";
function Community() {
return (
<div className="community">
<h1 className="eventTitle">Community Events</h1>
    <img className="gif" src={gif}/>
    <p className="content">Community events are a great way to meet new people that live close to you. Who knows, 
    you might discover that you’ve been missing out on some great company.<br/><br/>

    But there are many other reasons to host a community event. You could improve the neighbourhood, 
    raise funds for a charity, or celebrate local talent or culture.<br /><br />
    Below are the most popular formats for festive events:
    <ul>
        <li>Devotional Gatherings</li>
        <li>Suprise Event</li>
        <li>Street Parties</li>
        <li>Quiz Nights</li>
    </ul>
    </p>
    <Link to="/contact">
        <button>CONTACT US</button>
    </Link>
</div>
);
}

export default Community;
