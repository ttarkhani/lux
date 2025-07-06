import React, { useState } from 'react';
import { PRODUCTS } from './ProductData';
import { Link } from 'react-router-dom';
import './Shop.css';

const allProducts = Object.entries(PRODUCTS).flatMap(([category, items]) =>
  items.map(item => ({ ...item, category }))
);

const sizeOptions = ['S', 'M', 'L', 'XL'];
const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Under $100', min: 0, max: 100 },
  { label: '$100 - $300', min: 100, max: 300 },
  { label: 'Over $300', min: 300, max: Infinity },
];

const Shop = ({ addToCart }) => {
  const [category, setCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('All');
  const [size, setSize] = useState('');

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handlePriceChange = (e) => setPriceRange(e.target.value);
  const handleSizeChange = (e) => setSize(e.target.value);

  const filteredProducts = allProducts.filter((product) => {
    const matchCategory = category === 'all' || product.category === category;

    const range = priceRanges.find(p => p.label === priceRange);
    const matchPrice = range ? product.price >= range.min && product.price < range.max : true;

    return matchCategory && matchPrice;
  });

  return (
    <div className="shop-page">
      <h2 className="shop-title">Explore All Products</h2>

      <div className="shop-filters">
        <select value={category} onChange={handleCategoryChange}>
          <option value="all">All Categories</option>
          <option value="suits">Suits</option>
          <option value="shoes">Shoes</option>
          <option value="pants">Pants</option>
          <option value="ties">Ties</option>
        </select>

        <select value={priceRange} onChange={handlePriceChange}>
          {priceRanges.map((range, i) => (
            <option key={i} value={range.label}>{range.label}</option>
          ))}
        </select>

        {/* Optional size selector */}
        <select value={size} onChange={handleSizeChange}>
          <option value="">Select Size</option>
          {sizeOptions.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="shop-grid">
        {filteredProducts.map((item, idx) => (
          <div key={idx} className="shop-card">
            <Link to={`/${item.category}/${item.id}`}>
              <img src={item.img} alt={item.name} />
            </Link>
            <div className="shop-card-details">
              <h3>{item.name}</h3>
              <p>${item.price}.00</p>
              <button onClick={() => addToCart({ ...item, size })}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

