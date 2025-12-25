import React from 'react';
import './Footer.css';
import LogoImage from '../assets/GDGheaderLogo.webp';

const Footer: React.FC = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        
        <div className="footer-left">
          <img src={LogoImage} alt="GDG Logo" className="footer-logo" />
          <div className="footer-brand-text">
            <h2 className="footer-title">Google Developer Group</h2>
            <p className="footer-subtitle">Sungkonghoe University</p>
          </div>
        </div>

        <div className="footer-right">
          <h3 className="organizer-label">Organizer</h3>
          
          <div className="organizer-info">
            <p>윤준석 | 010 - 1234 - 1234 | @js0304.dev</p>
            <p>김준 | 010 - 4321 - 4321 | @junwatson0418</p>
          </div>

          <div className="copyright-info">
            <p>Copyright © 2025</p>
            <p>GDG on Campus Sungkonghoe</p>
            <p>All rights reserved</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;