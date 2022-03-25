import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function App() {
  const [laptops, setLaptops] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setLaptops(data));
  }, []);
  return (
    <div className="App">
      <h1>Hello world</h1>
      {laptops.map((laptop) => (
        <img src={laptop.img} alt="" />
      ))}
    </div>
  );
}

export default App;
