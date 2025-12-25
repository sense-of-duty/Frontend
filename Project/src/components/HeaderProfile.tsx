import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeaderProfile.css';
import BellIcon from '../assets/BellBlack.svg';
import ProfileIcon from '../assets/profile.png';

const HeaderProfile: React.FC = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/login'); 
  };

  return (
    <div className="profile-container">
      <button type="button" className="icon-btn" aria-label="알림">
        <img src={BellIcon} alt="알림" className="bell-icon" />
      </button>

      <span className="user-info">
        홍길동 / Backend / Member
      </span>

      <button 
        type="button" 
        className="profile-btn" 
        aria-label="프로필 설정"
        onClick={handleProfileClick}
      >
        <img src={ProfileIcon} alt="프로필" className="profile-icon" />
      </button>
    </div>
  );
};

export default HeaderProfile;