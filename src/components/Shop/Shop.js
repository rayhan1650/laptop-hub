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
    <div className="d-flex">
      <Laptop></Laptop>
      <Cart></Cart>
    </div>
  );
};

export default Shop;
