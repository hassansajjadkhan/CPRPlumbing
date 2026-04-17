import React from 'react';
import { FaStar, FaQuoteLeft, FaBolt, FaFire, FaWrench, FaShieldAlt, FaClock, FaArrowRight, FaHandshake } from 'react-icons/fa';
import './Testimonials.css';

const reviews = [
  {
    name: 'Sarah M.',
    location: 'The Colony, TX',
    text: 'They showed up within an hour of my call and fixed our burst pipe fast. Super professional and the price was exactly what they quoted. Highly recommend CPR Plumbing!',
    stars: 5,
    tag: 'FAST & RELIABLE',
    tagIcon: <FaBolt />,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=60',
  },
  {
    name: 'Robert K.',
    location: 'Frisco, TX',
    text: "Had them install a new tankless water heater. The team was clean, efficient, and explained everything. Best plumbing experience we've ever had.",
    stars: 5,
    tag: 'WATER HEATER INSTALL',
    tagIcon: <FaFire />,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    image: 'https://images.unsplash.com/photo-1585128792020-803d29415281?w=400&q=60',
  },
  {
    name: 'Maria G.',
    location: 'Plano, TX',
    text: 'Our kitchen drain was completely clogged. They did a camera inspection, found the issue, and cleared it same day. Fair pricing and honest folks.',
    stars: 5,
    tag: 'DRAIN CLEANING',
    tagIcon: <FaWrench />,
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&q=60',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <span className="tm-badge">TESTIMONIALS</span>
          <h2>
            What North Texas
            <br />
            <span className="highlight">Homeowners</span> Are Saying
          </h2>
          <p>Real reviews from real customers. We're proud to earn their trust and even prouder to deliver every time.</p>
        </div>

        {/* Rating Bar */}
        <div className="tm-rating-bar">
          <div className="tm-rating-left">
            <div className="tm-stars-big">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <span className="tm-score">4.9</span>
            <span className="tm-score-text">Based on 1,200+<br />Verified Reviews</span>
          </div>
          <div className="tm-google">
            <span className="google-g">G</span>
            <div>
              <strong>Google</strong>
              <span>Verified Reviews</span>
            </div>
          </div>
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="tm-read-more">
            Read More Reviews <FaArrowRight />
          </a>
        </div>

        {/* Review Cards */}
        <div className="testimonials-grid">
          {reviews.map((r, i) => (
            <div className="review-card" key={i}>
              <div className="review-card-content">
                <div className="review-top">
                  <FaQuoteLeft className="quote-icon" />
                  <span className="review-tag">{r.tagIcon} {r.tag}</span>
                </div>
                <p className="review-text">{r.text}</p>
                <div className="review-stars">
                  {[...Array(r.stars)].map((_, j) => (
                    <FaStar key={j} />
                  ))}
                </div>
                <div className="review-author">
                  <img src={r.avatar} alt={r.name} className="author-avatar" />
                  <div>
                    <strong>{r.name}</strong>
                    <span>{r.location}</span>
                  </div>
                </div>
              </div>
              <div className="review-card-bg" style={{ backgroundImage: `url(${r.image})` }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Bar */}
      <div className="tm-trust-bar">
        <div className="tm-trust-inner">
          <div className="tm-trust-main">
            <FaHandshake className="tm-trust-shield" />
            <div>
              <span className="tm-trust-label">TRUSTED BY YOUR NEIGHBORS</span>
              <strong>5,000+ Happy Customers</strong>
            </div>
          </div>
          <div className="tm-trust-items">
            <div className="tm-trust-item">
              <FaShieldAlt />
              <div>
                <strong>Licensed &amp; Insured</strong>
                <span>Professional &amp; Protected</span>
              </div>
            </div>
            <div className="tm-trust-item">
              <FaStar />
              <div>
                <strong>5-Star Rated</strong>
                <span>Across Google Reviews</span>
              </div>
            </div>
            <div className="tm-trust-item">
              <FaClock />
              <div>
                <strong>24/7 Emergency Service</strong>
                <span>Always Here When You Need Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
