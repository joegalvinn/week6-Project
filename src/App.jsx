//i am goign to write all my notes in this component,
// you should divide my notes and tasks into different components whener possible

import Header from "./components/Header";
import { useEffect } from "react";

export default function App() {
  //we need TWO states to store the cookies and cookiesPerSecond
  //we need an interval managed by useEffect
  useEffect(() => {
    const cookiesPerSecondInterval = setInterval(() => {
      setCookies((currentCookies) => currentCookies + cookiesPerSecond);
    }, 1000);

    return () => {
      clearInterval(cookiesPerSecondInterval);
    };
  }, [cookiesPerSecond]);

  // we need to give the upgrades some logic
  // the logic is that when the user buys an upgrade , the cookies number goes down and the cookiesPerSecond goes up

  return (
    <>
      <Header />
      <img src={} alt="Crystal" />
{/* we  need an event to listen to the click on an image */}
      <h1>Cookies</h1>
      {/* we need to render the cookies number and cookiesPerSecond here */}
      {/* we need to render our upgrades shop in here using map */}
    </>
  );
}
