import React from "react";
import styles from "./page.module.css";
import { Link } from "react-router-dom";

function Home({ productsList }) {
  return (
    <div className={styles.card}>
      <h1>Selecionadas pra você</h1>
      <div className={styles.homeCard}>
        {productsList?.map((product) => (
          <>
            <Link to={`/Produto/${product?.id}`}>
              <div className={styles.cardSingleProductHome}>
                <h1 className={styles.cardTitle}>{product?.name}</h1>
                <div>
                  <img
                    src={`${product?.image_link}`}
                    alt="Car Image"
                    width={300}
                  />
                </div>
                <div className={styles.price}>
                  <p>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(product?.price)}
                  </p>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}

export default Home;
