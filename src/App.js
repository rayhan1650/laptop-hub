import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "./components/Shop/Shop";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      {/* {laptops.map((laptop) => (
        <img src={laptop.img} alt="" />
      ))} */}
    </div>
  );
}

export default App;
