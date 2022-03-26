import React from "react";
import { FaCartPlus } from "react-icons/fa";
import "./Laptop.css";

const Laptop = ({ laptop, handleAddToCart }) => {
  const { img, name, price } = laptop;
  return (
    <div className="col">
      <div className="card border border-dark rounded-3 bg-primary bg-opacity-25 h-100 shadow">
        <img className="w-75 mx-auto rounded-circle" src={img} alt=".." />
        <div className="card-body pb-5">
          <h2 className="card-title">{name}</h2>
          <h6>Price: ${price}</h6>
        </div>
        <button
          onClick={() => handleAddToCart(laptop)}
          className="card-footer fw-bold text-white fs-5 bg-opacity-25  border-0 p-3 my-btn"
        >
          Add to cart <FaCartPlus></FaCartPlus>
        </button>
      </div>
    </div>
  );
};

export default Laptop;
