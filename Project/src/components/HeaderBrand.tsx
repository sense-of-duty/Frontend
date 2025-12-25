import React from 'react';
import './HeaderBrand.css';
import LogoImage from '../assets/GDGLogo.jpg'; 

const HeaderBrand: React.FC = () => {
  return (
    <div className="brand-container">
      <img src={LogoImage} alt="GDGoc Logo" className="brand-logo" />
      <div className="brand-text-group">
        <h1 className="brand-title">GDGoc 통합 페이지</h1>
        <span className="brand-subtitle">Sungkonghoe University</span>
      </div>
    </div>
  );
};

export default HeaderBrand;