import React from "react";
import Container from "../../Container/Container";
import "./style.css";
import { Link } from "react-router-dom";

const FooterUl = () => {
  return (
    <Container>
      <div className="main">
        <div className="main-text">
          <h2>Modern Interior Design</h2>
          <Link to="/product">Shop Now</Link>
        </div>
      </div>
      <div className="main">
        <div className="main-text">
          <h2>Modern Interior Design</h2>
          <Link to="/product">Shop Now</Link>
        </div>
      </div>
      <div className="main">
        <div className="main-text">
          <h2>Modern Interior Design</h2>
          <Link to="/product">Shop Now</Link>
        </div>
      </div>
    </Container>
  );
};

export default FooterUl;
