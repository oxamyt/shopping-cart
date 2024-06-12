import styles from "./Footer.module.css";
import githubLogo from "../../assets/github.svg";

function Footer() {
  return (
    <div className={styles.footer}>
      <h1 className={styles.name}>Oxamyt</h1>
      <img src={githubLogo} className={styles.svg}></img>
    </div>
  );
}

export default Footer;
