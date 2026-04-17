import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { GiWaterDrop } from 'react-icons/gi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <GiWaterDrop className="footer-logo-icon" />
              <span>CPR<strong>Plumbing</strong></span>
            </div>
            <p>
              Trusted North Texas plumbing for over 15 years. Licensed, insured, and 
              committed to quality work at honest prices.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#hero">Home</a>
            <a href="#services">Services</a>
            <a href="#quote">Get a Quote</a>
            <a href="#about">About Us</a>
            <a href="#testimonials">Reviews</a>
          </div>

          <div className="footer-services">
            <h4>Services</h4>
            <a href="#services">Leak Detection & Repair</a>
            <a href="#services">Drain & Sewer Cleaning</a>
            <a href="#services">Water Heaters</a>
            <a href="#services">Gas Leak Detection</a>
            <a href="#services">Remodels & Installation</a>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <div className="contact-item">
              <FaPhoneAlt />
              <a href="tel:+14695145707">(469) 514-5707</a>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <a href="mailto:info@cprplumbingservices.com">info@cprplumbingservices.com</a>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>7204 Bradford Place, The Colony, TX 75056</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CPR Plumbing Services. All rights reserved.</p>
          <p>Master Plumber License #M-38954 | Texas State Board of Plumbing Examiners</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
