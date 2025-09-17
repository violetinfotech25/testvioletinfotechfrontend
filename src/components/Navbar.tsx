import { Link } from 'react-router-dom';
import Logo from '../assets/image/logo/L-5.png';
import '../assets/css/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo on Left */}
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Violet Infotech Logo" className="nav-logo" />
        </Link>

        {/* Toggler on Right */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav nav-links align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            {/* Dropdown removed */}
            <li className="nav-item">
              <Link className="nav-link" to="/digital-marketing">Digital Marketing</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/web-design">Web Design</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/branding">Branding</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/plans">Plans</Link>
            </li>

            <li className="nav-item ms-lg-3">
              <Link to="/contact" className="btn btn-primary contact-btn">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;