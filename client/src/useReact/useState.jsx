import { useState } from "react";

export default function OnClickCount() {
  const [count, setCount] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const countLimit = 10;

  function handleShowButton() {
    if (count >= countLimit) {
      console.log("the count is greater than 10");
      setShowButton(true);
    } else if (count <= countLimit) {
      setShowButton(false);
    }
  }

  function incrementOnClick() {
    setCount(count + 1);
    handleShowButton();
    console.log(myTernary);
  }
  function decrementOnClick() {
    setCount(count - 1);
    handleShowButton();
    console.log(myTernary);
  }

  return (
    <div>
      <h1>this is useState</h1>
      <p>
        this component uses useState. useState is a function that returns an
        array with two things inside of it. it returns a stateVariable and a
        mutation function which changes the stateVariable and then then a
        useState function that sets the initial value.
      </p>
      <p>{count}</p>
      <button onClick={incrementOnClick}>increase by one</button>
      <p>this element is rendered when the count value reaches {countLimit}</p>
      {showButton && <button onClick={decrementOnClick}>New button</button>}
    </div>
  );
}
