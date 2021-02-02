function Header() {
  return (
    <nav className=" cyan darken-2">
      <div className="nav-wrapper">
        <a
          href="https://varekai-dev.github.io/react-cook/"
          className="brand-logo"
        >
          React Cook
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://varekai-dev.github.io/react-cook/">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
