import './Cart.css';

const cartItems = [
  {
    name: "Classic Navy Suit",
    price: "$449.00",
    img: "/suit1.jpg",
    description: "Premium wool, modern fit, classic luxury. Perfect for business and special events."
  },
  // Add more items as needed!
];

const Cart = () => (
  <div className="cart-page">
    <h2 className="cart-title">Your Cart</h2>
    <div className="cart-items">
      {cartItems.map((item, idx) => (
        <div className="cart-item" key={idx}>
          <div className="cart-item-image">
            <img src={item.img} alt={item.name} />
          </div>
          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <p className="cart-item-price">{item.price}</p>
            <p className="cart-item-desc">{item.description}</p>
            <button className="cart-remove-btn">Remove</button>
          </div>
        </div>
      ))}
    </div>
    {/* (Optional: Add checkout and total) */}
  </div>
);

export default Cart;
