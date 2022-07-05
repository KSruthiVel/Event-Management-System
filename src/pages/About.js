import React from "react";
import AboutUs from "../assets/group-about.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutUs})`,backgroundPosition:'center', backgroundSize:"72%" }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1><br/><br/>
        <p>
        Elicit Events is a celebration of the cutting edge, of pushing the boundaries, and of bringing unique visions to life. 
        Everything Elicit Events undertakes to do is done in style, with particular attention to elegance, simplicity, and sophistication. 
        Above all, We are unwaveringly devoted to quality, and each and every curated event is an unrivaled opportunity for excellence, 
        which is the bare minimum standard to be met at all times. Elicit Events exceed expectations at every opportunity and our staff 
        provide not only professional but world-class services to all our corporate and private clientele, both at home and abroad.
        </p>
      </div>
    </div>
  );
}

export default About;
