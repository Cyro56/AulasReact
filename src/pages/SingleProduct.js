import { useParams } from "react-router-dom";
import React from "react";
import styles from "./page.module.css";

function SingleProduct({ products }) {
  const { id } = useParams();
  const singleProduct = products?.find((product) => product?.id == id);

  return (
    <div className={styles.cardSingleProduct}>
      <h1 className={styles.cardTitle}>{singleProduct?.name}</h1>
      <div>
        <img src={`${singleProduct?.image_link}`} alt="Car Image" width={300} />
      </div>
      <div className={styles.price}>
        <p>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(singleProduct?.price)}
        </p>
      </div>
      <div className={styles.buyButton}>
        <a
          target={"_blank"}
          href="https://well.ca/products/l-oreal-paris-voluminous-mascara_25094.html"
        >
          Compra
        </a>
      </div>
    </div>
  );
}

export default SingleProduct;
