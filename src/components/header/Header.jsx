import styles from "./Header.module.css";
import Navbar from "./navbar/Navbar";
import PropTypes from "prop-types";

function Header({ cart }) {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.name}>ThreadFunk.</h1>
        <Navbar cart={cart} />
      </header>
    </>
  );
}

Header.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Header;
