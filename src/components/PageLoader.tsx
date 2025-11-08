import React, { useEffect } from "react";
import logo from '../assets/image/logo/L-8.png';
import '../assets/css/preloader.css';

const Preloader: React.FC<{ loading: boolean }> = ({ loading }) => {
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [loading]);

  if (!loading) return null;
  return (
    <div className="preloader-bg">
      <img src={logo} className="preloader-logo" alt="Loading..." />
    </div>
  );
};

export default Preloader;
