import styles from "./Navbar.module.css";
import cartSvg from "../../../assets/cart.svg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className={styles.shoppingSection}>
      <Link to={"/"} className={styles.heading}>
        Home
      </Link>
      <Link to={"shop-page"} className={styles.heading}>
        Shop
      </Link>
      <img src={cartSvg} className={styles.cartSvg} alt="cart-svg"></img>
      <p className={styles.number}></p>
    </nav>
  );
}

export default Navbar;
