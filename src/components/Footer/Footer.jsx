import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import solomon from "../../assets/solomon.jpg";

const Footer = () => {
  return (
    <footer className="footer-section-ft">
      {/* Upper Content */}
      <div className="footer-top-ft">
        <div className="footer-logo-ft">
          <h1>Codesign</h1>
          <p className="subtitle-ft">ARCHITECTURE</p>
        </div>

        <p className="footer-description-ft">
          Sed laoreet orci id pretium sodales. Nunc ac est dolor. Donec placerat dolor
          et mi elementum, in suscipit libero tincidunt. Ut at tempor ex, vel auctor
          tortor. Sed finibus vitae mi et imperdiet.
        </p>

        {/* Subscribe Form */}
        <div className="subscribe-container-ft">
          <input type="email" placeholder="ENTER YOUR EMAIL" />
          <button className="subscribe-btn-ft">
            SUBSCRIBE NOW <span>▶</span>
          </button>
        </div>

        {/* Links */}
        <div className="footer-links-ft">
          <span>■ PRIVACY POLICY</span>
          <span>■ TERMS & CONDITIONS</span>
        </div>

        <div className="footer-contact-ft">
          <p>EMAIL: <span>INFO@GMAIL.COM</span></p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-ft">
        <div className="copyright-ft">
          Copyright © 2023 <span className="highlight-ft">DesignZone</span> All rights reserved.
        </div>

        <div className="social-icons-ft">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>

      {/* Attribution Section */}
      <div className="footer-attribution-ft">
        <div className="attribution-container-ft">
          <h2 className="org-name-ft">Oscar Computer Education <p>Nagercoil</p></h2>
          
          <div className="attribution-grid-ft">
            {/* Creator Profile */}
            <div className="attribution-profile-ft">
              <div className="image-wrapper-ft">
                <img src={solomon} alt="Serwin Solomon R" className="creater-image-ft"/>
              </div>
              <div className="profile-text-ft">
                <p className="label-ft">Prepared by</p>
                <p className="name-ft">Serwin Solomon R</p>
                
                <a href="https://codesign-architecture-interior-react.netlify.app/?theme=1" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="portfolio-link-ft">
                   Website : Codesign Architecture
                </a>
              </div>
            </div>

            {/* Training Details */}
            <div className="attribution-info-ft">
              <div className="info-item-ft">
                <p className="label-ft">Trained by</p>
                <p className="value-ft">Miss. Sandhiya</p>
              </div>
              <div className="info-item-ft">
                <p className="label-ft">Course</p>
                <p className="value-ft">FullStack Java</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;