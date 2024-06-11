import { useOutletContext } from "react-router-dom";
import styles from "./CartPage.module.css";
import CartItem from "../cartItem/CartItem";

function CartPage() {
  const [cart, setCart] = useOutletContext();
  console.log(cart);
  return (
    <main className={styles.cart}>
      {cart.length !== 0 ? (
        cart.map((item) => {
          return (
            <CartItem key={item} item={item} cart={cart} setCart={setCart} />
          );
        })
      ) : (
        <p className={styles.empty}>Cart is empty</p>
      )}
    </main>
  );
}

export default CartPage;
