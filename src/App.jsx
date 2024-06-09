import "./App.css";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className={"container"}>
      <Header cart={cart} />
      <Outlet context={[cart, setCart]} />
    </div>
  );
}

export default App;
