import { useState } from "react";
import styles from "./ShopItem.module.css";
import { useOutletContext } from "react-router-dom";

function ShopItem({ item, cart, setCart }) {
  const [count, setCount] = useState(0);

  function handleCountChange(event) {
    const newCount = Number(event.target.value);
    if (newCount >= 0) {
      setCount(newCount);
    }
  }

  function handleUpdateCart() {
    const updatedCart = [...cart];
    for (let i = 0; i < count; i++) {
      updatedCart.push(item);
    }
    setCart(updatedCart);
  }

  return (
    <div key={item} className={styles.item}>
      <img className={styles.image} src={item.image} alt="item-image"></img>
      <h1 className={styles.title}>{item.title}</h1>
      <h2 className={styles.price}>$ {item.price}</h2>
      <div className={styles.wrapper}>
        <input
          type="number"
          value={count}
          min="0"
          className={styles.input}
          onChange={handleCountChange}
        ></input>
        <button type="button" className={styles.btn} onClick={handleUpdateCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ShopItem;
