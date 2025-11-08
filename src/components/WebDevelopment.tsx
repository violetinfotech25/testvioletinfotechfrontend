import React, { useState, useEffect } from "react";
import Footer from '../components/Footer';
import "../assets/css/web_development.css";
import WebGallery from "../components/websitegallery";
import StaticWeb from "../assets/image/web/static_web.png";
import DynamicWeb from "../assets/image/web/dynamic_web.png";
import EcommerceWeb from "../assets/image/web/ecommerce_web.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const bows = [
  {
    id: 1,
    title: "Static Website",
    detail:
      '<strong>Static Website</strong> services offer a modern, high-performance way to build fast, secure and affordable websites. Instead of relying on a slow server and database, all the pages are pre-built and served instantly from a global network. This approach uses a powerful combo of tools: Static Site Generators (like Next.js) to build the site, Headless CMS platforms (like Contentful) for easy content updates and specialized hosts (like Vercel or Netlify) that deploy your site across the globe. The result is a bulletproof, blazing-fast website that perfect for blogs, portfolios and business sites.',
    imageUrl: StaticWeb,
  },
  {
    id: 2,
    title: "Dynamic Website",
    detail:
      "<strong>Dynamic Website</strong> are the interactive workhorses of the web, generating content on the fly for a unique experience for each user. Unlike static sites, they use server-side languages (like PHP or Python) and databases to assemble pages in real-time. This powers the core functionality of platforms like Facebook, Amazon and WordPress, where content - from your social feed to your shopping cart - is personalized and constantly changing. Essentially, if a website remembers you, lets you log in, or updates with new content automatically, its almost certainly powered by a dynamic backend.",
    imageUrl: DynamicWeb,
  },
  {
    id: 3,
    title: "Ecommerce Website",
    detail:
      "<strong>An Ecommerce Website</strong> is a dynamic digital storefront designed specifically for selling products or services online. It goes beyond a basic brochure site by incorporating essential transactional features like a product catalog, a shopping cart and a secure checkout system that processes payments. To manage its ever - changing inventory, prices and customer orders, it relies on a powerful backend database. This makes platforms like Shopify, WooCommerce and Magento so popular, as they provide the all-in-one engine to handle these complex tasks, turning a simple website into a 24/7 sales machine.",
    imageUrl: EcommerceWeb,
  },
];

