import styles from "./ShopInfo.module.css";
import coverImage from "../../assets/cover.jpg";
import { Link } from "react-router-dom";

function ShopInfo() {
  return (
    <main className={styles.main}>
      <div className={styles.info}>
        <section className={styles.shopDesc}>
          <p className={styles.description}>
            Groove to your own beat with{" "}
            <i className={styles.highlight}>ThredFunk.</i> We're the wardrobe
            unlocking station where sick threads meet smooth swagger. No
            wardrobe malfunctions here, just endless outfit combinations to keep
            your funky flag flying. Get ready to level up your style game and
            express yourself like a rockstar! We'll keep you stylin' with the
            latest trends without blowing your chill vibe.{" "}
            <i className={styles.highlight}>ThredFunk.</i> : Threads so funky,
            they'll make you wanna dance!
          </p>
          <Link className={styles.btn} to="shop">
            Shop now{" "}
          </Link>
        </section>
        <img
          src={coverImage}
          className={styles.image}
          alt="black and white abstract image"
        ></img>
      </div>
    </main>
  );
}

export default ShopInfo;
