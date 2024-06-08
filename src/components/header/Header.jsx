import styles from "./Header.module.css";
import Navbar from "./navbar/Navbar";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.name}>ThreadFunk.</h1>
        <Navbar />
      </header>
    </>
  );
}

export default Header;
