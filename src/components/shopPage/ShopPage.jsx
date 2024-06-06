import { useEffect, useState } from "react";
import styles from "./ShopPage.module.css";
import Header from "../header/Header";
import loadingSvg from "../../assets/loading.svg";
import { getClothesRequest } from "./fetchCall/fetchCall";

function ShopPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <>
      <Header />
      <main className={styles.shop}>
        {loading && (
          <img src={loadingSvg} className={styles.loading} alt="loading"></img>
        )}
        {error && <p>Error: {error}</p>}
        {data &&
          data.map((item) => {
            return (
              <div key={item} className={styles.item}>
                {item.title}
              </div>
            );
          })}
      </main>
    </>
  );
}

export default ShopPage;
