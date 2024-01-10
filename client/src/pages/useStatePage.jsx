import Header from "../header/header";
import OnClickCount from "../useReact/useState";

export default function useStatePage() {
  console.log("you are on the useStage page");
  return (
    <>
      <Header />
      <OnClickCount />
    </>
  );
}
