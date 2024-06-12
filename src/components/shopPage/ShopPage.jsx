import { useEffect, useState } from "react";
import styles from "./ShopPage.module.css";
import loadingSvg from "../../assets/loading.svg";
import { getClothesRequest } from "./fetchCall/fetchCall";
import ShopItem from "../shopItems/ShopItem";
import { useOutletContext } from "react-router-dom";
import ItemsNav from "../itemsNav/ItemsNav";

function ShopPage() {
  const [data, setData] = useState(null);
  const [originalData, setOriginalData] = useState(null);
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
        setOriginalData(getData);
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
      <ItemsNav data={data} setData={setData} originalData={originalData} />
      <main className={styles.shop}>
        {loading && (
          <img src={loadingSvg} className={styles.loading} alt="loading"></img>
        )}
        {error && <p>Error: {error}</p>}
        {data &&
          data.map((item) => {
            return (
              <ShopItem
                key={item.id}
                item={item}
                cart={cart}
                setCart={setCart}
              />
            );
          })}
      </main>
    </>
  );
}

export default ShopPage;
