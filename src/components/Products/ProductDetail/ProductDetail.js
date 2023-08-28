import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import productContext from "../../../Context/productContext";
import { Link } from "react-router-dom";
import Flame from "../hot-sale-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "react-use-cart";
import ProductItem from "../ProductItem/ProductItem";
import "./style.css";

const ProductDetail = () => {
  const dataContext = useContext(productContext);

  const { firstFour, productDataItem } = dataContext; // Only use the firstFour array

  const [count, setCount] = useState(1);

  const [addCart, setAddCart] = useState(false);

  const { id } = useParams(); // Get the id parameter from the URL

  let selectedProduct = firstFour.find((item) => item.id === parseInt(id));

  if (!selectedProduct) {
    selectedProduct = productDataItem.find((item) => item.id === parseInt(id));
  }

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
    addItem(selectedProduct); // Use selectedProduct instead of product
  };

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  const addCartMsgHandler = () => {
    setAddCart(true);
    setTimeout(() => {
      setAddCart(false);
    }, 3000);
  };

  const addCartMsgDelHandler = () => {
    setAddCart(false);
  };

  const { title, img, desc, price, cutPrice, disc } = selectedProduct;

  return (
    <>
      <div className="links">
        <Link to="/">Home &nbsp;</Link>
        <h3>/ {title}</h3>
      </div>
      <div>
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            zIndex: "99999",
          }}
        >
          {addCart ? (
            <div
              className="product-animation"
              style={{
                width: "100%",
                height: "100vh",
                boxShadow: "0px 0px 1.25 0px rgb(0 0 0 / 8%)",
                backdropFilter: "blur(5px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "1.25rem",
                margin: "auto",
                // marginTop: "1.25rem",
                position: "fixed",
                zIndex: "999999999999999999",
              }}
            >
              <div
                style={{
                  position: "relative",
                  animation: "bounce 2.5s",
                }}
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    position: "absolute",
                    right: "1rem",
                    top: "1rem",
                    cursor: "pointer",
                  }}
                  onClick={addCartMsgDelHandler}
                />
                <div className="add-cart-succes">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{
                      marginBottom: "1.37rem",
                      width: "2.5rem",
                      height: "2.5rem",
                    }}
                  />
                  Added to cart
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div
          className="product-detail-container"
          id="product-detail"
          style={{
            position: "initial",
            background: "transparent",
            height: "auto",
            margin: "3.13rem 0 0",
          }}
        >
          <div className="product-detail" id="product-detail-container">
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
                <h2>${price}</h2>
                <p>{disc}</p>
              </div>
              <div className="desc">
                <p>{desc}</p>
              </div>
              <span className="quantity-text">Quantity</span>
              <div id="quantity">
                <div className="quantity">
                  <button onClick={handleDecrease}>-</button>
                  <span>{count}</span>
                  <button onClick={handleIncrease}>+</button>
                </div>
                <Link
                  to={`/product/${id}`}
                  style={{ flex: "1" }}
                  onClick={addCartMsgHandler}
                >
                  <button
                    id="quantity-button"
                    onClick={() => addItem(selectedProduct)}
                  >
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
      </div>
      <div className="product-item">
        <h1>Related Products</h1>
        <div id="product-detail-container">
          {firstFour.map((item) => (
            <ProductItem
              key={item.id}
              product={item} // Pass the whole item object as a prop
              img={item.img}
              title={item.title}
              price={item.price}
              cutPrice={item.cutPrice}
              disc={item.disc}
              addCartMsg={addCartMsgHandler}
              addCartMsgDel={addCartMsgDelHandler}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
