import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="lux-header">
    {/* Navigation */}
    <nav className="lux-nav">
      <Link to="/" className="lux-nav-link">Home</Link>
      <Link to="/contact" className="lux-nav-link">Contact</Link>
    </nav>
    
    {/* Site Title */}
    <h1 className="lux-title">
      <Link to="/" className="lux-title-link">Luxury Suits</Link>
    </h1>
    
    {/* Cart Icon */}
    <div className="lux-cart">
      <Link to="/cart" className="cart-link" title="Cart">
        <img 
          src="/cart.png" 
          alt="Cart" 
          style={{ width: "30px", height: "30px", objectFit: "contain" }} 
        />
      </Link>
    </div>
  </header>
);

export default Header;
