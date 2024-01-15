import ActionButton from "./button";

export default function SimpleForm({
  formId,
  htmlfor,
  labelText,
  uniqueId,
  value,
  onChange,
}) {
  // prevents default page refresh for form
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor={htmlfor}>{labelText}</label>
        <input type="text" id={uniqueId} onChange={onChange} value={value} />
        <ActionButton type={"submit"} text={"click me!"} />
      </form>
    </>
  );
}
