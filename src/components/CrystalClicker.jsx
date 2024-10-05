import React from "react";

const CrystalClicker = ({ cookies, cookiesPerSecond, onCookieClick }) => {
  return (
    <div className="crystal-clicker">
      <h1>Crystals: {cookies}</h1>
      <h1>Crystals per second: {cookiesPerSecond}</h1>
      <img
        src="/images/crystal.png"
        alt="Crystal"
        onClick={onCookieClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default CrystalClicker;
