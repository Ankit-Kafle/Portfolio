import React from "react";
import "./Footer.css";

function Footer() {
  const footerLinksOne = ["Home", "About", "Contact"];
  const footerLinksTwo = ["Facebook", "Linkdin", "Youtube"];

  return (
    <footer>
      <div className="footer">
        <div className="footer-first">
          <h3>Ankit Portfolio</h3>
        </div>

        <div className="footer-second">
          <ul>
            {footerLinksOne.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>

        <div className="footer-third">
          <ul>
            {footerLinksTwo.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>

       

        
      </div>

      <div className="footer-rights">
        Copyright © www.jgrrlb.com | ALL rights reserved
      </div>
    </footer>
  );
}

export default Footer;