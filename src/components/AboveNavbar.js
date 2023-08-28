import React from "react";
import { FaQuestionCircle, FaMapMarkerAlt } from "react-icons/fa";
import Container from "../Container/Container";
import "./AboveNavbarStyles.css"; // Import the CSS file

const AboveNavbar = () => {
  return (
    <div className="above-navbar-container">
      <div className="left-content2">
        Free delivery on orders over $1499. Don’t miss discount.
      </div>
      <div className="right-content2">
        <span className="icon2">
          <FaQuestionCircle />
        </span>{" "}
        Help and Contact
        <div className="separator">|</div>
        <span className="icon2">
          <FaMapMarkerAlt />
        </span>{" "}
        Store Location
      </div>
    </div>
  );
};

export default AboveNavbar;
