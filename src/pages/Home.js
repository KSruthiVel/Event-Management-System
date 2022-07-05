import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/home.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h3>Let us help you organize</h3><br/>
        <p>For events as unique as you</p>
        <Link to="/menu">
          <button> GET STARTED!</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
