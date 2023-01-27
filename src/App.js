import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Contato";
import Empresa from "./pages/Empresa";
import Error from "./pages/Error";
import SingleProduct from "./pages/singleProduct";
import NavBar from "./NavBar.js/NavBar";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/Product/" element={<Product />} />
        <Route path="/Product/:id" element={<SingleProduct />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
