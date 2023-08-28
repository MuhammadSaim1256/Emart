import React from "react";
import { Link } from "react-router-dom";
import "./FooterStyles.css"; // Import the separate CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="columnsContainer">
        <div className="column">
          <h3 className="columnTitle">Quick Link</h3>
          <ul className="ul">
            <Link to="/" className="link1">
              Home
            </Link>
            <Link to="/about" className="link1">
              About
            </Link>
            <Link to="/product" className="link1">
              Product
            </Link>
            <Link to="/contact" className="link1">
              Contact
            </Link>
          </ul>
        </div>
        <div className="column">
          <h3 className="columnTitle">Services</h3>
          <ul className="ul">
            <Link to="/" className="link1">
              Home
            </Link>
            <Link to="/login" className="link1">
              Login
            </Link>
            <Link to="/register" className="link1">
              Sign Up
            </Link>
            <Link to="/contact" className="link1">
              Contact
            </Link>
          </ul>
        </div>
        <div className="column">
          <h3 className="columnTitle">Terms & Condition</h3>
          <ul className="ul">
            <Link to="/" className="link1">
              Home
            </Link>
            <Link to="/login" className="link1">
              Login
            </Link>
            <Link to="/register" className="link1">
              Sign Up
            </Link>
            <Link to="/contact" className="link1">
              Contact
            </Link>
          </ul>
        </div>
        <div className="column">
          <h3 className="columnTitle">Contact Us</h3>
          <p className="description">
            If you have any questions,
            <br /> feel free to reach out.
          </p>
          <Link to="/contact" className="contactLink">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="copyright">Designed and Developed by NSA</div>
    </footer>
  );
};

export default Footer;
