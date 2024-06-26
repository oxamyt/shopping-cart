import styles from "./Navbar.module.css";
import cartSvg from "../../../assets/cart.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ cart }) {
  const price = Math.round(cart.reduce((total, item) => total + item.price, 0));
  return (
    <nav className={styles.shoppingSection}>
      <Link to={"/"} className={styles.heading}>
        Home
      </Link>
      <Link to={"shop"} className={styles.heading}>
        Shop
      </Link>
      <div className={styles.cart}>
        <Link to="cart" className={styles.cart}>
          <p className={styles.number}>{cart.length}</p>
          <img src={cartSvg} className={styles.cartSvg} alt="cart-svg"></img>
        </Link>
      </div>
      <p className={styles.number}>$ {price}</p>
    </nav>
  );
}

Navbar.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Navbar;
