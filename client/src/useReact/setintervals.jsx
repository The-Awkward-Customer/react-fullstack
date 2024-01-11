import { useState, useEffect } from "react";

//bad timer examples
export default function TimerDirty() {
  console.log("TimerDirty component render");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("TimerDirty component useEffect callback");
    setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);
  }, []);

  return <div>Count: {count}</div>;
}

//gpt example
export function GptTimer() {
  console.log("GptTimer component render");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);

    return () => {
      console.log("GptTimer component useEffect cleanup");
      clearInterval(intervalId);
    };
  }, []);

  return <div>Count: {count}</div>;
}

//good timer example
export function TimerClean() {
  console.log("TimerClean component render");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("TimerClean component useEffect callback");
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);

    return () => {
      console.log("TimerClean component useEffect cleanup");
      clearInterval(interval);
    };
  }, []);

  return <div>Count: {count}</div>;
}
