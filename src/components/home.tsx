import React, { useState, useRef, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HTMLFlipBook from "../components/CustomFlipBook";
import "../assets/css/home.css";
import Footerend from "../components/Footer";
import StaticWeb from "../assets/image/home/static_web.jpg";
import DynamicWeb from "../assets/image/home/dynamic_web.png";
import EcommerceWeb from "../assets/image/home/ecommerce_web.png";

interface StatsCircleProps {
  target?: number;
  label: string;
  description: string;
  duration?: number;
  reverse?: boolean;
  animationStart?: boolean;
  staticValue?: number | string;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const StatsCircle: React.FC<StatsCircleProps> = ({
  target = 0,
  label,
  description,
  duration = 3000,
  reverse = false,
  animationStart = true,
  staticValue,
}) => {
  const [count, setCount] = useState(0);
  const [waveTop, setWaveTop] = useState(100);
  const maxFillGap = 8;

  useEffect(() => {
    if (staticValue !== undefined) {
      setCount(Number(staticValue));
      setWaveTop(maxFillGap);
      return;
    }
    if (!animationStart) return;
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const rawPct = Math.min(progress / duration, 1);
      const easedPct = easeOutCubic(rawPct);

      setCount(Math.floor(easedPct * target));
      setWaveTop(Math.max(100 - easedPct * 100, maxFillGap));

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration, animationStart, staticValue]);

  return (
    <section className={`stats-section ${reverse ? "reverse" : ""}`}>
      <div className="stat-item">
        {reverse ? (
          <>
            <div className="stat-text">
              <h3>{label}</h3>
              <p>{description}</p>
            </div>
            <div className="circle-progress">
              <div className="wave" style={{ top: `${waveTop}%` }} />
              <div className="number">
                {staticValue !== undefined
                  ? `${staticValue}+`
                  : count >= target
                  ? `${target}+`
                  : count}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="circle-progress">
              <div className="wave" style={{ top: `${waveTop}%` }} />
              <div className="number">
                {staticValue !== undefined
                  ? `${staticValue}+`
                  : count >= target
                  ? `${target}+`
                  : count}
              </div>
            </div>
            <div className="stat-text">
              <h3>{label}</h3>
              <p>{description}</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

// Page component for flipbook pages with "Learn More" link at right bottom
const Page = React.forwardRef<HTMLDivElement, { children: React.ReactNode; number: number }>(
  ({ children, number }, ref) => (
    <div className="page" ref={ref}>
      <h2 className="page-header">Branding</h2>

      <div className="page-content">
        {children}
        <a
          href="#"
          className="learn-more-link"
          onClick={(e) => {
            e.preventDefault();
            alert(`Learn more about ${children}`);
          }}
          style={{ display: "block", marginTop: "1rem" }}
        >
          Learn More →
        </a>
      </div>

      <div className="page-footer">Page no: {number}</div>
    </div>
  )
);

const Home: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);
  const [activeCircle, setActiveCircle] = useState<number>(1);
  const flipBookRef = useRef<React.ElementRef<typeof HTMLFlipBook>>(null);

  const halfCircleItems = [
    {
      num: 1,
      label: "WebSite",
      description:
        "We provide a comprehensive web development service, building fast and visually stunning websites that capture your brand's essence. Our process is designed to be highly collaborative, ensuring your vision is brought to life with precision and creative flair. We construct responsive, mobile-friendly sites that offer a seamless experience for every user, on any device.<br> Furthermore, we empower your site with clean, search-engine-optimized code to enhance your online visibility from the start. Our goal is to deliver a powerful digital asset that not only looks impressive but also effectively converts visitors into loyal customers. We manage the entire project efficiently, ensuring a high-quality result that is both cost-effective and delivered in less time. Ultimately, we provide you with more than just a website - we deliver a foundational tool for your business's sustained growth.",
      image:
        "https://codequotient.com/blog/wp-content/uploads/2022/06/Different-Types-of-Web-Development.jpg",
    },
    {
      num: 2,
      label: "Branding",
      description:
        "We provide strategic branding services that go beyond a simple logo to define your company's entire identity. Our process uncovers the core story and values that make your business unique, translating them into a powerful and cohesive visual language. We craft memorable logos, select distinctive color palettes, and <br> choose typography that together form a consistent and professional image. This identity is then applied across all your touchpoints, from business cards and packaging to digital platforms, ensuring unified brand recognition.<br> We build brands that resonate deeply with your target audience, fostering trust and forging lasting emotional connections. Our efficient and collaborative approach delivers this comprehensive brand foundation in less time and at a cost-effective price. Ultimately, we provide you with a definitive brand identity that commands attention, differentiates you from competitors, and drives long-term loyalty.",
      image: "https://dutchuncles.in/wp-content/uploads/2020/12/Branding-2-01-1024x476.jpg",
    },
    {
      num: 3,
      label: "SEO",
      description:
        "We provide comprehensive SEO services designed to amplify your online visibility and connect you with customers actively searching for your solutions. Our process begins with a deep analysis of your website and market to build a tailored strategy targeting the most valuable keywords. We optimize every element of your site, from technical backend structure to engaging content, ensuring it meets the highest standards for both users and search engines. Our focus is on building genuine authority through quality content and strategic link-building, signaling to Google that your site is a trusted resource. We deliver consistent, transparent reporting, so you see the clear growth in your organic rankings and website traffic.<br> Our efficient methodologies ensure you achieve meaningful results in less time, providing a significant return on investment. Ultimately, we provide a sustainable SEO foundation that doesn't just attract clicks, but drives qualified leads and accelerates your business growth.",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQG4Ox4ddVKV_A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1712000408161?e=2147483647&v=beta&t=GxgKDyZon2jxlnpBR9qlDU6f8ILBn3DkpaDm-I_7Qk4",
    },
  ];

  const flipCards = [
    {
      front: "Static Website",
      back:
        "Static websites are fixed and display the same content to every visitor. They are simple, fast, and easy to deploy.",
      imageUrl: StaticWeb,
    },
    {
      front: "Dynamic Website",
      back:
        "Dynamic websites generate content dynamically based on user interactions or backend processes, offering personalized experiences.",
      imageUrl: DynamicWeb,
    },
    {
      front: "E-Commerce Website",
      back:
        "E-Commerce websites enable buying and selling products online, featuring product catalogs, carts, and secure payment gateways.",
      imageUrl: EcommerceWeb,
    },
  ];

  const seoTypes = [
    {
      title: "On-Page SEO",
      content:
        "On-page SEO involves optimizing individual pages, including meta tags, headers, content, and images to rank higher and earn more relevant traffic.",
    },
    {
      title: "Off-Page SEO",
      content:
        "Off-page SEO focuses on external ranking factors like backlinks, social media engagement, and influencer outreach to build your website's authority.",
    },
    {
      title: "Technical SEO",
      content:
        "Technical SEO covers website backend optimizations such as site speed, mobile-friendliness, crawlability, and secure HTTPS setup.",
    },
  ];

  const [expandedSEOIndex, setExpandedSEOIndex] = useState<number | null>(1);

  const toggleExpandSEO = (index: number) => {
    setExpandedSEOIndex(expandedSEOIndex === index ? null : index);
  };

  useEffect(() => {
    if (!statsRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
    {/*Carousel Section */}
      <Carousel
        showArrows
        showStatus={false}
        showIndicators
        infiniteLoop
        useKeyboardArrows
        autoPlay
        stopOnHover
        interval={3000}
        transitionTime={500}
        swipeable
        emulateTouch
        dynamicHeight
        showThumbs={false}
      >
        <div>
          <img
            src="https://png.pngtree.com/png-vector/20230502/ourlarge/pngtree-web-development-word-concepts-dark-blue-banner-illustration-digital-technology-vector-png-image_51879156.jpg"
            alt="First Slide"
          />
        </div>
        <div>
          <img
            src="https://www.e-arc.in/wp-content/uploads/2024/12/Custom-Banner-Printing.jpg"
            alt="Second Slide"
          />
        </div>
        <div>
          <img
            src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1920/https://anshikatechnologies.in/wp-content/uploads/2018/05/SEO-Services-in-Bhopal.jpg"
            alt="Third Slide"
          />
        </div>
      </Carousel>

      {/*Marquee Section */}

      <div className="marquee-container">
        <p className="marquee-text">
          <img
            src="https://www.blueeyesintelligence.org/wp-content/uploads/2017/08/special_offer-1.gif"
            alt="Offer"
            style={{ verticalAlign: "middle", height: "40px", marginRight: "8px" }}
          />
          Special Offer!! generation of Websites at just ₹4999/- Only! Grab this
          limited-time deal now and elevate your online presence with a professional website.
          Don't miss out on this exclusive opportunity to boost your business!
          <img
            src="https://www.blueeyesintelligence.org/wp-content/uploads/2017/08/special_offer-1.gif"
            alt="Offer"
            style={{ verticalAlign: "middle", height: "40px", marginRight: "8px" }}
          />
        </p>
      </div>

      {/*How We Are Section */}

      <div className="howweare-section">
        <div className="howweare-left">
          <h2>How We Are</h2>
          <p>
            We are a passionate team of developers and designers dedicated to
            building next-level web and AI solutions for businesses. Our
            process-driven approach ensures your success from concept to scalable
            deployment.
          </p>
        </div>
        <div className="howweare-right">
          <div className="box-hover-edge" data-number="01">
            Innovative
            <br />
            Design
          </div>
          <div className="box-hover-edge large" data-number="02">
            Robust
            <br />
            Tech Stack
          </div>
          <div className="box-hover-edge" data-number="03">
            Agile
            <br />
            Workflow
          </div>
          <div className="box-hover-edge large" data-number="04">
            Trusted
            <br />
            Support
          </div>
        </div>
      </div>

      {/* Stats Circle Section */}

      <div
        ref={statsRef}
        className="stats-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px",
          maxWidth: 1000,
          margin: "40px auto",
        }}
      >
        <StatsCircle
          target={50}
          label="Projects Done"
          description="Successfully delivered web and AI projects worldwide."
          animationStart={animate}
        />
        <StatsCircle
          target={15}
          label="Years Experience"
          description="Years of delivering high-quality software."
          reverse
          animationStart={animate}
        />
        <StatsCircle
          target={25}
          label="Team Members"
          description="A talented team supporting your success."
          animationStart={animate}
        />
        <StatsCircle
          label="Clients"
          description="Trusted by numerous global clients."
          staticValue={300}
        />
      </div>

      <div className="s-container">
        <div className="half-circle">
          {halfCircleItems.map(({ num, label }) => (
            <div
              key={num}
              className={`small-circle circle-${num} ${
                activeCircle === num ? "active" : ""
              }`}
              onClick={() => setActiveCircle(num)}
            >
              <span className="circle-number">{num}</span>
              <span className="circle-label">{label}</span>
            </div>
          ))}
        </div>

        <div className="info-content">
          <div className="info-box">
            <h3>{halfCircleItems.find((item) => item.num === activeCircle)?.label}</h3>
            <p dangerouslySetInnerHTML={{ __html: halfCircleItems.find((item) => item.num === activeCircle)?.description || '' }} />
          </div>

          <div className="info-image">
            <img
              src={halfCircleItems.find((item) => item.num === activeCircle)?.image}
              alt={halfCircleItems.find((item) => item.num === activeCircle)?.label}
            />
          </div>
        </div>
      </div>

      {/* Flip Card Section */}
      <div className="flip-section-container">
        <h2 className="flip-section-header">Web Development</h2>
        <div className="flip-section">
          {flipCards.map(({ front, back, imageUrl }) => (
            <div key={front} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  {imageUrl && <img src={imageUrl} alt={front} style={{ width: '100%', height: 'auto' }} />}
                  <div>{front}</div>
                </div>
                  <div className="flip-card-back">
                    <p>{back}</p>
                    <button className="learn-more-btn" onClick={() => alert(`Learn more about ${front}`)}>
                      Learn More
                    </button>
                  </div>
              </div>
            </div>
            ))}
        </div>
      </div>

      {/* SEO Expandable Section with Circular Boxes */}
      <div className="seo-expandable-container">
        <h2 className="seo-expandable-header">SEO Services</h2>
        <div className="seo-line-wrapper">
          <div className="seo-circles-container">
            {seoTypes.map((seo, index) => (
              <div
                key={seo.title}
                className={`seo-circle-box ${expandedSEOIndex === index ? "active" : ""}`}
                onClick={() => toggleExpandSEO(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && toggleExpandSEO(index)}
              >
                {seo.title}
              </div>
            ))}
          </div>
          <div className="seo-connecting-line" />
        </div>
        <div className="seo-expandable-content-wrapper">
          {seoTypes.map((seo, index) => (
            <div
              key={seo.title}
              className={`seo-expandable-content ${
                expandedSEOIndex === index ? "expanded" : ""
              }`}
            >
              <p>{seo.content}</p>
              {expandedSEOIndex === index && (
                <a
                  href="#"
                  className="learn-more-link"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Learn more about ${seo.title}`);
                  }}
                >
                  Learn More →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 450, margin: "50px auto", textAlign: "center" }}>
        <HTMLFlipBook
        ref={flipBookRef}
        width={400}
        height={500}
        size="fixed"
        minWidth={300}
        maxWidth={400}
        minHeight={400}
        maxHeight={500}
        maxShadowOpacity={0.5}
        showCover={false}
        mobileScrollSupport={true}
        className="flipbook"
        >
          <Page number={1}>
            <h3>Logo Design</h3>
            <p>
              Create a unique and memorable logo that captures your brand's essence.
              We design logos that stand out and make a lasting impression.
            </p>
            <img
            src="https://image.slidesharecdn.com/aboutlogos-230331210331-0f17495f/75/ABOUT-LOGOS-pptx-2-2048.jpg"
            alt="Logo Design Sample"
            style={{ width: "100%", borderRadius: 8 }}
            />
          </Page>
          
          <Page number={2}>
            <h3>Visiting Card Design</h3>
            <p>
              Professional and creative visiting card designs that help you network
              and leave a remarkable impression on clients and partners.
            </p>
            <img
            src="https://asset.gecdesigns.com/img/visiting-card-templates/minimalistic-creative-business-card-template-1680967068615-cover.webp"
            alt="Visiting Card Sample"
            style={{ width: "100%", borderRadius: 8 }}
            />
          </Page>
          <Page number={3}>
            <h3>Banners & Posters</h3>
            <p>
              Eye-catching banners and posters designed to promote your events,
              products, or services creatively and effectively.
            </p>
            <img
            src="https://t3.ftcdn.net/jpg/03/99/21/34/360_F_399213481_UWZ0Hm6ytlbZe0etHXX6dY5fQKqMxq7H.jpg"
            alt="Banners and Posters Sample"
            style={{ width: "100%", borderRadius: 8 }}
            />
          </Page>
        </HTMLFlipBook>
        
        <div style={{ marginTop: 15 }}>
          <button 
          onClick={() => flipBookRef.current?.pageFlip().flipPrev()} 
          style={{ marginRight: 10, cursor: "pointer", padding: "8px 16px" }}
          >
            Previous
          </button>

          <button 
          onClick={() => flipBookRef.current?.pageFlip().flipNext()} 
          style={{ cursor: "pointer", padding: "8px 16px" }}
          >
            Next
          </button>
        </div>
      </div>
      
      {/* Why Should We Section */}
      <div className="whyshouldwe-section">
        <div className="whyshouldwe-left">
          <h2>Why Choose Us?</h2>
          <p>
            We are your partners in growth, dedicated to delivering creativity, precision, and a lasting impact. 
            Our approach blends stunning design with powerful technology to build exceptional brand experiences.
          </p>
          <p>
            But we go beyond great ideas. We provide comprehensive solutions to make your digital presence undeniable:
          </p>
          <ul>
            <li><strong>Web Development:</strong> Fast, responsive, and engaging websites.</li>
            <li><strong>SEO:</strong> Strategies to increase your visibility and attract the right customers.</li>
            <li><strong>Branding:</strong> A unique identity that tells your story and connects with your audience.</li>
          </ul>
          <p>
            Best of all, we deliver this high-quality work faster and at a more affordable cost than our competitors, 
            ensuring you see a rapid return on your investment.
          </p>
        </div>
        <div className="whyshouldwe-right">
          <form
          className="why-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted successfully!");
          }}
          >
            <div className="form-row">
              <div className="form-group half">
                <label htmlFor="fullname">Full Name</label>
                <input type="text" id="fullname" name="fullname" placeholder="Enter your full name" required />
              </div>
              <div className="form-group half">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group half">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group half">
                <label htmlFor="service">Service</label>
                <select id="service" name="service" required>
                  <option value="">Select a service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="SEO">SEO</option>
                  <option value="Branding">Branding</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Write your message..." rows={4} required />
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>

      <Footerend />
    </>
  );
};

export default Home;