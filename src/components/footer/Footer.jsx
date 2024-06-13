import styles from "./Footer.module.css";
import githubLogo from "../../assets/github.svg";

function Footer() {
  return (
    <div className={styles.footer}>
      <a href="https://github.com/oxamyt" className={styles.link}>
        <h1 className={styles.name}>Oxamyt</h1>
        <img src={githubLogo} className={styles.svg}></img>
      </a>
    </div>
  );
}

export default Footer;
