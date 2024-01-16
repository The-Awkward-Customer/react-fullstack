import { Link } from "react-router-dom";

export default function HomePage() {
  console.log("You are on the homepage");
  return (
    <>
      <nav>
        <Link to={"/eventspage"}>Mouse Events</Link>
        <Link to={"/usestatepage"}>useState</Link>
        <Link to={"/conditionalrendering"}>Conditional Rendering</Link>
        <Link to={"/maps"}>Maps</Link>
        <Link to={"/useeffect"}>useEffect</Link>
        <Link to={"/cookieclicker"}>Bumble Boogaloo</Link>
        <Link to={"/translations"}>Translations</Link>
        <Link to={"/validation"}>validation</Link>
      </nav>
    </>
  );
}
