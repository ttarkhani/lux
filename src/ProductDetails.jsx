import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { PRODUCTS } from "./ProductData";

const categoryMap = {
  suits: PRODUCTS.suits,
  shoes: PRODUCTS.shoes,
  pants: PRODUCTS.pants,
  ties: PRODUCTS.ties,
};

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

function ProductDetails({ addToCart }) {
  const { productId } = useParams();
  const path = window.location.pathname.split("/");
  const category = path[1];
  const product = categoryMap[category]?.find((p) => p.id === productId);

  const [size, setSize] = useState("M");

  if (!product) return <div className="not-found">Product not found.</div>;

  const handleAddToCart = () => {
    addToCart({
      ...product,
      size,
    });
    alert("Added to cart!");
  };

  return (
    <div className="product-detail-main">
      <div className="product-detail-card">
        <div className="product-image-box">
          <img src={product.img} alt={product.name} />
        </div>
        <div className="product-info-box">
          <h1>{product.name}</h1>
          <div className="desc">{product.desc || "A timeless " + category.slice(0, -1) + "."}</div>
          <div className="price">${product.price}.00</div>
          <div className="select-row">
            <label htmlFor="size">Size:</label>
            <select id="size" value={size} onChange={(e) => setSize(e.target.value)}>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <button className="add-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

