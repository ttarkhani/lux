import React from "react";
import { Link } from "react-router-dom";
import "./Suits.css";

const pants = [
  {
    id: "chino",
    name: "Navy Chino",
    price: 99,
    img: `${import.meta.env.BASE_URL}pants1.jpg`
  },
  {
    id: "wool",
    name: "Grey Wool Pant",
    price: 129,
    img: `${import.meta.env.BASE_URL}pants2.jpg`
  },
  {
    id: "slim",
    name: "Black Slim Pant",
    price: 119,
    img: `${import.meta.env.BASE_URL}pants3.jpg`
  },
  {
    id: "beige",
    name: "Beige Dress Pant",
    price: 109,
    img: `${import.meta.env.BASE_URL}pants4.jpg`
  }
];

function Pants() {
  return (
    <section className="collection-section pants-section">
      <h2 className="collection-title">Pants Collection</h2>
      <div className="collection-items">
        {pants.map(item => (
          <Link
            key={item.id}
            to={`/pants/${item.id}`}
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

export default Pants;

