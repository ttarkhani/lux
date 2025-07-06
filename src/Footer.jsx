import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="lux-footer"> {/* 👈 Added id here */}
      <div className="footer-container">
        <div className="footer-col">
          <h5>Help</h5>
          <ul>
            <li>Our advisors are available at <a href="tel:+18668448866">+1.866.LUXSUIT</a> or <a href="#">chat with us</a>.</li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Product Care</a></li>
            <li><a href="#">Stores</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li><a href="#">Repairs</a></li>
            <li><a href="#">Personalization</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Download our App</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>About Lux</h5>
          <ul>
            <li><a href="#">The Brand</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Latest News</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Email Sign-Up</h5>
          <ul>
            <li>
              <a href="#">Sign up for Lux emails and receive the latest news and collections.</a>
            </li>
            <li><a href="#">Follow Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Lux. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

