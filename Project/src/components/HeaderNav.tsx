import React, { useState } from 'react';
import './HeaderNav.css';

const HeaderNav: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // 메뉴 리스트 배열
  const menuItems = ['홈', '커뮤니티', '활동', '일정', '소개'];

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        {menuItems.map((menu) => (
          <li
            key={menu}
            className={`nav-item ${activeMenu === menu ? 'active' : ''}`}
            onClick={() => setActiveMenu(menu)}
          >
            {menu}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;