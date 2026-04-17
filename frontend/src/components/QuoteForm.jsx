import React, { useState } from 'react';
import {
  FaBolt,
  FaPaperPlane,
  FaCheckCircle,
  FaPhoneAlt,
  FaHeadset,
  FaClock,
  FaDollarSign,
  FaHandshake,
  FaThumbsUp,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaWrench,
  FaLock,
  FaClipboardList,
} from 'react-icons/fa';
import './QuoteForm.css';

const serviceOptions = [
  'Slab Leak Detection & Repair',
  'Toilet / Faucet Leak Repair',
  'Sewer & Drain Cleaning',
  'Hydro Jetting / Camera Inspection',
  'Water Heater Repair / Installation',
  'Tankless Water Heater',
  'Gas Leak Detection & Repair',
  'Gas Line Repair / Installation',
  'Shower Pan / Bathtub Replacement',
  'Kitchen Sink / Appliance Install',
  'Disposal Replacement',
  'Yard Leak Repair',
  'Other',
];

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const res = await fetch(`${apiUrl}/api/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to submit');
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please call us directly!');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="quote-section" id="quote">
        <div className="quote-success">
          <FaCheckCircle className="success-icon" />
          <h2>Quote Request Received!</h2>
          <p>We'll get back to you within 1 hour during business hours.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="quote-section" id="quote">
      {/* Background image */}
      <div className="quote-bg"></div>

      <div className="quote-container">
        {/* Left Side */}
        <div className="quote-info">
          <div className="quote-info-badge">
            <FaBolt /> FAST &amp; FREE ESTIMATES
          </div>

          <h2>
            Get Your Free
            <br />
            <span className="highlight">Plumbing Quote</span>
          </h2>

          <p>
            Tell us what you need and we'll provide a clear, honest
            estimate — usually within 60 minutes. No hidden fees.
            Just reliable service.
          </p>

          {/* Feature Grid */}
          <div className="quote-features">
            <div className="qf-item">
              <div className="qf-icon"><FaClock /></div>
              <div>
                <strong>Quick Response</strong>
                <span>We'll get back to you within 1 hour</span>
              </div>
            </div>
            <div className="qf-item">
              <div className="qf-icon"><FaDollarSign /></div>
              <div>
                <strong>Upfront Pricing</strong>
                <span>Honest quotes with no hidden fees</span>
              </div>
            </div>
            <div className="qf-item">
              <div className="qf-icon"><FaHandshake /></div>
              <div>
                <strong>No Obligation</strong>
                <span>Get a quote with zero commitment</span>
              </div>
            </div>
            <div className="qf-item">
              <div className="qf-icon"><FaThumbsUp /></div>
              <div>
                <strong>100% Satisfaction</strong>
                <span>Quality service guaranteed</span>
              </div>
            </div>
          </div>

          {/* Call Bar */}
          <div className="quote-call-bar">
            <div className="call-bar-item">
              <div className="call-bar-icon"><FaPhoneAlt /></div>
              <div>
                <span>Need It Urgent? Call Now</span>
                <a href="tel:+14695145707">(469) 514-5707</a>
              </div>
            </div>
            <div className="call-bar-item">
              <div className="call-bar-icon"><FaHeadset /></div>
              <div>
                <strong>24/7 Emergency Service</strong>
                <span>We're Always Here to Help!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="form-header">
            <div>
              <span className="form-header-label">REQUEST A FREE QUOTE</span>
              <h3>Let's Get Started!</h3>
            </div>
            <div className="form-header-icon"><FaClipboardList /></div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">FULL NAME</label>
              <div className="input-wrap">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phone">PHONE NUMBER</label>
              <div className="input-wrap">
                <FaPhone className="input-icon" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(469) 555-1234"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">EMAIL ADDRESS</label>
            <div className="input-wrap">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="service">SERVICE NEEDED</label>
            <div className="input-wrap">
              <FaWrench className="input-icon" />
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a Service...</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">DESCRIBE YOUR ISSUE</label>
            <div className="textarea-wrap">
              <textarea
                id="message"
                name="message"
                rows="4"
                maxLength="500"
                placeholder="Tell us about the problem..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <span className="char-count">{formData.message.length}/500</span>
            </div>
          </div>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="quote-submit" disabled={loading}>
            {loading ? 'Sending...' : (
              <>
                <FaPaperPlane /> Get My Free Quote
              </>
            )}
          </button>

          <p className="form-privacy">
            <FaLock /> Your information is secure and will never be shared.
          </p>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;
