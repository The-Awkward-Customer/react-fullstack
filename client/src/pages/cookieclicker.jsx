import { useState, useEffect } from "react";
import logoimg from "../assets/GameTitle.svg";

export default function CookieClicker() {
  // regarding variables logged to local storage

  const [honey, setHoney] = useState(
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

  const [bumbleBee, setBumbleBee] = useState(
    localStorage.getItem("bumbleBee")
      ? JSON.parse(localStorage.getItem("bumbleBee"))
      : []
  );

  const [beesAdded, setBeesAdded] = useState(
    localStorage.getItem("beesAdded")
      ? parseInt(localStorage.getItem("beesAdded"), 10)
      : 0
  );

  // regarding variables NOT logeed to local storage
  const upgradeOne = 10 * beesPerSecond;

  const [disableUpgradeOne, SetDisableUpgradeOne] = useState(true);

  const [unit, setUnit] = useState("ml");

  useEffect(() => {
    // set interval function
    const cookieInterval = setInterval(() => {
      setHoney((currentbees) => currentbees + 1);
    }, 1000 / beesPerSecond);

    // cleans up the intervals
    return () => {
      clearInterval(cookieInterval);
    };
  }, [honey, beesPerSecond]);

  // regarding local storage
  // split into individual useEffects to mitigate side effects and refactorability.
  useEffect(() => {
    localStorage.setItem("honey", JSON.stringify(honey));
  }, [honey]);

  useEffect(() => {
    localStorage.setItem("beesPerSecond", JSON.stringify(beesPerSecond));
  }, [beesPerSecond]);

  useEffect(() => {
    localStorage.setItem("beesPerClick", JSON.stringify(beesPerClick));
  }, [beesPerClick]);

  useEffect(() => {
    localStorage.setItem("bumbleBee", JSON.stringify(bumbleBee));
  }, [bumbleBee]);

  useEffect(() => {
    localStorage.setItem("beesAdded", JSON.stringify(beesAdded));
  }, [beesAdded]);

  // Game Functions

  // increments the value of bees per second
  function IncreasebeesPerSecond() {
    setbeesPerSecond(beesPerSecond + 1);
    setbees(bees - upgradeOne);
  }

  // Resets the game values
  function ResetGame() {
    setbeesPerSecond(1);
    setHoney(0);
    setBeesAdded(0);
    setBumbleBee([]);
  }
  // Watches for available upgrades
  useEffect(() => {
    if (honey >= upgradeOne) {
      SetDisableUpgradeOne(false);
    } else {
      SetDisableUpgradeOne(true);
    }
  }, [honey]);

  useEffect(() => {
    if (honey >= 1000) {
      setUnit("ltr");
    }
  });

  // buys a cookie
  function purchaseBee() {
    setHoney(honey + beesPerClick);
  }

  // buys an Upgrade
  function PurchaseUpgradeOne() {
    setbees(honey - upgradeOne);
  }

  // const AddBumbleBee = () => {
  //   // useState requires an array as an arrary of elements will be created

  //   setBeesAdded(beesAdded + 1);
  //   console.log("beeAdded!");

  //   // for i beesAdded
  //   // increment through beesAdded
  //   // append setBumbleBee Array with a new element
  //   const newBees = {
  //     id: Math.random(),
  //     BumblebeeStyle: {
  //       top: `${Math.random() * 100}%`,
  //       right: `0%`,
  //       bottom: `${Math.random() * 100}%`,
  //       animationDuration: `${Math.random() * 8 + 5}s`,
  //     },
  //   };

  //   //  update the setBumbleBee([]) array to include newBumbleBee
  //   setBumbleBee([...bumbleBee, ...newBees]);
  // };

  const AddBumbleBee = () => {
    setBeesAdded(beesAdded + 1);

    const newBee = {
      id: Math.random(),
      BumblebeeStyle: {
        top: `${Math.random() * 100}%`,
        right: `0%`,
        bottom: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 8 + 5}s`,
      },
    };
    console.log(` honey = ${honey}`);
    console.log(`bumblebee = ${bumbleBee}`);
    console.log(`newBee = ${newBee}`);
    console.log(`beesAdded = ${beesAdded}`);
    console.log(`BeesPerClick = ${beesPerClick}`);

    setBumbleBee([...bumbleBee, newBee]);
  };

  function ClickHandler() {
    purchaseBee();
    AddBumbleBee();
  }

  return (
    <>
      <div className="wrapper">
        {/* header */}
        <section className="header">
          <h1>Bumble Boogaloo</h1>
          <img src={logoimg} className="Bumble Boogalo ltd" />
          <p>
            Honey: {honey}
            {unit}
          </p>
          <p>beesPeSecond: {beesPerSecond}</p>
          <p>beesAdded: {beesAdded}</p>
        </section>

        {/* body */}
        <section className="body">
          {/* Add new elements when Clickhandler triggers the AddBumbleBee func */}

          {bumbleBee.map((el) => (
            <div
              key={el.id}
              style={el.BumblebeeStyle}
              className="beeFlying"
            ></div>
          ))}
        </section>

        {/* footer */}
        <section className="footer">
          <section className="buttonGroup">
            <button onClick={ClickHandler}>Buy 1 Bee</button>
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
