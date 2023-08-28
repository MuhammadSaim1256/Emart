import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Modify = () => {
  return (
    <div className="container1">
      <div className="title">
        <h1>Let's modify your interior modern looks</h1>
        <Link to="/product" className="btnOne">
          Shop now
        </Link>
      </div>
    </div>
  );
};

export default Modify;
