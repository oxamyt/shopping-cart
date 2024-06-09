import styles from "./Navbar.module.css";
import cartSvg from "../../../assets/cart.svg";
import { Link } from "react-router-dom";
function Navbar({ cart }) {
  const price = Math.round(cart.reduce((total, item) => total + item.price, 0));
  return (
    <nav className={styles.shoppingSection}>
      <Link to={"/"} className={styles.heading}>
        Home
      </Link>
      <Link to={"shop-page"} className={styles.heading}>
        Shop
      </Link>
      <div className={styles.cart}>
        <img src={cartSvg} className={styles.cartSvg} alt="cart-svg"></img>
        <p className={styles.number}>{cart.length}</p>
      </div>
      <p className={styles.number}>$ {price}</p>
    </nav>
  );
}

export default Navbar;
