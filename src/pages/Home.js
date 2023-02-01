import React from "react";
import styles from "./page.module.css";
import { Link } from "react-router-dom";

function Home({ productsList }) {
  return (
    <div className={styles.card}>
      <h1>Home</h1>
      <p>Conteúdo da pagina Home</p>
      <div>
        {productsList?.map((product) => (
          <>
            <h>Card do produto</h>
            <Link to={`/Produto/${product?.id}`}>
              <li>{product.name}</li>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}

export default Home;
