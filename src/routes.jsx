import ShopInfo from "./components/shopInfo/ShopInfo.jsx";
import ShopPage from "./components/shopPage/ShopPage.jsx";
import CartPage from "./components/cartPage/CartPage.jsx";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <ShopInfo /> },
      { path: "shop", element: <ShopPage /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
]);

export default router;
