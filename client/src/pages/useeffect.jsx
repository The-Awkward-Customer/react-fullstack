import TimerDirty, { GptTimer, TimerClean } from "../useReact/setintervals";
import TestEffect from "../useReact/useEffect";

export default function UseEffectPage() {
  console.log("you are on the useEffect page.");
  return (
    <>
      <TestEffect />
      <TimerDirty />
      <GptTimer />
      <TimerClean />
    </>
  );
}
