import styles from "./CartItem.module.css";
import RemoveItem from "../removeItem/RemoveItem";

function CartItem({ item, cart, setCart }) {
  return (
    <div key={item} className={styles.item}>
      <img className={styles.image} src={item.image} alt="item-image"></img>
      <h1 className={styles.title}>{item.title}</h1>
      <h2 className={styles.price}>$ {item.price}</h2>
      <RemoveItem cart={cart} setCart={setCart} item={item} />
    </div>
  );
}

export default CartItem;
