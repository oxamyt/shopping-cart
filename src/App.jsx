import "./App.css";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState(0);
  return (
    <div className={"container"}>
      <Header />
      <Outlet context={[cart, setCart]} />
    </div>
  );
}

export default App;
