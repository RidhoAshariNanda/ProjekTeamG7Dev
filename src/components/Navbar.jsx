import React from 'react';
import '../App.css';

const Navbar = () => {
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
        transition: 'all 0.3s ease'
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
          <li><a href="#home">Beranda</a></li>
          <li><a href="#services">Layanan</a></li>
          <li><a href="#about">Tentang</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
      </div>
      <div className="login-link">
        <a href="#login">Masuk</a>
      </div>
    </nav>
  );
};

export default Navbar;
