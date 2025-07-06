import React from "react";
import { Link } from "react-router-dom";
import "./Suits.css";

const suits = [
  {
    id: "navy",
    name: "Classic Navy Suit",
    price: "$499.00",
    img: `${import.meta.env.BASE_URL}suit1.jpg`
  },
  {
    id: "charcoal",
    name: "Charcoal Slim Suit",
    price: "$539.00",
    img: `${import.meta.env.BASE_URL}suit2.jpg`
  },
  {
    id: "tuxedo",
    name: "Midnight Tuxedo",
    price: "$789.00",
    img: `${import.meta.env.BASE_URL}suit3.png`
  },
  {
    id: "ivory",
    name: "Ivory Summer Suit",
    price: "$629.00",
    img: `${import.meta.env.BASE_URL}suit4.jpg`
  }
];

function Suits() {
  return (
    <section className="collection-section suits-section">
      <h2 className="collection-title">Suits Collection</h2>
      <div className="collection-items">
        {suits.map(item => (
          <Link
            key={item.id}
            to={`/suits/${item.id}`}
            className="collection-item-card"
          >
            <img src={item.img} alt={item.name} />
            <div className="item-name">{item.name}</div>
            <div className="item-price">{item.price}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Suits;

