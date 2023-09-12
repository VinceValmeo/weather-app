import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  console.log(year);
  return (
    <div className="footer">
      <p>
        <span>Vince Valmeo</span>
        {` © ${year} All Rights Reserved`}
      </p>
    </div>
  );
}

export default Footer;
