import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <img src="/model.jpg" alt="Lux Model" className="hero-img" />
        <div className="hero-overlay">
          <h2 className="hero-title">New In: Luxury Suits</h2>
          <Link to="/suits" className="hero-btn">Shop Now</Link>
        </div>
      </div>

      {/* Parallax Section 1 */}
      <section className="parallax-section model2-bg">
        <div className="parallax-content">
          <h3>Classic Collection</h3>
          <p>Timeless designs for every occasion.</p>
        </div>
      </section>

      {/* Parallax Section 2 */}
      <section className="parallax-section model3-bg">
        <div className="parallax-content">
          <h3>Modern Collection</h3>
          <p>Contemporary styles, crafted for you.</p>
        </div>
      </section>

      {/* Collections Section */}
      <section className="collections-section">
        <h2 className="collections-title">Shop by Collection</h2>
        <div className="collections-grid">
          <Link to="/suits" className="collection-card">
            <img src="/suits.jpg" alt="Suits" />
            <div className="collection-label">Suits</div>
          </Link>
          <Link to="/shoes" className="collection-card">
            <img src="/shoes.jpg" alt="Shoes" />
            <div className="collection-label">Shoes</div>
          </Link>
          <Link to="/ties" className="collection-card">
            <img src="/ties.jpg" alt="Ties" />
            <div className="collection-label">Ties</div>
          </Link>
          <Link to="/pants" className="collection-card">
            <img src="/pants.jpg" alt="Pants" />
            <div className="collection-label">Pants</div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
