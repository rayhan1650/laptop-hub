import React, { useState } from "react";

const Cart = ({ cart }) => {
  const [random, setRandom] = useState("");
  function getRandomItem(arr) {
    if (arr.length) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      setRandom(arr[randomIndex].name);
    }
  }

  return (
    <div className="d-flex flex-column justify-content-center">
      <h2>Selected Laptops</h2>
      {cart.map((x) => (
        <h5 key={x.id}>{x.name}</h5>
      ))}
      <button
        onClick={() => getRandomItem(cart)}
        className="my-2 bg-success bg-gradient shadow py-2  rounded fw-bold text-dark"
      >
        CHOOSE ONE FOR ME
      </button>
      <h5>{random}</h5>
      <button className="my-2 bg-danger bg-gradient shadow py-2  rounded fw-bold text-dark">
        CHOOSE AGAIN
      </button>
    </div>
  );
};

export default Cart;
