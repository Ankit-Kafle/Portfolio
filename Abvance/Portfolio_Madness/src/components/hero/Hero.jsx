import React from "react";
import ankitImage from "../../assets/images/Ankit.png";
import "./Hero.css";

function Hero()  {
  return (
    <section className="firstSection">
      <div className="leftSection">
        Hi, My Name is <span className="purple">Ankit</span>

        <div>
          and I am a Junior Web Developer, Cloud Practitioner and AI
          Enthusiast
        </div>

        <span id="element">

            {/* For types.js */}
        </span>

        <div className="buttons">
          <div className="display">
            <button className="btn">Download Resume</button>
          </div>

          <div className="display">
            <button className="btn">Visit GitHub</button>
          </div>
        </div>
      </div>

      <div className="rightSection">
        <img src={ankitImage} alt="Ankit" />
      </div>
    </section>
  );
};

export default Hero;