import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <img src="/logo.png" alt="Jeshan Pharma" className="navbar-logo" />
          <span className="navbar-brand-text">Jeshan Pharma</span>
        </Link>

        <button
          className={`hamburger ${isOpen ? 'hamburger-open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        <ul className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
          <li>
            <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
          </li>
          <li>
            <Link to="/products" className="nav-link" onClick={closeMenu}>Products</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
