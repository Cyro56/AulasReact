import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Link } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Produto({ products }) {
  const {
    transcript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [queryProduct, setQueryProduct] = useState("");
  const [queryProductVoice, setQueryProductVoice] = useState("");
  const [productsRate, setProductsRate] = useState([]);
  function handleChange(event) {
    setQueryProduct(event.target.value);
  }

  function matchProduct(productSpecific) {
    let counter = 0;
    const queryGeneral = queryProduct.length ? queryProduct : queryProductVoice;

    for (let i = 0; i < queryGeneral?.length; i++) {
      let query = productSpecific?.brand
        ? queryGeneral[i]?.toLowerCase() ===
          productSpecific.brand[i]?.toLowerCase()
        : queryGeneral[i].toLowerCase() ===
          productSpecific.name[i]?.toLowerCase();
      if (query) {
        counter++;
      }
    }
    let rate = Math.floor((100 * counter) / productSpecific.name.length);

    if (rate > 10) {
      console.log(queryGeneral, productSpecific?.brand, rate, productsRate);
      productsRate.push({
        id: productSpecific?.id,
        name: productSpecific?.name,
        rate: rate,
        price: productSpecific?.price,
        image_link: productSpecific?.image_link,
      });
    }
  }
  useEffect(() => {
    if (Boolean(transcript.length && listening)) {
      setQueryProductVoice(transcript);
    }
    products.map((data) => matchProduct(data));
    if (queryProduct.length === 0 && queryProductVoice.length === 0) {
      setProductsRate([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryProduct, transcript, listening]);

  const filterProducts = Boolean(productsRate.length > 0)
    ? productsRate.sort((a, b) => {
        return a.rate - b.rate;
      })
    : products;

  const SpeechRecognitionText = () => {
    if (!browserSupportsSpeechRecognition) {
      return <span>Seu navegador nao suporta SpeechRecognition</span>;
    }
    return (
      <div>
        <button onClick={SpeechRecognition.startListening}>
          comecar a gravar
        </button>
        <button onClick={SpeechRecognition.stopListening}>
          parar de gravar
        </button>
        <button onClick={resetTranscript}>resetar campos</button>
      </div>
    );
  };

  return (
    <div className={styles.card}>
      <div>
        <input
          name="search"
          placeholder="Physicians Formula"
          onChange={handleChange}
        />
        <SpeechRecognitionText />
      </div>
      {filterProducts?.map((product) => (
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
  );
}

export default Produto;
