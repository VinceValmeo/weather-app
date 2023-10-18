import React from "react";
import "./Header.css";
import { logo } from "../../assets";

function Header() {
  return (
    <div className="title">
      <img src={logo} alt="Atmosify Cities Logo" />

      <h2>Atmosify</h2>
      <span> Cities</span>
    </div>
  );
}

export default Header;
