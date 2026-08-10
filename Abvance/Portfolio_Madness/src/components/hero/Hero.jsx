import React from "react";
import ankitImage from "../../assets/Images/Ankit.png";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

import "./Hero.css";
import resumeFile from "../../assets/Images/AnkitResume.pdf";

const GITHUB_URL = "https://github.com/Ankit-Kafle";



// TEMP: once you have a resume PDF, drop it in src/assets/ and import it,
// e.g.  import resumeFile from "../../assets/Ankit-Resume.pdf";
// then set RESUME_FILE = resumeFile below instead of null.
const RESUME_FILE = null;


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

        <span className="typed-text" ref={typedElement}></span>

        <div className="buttons">
          <div className="display">
            <a href={resumeFile} download className="btn">
              Download Resume
            </a>
          </div>

          <div className="display">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Visit GitHub
            </a>
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
