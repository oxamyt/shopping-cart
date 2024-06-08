import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ShopPage from "./components/shopPage/ShopPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./normalize.css";
import ShopInfo from "./components/shopInfo/ShopInfo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <ShopInfo /> },
      { path: "shop-page", element: <ShopPage /> },
    ],
  },
  // {
  //   path: "shop",
  //   element: <ShopPage />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
