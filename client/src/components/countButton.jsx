export default function CountButton({ value, handler }) {
  return (
    <>
      <button onClick={handler}>count is {value}</button>
    </>
  );
}
