// READ ME
// This is a page about form validation

// imports
import { useState } from "react";
import SimpleForm from "../components/form";

export default function FormValidation() {
  // useState for TextInput
  const [name, setName] = useState("");

  function handleInputChange(event) {
    setName(event.target.value);
  }

  return (
    <>
      <h1>Form validation</h1>
      <SimpleForm
        htmlfor={"htmlfor"}
        labelText={"name"}
        uniqueId={"name"}
        value={name}
        onChange={handleInputChange}
      ></SimpleForm>
      <p> the value is : {name}</p>
    </>
  );
}
