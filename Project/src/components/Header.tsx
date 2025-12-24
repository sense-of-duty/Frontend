import React from 'react';
import './Header.css';
import HeaderBrand from './HeaderBrand';
import HeaderNav from './HeaderNav';
import HeaderProfile from './HeaderProfile';

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="header-section left">
        <HeaderBrand />
      </div>

      <div className="header-section center">
        <HeaderNav />
      </div>

      <div className="header-section right">
        <HeaderProfile />
      </div>
    </header>
  );
};

export default Header;