// regarding useEffect Hook & fetch
import { useEffect, useState } from "react";

//use Effect example
// useEffect(() => {}, []);

export default function TestEffect() {
  //declare useState
  const [toDoItems, setToDoItems] = useState([]);

  // runs when the page loads
  // AND
  // when the array of setToDoItems(data) changes
  useEffect(() => {
    handleGetToDoItems();
  }, []);

  async function handleGetToDoItems() {
    // get api data using fetch
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    setToDoItems(data);
  }

  return (
    <>
      <h1>useEffect & Fetch</h1>
      <p>
        {
          "useEffect accepts two - three arguements. for example useEffect(firstArugment, Second arugment) is equal to useEffect(()=>{},[]). when the state of the second argument changes the first function is triggered."
        }
        ;
      </p>
      <h2>To Do List</h2>
      <ul>
        {toDoItems.map((items) => {
          return (
            <li key={items.id + items.title}>
              <p>{items.id}</p>
              <p>{items.title}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