const technologies = [
  { id: 1, name: "React", imgSrc: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" },
  { id: 2, name: "Django", imgSrc: "https://www.svgrepo.com/show/353657/django-icon.svg" },
  { id: 3, name: "Python", imgSrc: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
  { id: 4, name: "TypeScript", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png" },
  { id: 5, name: "MySQL", imgSrc: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png" },
  { id: 6, name: "JavaScript", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/500px-JavaScript-logo.png" },
  { id: 7, name: "NodeJS", imgSrc: "https://globosoft.in/images/nodejs.jpg" },
  { id: 8, name: "Vite", imgSrc: "https://w7.pngwing.com/pngs/859/290/png-transparent-vitejs-hd-logo.png" },
  { id: 9, name: "BootStrap", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" },
  { id: 10, name: "Php", imgSrc: "https://e7.pngegg.com/pngimages/234/449/png-clipart-web-development-php-scripting-language-programming-language-logo-ruby-blue-text-thumbnail.png" },
  { id: 11, name: "HTML", imgSrc: "https://images.seeklogo.com/logo-png/20/1/html5-logo-png_seeklogo-206834.png" },
  { id: 12, name: "CSS", imgSrc: "https://images.seeklogo.com/logo-png/18/2/css3-logo-png_seeklogo-186678.png" },
  { id: 13, name: "Tailwind", imgSrc: "https://images.seeklogo.com/logo-png/35/1/tailwind-css-logo-png_seeklogo-354675.png" },
  { id: 14, name: "Vue", imgSrc: "https://images.seeklogo.com/logo-png/27/1/vue-js-logo-png_seeklogo-274070.png" },
  { id: 15, name: "Next", imgSrc: "https://cdn.worldvectorlogo.com/logos/nextjs-13.svg" },
  { id: 16, name: "Angular", imgSrc: "https://i.pinimg.com/474x/95/6c/f8/956cf841e4b11d98c8ba85d92433f061.jpg" },
];

const clients = [
  {
    id: 1,
    name: "Zebra Sign World",
    logo: "https://www.zebrasignworld.com/assets/zebra-elevation2-DAozCvlQ.png",
  },
  {
    id: 2,
    name: "Magudam Education",
    logo: "https://www.magudamedu.com/static/img/magudam-logo-png.png",
  },
  {
    id: 3,
    name: "Genesis Royal",
    logo: "https://www.sbind.in/static/images/logo/GENESIS%20ROYAL%20LOGO.png",
  },
  {
    id: 4,
    name: "Gani Dental",
    logo: "https://www.ganidental.com/static/images/logo/gani%20logo.png",
  },
];

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  service: string;
}

const WebDevelopment: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Modal Form component
  const ModalForm: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: FormData) => void;
  }> = ({ isOpen, onClose, onSubmit }) => {
    const [form, setForm] = useState<FormData>({
      fullName: "",
      phoneNumber: "",
      email: "",
      service: "Web Development",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(form);
    };

    if (!isOpen) return null;

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">&times;</button>
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Full Name:
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  autoFocus
                />
              </label>
              <label>
                Phone Number:
                <input
                  type="tel"
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                Email ID:
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Service:
                <input
                  type="text"
                  name="service"
                  value="Web Development"
                  readOnly
                  disabled
                />
              </label>
            </div>
            <div className="modal-buttons">
              <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleFormSubmit = async (data: FormData) => {
    try {
      const response = await fetch("http://localhost:8000/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert("Your message has been sent successfully!");
        setModalOpen(false);
      } else {
        const errorData = await response.json();
        alert("Error: " + JSON.stringify(errorData));
      }
    } catch {
      alert("Network error.");
    }
  };

  return (
    <>
      <div className="webdev-container">
        <h2 className="webdev-title">WEB DEVELOPMENT</h2>
        {bows.map(({ id, title, detail, imageUrl }, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={id}
              className={`webdev-row ${isEven ? "image-left" : "image-right"}`}
              data-aos="fade-up"
            >
              <div className="webdev-image">
                <img src={imageUrl} alt={title} />
              </div>
              <div className="webdev-content">
                <h3>{title}</h3>
                <p dangerouslySetInnerHTML={{ __html: detail }}></p>
              </div>
            </div>
          );
        })}

        <h2 className="webdev-title">Technologies We Use</h2>
        <div className="technology-grid">
          {technologies.map(({ id, name, imgSrc }) => (
            <div key={id} className="tech-item" title={name} data-aos="zoom-in">
              <img src={imgSrc} alt={name} className="tech-icon" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="thirdsec">Website Gallery</div>
      <WebGallery />

      <section className="clients-section" data-aos="fade-up">
        <h2 className="clients-section__title">Our Clients</h2>
        <div className="clients-section__grid">
          {clients.map(({ id, name, logo }) => (
            <div
              key={id}
              className={`clients-section__item ${
                id === 2 ? "clients-section__item--large-two" : id === 3 ? "clients-section__item--large-three" : ""
              }`}
              title={name}
            >
              <img src={logo} alt={name} className="clients-section__logo" />
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section-web" data-aos="zoom-in">
        <div className="cta-container-web">
          <h2 className="cta-title-web">Ready to start your project?</h2>
          <p className="cta-text-web">Contact us today and let&apos;s build something amazing together!</p>
          <button className="cta-button-web" onClick={handleOpenModal}>
            Get in Touch
          </button>
        </div>
      </section>

      <ModalForm isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleFormSubmit} />

      <Footer />
    </>
  );
};

export default WebDevelopment;
