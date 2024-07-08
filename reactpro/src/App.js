
import './App.css';
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import More from "./Components/More";
import Footer from "./Components/Footer";
import Checkout from "./Components/Checkout";
import ProductDetail from "./Components/ProductDetail";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Card />} />
          <Route exact path="/productDetail" element={<ProductDetail />} />
          <Route exact path="/more" element={<More />} />
          <Route exact path="/checkout" element={<Checkout />} />
          {/* <Route path="*" element={<NoPage />} /> */}

        </Routes>

        <Footer />
      </Router>











    </>
  );
}

export default App;
