import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";

const Banner = () => {
  return (
    <div id="banner">
      <div className="banner">
        <div className="banner-text">
          <h1>Renovate your Interior</h1>
          <p>Your space, your style. Create the perfect ambiance.</p>
          <Link className="shop-now" to="/product">
            Shop Now
          </Link>
        </div>
        <div>
          <img src="Banner-image-02.webp" alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
