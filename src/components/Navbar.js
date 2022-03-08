import { Link } from "react-router-dom";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";

function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/">
        <img
          className="navbar-logo"
          src="http://academic.petapop.com/resources/site/SITE_00000/images/common/logo.png"
          alt="충북과학고등학교"
        />
      </Link>
      <ul className="nav-menu">
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <button>sign in</button>
    </nav>
  );
}
export default Navbar;
