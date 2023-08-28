import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faDollarSign,
  faArrowRotateLeft,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";
import "./AboveFooterStyles.css"; // Import the CSS file

const AboveFooter = () => {
  return (
    <div className="above-footer-container">
      <div className="feature">
        <span className="icon">
          <FontAwesomeIcon icon={faTruck} />
        </span>
        <div>
          <h4 className="h4">Free Shipping</h4>
          <p className="p">Fast and reliable delivery options</p>
        </div>
      </div>
      <div className="feature">
        <span className="icon">
          <FontAwesomeIcon icon={faDollarSign} />
        </span>
        <div>
          <h4 className="h4">Quick Payment</h4>
          <p className="p">Secure and convenient payment methods</p>
        </div>
      </div>
      <div className="feature">
        <span className="icon">
          <FontAwesomeIcon icon={faArrowRotateLeft} />
        </span>
        <div>
          <h4 className="h4">Easy Return</h4>
          <p className="p">Hassle-free returns and exchanges</p>
        </div>
      </div>
      <div className="feature">
        <span className="icon">
          <FontAwesomeIcon icon={faHeadphones} />
        </span>
        <div>
          <h4 className="h4">24/7 Support</h4>
          <p className="p">Customer assistance whenever you need</p>
        </div>
      </div>
    </div>
  );
};

export default AboveFooter;
