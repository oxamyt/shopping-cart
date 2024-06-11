import styles from "./AddItemFeatures.module.css";
import PropTypes from "prop-types";

function AddItemFeatures({ count, handleCountChange, handleUpdateCart }) {
  return (
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
  );
}

AddItemFeatures.propTypes = {
  count: PropTypes.number.isRequired,
  handleCountChange: PropTypes.func.isRequired,
  handleUpdateCart: PropTypes.func.isRequired,
};

export default AddItemFeatures;
