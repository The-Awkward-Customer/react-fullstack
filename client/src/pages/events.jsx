import Header from "../header/header";
import { OnClick, OnContextMenu, OnDoubleClick } from "../events/mouseEvents";

export default function EventsPage() {
  console.log("you are on the events page");
  return (
    <>
      <Header />

      <OnClick />
      <OnContextMenu />
      <OnDoubleClick />
    </>
  );
}
