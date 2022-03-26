import React from "react";
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Laptop from "../Laptop/Laptop";

const Shop = () => {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setLaptops(data));
  }, []);

  return (
    <div className="d-flex flex-md-row flex-column-reverse">
      <div className="col-md-9">
        <div className="row row-cols-1 row-cols-md-3 g-4 p-md-4">
          {laptops.map((laptop) => (
            <Laptop key={laptop.id} laptop={laptop}></Laptop>
          ))}
        </div>
      </div>
      <div className="cols-md-3 ms-md-4 p-2">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Shop;
