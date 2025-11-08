import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/image/logo/L-11.png';
import '../assets/css/navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar metallic navbar-expand-lg navbar-light bg-light custom-navbar">
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
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">
                About
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <Link
                to="#"
                className={`nav-link dropdown-toggle ${
                  ['/web-development', '/seo', '/branding'].some(path => location.pathname.startsWith(path))
                    ? 'active'
                    : ''
                }`}
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </Link>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li><Link className="dropdown-item" to="/web-design">Web Development</Link></li>
                <li><Link className="dropdown-item" to="/SEO-Service">SEO</Link></li>
                <li><Link className="dropdown-item" to="/branding">Branding</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/plans' ? 'active' : ''}`} to="/plans">
                Plans
              </Link>
            </li>

            <li className="nav-item ms-lg-3">
              <Link
                to="/contact"
                className={`btn btn-primary contact-btn ${location.pathname === '/contact' ? 'active' : ''}`}
              >
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
