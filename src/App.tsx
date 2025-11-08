import React, { useState, useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home";
// import HeroSection from "./components/HeroSection";
// import Second from "./components/SecondSection";
// import Third from "./components/Thirdsec";
// import Four from "./components/Foursec";
// import Five from "./components/Fivesec";
// import Footnew from "./components/Footer";
import TermsPolicy from "./components/TermsPolicy";
import About from "./components/About";
import WebDevelopment from "./components/WebDevelopment";
// import Digitalmarketingpg from "./components/Digitalmarketingpg";
// import InternetMarketingServices from "./components/InternetMarketingServices";
// import InternetMarketingStrategy from "./components/InternetMarketingStrategy";
import SeoService from "./components/SEOService";
// import ContentMarketingService from "./components/ContectMarketingServices";
// import SocialMediaMarketingService from "./components/SocialMediaMarketingServices";
// import WebDesignServices from "./components/webdesign";
import BrandingServices from "./components/Branding";
import Contact from "./components/Contact";
import Plans from "./components/Plans";
import Websitegallery from "./components/websitegallery";
import ChatBotComponent from "./components/ChatBotComponent";
import Preloader from "./components/PageLoader";
import logo from './assets/image/logo/LOGO 3.jpg';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Show loader and block scroll on route change
    setLoading(true);
    window.scrollTo(0, 0); // Reset scroll on navigation

    // Simulate loading duration (adjust timing as needed or integrate with real loading state)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {/* Custom preloader with animated logo */}
      <Preloader loading={loading} />

      {/* Only show main app content after loading completes */}
      {!loading && (
        <>
          <Navbar />
          <ChatBotComponent />
          <FloatingWhatsApp
            phoneNumber="+919843099624"
            accountName="Support Team"
            avatar={logo}
            chatMessage="Hi, how can I assist you?"
            allowEsc
            allowClickAway
            notification
            notificationSound
          />
          <Routes>
            {/* <Route path="/home" element={
              <>
                <HeroSection />
                <Second />
                <Third />
                <Four />
                <Five />
                <Footnew />
              </>
            } /> */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/digital-marketing/" element={<Digitalmarketingpg />} />
            <Route path="/digital-marketing/internet-marketing-services" element={<InternetMarketingServices />} />
            <Route path="/digital-marketing/internet-marketing-strategy" element={<InternetMarketingStrategy />} /> */}
            <Route path="/SEO-Service" element={<SeoService />} />
            {/* <Route path="/digital-marketing/Social-media-Service" element={<SocialMediaMarketingService />} />
            <Route path="/digital-marketing/Content-Marketing-Service" element={<ContentMarketingService />} />
            <Route path="/web-design-og" element={<WebDesignServices />} /> */}
            <Route path="/branding" element={<BrandingServices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/terms-and-policy" element={<TermsPolicy />} />
            <Route path="/Websitegallery" element={<Websitegallery />} />
            <Route path="/web-design" element={<WebDevelopment />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
