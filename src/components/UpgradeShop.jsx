import React from "react";
import "./UpgradeShop.css";

const UpgradeShop = ({ upgrades, cookies, onUpgradePurchase }) => {
  return (
    <>
      <div className="upgrade-shop-parent">
        <div className="upgrade-shop">
          <h2
            style={{
              textShadow: "2px 2px 4px rgba(25, 9, 255, 0.9)",
              WebkitTextStroke: "0.1px red",
            }}
            className="upgradeTitle"
          >
            Upgrades
          </h2>
          {upgrades.map((upgrade) => (
            <div key={upgrade.id} className={`upgrade upgrade-${upgrade.id}`}>
              <h3>{upgrade.name}</h3>
              <p>Cost: {upgrade.cost} crystals</p>
              <p>{upgrade.description}</p>
              <button
                className="button1"
                onClick={() => onUpgradePurchase(upgrade)}
                disabled={cookies < upgrade.cost}
              >
                Purchase
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UpgradeShop;
