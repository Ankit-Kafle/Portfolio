import React from "react";
import "./About.css";
import ankitImage from "../../../assets/Images/cool.jpeg";
import CertificateCard from "./CertificateCard";

import cert1 from "../../../assets/Certificates/AWS.jpg";
import cert2 from "../../../assets/Certificates/ThirtydayChallenge.jpg";
import cert3 from "../../../assets/Certificates/CyberSecurity.jpg";
import cert4 from "../../../assets/Certificates/Javascript.jpg";
import cert5 from "../../../assets/Certificates/React.jpg";


const bio =
  "I'm a junior web developer who enjoys turning ideas into working products, learning cloud fundamentals along the way.";

const skills = ["React", "JavaScript", "Node.js","C/C++","AWS","Git/GitHub"];

const STATS = [
  { number: "3+", label: "Projects Built" },
  { number: "4+", label: "Certifications" },
  { number: "2", label: "Year Learning" },
];

const CERTIFICATES = [
  { image: cert1, name: "AWS Cloud Practitioner", issuer: "Lumbini Tech Month" },
  { image: cert2, name: "30 Day Learning Challenge", issuer: "Lumbini Tech Month/Datacamp" },
  { image: cert3, name: "CyberSecurity Basic", issuer: "Butwal Multiple Campus" },
  { image: cert4, name: "JavaScript", issuer: "Synthbit Technology" },
  { image: cert5, name: "React", issuer: "Code For Change" },
];

const About = () => {
  return (
    <section className="aboutSection">
      <span className="textGray">Get To Know</span>
      <h1>About Me</h1>

      <div className="aboutIntro">
        <img className="aboutImage" src={ankitImage} alt="Ankit" />
        <div className="aboutText">
          <p>{bio}</p>

          <div className="skills">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>

          <div className="statsRow">
            {STATS.map((stat) => (
              <div className="stat" key={stat.label}>
                <div className="statNumber">{stat.number}</div>
                <div className="statLabel">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="certificates">
        <h2>Certificates</h2>
        <div className="certGrid">
          {CERTIFICATES.map((cert) => (
            <CertificateCard
              key={cert.name}
              image={cert.image}
              title={cert.name}
              issuer={cert.issuer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;