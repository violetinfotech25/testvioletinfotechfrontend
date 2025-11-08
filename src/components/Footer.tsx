import '../assets/css/footer.css';
import { Link } from "react-router-dom";
import logo from '../assets/image/logo/L-11.png';

const Footer = () => {
  return (
    <footer className="footer-001">
      <div className="container-fluid">
        <ul className="footer-container-002">

          <li className="footer-col-002 logo-col">
            <img src={logo} alt="Violet Infotech Logo" style={{ width: '200px', marginBottom: '10px' }} />
            <p>Innovating the future with modern solutions. Trusted by clients worldwide.</p>
          </li>

          <li className="footer-col-002 company-col">
            <h4>Company</h4>
            <p><a href="/">Home</a></p>
            <p><a href="/about">About Us</a></p>
            <p><a href="/plans">Plans</a></p>
          </li>

          <li className="footer-col-002 services-col">
            <h4>Services</h4>
            <p><a href="/web-design">Web Development</a></p>
            <p><a href="/digital-marketing">SEO</a></p>
            <p><a href="/branding">Branding</a></p>
          </li>

          <li className="footer-col-002 contact-col">
            <h4>Contact</h4>
            <p><i className="bi bi-envelope-fill contact-icon"></i> violetinfotech25@gmail.com</p>
            <p><i className="bi bi-telephone-fill contact-icon"></i> +91 98430 99624</p>
            <p><i className="bi bi-geo-alt-fill contact-icon"></i> Violet Infotech, 15A1, Subbiyan Layout,<br />
            Ramanathapuram, Coimbatore,<br /> Tamil Nadu - 641045
            </p>
            <ul className="footer-connect social-icons">
              <li><a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noreferrer"><i className="bi bi-linkedin linkedin-icon"></i></a></li>
              <li><a href="https://www.instagram.com/violetinfotech/" target="_blank" rel="noreferrer"><i className="bi bi-instagram instagram-icon"></i></a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61579023850830" target="_blank" rel="noreferrer"><i className="bi bi-facebook facebook-icon"></i></a></li>
              <li><a href="https://wa.me/919843099624" target="_blank" rel="noreferrer"><i className="bi bi-whatsapp whatsapp-icon"></i></a></li>
            </ul>
          </li>


          <li className="footer-col-002 location-col">
            <h4>Location</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5914380634213!2d76.99620907502842!3d10.994179455139463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857005115e039%3A0x539919fe495be063!2sViolet%20Infotech!5e0!3m2!1sen!2sin!4v1756094705426!5m2!1sen!2sin"
              width="400px"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Violet Infotech Location"
            />
          </li>

        </ul>
      </div>

      <div className="footer-bottom-001 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-600">
        <p>&copy; 2025 VioletInfotech. All rights reserved.</p>
        <p>
          <Link to="/terms-and-policy" className="underline hover:text-blue-600 transition">
            Terms & Policy
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
