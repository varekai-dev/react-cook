import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className=" cyan darken-2">
      <div className="nav-wrapper">
        <Link className="brand-logo" to="/">
          React Cook
        </Link>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/varekai-dev/react-cook">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
