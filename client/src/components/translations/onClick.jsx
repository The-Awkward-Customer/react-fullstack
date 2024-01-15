// READ ME
// This page outlines how click functions work in both vanilla and react JS

// gets the html element by id
// get document.getElementById/QuerySelector can be used to get and element and store it as an accessible value.
const button = document.getElementById("button");
console.log(button); // returns out button as an object

// using the button variable we add an event listener to the
button.addEventListener("click", () => {
  console.log("Button clicked!");
});

export default function VanillaOnClick() {
  return (
    <>
      <button id="button">Click me!</button>
    </>
  );
}
