import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "./ProductData.js";
import "./Suits.css";

function Shoes() {
  return (
    <section className="collection-section shoes-section">
      <h2 className="collection-title">Shoes Collection</h2>
      <div className="collection-items">
        {PRODUCTS.shoes.map(item => (
          <Link
            key={item.id}
            to={`/shoes/${item.id}`}
            className="collection-item-card"
          >
            <img src={item.img} alt={item.name} />
            <div className="item-name">{item.name}</div>
            <div className="item-price">${item.price}.00</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Shoes;

