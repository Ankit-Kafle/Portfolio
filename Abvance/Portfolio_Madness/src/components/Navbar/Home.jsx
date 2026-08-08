import React from "react";
import Hero from "../hero/Hero";
import Experience from "../experience/Experience";
import Footer from "../footer/footer";

const Home = () => {
  return (
    <>
      <main>
        <Hero />

        <hr className="section-divider" />

        <Experience />
      </main>

      <Footer />
    </>
  );
};

export default Home;