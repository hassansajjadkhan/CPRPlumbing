import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaPhoneAlt, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { GiWaterDrop } from 'react-icons/gi';
import servicesData from '../data/servicesData';
import './Navbar.css';

const mainCategories = servicesData.filter((s) => !s.parent);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled || !isHome ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <RouterLink to="/" className="navbar-logo" onClick={closeMenu}>
          <GiWaterDrop className="logo-icon" />
          <span>CPR<strong>Plumbing</strong></span>
        </RouterLink>

        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          {isHome ? (
            <ScrollLink to="hero" smooth duration={500} onClick={closeMenu}>Home</ScrollLink>
          ) : (
            <RouterLink to="/" onClick={closeMenu}>Home</RouterLink>
          )}

          {/* Services Dropdown */}
          <div className={`nav-dropdown ${dropdownOpen ? 'open' : ''}`}>
            <span
              className="nav-dropdown-trigger"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Services <FaChevronDown className="chevron" />
            </span>
            <div className="dropdown-menu">
              {mainCategories.map((cat) => (
                <div className="dropdown-group" key={cat.slug}>
                  <RouterLink
                    to={`/services/${cat.slug}`}
                    className="dropdown-heading"
                    onClick={closeMenu}
                  >
                    {cat.title}
                  </RouterLink>
                  {cat.children && cat.children.map((child) => (
                    <RouterLink
                      to={`/services/${child.slug}`}
                      className="dropdown-item"
                      key={child.slug}
                      onClick={closeMenu}
                    >
                      {child.title}
                    </RouterLink>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {isHome ? (
            <>
              <ScrollLink to="quote" smooth duration={500} onClick={closeMenu}>Get a Quote</ScrollLink>
              <ScrollLink to="about" smooth duration={500} onClick={closeMenu}>About</ScrollLink>
              <ScrollLink to="testimonials" smooth duration={500} onClick={closeMenu}>Reviews</ScrollLink>
            </>
          ) : (
            <>
              <RouterLink to="/#quote" onClick={closeMenu}>Get a Quote</RouterLink>
              <RouterLink to="/#about" onClick={closeMenu}>About</RouterLink>
              <RouterLink to="/#testimonials" onClick={closeMenu}>Reviews</RouterLink>
            </>
          )}

          <a href="tel:+14695145707" className="mobile-phone-link" onClick={closeMenu}>
            <FaPhoneAlt /> (469) 514-5707
          </a>
        </div>

        <a href="tel:+14695145707" className="navbar-phone">
          <FaPhoneAlt /> (469) 514-5707
        </a>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
