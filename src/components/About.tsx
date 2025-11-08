import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/about.css';
import Footerend from '../components/Footer';

import whoWeAreImg from '../assets/image/about/image - 2.jpg';
import missionImg from '../assets/image/about/image - 1.png';
import teamImg from '../assets/image/about/image - 4.png';
import coreServicesImg from '../assets/image/about/image - 6.jpg';

const About = () => {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/aboutcontact/";
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
  });

  const openModal = () => {
    document.body.style.overflow = 'hidden';
    setModalOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = 'auto';
    setModalOpen(false);
    setFormData({ name: '', phone: '', email: '', service: '' }); // Reset form
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/aboutcontact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        closeModal();
      } else {
        const error = await response.json();
        alert('Submission failed: ' + JSON.stringify(error));
      }
    } catch (err) {
      alert('Error: ' + err);
    }
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero" data-aos="fade-down">
        <h1>About Violet Infotech</h1>
        <p>Empowering Businesses with Innovative Digital Solutions</p>
      </section>

      {/* Who We Are */}
      <section className="who-we-are-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title-who-we-are">Who We Are</h2>
          <div className="who-we-are-content">
            <div className="text-content">
              <p>
                Violet Infotech is your full-stack digital growth partner based in India. We specialize in crafting high-converting websites and impactful branding. Our ROI-focused SEO strategies drive measurable results globally. We bring your brand's story to life through stunning visuals and seamless experiences.
              </p>
              <p>
                Our collaborative team builds tailored solutions for startups and enterprises. Using cutting-edge technology and creative strategies, we ensure your success. We are committed to transparency, quality, and long-term partnerships.
              </p>
              <p> 
                From development to marketing, we provide end-to-end digital solutions. Let us help you scale your digital presence effectively. We transform your vision into sustainable online growth.
              </p>
            </div>
            <div className="image-content">
              <img src={whoWeAreImg} alt="Who We Are" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="mission-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title-our-mission">Our Mission</h2>
          <div className="mission-content">
            <div className="image-content">
              <img src={missionImg} alt="Mission" />
            </div>
            <div className="text-content">
              <p>
                At Violet Infotech, our mission is to empower businesses with innovative digital solutions that drive growth and long-term success.
                We help brands build a powerful digital presence by merging creativity, strategy and cutting-edge technology.
                Whether you are a startup or an established enterprise, we align with your vision to deliver meaningful, measurable outcomes.
                Our user-centric approach ensures every project is guided by a commitment to quality and digital excellence.
                We specialize in web development, SEO and branding, crafting custom solutions that truly connect with your audience.
              </p>
              <p>
                 Through transparent communication and reliable delivery, we build trusted partnerships, not just provide services.
                 We focus on continuous innovation to help you stay ahead in a fast-evolving digital landscape.
                 Our goal is to grow alongside our clients, creating impactful experiences that deliver lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="core-services-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title-our-core-services">Our Core Services</h2>
          <div className="core-services-content reverse-order">
            <div className="image-content">
              <img src={coreServicesImg} alt="Core Services" />
            </div>
            <div className="text-content">
              <ul className="services-list">
                <li>
                  <strong>Web Development:</strong>
                  We design and build responsive, high-performance websites tailored to your business needs.
                  Whether it's a static site or a dynamic web application, our solutions are modern, fast, and scalable.
                  We focus on clean code, mobile-first design, and SEO-friendly structure.
                  From concept to launch, we turn ideas into digital reality.
                </li>
                <li>
                  <strong>Search Engine :</strong>
                  Data-driven marketing strategies designed to grow your business online.
                  We are experts in SEO services, Google Ads management, social media marketing, and email campaigns.
                  Our focus is on lead generation and boosting ROI through continuous analysis and conversion-focused campaigns.
                </li>
                <li>
                  <strong>Branding:</strong>
                  Your brand is your story - and we help you tell it right.
                  From logo design and messaging to visual identity, we create assets that speak clearly.
                  Build a brand that connects emotionally and visually with your audience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="what-we-do-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title-what-we-do">What We Do</h2>
          <div className="services-card-container">
            <div className="service-card">
              <h3 className="service-title">Web Development</h3>
              <p>
                We create stunning and high-performance websites tailored to meet your business goals. From simple static pages to dynamic e-commerce solutions, our development team builds scalable and mobile-optimized platforms that deliver results.
              </p>
              <ul>
                <li>Static Website Design</li>
                <li>Dynamic Web Applications</li>
                <li>E-Commerce Platforms</li>
                <li>CMS Integration</li>
                <li>Responsive Mobile Design</li>
              </ul>
            </div>
            <div className="service-card">
              <h3 className="service-title">Search Engine Optimization</h3>
              <p>
                Increase your brand's visibility in search results and attract a steady stream of qualified customers with our data-driven SEO services. We go beyond technical fixes to build a comprehensive strategy that drives sustainable organic growth, establishes your authority and maximizes your return on investment.
              </p>
              <ul>
                <li>On-Page & Technical SEO</li>
                <li>Keyword Research & Strategy</li>
                <li>Content Optimization</li>
                <li>Local SEO</li>
                <li>Link Building & Authority Growth</li>
                <li>Transparent Analytics & Reporting</li>
              </ul>
            </div>
            <div className="service-card">
              <h3 className="service-title">Branding</h3>
              <p>
                We build unforgettable brand identities that reflect your vision and voice. From logos to business cards and identity systems, we help businesses stand out with visual appeal and messaging that connects with customers.
              </p>
              <ul>
                <li>Logo Design</li>
                <li>ID Card Design</li>
                <li>Business Card Design</li>
                <li>Stationery & Brand Kit</li>
                <li>Social Media Branding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="team-section" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title-our-team">Our Team</h2>
          <div className="team-content">
            <div className="text-content">
              <p>
                At Violet Infotech, our strength is our passionate team of digital experts, united to empower your business with powerful solutions.
              </p>
              <p>
                We combine diverse skills in strategy, design, and technology to tackle challenges with agility and innovation. Our collaborative approach ensures we deliver pixel-perfect websites and high-performance campaigns that exceed expectations.
              </p>
              <p>
                Guided by open communication and a client-first mindset, we build every project with precision and care. We are your dedicated digital partners, truly committed to driving your growth forward.
              </p>
            </div>
            <div className="image-content">
              <img src={teamImg} alt="Our Team" />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      {/* <section className="about-achievements centered" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title-our-achievements" data-aos="fade-down">Our Achievements</h2>
          <div className="achievement-row">
            <div className="achievement-card" data-aos="zoom-in">
              <div className="ring ring-green">
                <CountUp end={100} duration={3} suffix="+" />
              </div>
              <p>Projects Delivered</p>
            </div>
            <div className="achievement-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="ring ring-blue">
                <CountUp end={50} duration={3} suffix="+" />
              </div>
              <p>Satisfied Clients</p>
            </div>
            <div className="achievement-card" data-aos="zoom-in" data-aos-delay="400">
              <div className="ring ring-orange">
                <CountUp end={5} duration={3} suffix="+" />
              </div>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact CTA */}
      <section className="about-contact" data-aos="fade-up">
        <div className="container">
          <h2>Get in Touch</h2>
          <p>Want to start your digital journey with Violet Infotech? Contact us today for a free consultation.</p>
          <button onClick={openModal}>Contact Us</button>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>&times;</button>
            <h3>Contact Us</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email ID</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email Address"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select an Option --</option>
                    <option value="SEO">SEO</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Branding">Branding</option>
                    <option value="Full Package">Full Package</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      )}

      <Footerend />
    </div>
  );
};

export default About;