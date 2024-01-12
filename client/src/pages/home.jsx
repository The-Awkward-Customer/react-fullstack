export default function HomePage() {
  console.log("You are on the homepage");
  return (
    <>
      <h1>Peter Abbotts project directory</h1>
      <ul>
        <li>
          <a href="/eventspage">mouseEvents</a>
        </li>
        <li>
          <a href="/usestatepage">useState</a>
        </li>
        <li>
          <a href="/conditionalrendering">conditional rendering</a>
        </li>
        <li>
          <a href="/maps">maps</a>
        </li>
        <li>
          <a href="/useeffect">useffects</a>
        </li>
        <li>
          <a href="/cookieclicker">cookieclicker</a>
        </li>
      </ul>
    </>
  );
}
