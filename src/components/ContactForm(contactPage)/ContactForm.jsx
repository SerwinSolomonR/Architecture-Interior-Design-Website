import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiPlay } from 'react-icons/fi'; 
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="bg-grid">
        <div className="bg-grid-line"></div>
        <div className="bg-grid-line"></div>
        <div className="bg-grid-line"></div>
      </div>

      <div className="contact-wrapper">
        {/* Left Side: Form */}
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone No." />
          </div>
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message" rows="6"></textarea>
          
          <button type="button" className="subscribe-btn">
            Subscribe Now 
            <FiPlay size={10} fill="currentColor" /> 
          </button>
        </form>

        {/* Right Side: Info Cards */}
        <div className="info-column">
          <div className="info-card">
            <div className="icon-wrapper"><FiPhone size={32} /></div> 
            <div className="info-text">
              <h3>Call Now</h3>
              <p>+91 123 456 7890, +91 987 654 3210</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-wrapper"><FiMail size={32} /></div> 
            <div className="info-text">
              <h3>Location</h3>
              <p>info@gmail.com, services@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-wrapper"><FiMapPin size={32} /></div> {/* Added Fi prefix */}
            <div className="info-text">
              <h3>Email Now</h3>
              <p>15/B Miranda House, New York, US</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;