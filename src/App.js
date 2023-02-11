import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Empresa from "./pages/Empresa";
import Home from "./pages/Home";
import Produto from "./pages/Produto";
import Error from "./pages/Error";
import SingleProduct from "./pages/SingleProduct";
import NavBar from "./navBar/NavBar";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://makeup-api.herokuapp.com/api/v1/products.json")
      .then((response) => {
        setProducts(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let productsList = products?.filter((product) => product?.id < 4);
  let productsPage = products?.filter((product) => product?.id < 40);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home productsList={productsList} />}></Route>
        <Route
          path="/Produto"
          element={<Produto products={productsPage} />}
        ></Route>
        <Route
          path="/Produto/:id"
          element={<SingleProduct products={products} />}
        ></Route>
        <Route path="/Empresa" element={<Empresa />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
