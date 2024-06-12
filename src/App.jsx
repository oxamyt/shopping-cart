import "./App.css";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/footer/Footer";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className={"container"}>
      <Header cart={cart} />
      <Outlet context={[cart, setCart]} />
      <Footer />
    </div>
  );
}

export default App;
