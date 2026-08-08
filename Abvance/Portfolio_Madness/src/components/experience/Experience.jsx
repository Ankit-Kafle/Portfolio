import React from "react";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard";
import fullStackIcon from "../../assets/icons/fullstack.png";
import cloudIcon from "../../assets/icons/cloud.png";
import aiIcon from "../../assets/icons/ai.png";
import comingSoonIcon from "../../assets/icons/comingsoon.png";

function Experience() {
  return (
    <section className="secondSection">
      <span className="textGray">What I have Done So Far</span>

      <h1>Work Experience</h1>

      <div className="box">
        <ExperienceCard
          image={fullStackIcon}
          title="Full Stack Developer (2026 - Present)"
          description="Building responsive web apps with modern frontend and backend tools."
        />

        <ExperienceCard
          image={cloudIcon}
          title="Cloud Practitioner (2026 - Present)"
          description="Working with cloud fundamentals, deployment workflows, and infrastructure concepts."
        />

        <ExperienceCard
          image={aiIcon}
          title="AI Enthusiast (2026 - Present)"
          description="Exploring practical AI workflows, prompt design, and useful automation ideas."
        />

        <ExperienceCard
          image={comingSoonIcon}
          title="Coming Soon"
          description="More projects and experience entries will be added here as the portfolio grows."
        />
      </div>
    </section>
  );
}

export default Experience;
