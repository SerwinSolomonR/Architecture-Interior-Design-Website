import React from "react";
import { Link } from "react-router-dom"; 
import "./CommonHero.css";

const CommonHero = ({ title, breadcrumb, backgroundImage, linkPath1 , linkPath2 }) => {
  const headerStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.95)), 
                      url("${backgroundImage || "https://images.unsplash.com/photo-1505691938895-1758d7feb511"}")`
  };

  return (
    <div className="header-wrapper-02 fade-in">
      <section className="services-hero-02" style={headerStyle}>
        <div className="hero-content-02">
          
            <h1>{title}</h1>
            
           <p>
  <Link to={linkPath1 || "/"} className="hero-link-wrapper">
    Home
  </Link>
  
  <span className="breadcrumb-separator"></span>
  
  <Link to={linkPath2 || "/"} className="hero-link-wrapper">
    {breadcrumb}
  </Link>
</p>
          
        </div>
      </section>

      <div className="hero-social-02">
        <span className="follow-text-02">FOLLOW US ON</span>
        <div className="social-icons-02">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-dribbble"></i>
          <i className="fab fa-pinterest"></i>
        </div>
      </div>
    </div>
  );
};

export default CommonHero;