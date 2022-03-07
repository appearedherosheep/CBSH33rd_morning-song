import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <Link to="/">
//           <img
//             className="navbar-logo"
//             src="http://academic.petapop.com/resources/site/SITE_00000/images/common/logo.png"
//             alt="충북과학고등학교"
//           />
//         </Link>
//         <Link to="/chungwoon">청운</Link>
//         <Link to="/sarum">사름</Link>
//         <button>Login</button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
// import React, { useState } from "react";
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
