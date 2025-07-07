import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Suits from "./Suits";
import Shoes from "./Shoes";
import Pants from "./Pants";
import Ties from "./Ties";
import Shop from "./Shop"; 
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router basename="/lux">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route path="/suits" element={<Suits />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/pants" element={<Pants />} />
        <Route path="/ties" element={<Ties />} />
        <Route path="/:category/:productId" element={<ProductDetails addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />} />
        <Route path="*" element={<div style={{ padding: 40 }}>Page not found.</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;