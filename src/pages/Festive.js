import React from "react";
import "../styles/Events.css";
import gif from "../assets/festive.gif";
import { Link } from "react-router-dom";
function Festive() {
return (
<div className="festive">
    <h1 className="eventTitle">Festive Events</h1>
        <img className="gif" src={gif}/>
        <p className="content">Festive describes an event that’s full of joy, smiles, and excitement.. 
        
        Below are the most popular formats for festive events:
        <ul>
            <li>Music Festivals</li>
            <li>Food Festivals</li>
        </ul>
        </p>
    <Link to="/contact">
        <button>CONTACT US</button>
    </Link>
</div>
);
}

export default Festive;
