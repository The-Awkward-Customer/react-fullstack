import { useState, useEffect } from "react";

export default function CookieClicker() {
  const [cookies, setCookies] = useState(0);
  const [cookiesPerSecond, setCookiesPerSecond] = useState(1);
  const gameState = {
    // values…
    cookies: cookiesPerSecond,
    // cookiesValue: cookiesValue,
  };

  useEffect(() => {
    // gets game state
    const savedGameState = localStorage.getItem("gameState");
    if (savedGameState) {
      const gameState = JSON.parse(savedGameState);
      //   remap values
      //   cookiesValue = gameState.cookiesValue;
    }

    // set interval function
    const cookieInterval = setInterval(() => {
      setCookies((currentCookies) => currentCookies + 1);
    }, 1000 / cookiesPerSecond);

    // saves game state
    localStorage.setItem("gameState", JSON.stringify(gameState));

    // cleand up the intervals
    return () => {
      clearInterval(cookieInterval);
    };
  }, [cookiesPerSecond]);

  function IncreaseCookiesPerSecond() {
    setCookiesPerSecond(cookiesPerSecond + 1);
  }

  return (
    <>
      <h1>Cookeie Clicker</h1>
      <p>Cookies: {cookies}</p>
      <p>Cookies per second: {cookiesPerSecond}</p>
      <button onClick={IncreaseCookiesPerSecond}>Buy Cookie</button>
    </>
  );
}

// you can use a ternary opporator to see if something is hidden or not
