import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footerend from '../components/Footer';
import '../assets/css/digitalmarketingmain.css';
import image1 from '../assets/image/digital marketing/pic-1.png';
import image2 from '../assets/image/digital marketing/pic-2.png';
import image3 from '../assets/image/digital marketing/pic-3.png';
import image4 from '../assets/image/digital marketing/pic-4.png';

const Digitalmarketingpg = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
  
  const openModal = (title: string) => {
    setModalTitle(title);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // const toggleArticle = (index: number) => {
  //   const updated = [...expandedArticles];
  //   updated[index] = !updated[index];
  //   setExpandedArticles(updated);
  // };

  const handleFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    fromModal: boolean
  ) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    try {
      const response = await fetch(`${API_URL}/digitalmarketingcontact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (response.ok) {
        alert(`Thank you, ${name}! We'll get back to you soon.`);
        form.reset();
        if (fromModal) closeModal();
      } else {
        const errorData = await response.json();
        console.error("Form submission error:", errorData);
        alert("There was a problem submitting the form.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Network error. Please try again later.");
    }
  };

  return (
        <>
         <div className="dm-bg">
        <div className="dm-heading">
          <h1><b>Digital Marketing</b></h1><br />
          <p>We Serve the Greater Berks County, Lehigh Valley, <br />
            Philadelphia, Delaware, New Jersey Region & Beyond
            WITH OFFICES IN READING, ALLENTOWN & MALVERN, PA</p>
        </div>
        <div className="dm-flex"> 
          <div className="dm-text">
            <h1>Best Digital Marketing company in Coimbatore</h1>
            <p> Powered by purpose, Violet infotech doesn’t just optimize, we also engineer digital dominance. As a top digital marketing company in Coimbatore, We combined innovative thinking and strategic precision to win prospects and build results-driven SEO plans. With most trusted SEO services in Coimbatore, We expand reach and sharpen impact, attract engaged prospects and turn every click into loyal, revenue-generating customers. Are you Ready to rank higher? Build dreams with the #No.1 SEO experts who turn strategy into success.</p>
          </div>
          <div className="dm-video">
            <iframe
              width="100%"
              height="515"
              src="https://www.youtube.com/embed/FC-6ePHxrwY"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="thirdsec">
        Better Marketing Strategy, Better Results!
      </div>

      <div className='dm-bg2'>
        <h2>
          If You Want Results Then You Need a <br /> Comprehensive Online Strategy.
        </h2>
        <p>Contact us today for a free consultation!</p>
        <button onClick={() => openModal("Get a Free Consultation")}>GET A FREE CONSULTATION</button>
      </div>

          {/* Sec */}

          <div className="thirdsec">
                  Key Elements of a Powerful Digital Marketing Strategy
            </div>
            <section id='ims' className='section-ims'>
  <div className="ims-container">
    {/* Left Text */}
    <div className="ims-text">
      <h2>Search engine optimization</h2>
      <p>
       Want your brand to shine brighter on the digital stage? At Violet Infotech, we provide powerful SEO services in Coimbatore tailored to put your business at the top of search results. Our team of experts specializes in everything from on-page enhancements to off-page strategies, including tailored solutions for local, national, and e-commerce SEO. With data-driven insights and innovative approaches, we help your business climb search rankings, attract the right audience, and maximize conversions. With Violet Infotech, you don’t just compete—you lead the way.
      </p>
      {/* <p>
        Your website should be the central hub that connects, unifies and amplifies all your online marketing and advertising activities. Most of your online campaigns will link to landing pages on your website.
      </p>
      <p>
        Your website should be the central hub that connects, unifies and amplifies all your online marketing and advertising activities. Most of your online campaigns will link to landing pages on your website.
      </p> */}
      <Link to="/digital-marketing/SEO-Service"><button className="SEO-btn1">SEO - LEARN MORE</button></Link>
      {/* <Link to="/web-design"><button className="SEO-btn1">WEB DESIGN - LEARN MORE</button></Link> */}
    </div>

    {/* Right Image */}
    <div className="ims-image">
      <img
        src={image1}
        alt="Digital Strategy"
      />
    </div>
  </div>
</section>

         <section id='overview' className='SEO-overview'>
  <div className="SEO-inner">
    <div>
      <h2>Why Choose Us?</h2>
      <p>Violet Infotech isn’t just a digital marketing agency in Coimbatore—it’s your future-ready growth partner. As a forward-thinking IT & Digital Solutions company, we are committed to ethical strategies, real-time results, and smart technology that keep your brand one step ahead of competitors.
</p>
<p> <strong>Experienced Professionals</strong> <br />With years of proven expertise, our SEO specialists stay updated with the latest trends to keep your business competitive, visible, and successful in search rankings—driving consistent digital growth and long-term success.
</p>
<p><strong>Customized Strategies</strong> <br />Our team designs tailored SEO strategies aligned with your business goals to maximize ROI, boost online visibility, and ensure you stay ahead of the competition with impactful, personalized solutions.
</p>
<p><strong>Proven Record of Success</strong><br />We are trusted for our consistent track record of delivering measurable results. By empowering clients to achieve their goals, we help elevate brands with sustainable growth through strategic, result-focused execution.
</p>
<p> <strong>Transparent & Collaborative Process</strong><br /> At Violet Infotech, we believe in complete transparency and collaboration. We keep you informed at every stage of the SEO journey, aligning strategies with your objectives to ensure measurable success and clarity at every step.
</p>
{/* <p>SEO Audits & Competitor Analysis</p> */}
      {/* <Link to="/digital-marketing/SEO-Service"><button className="SEO-btn1">SEO - LEARN MORE</button></Link> */}
    </div>
    <div>
      <img src={image2} alt="" />
      <p><i>“People regularly find my business online based on the search engine results that our new PMI website has delivered." ~ Diane Renninger, Principal, Renninger & Associates</i></p>
    </div>
  </div>
</section>

         <section id='sea' className='sea-overview'>
            <div className="ims-container">
              {/* Left Text */}
              <div className="ims-text">
                <h2>What We Do</h2>
                <p>
                  At Violet Infotech, we empower businesses to grow, connect, and succeed in the digital world. By combining innovation, data-driven insights, and advanced technology, we deliver end-to-end solutions that help brands establish a strong online presence, boost visibility, and achieve measurable results. 
                </p>
                <p><strong>Search Engine Optimization (SEO)</strong> <br />We optimize your website with cutting-edge SEO strategies—on-page, off-page, local, and e-commerce SEO—to increase visibility, improve rankings, and drive quality traffic.
                </p>
                <p>
                  <strong>Web Design & Development</strong> <br /> We create responsive, user-friendly, and visually stunning websites that deliver seamless user experiences and support your business growth. 
                </p>
                <p>
                  <strong>Branding & Creative Solutions</strong> <br />Our creative team crafts powerful branding strategies, logos, and digital assets that help you stand out and leave a lasting impression. 
                </p>
                <p>
                  <strong>E-Commerce Solutions</strong> <br />We build scalable, secure, and customized e-commerce platforms that streamline sales and deliver engaging shopping experiences.
                </p>
                <p>
                  <strong>Data-Driven Insights</strong> <br />Through analytics and reporting, we provide valuable insights to refine strategies, monitor performance, and ensure long-term success. 
                </p>
                
                
                <button onClick={() => openModal("Contact Us")} className="SEO-btn1">CONTACT US </button>
              </div>

              {/* Right Image */}
              <div className="ims-image">
                <img
                  src={image3} // ✅ Place image in public/images/
                  alt="Digital Strategy"
                />
                
              </div>
            </div>
         </section>

         <section id='seasec' className='seasec'>
  <div className="seasec-container">
    {/* Left Text */}
    <div className="seasec-text">
      <h2 style={{ textShadow: 'none' }}>What We Do – Content Marketing</h2>
      <p>
        At Violet Infotech, we create content that doesn’t just speak—it converts. Our content marketing services are designed to help your brand tell its story, build trust, and engage audiences across multiple platforms. By blending creativity with strategy, we ensure your content works as a powerful growth engine for your business.</p>
<p><strong>Our Content Marketing Services include:</strong></p>
<p><strong>Content Strategy & Planning</strong> – Data-driven strategies tailored to your audience and business goals.</p>
<p><strong>Blog & Article Writing</strong> – High-quality, SEO-friendly blogs that drive organic traffic and authority.</p>
<p><strong>Website & Landing Page Content</strong> – Engaging copy designed to boost conversions and enhance user experience.</p>
<p><strong>Social Media Content</strong> – Creative posts, captions, and campaigns that spark conversations and brand engagement.</p>
<p><strong>Video & Visual Content</strong> – Short videos, infographics, and creatives that capture attention instantly.</p>
<p><strong>Email Marketing Content</strong> – Personalized email campaigns to nurture leads and increase customer loyalty.</p>
<p>With Violet Infotech, your content doesn’t just fill pages—it delivers measurable impact, drives traffic, and positions your brand as an industry leader.</p>
      <button className="SEO-btn1" onClick={() => openModal("Contact Us")}>CONTACT AS</button>
    </div>

    {/* Right Image */}
    <div className="ims-image">
      <video src="https://videos.pexels.com/video-files/18069232/18069232-sd_640_360_24fps.mp4" autoPlay loop muted></video>
    </div>
  </div>
</section>

         <section id='contentmarketing' className='content1'>
  <div className="contentmarketing-container">
    {/* Left Text */}
    <div className="contentmarketing-text">
      <h2 style={{ textShadow: 'none' }}>Violetinfotech Facts</h2>
      <p>
        At violet infotech, we help businesses grow by making sure they’re seen where it matters most in online. With sapience- driven strategies and a hands- on approach of our platoon works to ameliorate your visibility and bring in the right followership.
      </p>
      <p>
        As one of Coimbatore’s leading SEO experts and digital marketing company in coimbatore we apply slice- edge results and dependable strategies to 	Grow your online influence and ensure Growth that lasts.
      </p>
      <p>
        Driving results through data-driven strategies.
      </p>
      <p>
        Expertise in all aspects of digital marketing.
      </p>
      <p>
        Delivering measurable ROI for our clients.
      </p>

      {/* <Link to="/digital-marketing/Content-Marketing-Service"><button className="SEO-btn1">Learn More</button></Link> */}
    </div>

    {/* Right Image */}
    <div className="contentmarketing-image">
      <img
        src="https://www.pngall.com/wp-content/uploads/5/Social-Media-Digital-Marketing-PNG-HD-Image.png"
        alt="Digital Strategy"
      />
    </div>
  </div>
</section>
        <section id='emailmarketing' className='email-marketing'>
  <div className="email-marketing-inner">
    <div className="email-section-container">
      {/* Left Text */}
      <div className="email-section-text">
        <h2 style={{ textShadow: 'none' }}>Email Marketing</h2>
        <p>
          <i>When properly utilized, email marketing can be a very low-cost way to promote your business. </i>
        </p>
        <p>
         Stay top of mind and in their inbox.
We design automated, personalized email journeys that turn cold leads into loyal customers.</p>
<p> Newsletter Campaigns</p>
<p>Drip Campaigns & Sequences</p>
<p> Lead Magnet Funnels</p>
<p>Subscriber List Management</p>
<p>Email Design & Copywriting</p>
<p>Integration with Mailchimp, Sendinblue, etc.</p>

        <button className="SEO-btn1" onClick={() => openModal("Contact Us")}>EMAIL MARKETING - CONTACT AS</button>
      </div>

      {/* Right Image */}
      <div className="email-section-image">
        <img src="https://jaro-website.s3.ap-south-1.amazonaws.com/2025/04/Email-Marketing.jpg" alt="Email Marketing" />
      </div>
    </div>
  </div>
</section>
         <section id='reputationmanagement' className='reputation-management'>
  <div className="reputation-management-inner">
    <div className="reputation-section-container">
      {/* Left Text */}
      <div className="reputation-section-text">
        <h2 style={{ textShadow: 'none' }}>Reputation Management</h2>
        <p>
          For most businesses, highly targeted search engine ads that link to persuasive website landing pages can rapidly build website traffic that converts into new leads and sales.
        </p>
        <p>
          Learn how our reputation management system not only helps you review more reviews, but also helps you deal with the occasional poor review. In addition, our software can automatically display customer reviews on your website. Click below to learn more
        </p>

        <button className="SEO-btn1" onClick={() => openModal("Contact Us")}>REPUTATION MANAGEMENT - CONTACT AS </button>
      </div>

      {/* Right Image */}
      <div className="reputation-section-image">
        <img
          src={image4}
          alt="Reputation Management"
        />
      </div>
    </div>
  </div>
</section>
          <div className="thirdsec">
                  How We Work
          </div>
          <section className="consult-section">
            <div className="grid-column">
              <div className="grid-item">
                <img src="https://cdn-icons-png.flaticon.com/128/2693/2693507.png" alt="Consultation" />
                <h3>Schedule a Free Consultation</h3>
              </div>
              <div className="grid-item">
                <img src="https://cdn-icons-png.flaticon.com/128/3234/3234841.png" alt="Goals" />
                <h3>Tell Us Your Goals</h3>
              </div>
              <div className="grid-item">
                <img src="https://cdn-icons-png.flaticon.com/128/14458/14458843.png" alt="Proposal" />
                <h3>Get a Free Proposal</h3>
              </div>
            </div>

            <div className="consult-content">
              <h5>Our process is simple and hassle-free.</h5>
              <p>Simply contact us to schedule your free, no-obligation consultation.</p>
              <p>We'll meet with you online or at one of our three offices. You'll tell us your goals, we'll ask lots of questions, and then we'll create a free, no-obligation proposal to meet your goals.</p>
              <p>It's that easy. Ready to get started?</p>
              <button className="action-btn" onClick={() => openModal("Contact Us")}>TAKE ACTION NOW</button>
            </div>
          </section>
          <div className="thirdsec">
                  Our Services
          </div>
          <section className='websitebg'>
                {/* <div className='web-banner'>
                   <h5>We Suggest 3 Plans to Meet Your Needs & Budget</h5>
                   <p>We recommend that you consider one of the three website design and marketing plans below. They are designed to help you achieve a meaningful set of objectives based on your budget and goals.  Plans progress in impact from left to right. Pricing is based on the scope of your website and the depth of your online marketing objectives. </p>
                  <p>All plans can be customized to meet your unique needs. Contact us to learn more.</p>
                  <p>If your budget is limited, you can begin with the Web Pro package, and then implement the Online Marketer  plan at a later time, and then eventually implement the Social Media Master plan as phase 3 of your online marketing strategy.</p>
                </div> */}
                <div className='three-box'>
                   <div>
                      <img src="https://cdn-icons-png.flaticon.com/128/3474/3474360.png" alt="" />
                      <h4 style={{fontSize: '28px'}}>On-page & Off page SEO</h4>
                      <p>On-page SEO optimizes your site's content and structure, while off-page SEO enhances credibility through backlinks and social signals working together in boosting visibility, increasing traffic, and search engine rankings at the top.</p>
                      {/* <h4><u>FEATURES</u></h4>
                      <h4>Website Foundation:</h4>
                      <ul style={{ listStyle: 'none' }}>
                        <li> Keyword research</li>
                        <li>Competitor website research</li>
                        <li>Branding & messaging</li>
                        <li>Website strategy</li>
                      </ul>
                      <br />
                      <h4>Website Build:</h4>
                      <ul  style={{ listStyle: 'none' }}>
                        <li>Thorough on-page SEO</li>
                        <li>Exquisite graphics & images</li>
                        <li>Fully in line with your branding</li>
                        <li>Persuasive messaging</li>
                        <li> Image & background layering</li>
                        <li>Motion effects to engage viewers</li>
                      </ul> */}
                   </div>
                   <div style={{
                      width: "80%",
                      transform: "scale(1.06)",
                      boxShadow: "rgba(0, 0, 0, 0.7) 0px 3px 8px",
                      transition: "transform 0.3s ease"
                    }}>
                      <img src="https://cdn-icons-png.flaticon.com/128/3234/3234841.png" alt="" />
                      <h4 style={{fontSize: '28px'}}>Local SEO</h4>
                      <p>Local SEO boosts your businesses appearance in local “near me” searches by optimizing online presence and listings by helping to attract local customers, increase foot traffic, and dominate your area's search results by our service.</p>
                      {/* <h4><u>FEATURES</u></h4>
                      <h4>Website Foundation:</h4>
                      <ul style={{ listStyle: 'none' }}>
                        <li> Keyword research</li>
                        <li>Competitor website research</li>
                        <li>Branding & messaging</li>
                        <li>Website strategy</li>
                      </ul>
                      <br />
                      <h4>Website Build:</h4>
                      <ul  style={{ listStyle: 'none' }}>
                        <li>Thorough on-page SEO</li>
                        <li>Exquisite graphics & images</li>
                        <li>Fully in line with your branding</li>
                        <li>Persuasive messaging</li>
                        <li> Image & background layering</li>
                        <li>Motion effects to engage viewers</li>
                      </ul> */}
                   </div>
                   <div>
                      <img src="https://cdn-icons-png.flaticon.com/128/11629/11629132.png" alt="" />
                      <h4 style={{fontSize: '28px'}}>Link Building</h4>
                      <p>Boost your site's specialist with our moral interface building procedure by well planned to win higher quality backlinks, upgrade look motor rankings, and drive steady, focused on activity to your site with the offer assistance of our specialists.</p>
                      {/* <h4><u>FEATURES</u></h4>
                      <h4>Website Foundation:</h4>
                      <ul style={{ listStyle: 'none' }}>
                        <li> Keyword research</li>
                        <li>Competitor website research</li>
                        <li>Branding & messaging</li>
                        <li>Website strategy</li>
                      </ul>
                      <br />
                      <h4>Website Build:</h4>
                      <ul  style={{ listStyle: 'none' }}>
                        <li>Thorough on-page SEO</li>
                        <li>Exquisite graphics & images</li>
                        <li>Fully in line with your branding</li>
                        <li>Persuasive messaging</li>
                        <li> Image & background layering</li>
                        <li>Motion effects to engage viewers</li>
                      </ul> */}
                   </div>
                </div>
                <div>
                  <h2>Need a Custom Marketing Plan?</h2>
                  <button onClick={() => openModal("Contact Us")}>CONTACT US </button>
                </div>
          </section>
          <div className="thirdsec">
                Contact Us for a Free Consultation
          </div>
           {/* Consultation Form */}
      <section className="consultation">
        <div className="consultation-container">
          <h1>Request a Free Internet Marketing Consultation</h1>
          <span className="company-name">Violet Infotech</span>
          {/* <h5>GET FOUND. IMPRESS. ENGAGE. CONVERT.</h5> */}
          <p><b>Take Your Business To The Next Level!</b></p>
          <p>Contact us today to learn more about creating a powerful Internet Marketing plan for your business or non-profit organization!</p>

          <form className="consultation-form" onSubmit={(e) => handleFormSubmit(e, false)}>
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <input type="text" name="phone" placeholder="Your Number" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send Request</button>
</form>
        </div>
      </section>
          {/* <div className="thirdsec">
                  Learn More About Digital Marketing
          </div>

      <section className="six-box">
        {articleData.map((article, index) => (
          <div className="box" key={index}>
            <img src={article.img} alt={`Box ${index + 1}`} />
            <h2>{article.title}</h2>
            <p>
              {expandedArticles[index]
                ? article.content
                : `${article.content.slice(0, 80)}...`}
            </p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleArticle(index);
              }}
            >
              {expandedArticles[index] ? "Read Less ←" : "Read More →"}
            </a>
          </div>
        ))}
      </section> */}

{/* Modal Popup */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>×</button>
            <h2>{modalTitle}</h2>
            <form className="consultation-form" onSubmit={(e) => handleFormSubmit(e, false)}>
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <input type="text" name="phone" placeholder="Your Number" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send</button>
</form>
          </div>
        </div>
      )}


        <Footerend />
        </>
  );
};

export default Digitalmarketingpg;
