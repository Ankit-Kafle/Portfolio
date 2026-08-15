import React from "react";

function CertificateCard({ image, title, issuer }) {
  return (
    <div className="certCard">
      <div className="certImage">
        {image ? <img src={image} alt={title} /> : <span>cert image</span>}
      </div>
      <div className="certTitle">{title}</div>
      <div className="certIssuer">{issuer}</div>
    </div>
  );
}

export default CertificateCard;