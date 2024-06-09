import styles from "./Header.module.css";
import Navbar from "./navbar/Navbar";

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

export default Header;
