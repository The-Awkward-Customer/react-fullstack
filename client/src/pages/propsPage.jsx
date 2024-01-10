import CountButton from "../components/countButton";
import SetCountFunc from "../useReact/SetCountFunc";

export default function PropsPage() {
  const { count, handleCounter } = SetCountFunc(1);

  return (
    <>
      <h1>This is a page about props</h1>
      <p>
        Props propogate downwards. In this example I import my handleCounter
        function and use it to pass a value to my CountButton components.
      </p>
      <CountButton handler={handleCounter} value={count} />
    </>
  );
}
