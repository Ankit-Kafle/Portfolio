import React from "react";
import ankitImage from "../../assets/Images/Ankit.png";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

import "./Hero.css";

function Hero() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Junior Web Developer", "Cloud Practitioner", "AI Enthusiast"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="firstSection">
      <div className="leftSection">
        Hi, My Name is <span className="purple">Ankit</span>
        <div>
          and I am a Junior Web Developer, Cloud Practitioner and AI Enthusiast
        </div>


        <span  className="typed-text"  ref={typedElement}></span>


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
}

export default Hero;
