import React from "react";

const Laptop = ({ laptop }) => {
  const { img, name, price } = laptop;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} alt=".." />
        <div className="card-body pt-0 pb-5">
          <h2 className="card-title">{name}</h2>
          <h6>Price: ${price}</h6>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  );
};

export default Laptop;
