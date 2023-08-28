import React, { useState } from "react";
import Banner from "../components/Banner";
import Modify from ".././components/Modify/Modify";
import Products from "../components/Products/Products";
import Service from "../components/Service/Service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faXmark } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [addCart, setAddCart] = useState(false);

  const addCartMsgHandler = () => {
    setAddCart(true);
    setTimeout(() => {
      setAddCart(false);
    }, 3000);
  };

  const addCartMsgDelHandler = () => {
    setAddCart(false);
  };

  return (
    <>
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
              zIndex: "9999999999999999999999999",
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
      <Banner />
      <Products addCartMsgHandlerHome={addCartMsgHandler} />
      <Modify />
      <Service />
    </>
  );
};

export default Home;
