import React from "react";
import { Link } from "react-router-dom";
import "./Suits.css";

const ties = [
  {
    id: "navy-tie",
    name: "Navy Silk Tie",
    price: 49,
    img: `${import.meta.env.BASE_URL}ties1.jpg`
  },
  {
    id: "burgundy",
    name: "Burgundy Tie",
    price: 59,
    img: `${import.meta.env.BASE_URL}ties2.jpg`
  },
  {
    id: "stripes",
    name: "Striped Tie",
    price: 39,
    img: `${import.meta.env.BASE_URL}ties3.jpg`
  },
  {
    id: "gray-tie",
    name: "Gray Wool Tie",
    price: 54,
    img: `${import.meta.env.BASE_URL}ties4.jpg`
  }
];

function Ties() {
  return (
    <section className="collection-section ties-section">
      <h2 className="collection-title">Ties Collection</h2>
      <div className="collection-items">
        {ties.map(item => (
          <Link
            key={item.id}
            to={`/ties/${item.id}`}
            className="collection-item-card"
          >
            <img src={item.img} alt={item.name} />
            <div className="item-name">{item.name}</div>
            <div className="item-price">${item.price}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Ties;
