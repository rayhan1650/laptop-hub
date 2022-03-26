import React from "react";
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Laptop from "../Laptop/Laptop";

const Shop = () => {
  const [laptops, setLaptops] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setLaptops(data));
  }, []);

  const handleAddToCart = (laptop) => {
    if (cart.length < 4) {
      for (const data of cart) {
        if (data.id === laptop.id) {
          return;
        }
      }
      setCart([...cart, laptop]);
    }
  };

  const clearCart = () => setCart([]);

  return (
    <div className="d-flex flex-md-row flex-column-reverse">
      <div className="col-md-9 p-2 ms-md-5">
        <div className="row row-cols-1 row-cols-md-3 g-4 p-md-4">
          {laptops.map((laptop) => (
            <Laptop
              key={laptop.id}
              laptop={laptop}
              handleAddToCart={handleAddToCart}
            ></Laptop>
          ))}
        </div>
      </div>
      <div className="cols-md-3 bg-info bg-opacity-25 rounded-3 my-4">
        <Cart clearCart={clearCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
