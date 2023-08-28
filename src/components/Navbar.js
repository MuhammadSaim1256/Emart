import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./logo.jpg";
import "./NavbarStyles.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <FontAwesomeIcon icon={faBars} id="bar" />
        <FontAwesomeIcon icon={faXmark} id="close" />
      </label>

      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      <ul>
        <li id="active">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/product"
            className={location.pathname === "/product" ? "active" : ""}
          >
            Product
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="icons" style={{ padding: "0 1rem" }}>
        <Link to="/login">
          <FontAwesomeIcon className="nav-user-icon" icon={faUser} />
        </Link>
        <Link to="/cart">
          <FontAwesomeIcon className="nav-cart-icon" icon={faCartShopping} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
