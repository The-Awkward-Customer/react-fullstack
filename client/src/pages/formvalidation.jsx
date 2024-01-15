// READ ME
// This is a page about form validation

// imports
import { useState } from "react";
import ActionButton from "../components/button";
import SimpleForm from "../components/form";
import TextInput from "../components/textinput";

export default function FormValidation() {
  // useState for TextInput
  const [name, setName] = useState("");

  // prevents default page refresh for form
  function handleSubmit(event) {
    event.preventDefault();

    // handle value change using onChange
    function handleInputChange(event) {
      setName(event.target.value);
    }
  }
  return (
    <>
      <h1>Form validation</h1>
      <SimpleForm onSubmit={handleSubmit} onChange={handleInputChange}>
        <TextInput
          htmlfor={"name"}
          labelText={"name"}
          uniqueId={"userName"}
          placeHolderText={"please enter username"}
        />
        <ActionButton type={"submit"} text={"submit"} />
      </SimpleForm>
    </>
  );
}
