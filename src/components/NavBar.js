import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <ul className="nav-list">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/characters">Characters</Link>
      </li>
      <li>
        <Link to="/planets">Planets</Link>
      </li>
      <li>
        <Link to="/species">Species</Link>
      </li>
      <li>
        <Link to="/vehicles">vehicles</Link>
      </li>
      <li>
        <Link to="/starships">Starships</Link>
      </li>
    </ul>
  );
};

export default NavBar;
