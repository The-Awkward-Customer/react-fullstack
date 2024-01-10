import { useState } from "react";

export default function SetCountFunc(i) {
  //declaration
  const [count, setCount] = useState(0);

  //handleCounter functons
  function handleCounter() {
    setCount(count + i);
  }
  //returns the handleCounter method and count value enabling it to be passed as props
  return { handleCounter, count };
}
