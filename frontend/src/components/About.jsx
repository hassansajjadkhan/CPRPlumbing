import React from 'react';
import { FaShieldAlt, FaDollarSign, FaHome, FaPhoneAlt, FaUsers, FaStar, FaPhone } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Left - Image */}
        <div className="about-image-col">
          <div className="about-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80"
              alt="CPR Plumbing professional plumber"
            />
            <div className="experience-badge">
              <strong>15+</strong>
              <span className="exp-label">YEARS OF EXPERIENCE</span>
              <span className="exp-sub">Serving North Texas</span>
            </div>
          </div>
        </div>

        {/* Right - Content */}
        <div className="about-content">
          <span className="about-badge">ABOUT US</span>
          <h2>
            Local Plumbers.
            <br />
            <span className="highlight">Trusted</span> by Neighbors.
          </h2>
          <p>
            We're a family-owned plumbing company proudly serving North Dallas for
            <strong> over 15 years</strong>. Built on honesty, hard work, and doing the job right the
            first time. From Frisco to Plano, McKinney to Carrollton — we've got you
            covered.
          </p>

          <div className="about-values">
            <div className="value-card">
              <div className="value-icon-wrap"><FaShieldAlt /></div>
              <h4>Licensed &amp; Insured</h4>
              <p>Fully licensed, bonded, and insured master plumbers.</p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrap"><FaDollarSign /></div>
              <h4>Upfront Pricing</h4>
              <p>You approve the price before we start. No surprises.</p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrap"><FaHome /></div>
              <h4>Clean &amp; Respectful</h4>
              <p>We treat your home like it's our own. Always.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="about-stats-bar">
        <div className="about-stats-inner">
          <div className="stat-bar-main">
            <div className="stat-bar-phone-icon"><FaPhoneAlt /></div>
            <div>
              <span className="stat-bar-label">FAMILY OWNED &amp; OPERATED</span>
              <strong>Proudly Serving North Texas</strong>
              <span className="stat-bar-sub">Frisco &bull; Plano &bull; McKinney &bull; Carrollton &amp; Beyond</span>
            </div>
          </div>
          <div className="stat-bar-items">
            <div className="stat-bar-item">
              <FaUsers className="stat-bar-icon" />
              <div>
                <strong>15+</strong>
                <span>Years Experience</span>
              </div>
            </div>
            <div className="stat-bar-item">
              <FaStar className="stat-bar-icon" />
              <div>
                <strong>5,000+</strong>
                <span>Happy Customers</span>
              </div>
            </div>
            <div className="stat-bar-item">
              <FaPhone className="stat-bar-icon" />
              <div>
                <strong>24/7</strong>
                <span>Emergency Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
