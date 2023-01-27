import { useParams } from "react-router-dom";
import { dataBase } from "../dataBase/dataBase";
import styles from "./Page.module.css";
function SingleProduct() {
  const { id } = useParams();
  const product = dataBase.find((data) => data.id === Number(id));

  return (
    <div className={styles.card}>
      <h1>{product.name}</h1>
      <p>{product.brand}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default SingleProduct;
