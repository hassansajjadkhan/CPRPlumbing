import React from 'react';
import { Link } from 'react-scroll';
import { FaPhoneAlt, FaClock, FaShieldAlt, FaStar, FaCheckCircle, FaBolt, FaArrowRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      {/* Left Content */}
      <div className="hero-left">
        <div className="hero-badge">
          <FaBolt className="badge-icon" /> 24/7 EMERGENCY PLUMBING
        </div>

        <h1>
          Plumbing Problems?
          <br />
          <span className="highlight">We Fix Them Fast.</span>
        </h1>

        <p className="hero-subtitle">
          Licensed. Reliable. Professional. From leaks to full installations, 
          we've got you covered.
        </p>

        <div className="hero-buttons">
          <Link to="quote" smooth duration={500} className="btn-primary">
            Get a Free Quote <FaArrowRight className="btn-arrow" />
          </Link>
          <a href="tel:+14695145707" className="btn-secondary">
            <FaPhoneAlt /> Call Now: (469) 514-5707
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="hero-trust-row">
          <div className="trust-item">
            <div className="trust-icon-wrap">
              <FaClock />
            </div>
            <div className="trust-text">
              <strong>Same-Day Service</strong>
              <span>Fast Response Guaranteed</span>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon-wrap">
              <FaShieldAlt />
            </div>
            <div className="trust-text">
              <strong>Licensed &amp; Insured</strong>
              <span>Professional &amp; Trusted</span>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon-wrap">
              <FaStar />
            </div>
            <div className="trust-text">
              <strong>5-Star Rated</strong>
              <span>Hundreds of Happy Customers</span>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon-wrap accent">
              <FaCheckCircle />
            </div>
            <div className="trust-text">
              <strong>Local Experts</strong>
              <span>Serving Your Community</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="hero-right">
        <div className="hero-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&q=80"
            alt="Professional plumber at work"
            className="hero-image"
          />
        </div>
      </div>

      {/* Bottom Social Proof Bar */}
      <div className="hero-proof-bar">
        <div className="proof-left">
          <div className="proof-avatars">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Customer" />
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Customer" />
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Customer" />
          </div>
          <div className="proof-rating">
            <div className="proof-stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <span className="proof-text">4.9/5 from 1,200+ Customers</span>
          </div>
        </div>
        <div className="proof-right">
          <span className="proof-label">Trusted &amp; Certified</span>
          <div className="proof-badges">
            <div className="proof-badge">Licensed<br /><strong>Master Plumber</strong></div>
            <div className="proof-badge">BBB<br /><strong>Accredited</strong></div>
            <div className="proof-badge">100%<br /><strong>Satisfaction</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
