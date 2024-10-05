import React from "react";

const UpgradeShop = ({ upgrades, cookies, onUpgradePurchase }) => {
  return (
    <div className="upgrade-shop">
      <h2>Upgrades</h2>
      {upgrades.map((upgrade) => (
        <button
          key={upgrade.id}
          onClick={() => onUpgradePurchase(upgrade)}
          disabled={cookies < upgrade.cost}
        >
          {upgrade.name} (cost: {upgrade.cost} crystals) <br />
          {upgrade.description}
        </button>
      ))}
    </div>
  );
};

export default UpgradeShop;
