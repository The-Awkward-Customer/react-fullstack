import { useState, useEffect } from "react";

export default function CookieClicker() {
  // regarding variables logged to local storage
  const [cookies, setCookies] = useState(
    localStorage.getItem("cookies")
      ? parseInt(localStorage.getItem("cookies"), 10) // 10 is the base Radix
      : 0
  );

  const [cookiesPerSecond, setCookiesPerSecond] = useState(
    localStorage.getItem("cookiesPerSecond")
      ? parseInt(localStorage.getItem("cookiesPerSecond"), 10) // 10 is the base Radix
      : 1
  );

  // regarding variables NOT logeed to local storage
  const upgradeOne = 10 * cookiesPerSecond;

  useEffect(() => {
    // set interval function
    const cookieInterval = setInterval(() => {
      setCookies((currentCookies) => currentCookies + 1);
    }, 1000 / cookiesPerSecond);

    // cleand up the intervals
    return () => {
      clearInterval(cookieInterval);
    };
  }, [cookiesPerSecond]);

  // regarding local storage
  // split into individual useEffects to mitigate side effects and refactorability.
  useEffect(() => {
    localStorage.setItem("cookies", JSON.stringify(cookies));
  }, [cookies]);

  useEffect(() => {
    localStorage.setItem("cookiesPerSecond", JSON.stringify(cookiesPerSecond));
  }, [cookiesPerSecond]);

  // increments the value of cookies per second
  function IncreaseCookiesPerSecond() {
    setCookiesPerSecond(cookiesPerSecond + 1);
  }

  // resets the game values
  function ResetGame() {
    setCookiesPerSecond(1);
    setCookies(0);
  }

  useEffect(() => {
    if (cookies === upgradeOne) {
      console.log("you can buy an upgrade");
    }
  });

  return (
    <>
      <h1>Cookie Clicker</h1>
      <p>Cookies: {cookies}</p>
      <p>Cookies per second: {cookiesPerSecond}</p>
      <button onClick={IncreaseCookiesPerSecond}>Buy Cookie</button>
      <button onClick={ResetGame}>reset game</button>
      <button disabled>buy mutliplier</button>
    </>
  );
}
