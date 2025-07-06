import { useState } from "react";
import './Cart.css';

const Cart = ({ cartItems, removeFromCart, clearCart }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const [rating, setRating] = useState("");
  const [feedback, setFeedback] = useState("");
  const [surveySubmitted, setSurveySubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && address && payment) {
      setOrderConfirmed(true);
      clearCart();
    }
  };

  const handleSurveySubmit = (e) => {
    e.preventDefault();
    setSurveySubmitted(true);
  };

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Cart</h2>
      {cartItems.length === 0 && !orderConfirmed ? (
        <p style={{ padding: "1rem" }}>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, idx) => (
            <div className="cart-item" key={idx}>
              <div className="cart-item-image">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-price">${item.price}.00</p>
                <p className="cart-item-desc">{item.desc}</p>
                <p className="cart-item-size"><strong>Size:</strong> {item.size}</p>
                <button className="cart-remove-btn" onClick={() => removeFromCart(idx)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && !orderConfirmed && (
        <div className="checkout-form" style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <div>
            <h3 style={{ textAlign: 'center' }}>Checkout</h3>
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                maxWidth: '400px',
                margin: '0 auto'
              }}
            >
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Card Number"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
                required
              />
              <button type="submit">Confirm Order</button>
            </form>
          </div>
        </div>
      )}

      {orderConfirmed && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <h3>Thank you, {name}!</h3>
          <p>Your order has been placed successfully.</p>

          <div className="survey" style={{ marginTop: '2rem' }}>
            {!surveySubmitted ? (
              <>
                <h4>We’d appreciate your feedback</h4>
                <form onSubmit={handleSurveySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
                  <label>
                    How was your shopping experience?
                    <select value={rating} onChange={(e) => setRating(e.target.value)} required>
                      <option value="">Select</option>
                      <option value="5">Excellent (5)</option>
                      <option value="4">Good (4)</option>
                      <option value="3">Okay (3)</option>
                      <option value="2">Poor (2)</option>
                      <option value="1">Terrible (1)</option>
                    </select>
                  </label>
                  <textarea
                    placeholder="Any comments?"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows={4}
                  />
                  <button type="submit">Submit Feedback</button>
                </form>
              </>
            ) : (
              <p style={{ marginTop: '1rem' }}>Thank you for your feedback.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;



