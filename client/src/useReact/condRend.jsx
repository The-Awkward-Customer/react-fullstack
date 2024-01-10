import { useState } from "react";

// simple ternary oporator
export default function SimpleTernary() {
  const [showText, setShowText] = useState(false);
  function clickHandler() {
    setShowText(!showText);
  }

  return (
    <section>
      <h1>
        This is an example of basic conditional rendering using a ternery
        oporator
      </h1>
      <button onClick={clickHandler}>
        {/* changes the button text based */}
        {showText ? "hide text" : "show text"}
      </button>
      {showText && <p>hello there!</p>}
    </section>
  );
}

// export function SimpleTernaryWithProp(prop) {
//   return (
//     <section>
//       <h1>
//         This is example of a ternery oporator where the condition is accessed
//         via a prop.
//       </h1>
//     </section>
//   );
// }
