// READ ME
// This page outlines how click functions work in both vanilla and react JS

const button = document.getElementById("button");
console.log(button); // returns out button as an object

// // using the button variable we add an event listener to the button object
// button.addEventListener("click", () => {
//   console.log("Button clicked using a event listener!");
// });
export function VanillaOnClick() {
  // gets the html element by id
  // get document.getElementById/QuerySelector can be used to get and element and store it as an accessible value.
  const clickHandler = () => console.log("Button clicked using React onClick");
  return (
    <>
      <h3>Vanilla event listener</h3>
      <button id="button">Click me!</button>

      <h3>React onClick</h3>
      <button onClick={clickHandler}>Click me!</button>
    </>
  );
}
