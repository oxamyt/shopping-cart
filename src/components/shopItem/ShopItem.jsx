import { useState } from "react";
import styles from "./ShopItem.module.css";
import PropTypes from "prop-types";
import AddItemFeatures from "../addItemFeatures/AddItemFeatures";

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
      <AddItemFeatures
        handleCountChange={handleCountChange}
        handleUpdateCart={handleUpdateCart}
        count={count}
      />
    </div>
  );
}

ShopItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default ShopItem;
