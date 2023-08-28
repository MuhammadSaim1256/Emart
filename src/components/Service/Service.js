import React from "react";
import Container from "../Container/Container";
import FooterUl from "./FooterUl.js/FooterUl";
import "./style.css";

const Service = () => {
  return (
    <div className="show-case">
      <Container>
        <div className="main-style">
          <h1>Interior architectural styles</h1>
          <p>Donec a mattis elit sed fermentum tellus mauris sed fermentum</p>
          <FooterUl />
        </div>
      </Container>
    </div>
  );
};

export default Service;
