import React from 'react';
import '../App.css';


const Footer = () => {
  return ( 
    <footer className="footer">
      <div className="footer-container">
        {/* Bagian Tengah - Teks */}
        <div className="footer-center">
          <p className="footer-text" style={{ fontFamily: 'YourFontFamily', fontSize: 'YourFontSize', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
            Lorem Ipsum is simply dummy text of the printing <br />
            and typesetting industry.
          </p>
        </div>

        {/* Bagian Bawah - Gambar Logo dan Media Sosial */}
        <div className="footer-bottom">
          <div className="footer-left">
            <img src="logo.png" alt="Logo" className="footer-logo" style={{ borderRadius: '10px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }} />
            <p>© 2024 Team G7 Web</p>
          </div>
          <div className="footer-right">
            <ul className="social-links">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-youtube"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
