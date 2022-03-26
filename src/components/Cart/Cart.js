import React from "react";

const Cart = () => {
  return (
    <div className="d-flex flex-column justify-content-center">
      <h2>Selected Laptops</h2>
      <h5>Select</h5>
      <button className="my-2 bg-success bg-gradient shadow py-2  rounded fw-bold text-dark">
        CHOOSE ONE FOR ME
      </button>
      <h5>Your laptop</h5>
      <button className="my-2 bg-danger bg-gradient shadow py-2  rounded fw-bold text-dark">
        CHOOSE AGAIN
      </button>
    </div>
  );
};

export default Cart;
