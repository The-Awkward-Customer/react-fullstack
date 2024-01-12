import { useState, useEffect } from "react";

export default function CookieClicker() {
  // sets state variables IF available.
  // Uses tenery oporator to either the value found in local storage OR sets the value to 0 if not found
  // The same pattern is applied to cookiesPerSecond
  const [cookies, setCookies] = useState(
    parseInt(localStorage.getItem("cookies")) || 0
  );
  const [cookiesPerSecond, setCookiesPerSecond] = useState(
    parseInt(localStorage.getItem("cookiesPerSecond")) || 1
  );

  useEffect(() => {
    // set interval function
    const cookieInterval = setInterval(() => {
      setCookies((currentCookies) => currentCookies + 1);
    }, 1000 / cookiesPerSecond);

    // sets variables in local storage and converts them to a string.
    //  updates when the value of [dependancies] is altered
    localStorage.setItem("cookies", cookies.toString());
    localStorage.setItem("cookiesPerSecond", cookiesPerSecond.toString());

    // cleans up the intervals
    return () => {
      clearInterval(cookieInterval);
    };
  }, [cookies, cookiesPerSecond]);

  function IncreaseCookiesPerSecond() {
    setCookiesPerSecond(cookiesPerSecond + 1);
  }

  return (
    <>
      <h1>Cookie Clicker</h1>
      <p>Cookies: {cookies}</p>
      <p>Cookies per second: {cookiesPerSecond}</p>
      <button onClick={IncreaseCookiesPerSecond}>Buy Cookie</button>
    </>
  );
}
