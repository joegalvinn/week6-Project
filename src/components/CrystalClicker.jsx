import React from "react";
import "./CrystalClicker.css";

const CrystalClicker = ({ cookies, cookiesPerSecond, onCookieClick }) => {
  return (
    <div className="crystal-clicker">
      <h1>
        <div
          className="bigText"
          style={{
            textShadow: "2px 2px 4px rgba(25, 9, 255, 0.9)",
            WebkitTextStroke: "0.2px red",
          }}
        >
          Crystals : <span style={{ fontWeight: "normal" }}>{cookies}</span>
        </div>
      </h1>
      <h1>
        <div
          className="bigText"
          style={{
            textShadow: "2px 2px 4px rgba(25, 9, 255, 0.9)",
            WebkitTextStroke: "0.2px red",
          }}
        >
          Crystals per second :{" "}
          <span
            style={{
              fontWeight: "normal",
            }}
          >
            {cookiesPerSecond}
          </span>
        </div>
      </h1>
      <img
        className="crystal"
        src="/images/crystal.png"
        alt="Crystal"
        onClick={onCookieClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default CrystalClicker;
