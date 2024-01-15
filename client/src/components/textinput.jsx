export default function TextInput({
  htmlfor,
  labelText,
  uniqueId,
  placeHolderText,
}) {
  return (
    <>
      <label htmlFor={htmlfor}>{labelText}</label>
      <input type="text" id={uniqueId} placeholder={placeHolderText} />
    </>
  );
}
