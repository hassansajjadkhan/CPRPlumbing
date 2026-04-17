import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaArrowRight,
  FaHome,
  FaStar,
  FaClock,
  FaCalendarAlt,
  FaShieldAlt,
  FaDollarSign,
  FaTools,
  FaSearch,
  FaExclamationTriangle,
  FaWrench,
} from 'react-icons/fa';
import servicesData from '../data/servicesData';
import './ServicePage.css';

const ServicePage = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="service-page">
        <div className="sp-hero">
          <div className="sp-hero-overlay"></div>
          <div className="sp-hero-left">
            <h1>Service Not Found</h1>
            <p>Sorry, we couldn't find that service page.</p>
            <Link to="/" className="sp-btn-primary">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  const parentService = service.parent
    ? servicesData.find((s) => s.slug === service.parent)
    : null;
  const childServices = servicesData.filter((s) => s.parent === service.slug);

  // Build category label
  const categoryLabel = parentService ? parentService.title : service.title;

  // Get first section for the "why it matters" area and remaining for problems list
  const mainSection = service.sections[0] || {};
  const secondSection = service.sections[1] || {};

  return (
    <div className="service-page">
      {/* ===== HERO ===== */}
      <section className="sp-hero" style={{ backgroundImage: `url(${service.image})` }}>
        <div className="sp-hero-overlay"></div>
        <div className="sp-hero-left">
          <span className="sp-hero-badge">
            <FaWrench /> {categoryLabel.toUpperCase()}
          </span>
          <h1>
            {service.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="sp-highlight">
              {service.title.split(' ').slice(-1)[0]}
            </span>
          </h1>
          <p className="sp-hero-tagline">
            <strong>{service.tagline}</strong>
          </p>
          <p className="sp-hero-desc">{service.intro.substring(0, 180)}...</p>
          <div className="sp-hero-actions">
            <Link to="/#quote" className="sp-btn-primary">
              <FaCalendarAlt /> Get a Free Quote
            </Link>
            <a href="tel:+14695145707" className="sp-btn-secondary">
              <FaPhoneAlt /> (469) 514-5707
            </a>
          </div>
          <div className="sp-hero-trust">
            <div className="sp-hero-trust-item">
              <FaTools /> <div><strong>Advanced Equipment</strong><span>Powerful &amp; Effective</span></div>
            </div>
            <div className="sp-hero-trust-item">
              <FaShieldAlt /> <div><strong>Experienced Technicians</strong><span>Licensed &amp; Trusted</span></div>
            </div>
            <div className="sp-hero-trust-item">
              <FaDollarSign /> <div><strong>Upfront Pricing</strong><span>No Surprises</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <div className="sp-stats-bar">
        <div className="sp-stats-inner">
          <div className="sp-stat">
            <FaHome className="sp-stat-icon" />
            <div>
              <strong>5,000+</strong>
              <span>Happy Customers</span>
            </div>
          </div>
          <div className="sp-stat">
            <FaStar className="sp-stat-icon" />
            <div>
              <strong>4.9</strong>
              <span>Google Rating</span>
            </div>
          </div>
          <div className="sp-stat">
            <FaPhoneAlt className="sp-stat-icon" />
            <div>
              <strong>24/7</strong>
              <span>Emergency Service</span>
            </div>
          </div>
          <div className="sp-stat">
            <FaClock className="sp-stat-icon" />
            <div>
              <strong>15+</strong>
              <span>Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <section className="sp-body">
        <div className="sp-body-grid">
          {/* Left Column */}
          <div className="sp-body-left">
            <span className="sp-body-label">WHY IT MATTERS</span>
            <h2>
              {mainSection.heading
                ? mainSection.heading.split(' ').slice(0, -2).join(' ') + ' '
                : 'Expert Service for '}
              <span className="sp-highlight">
                {mainSection.heading
                  ? mainSection.heading.split(' ').slice(-2).join(' ')
                  : service.title}
              </span>
            </h2>
            <p className="sp-body-desc">{mainSection.content}</p>

            {mainSection.list && (
              <div className="sp-features-list">
                {mainSection.list.slice(0, 3).map((item, i) => {
                  const icons = [FaSearch, FaTools, FaCheckCircle];
                  const Icon = icons[i % 3];
                  return (
                    <div className="sp-feature-item" key={i}>
                      <div className="sp-feature-icon"><Icon /></div>
                      <div>
                        <strong>{item}</strong>
                        <span>{mainSection.list[i + 3] || 'Professional service you can rely on.'}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Center Image */}
          <div className="sp-body-center">
            <div className="sp-body-image">
              <img src={service.image} alt={service.title} />
            </div>
          </div>

          {/* Right Column */}
          <div className="sp-body-right">
            {/* Problems / Points Card */}
            {secondSection.list && secondSection.list.length > 0 ? (
              <div className="sp-problems-card">
                <h3 className="sp-problems-title">
                  <FaWrench /> COMMON {service.title.toUpperCase()} PROBLEMS
                </h3>
                {secondSection.list.slice(0, 4).map((item, i) => {
                  const icons = [FaExclamationTriangle, FaSearch, FaTools, FaCheckCircle];
                  const Icon = icons[i % 4];
                  return (
                    <div className="sp-problem-item" key={i}>
                      <div className="sp-problem-icon"><Icon /></div>
                      <div>
                        <strong>{item}</strong>
                        <span>{secondSection.content ? secondSection.content.substring(0, 60) + '...' : 'Watch for warning signs.'}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              childServices.length > 0 && (
                <div className="sp-problems-card">
                  <h3 className="sp-problems-title">
                    <FaWrench /> RELATED SERVICES
                  </h3>
                  {childServices.map((child) => (
                    <Link
                      to={`/services/${child.slug}`}
                      className="sp-problem-item sp-problem-link"
                      key={child.slug}
                    >
                      <div className="sp-problem-icon"><FaArrowRight /></div>
                      <div>
                        <strong>{child.title}</strong>
                        <span>Learn more about this service</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )
            )}

            {/* CTA Card */}
            <div className="sp-cta-card">
              <span className="sp-cta-card-label">FAST &amp; RELIABLE SERVICE</span>
              <h3>Ready for Expert {service.title}?</h3>
              <p>Our plumbing experts are standing by 24/7 to help.</p>
              <a href="tel:+14695145707" className="sp-cta-call">
                <FaPhoneAlt /> Call (469) 514-5707
              </a>
              <Link to="/#quote" className="sp-cta-quote">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA BAR ===== */}
      <div className="sp-bottom-bar">
        <div className="sp-bottom-inner">
          <div className="sp-bottom-left">
            <div className="sp-bottom-phone-icon"><FaPhoneAlt /></div>
            <div>
              <span>Need It Done Today? Call Now!</span>
              <a href="tel:+14695145707">(469) 514-5707</a>
            </div>
          </div>
          <Link to="/#quote" className="sp-btn-primary">
            Request a Free Quote <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
