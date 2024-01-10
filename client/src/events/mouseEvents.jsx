export function OnClick() {
  function clickHandler(message) {
    console.log(message);
  }
  return (
    <div>
      <h1>This is an "onClick" event</h1>
      <h2>events work similarly to Vanilla.js in React</h2>

      <p>This onClick event uses an arrow function to call a console log </p>
      <button onClick={() => console.log("you did it!")}>click me</button>

      <p>
        This onClick event uses an arrow function call a predefined function and
        accepts a message
      </p>
      <button onClick={() => clickHandler("hello there!")}>
        I have a clickHandler
      </button>
    </div>
  );
}

export function OnContextMenu() {
  const handleContextMenu = (event) => {
    event.preventDefault(); // Prevents the default browser context menu
    // Logic to display your custom context menu
    console.log(
      "Context menu event triggered at X:",
      event.clientX,
      "Y:",
      event.clientY
    );
  };

  return <div onContextMenu={handleContextMenu}>Right-click on me!</div>;
}

export function OnDoubleClick() {
  const handleDoubleClick = () => {
    //double click logic
  };
  return <div>Double-click on me!</div>;
}
