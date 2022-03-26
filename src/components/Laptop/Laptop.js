import React from "react";
import { FaCartPlus } from "react-icons/fa";

const Laptop = ({ laptop, handleAddToCart }) => {
  const { img, name, price } = laptop;
  return (
    <div className="col">
      <div className="card h-100 shadow">
        <img className="w-75 mx-auto" src={img} alt=".." />
        <div className="card-body pt-0 pb-5">
          <h2 className="card-title">{name}</h2>
          <h6>Price: ${price}</h6>
        </div>
        <button
          onClick={() => handleAddToCart(laptop)}
          className="card-footer fw-bold bg-dark bg-opacity-25 border-0 p-3"
        >
          Add to cart <FaCartPlus></FaCartPlus>
        </button>
      </div>
    </div>
  );
};

export default Laptop;
