 
import React, { useEffect, useState } from 'react';
import '../App.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) { // Menentukan kapan navbar mulai transparan
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar" style={{ 
      background: '#8cb2d8',
      backdropFilter: 'blur(10px)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div className="navbar-brand" style={{ 
        borderRadius: '9px',
        padding: '10px',
        transition: 'all 0.3s ease',
        marginTop: '-17px'
      }}>
        <img src="/favicon.png" alt="Online School Logo" className="logo" />
      </div>
      <div className="navbar-center">
        <ul className="navbar-links" style={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          margin: 0,
          padding: 0,
          listStyle: 'none',
          fontWeight: '500'
        }}>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Service</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="login-link">
        <a href="#login" className="btn-login">
          Log In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
