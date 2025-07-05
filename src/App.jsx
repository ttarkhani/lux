import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Suits from "./Suits";
import Shoes from "./Shoes";
import Pants from "./Pants";
import Ties from "./Ties";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suits" element={<Suits />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/pants" element={<Pants />} />
        <Route path="/ties" element={<Ties />} />
        {/* Dynamic product details for all categories */}
        <Route path="/:category/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div style={{ padding: 40 }}>Page not found.</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
