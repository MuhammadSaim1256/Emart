import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faEye,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "react-use-cart";
import Flame from "../hot-sale-icon.png";
import "./style.css";

const ProductItem = ({
  id,
  disc,
  img,
  title,
  price,
  cutPrice,
  product,
  addProduct,
  addCartMsg,
  addCartMsgDel,
}) => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [count, setCount] = useState(1);

  const location = useLocation();

  const { addItem } = useCart();

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrease = () => {
    setCount((prevState) => prevState + 1);
    console.log(count);
  };

  const addToCartSuccess = () => {
    addItem(product);
  };

  return (
    <div className="swiper mySwiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="slide-content">
            <div className="product-main">
              <div className="action-btn">
                <div className="eye heart">
                  <FontAwesomeIcon
                    icon={faEye}
                    onClick={() => setIsProductOpen(true)}
                  />
                </div>
                <div className="cart-item">
                  <Link onClick={() => addItem(product)}>
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      onClick={addProduct}
                    />
                  </Link>
                </div>
              </div>
              <span>{disc}</span>
              <div
                className={
                  location.pathname.match(/^\/product\/\d+$/)
                    ? "product-detail-img-hover"
                    : "img"
                }
              >
                <Link to={`/product/${product.id}`}>
                  <img src={img} alt="none" />
                </Link>
              </div>
              <div className="slide-text">
                <div className="title">{title}</div>
                <div className="price">
                  <div className="cut-price">${cutPrice}</div>
                  <div className="official-price">${price}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isProductOpen ? (
        <div id="product-detail">
          <div className="product-detail">
            <FontAwesomeIcon
              icon={faXmark}
              style={{
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                top: "1rem",
                right: "1rem",
                cursor: "pointer",
              }}
              onClick={() => setIsProductOpen(false)}
            />
            <div className="product-detail-img">
              <img src={img} alt="none" />
            </div>
            <div className="product-detail-text">
              <div className="product-det-title">
                <h2>{title}</h2>
              </div>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="sale">
                <img src={Flame} alt="" />
                Hot Deal
              </div>
              <div className="product-det-price">
                <h2 className="cut">${cutPrice}</h2>
                <h2>{price}</h2>
                <p>{disc}</p>
              </div>
              <span className="quantity-text">Quantity</span>
              <div id="quantity">
                <div className="quantity">
                  <button onClick={handleDecrease}>-</button>
                  <span>{count}</span>
                  <button onClick={handleIncrease}>+</button>
                </div>

                <Link
                  style={{ flex: "1", width: "100%" }}
                  onClick={(addProduct, addCartMsg)}
                >
                  <button id="quantity-button" onClick={() => addItem(product)}>
                    Add To Cart
                  </button>
                </Link>
              </div>
              <Link to="/checkout">
                <button className="buy-btn" onClick={addToCartSuccess}>
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductItem;
