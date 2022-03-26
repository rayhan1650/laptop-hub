import React, { useState } from "react";
import "./Cart.css";

const Cart = ({ cart, clearCart }) => {
  const [random, setRandom] = useState("");
  const getRandomItem = (arr) => {
    if (arr.length) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      setRandom(arr[randomIndex].name);
    }
  };

  const removeRandom = () => {
    setRandom("");
    clearCart();
  };

  return (
    <div className="d-flex flex-column justify-content-center p-4">
      <h2>Selected Laptops</h2>
      {cart.map((item) => (
        <div key={item.id} className="card mb-3 bg-primary bg-opacity-50">
          <div className="row g-0 align-items-center">
            <div className="col-md-4">
              <img
                className="cart-image img-fluid rounded-circle"
                src={item.img}
                alt=""
              />
            </div>
            <div className="col-md-8">
              <h5 className="card-title">{item.name}</h5>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={() => getRandomItem(cart)}
        className="my-2 btn btn-outline-success shadow py-2  rounded fw-bold text-dark"
        title="Select the best item for you"
      >
        CHOOSE ONE FOR ME
      </button>
      <h5>{random}</h5>
      <button
        onClick={removeRandom}
        className="my-2 btn btn-outline-danger shadow py-2  rounded fw-bold text-dark"
        title="Clear all items from cart"
      >
        CHOOSE AGAIN
      </button>
    </div>
  );
};

export default Cart;
