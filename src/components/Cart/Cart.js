import React from "react";
import { useCart } from "react-use-cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./style.css";

const Cart = () => {
  const {
    items,
    totalUniqueItems,
    totalItems,
    cartTotal,
    isEmpty,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <h1 id="h1">Your Cart is Empty</h1>;

  return (
    <section id="cart">
      <div className="cart-table-container">
        <div className="cart-container">
          <table className="cart-table">
            <thead>
              <tr className="th-tr">
                <th className="product-remove">&nbsp;</th>
                <th className="product-thumbnail">&nbsp;</th>
                <th className="product-name">Products</th>
                <th className="product-price">Price</th>
                <th className="product-quantity">Quantity</th>
                <th className="product-total">Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr className="cart-item-cart" key={item.id}>
                  <FontAwesomeIcon
                    className="remove"
                    icon={faCircleXmark}
                    onClick={() => removeItem(item.id)}
                  />
                  <td className="cart-item-image">
                    <img src={item.img} alt="" />
                    <div className="cart-item-title">{item.title}</div>
                  </td>
                  <div className="cart-item-price">${item.price}.00</div>
                  <td className="cart-item-details">
                    <div className="cart-item-quantity">
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <div className="cart-item-total">
                    ${item.price * item.quantity}.00
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="cart-subtotal">
          <div className="cart-collaterals">
            <div className="cart_totals">
              <h3>Cart Totals</h3>
              <table className="shop_table cart">
                <tbody>
                  <tr className="cart-total">
                    <th>Subtotal</th>
                    <td>
                      <th className="amount">${cartTotal}.00</th>
                    </td>
                  </tr>
                  <tr className="cart-shipping">
                    <th>Shipping Flate Rate:</th>
                    <td>
                      <th className="amount">
                        ${(cartTotal * 0.01).toFixed(2)}
                      </th>
                    </td>
                  </tr>
                  <tr className="cart-shipping">
                    <th>Cart Items</th>
                    <td>
                      <th className="amount">{totalUniqueItems}</th>
                    </td>
                  </tr>
                  <tr className="cart-shipping">
                    <th>Total Items</th>
                    <td>
                      <th className="amount">{totalItems}</th>
                    </td>
                  </tr>
                  <tr className="cart-shipping cart-tr-total">
                    <th>Total</th>
                    <td>
                      <th className="amount">${cartTotal}.00</th>
                    </td>
                  </tr>
                  <tr>
                    <Link to="/checkout" className="btn" type="button">
                      Proceed To Checkout
                    </Link>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
