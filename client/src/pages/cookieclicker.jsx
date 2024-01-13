import { useState, useEffect } from "react";

export default function CookieClicker() {
  // regarding variables logged to local storage

  const [bees, setbees] = useState(
    localStorage.getItem("bees")
      ? parseInt(localStorage.getItem("bees"), 10) // 10 is the base Radix
      : 0
  );

  const [beesPerClick, setbeesPerClick] = useState(
    localStorage.getItem("beesPerClick")
      ? parseInt(localStorage.getItem("beesPerClick"), 10) // 10 is the base Radix
      : 1
  );

  const [beesPerSecond, setbeesPerSecond] = useState(
    localStorage.getItem("beesPerSecond")
      ? parseInt(localStorage.getItem("beesPerSecond"), 10) // 10 is the base Radix
      : 1
  );

  // regarding variables NOT logeed to local storage
  const upgradeOne = 10 * beesPerSecond;

  const [disableUpgradeOne, SetDisableUpgradeOne] = useState(true);

  const [unit, setUnit] = useState("ml");

  useEffect(() => {
    // set interval function
    const cookieInterval = setInterval(() => {
      setbees((currentbees) => currentbees + 1);
    }, 1000 / beesPerSecond);

    // cleans up the intervals
    return () => {
      clearInterval(cookieInterval);
    };
  }, [bees, beesPerSecond]);

  // regarding local storage
  // split into individual useEffects to mitigate side effects and refactorability.
  useEffect(() => {
    localStorage.setItem("bees", JSON.stringify(bees));
  }, [bees]);

  useEffect(() => {
    localStorage.setItem("beesPerSecond", JSON.stringify(beesPerSecond));
  }, [beesPerSecond]);

  useEffect(() => {
    localStorage.setItem("beesPerClick", JSON.stringify(beesPerClick));
  }, [beesPerClick]);

  // Game Functions

  // increments the value of bees per second
  function IncreasebeesPerSecond() {
    setbeesPerSecond(beesPerSecond + 1);
    setbees(bees - upgradeOne);
  }

  // Resets the game values
  function ResetGame() {
    setbeesPerSecond(1);
    setbees(0);
  }
  // Watches for available upgrades
  useEffect(() => {
    if (bees >= upgradeOne) {
      SetDisableUpgradeOne(false);
    } else {
      SetDisableUpgradeOne(true);
    }
  }, [bees]);

  useEffect(() => {
    if (bees >= 1000) {
      setUnit("ltr");
    }
  });

  // buys a cookie
  function PurchaseCookie() {
    setbees(bees + beesPerClick);
  }

  // buys an Upgrade
  function PurchaseUpgradeOne() {
    setbees(bees - upgradeOne);
  }

  return (
    <>
      <div className="wrapper">
        {/* header */}
        <section className="header">
          <h1>Bumble Boogaloo</h1>
          <img
            src="./src/assets/GameTitle.svg"
            className="Bumble Boogalo ltd"
          />
          <p>
            Honey: {bees}
            {unit}
          </p>
          <p>bees per second: {beesPerSecond}</p>
        </section>

        {/* body */}
        <section className="body">
          <marquee>
            <img src="./src/assets/Bee.svg" />
          </marquee>
        </section>

        {/* footer */}
        <section className="footer">
          <section className="buttonGroup">
            <button onClick={PurchaseCookie}>Buy 1 Bee</button>
            <button onClick={ResetGame}>reset game</button>
            <button
              disabled={disableUpgradeOne}
              onClick={IncreasebeesPerSecond}
            >
              Buy a hive
            </button>
          </section>
        </section>
      </div>
    </>
  );
}
