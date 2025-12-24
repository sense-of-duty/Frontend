import React from 'react';
import './MainBanner.css';
import BannerImage from '../assets/GDGPhoto1.jpg'; 

const MainBanner: React.FC = () => {
  return (
    <section className="banner-container">
      <img 
        src={BannerImage} 
        alt="GDGoc 단체 사진" 
        className="banner-image" 
      />
    </section>
  );
};

export default MainBanner;