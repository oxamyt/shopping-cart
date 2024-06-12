import { useState } from "react";
import styles from "./ItemsNav.module.css";

function ItemsNav({ setData, originalData }) {
  function handleSort(type) {
    const sortedData = originalData.filter((item) => item.category === type);
    setData(sortedData);
  }

  return (
    <div className={styles.nav}>
      <h1
        className={styles.section}
        onClick={() => handleSort("men's clothing")}
      >
        Men's Clothing
      </h1>
      <h1
        className={styles.section}
        onClick={() => handleSort("women's clothing")}
      >
        Women's Clothing
      </h1>
      <h1 className={styles.section} onClick={() => handleSort("jewelery")}>
        Jewelery
      </h1>
      <h1 className={styles.section} onClick={() => handleSort("electronics")}>
        Electronics
      </h1>
    </div>
  );
}

export default ItemsNav;
