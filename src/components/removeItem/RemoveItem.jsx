import styles from "./RemoveItem.module.css";

function RemoveItem({ cart, setCart, item }) {
  function handleRemoveItem() {
    const index = cart.findIndex((cartItem) => cartItem.title === item.title);
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    }
  }

  return (
    <button type="button" className={styles.btn} onClick={handleRemoveItem}>
      ✖
    </button>
  );
}

export default RemoveItem;
