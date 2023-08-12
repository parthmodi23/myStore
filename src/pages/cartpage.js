// Cartpage.js
import React, { useState, useEffect } from "react";
import "./cartpage.css"; // Import your CSS file

function Cartpage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const handlebuy=()=>{
    alert("Your Product will be Succesfully delivered!")

  }

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart-msg">Your cart is empty.</p>
      ) : (
        <div className="cart-items-container">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img
                src={item.product_images}
                alt="Product"
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3 className="cart-item-title">{item.product_name}</h3>
                <p className="cart-item-price">Price: ₹{item.price}</p>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="total-price">
            <span className="totalitems">Total cart Items:- {cartItems.length}</span>
            <span className="total-price-label">Total Price: ₹{getTotalPrice()}</span>
            <button type="submit" onClick={handlebuy} >Buy Now</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cartpage;
