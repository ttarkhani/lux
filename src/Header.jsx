import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="lux-header">
    {/* Navigation */}
    <nav className="lux-nav">
      <Link to="/" className="lux-nav-link">Home</Link>
      <Link to="/shop" className="lux-nav-link">Shop</Link>
      <a href="#footer" className="lux-nav-link">Contact</a>
    </nav>

    {/* Site Title */}
    <h1 className="lux-title">
      <Link to="/" className="lux-title-link">Luxury Suits</Link>
    </h1>

    {/* Cart Icon */}
    <div className="lux-cart">
      <Link to="/cart" className="cart-link" title="Cart">
        <img
          src={`${import.meta.env.BASE_URL}cart.png`}
          alt="Cart"
          style={{ width: "30px", height: "30px", objectFit: "contain" }}
        />
      </Link>
    </div>
  </header>
);

export default Header;


