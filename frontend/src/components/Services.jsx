import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaSearch,
  FaTint,
  FaFire,
  FaWrench,
  FaArrowRight,
  FaStar,
  FaClock,
  FaShieldAlt,
} from 'react-icons/fa';
import { GiGasStove } from 'react-icons/gi';
import { MdPlumbing } from 'react-icons/md';
import servicesData from '../data/servicesData';
import './Services.css';

const getImage = (slug) => {
  const s = servicesData.find((d) => d.slug === slug);
  return s ? s.image : '';
};

const services = [
  {
    icon: <FaSearch />,
    tag: 'FAST & ACCURATE',
    title: 'Leak Detection & Repair',
    desc: 'Find it fast. Fix it right. We locate and repair slab leaks, toilet leaks, faucet leaks, and hidden water line leaks.',
    slug: 'leak-detection',
  },
  {
    icon: <MdPlumbing />,
    tag: 'CLEAN & CLEAR',
    title: 'Drain & Sewer Cleaning',
    desc: 'Say goodbye to clogs and backups. Our advanced tools clear drains and inspect sewers to keep everything flowing.',
    slug: 'drain-cleaning',
  },
  {
    icon: <FaFire />,
    tag: 'HOT WATER, RELIABLE',
    title: 'Water Heaters',
    desc: 'Repair, replace, or upgrade to efficient tank and tankless water heaters. Same-day service available.',
    slug: 'water-heaters',
  },
  {
    icon: <FaWrench />,
    tag: 'QUICK FIXES',
    title: 'Plumbing Repairs',
    desc: 'From dripping faucets to running toilets, we handle repairs quickly and get your plumbing back on track.',
    slug: 'plumbing-services',
  },
  {
    icon: <FaTint />,
    tag: 'SAFE & PRECISE',
    title: 'Gas Leak Detection & Repair',
    desc: 'Protect your home and family. We detect gas leaks fast and make professional repairs to ensure safety.',
    slug: 'gas-leak-detection-repair',
  },
  {
    icon: <GiGasStove />,
    tag: 'UPGRADE & IMPROVE',
    title: 'Remodels & Installations',
    desc: 'Planning a remodel? We install showers, bathtubs, sinks, fixtures, and appliances with expert craftsmanship.',
    slug: 'shower-pan-replacement',
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <span className="section-badge">OUR SERVICES</span>
          <h2>
            Plumbing Solutions
            <br />
            <span className="highlight">You Can Count On.</span>
          </h2>
          <p>From quick fixes to full installations, we handle it all with expert care and lasting results.</p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="card-content">
                <div className="service-icon">{s.icon}</div>
                <span className="service-tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to={`/services/${s.slug}`} className="service-link">
                  Learn More <FaArrowRight />
                </Link>
              </div>
              <div className="card-image" style={{ backgroundImage: `url(${getImage(s.slug)})` }}></div>
            </div>
          ))}
        </div>

        {/* Trust Bar */}
        <div className="services-trust-bar">
          <div className="trust-bar-main">
            <FaShieldAlt className="trust-bar-shield" />
            <div>
              <span className="trust-bar-label">LICENSED. INSURED. TRUSTED.</span>
              <strong>Quality Workmanship Guaranteed.</strong>
            </div>
          </div>
          <div className="trust-bar-items">
            <div className="trust-bar-item">
              <FaStar />
              <div>
                <strong>5-Star Rated</strong>
                <span>Hundreds of Happy Customers</span>
              </div>
            </div>
            <div className="trust-bar-item">
              <FaClock />
              <div>
                <strong>Same-Day Service</strong>
                <span>When You Need It Most</span>
              </div>
            </div>
            <div className="trust-bar-item">
              <FaShieldAlt />
              <div>
                <strong>Licensed &amp; Insured</strong>
                <span>Professional &amp; Protected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
