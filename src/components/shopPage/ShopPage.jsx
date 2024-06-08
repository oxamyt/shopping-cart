import { useEffect, useState } from "react";
import styles from "./ShopPage.module.css";
import { useOutletContext } from "react-router-dom";
import loadingSvg from "../../assets/loading.svg";
import { getClothesRequest } from "./fetchCall/fetchCall";

function ShopPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useOutletContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getData = await getClothesRequest(
          "https://fakestoreapi.com/products"
        );
        setData(getData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className={styles.shop}>
      {loading && (
        <img src={loadingSvg} className={styles.loading} alt="loading"></img>
      )}
      {error && <p>Error: {error}</p>}
      {data &&
        data.map((item) => {
          return (
            <div key={item} className={styles.item}>
              <img
                className={styles.image}
                src={item.image}
                alt="item-image"
              ></img>
              <h1 className={styles.title}>{item.title}</h1>
              <h2 className={styles.price}>$ {item.price}</h2>
              <button type="button" className={styles.btn}>
                Add To Cart
              </button>
              <p>{cart}</p>
            </div>
          );
        })}
    </main>
  );
}

export default ShopPage;
