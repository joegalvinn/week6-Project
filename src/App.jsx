//i am goign to write all my notes in this component,
// you should divide my notes and tasks into different components whener possible

import Header from "./components/Header";
import { useEffect, useState } from "react";
import CrystalClicker from "./components/CrystalClicker";
import UpgradeShop from "./components/UpgradeShop";
import "./App.css";

export default function App() {
  //we need TWO states to store the cookies and cookiesPerSecond
  const [cookies, setCookies] = useState(() => {
    const savedCookies = localStorage.getItem("cookies");
    return savedCookies ? parseInt(savedCookies, 10) : 0;
  });
  const [cookiesPerSecond, setCookiesPerSecond] = useState(() => {
    const savedCookiesPerSecond = localStorage.getItem("cookiesPerSecond");
    return savedCookiesPerSecond ? parseInt(savedCookiesPerSecond, 10) : 1;
  });
  const [upgrades, setUpgrades] = useState([]);

  useEffect(() => {
    const fetchUpgrades = async () => {
      const response = await fetch("src/lib/data.json");
      const data = await response.json();
      setUpgrades(data);
    };
    fetchUpgrades();
  }, []);

  useEffect(() => {
    localStorage.setItem("cookies", cookies);
  }, [cookies]);

  useEffect(() => {
    localStorage.setItem("cookiesPerSecond", cookiesPerSecond);
  }, [cookiesPerSecond]);

  const handleCookieClick = () => {
    setCookies((prevCookies) => prevCookies + 1);
  };

  //we need an interval managed by useEffect
  useEffect(() => {
    const cookiesPerSecondInterval = setInterval(() => {
      setCookies((prevCookies) => prevCookies + cookiesPerSecond);
    }, 1000);

    return () => clearInterval(cookiesPerSecondInterval);
  }, [cookiesPerSecond]);

  // we need to give the upgrades some logic
  // the logic is that when the user buys an upgrade , the cookies number goes down and the cookiesPerSecond goes up
  const handleUpgradePurchase = (upgrade) => {
    if (cookies >= upgrade.cost) {
      setCookies(cookies - upgrade.cost);
      setCookiesPerSecond(
        (prevCookiesPerSecond) => prevCookiesPerSecond + upgrade.oresPerSecond
      );
    }
  };

  const reset = () => {
    setCookies(0);
    setCookiesPerSecond(1);
  };

  return (
    <div className="body">
      <Header />

      <CrystalClicker
        cookies={cookies}
        cookiesPerSecond={cookiesPerSecond}
        onCookieClick={() => setCookies(cookies + cookiesPerSecond)}
      />
      <UpgradeShop
        upgrades={upgrades}
        cookies={cookies}
        onUpgradePurchase={handleUpgradePurchase}
      />
      {/* we  need an event to listen to the click on an image */}

      {/* we need to render the cookies number and cookiesPerSecond here */}
      {/* we need to render our upgrades shop in here using map */}
      <button onClick={reset}>Reset Game</button>
    </div>
  );
}
