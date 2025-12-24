import React, { useState } from 'react';
import './MainNews.css';

import NewsImg1 from '../assets/Photo2.jpg';
import NewsImg2 from '../assets/Photo3.jpg';
import NewsImg3 from '../assets/Photo4.jpg';
import NewsImg4 from '../assets/Photo5.jpg';
import NewsImg5 from '../assets/Photo6.jpg';

const NEWS_DATA = [
  { id: 1, title: "단체사진1", date: "2024.01.15", image: NewsImg1 },
  { id: 2, title: "단체사진2", date: "2024.02.20", image: NewsImg2 },
  { id: 3, title: "단체사진3", date: "2024.03.10", image: NewsImg3 },
  { id: 4, title: "단체사진4", date: "2024.04.05", image: NewsImg4 },
  { id: 5, title: "단체사진5", date: "2024.05.01", image: NewsImg5 },
];

const MainNews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCount = NEWS_DATA.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCount) % totalCount);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCount);
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % totalCount;
      items.push(NEWS_DATA[index]);
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <section className="news-section">
      <div className="news-container">
        
        <div className="news-header">
          <div className="pagination">
            <span className="current-page">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <span className="total-page">
               / {String(totalCount).padStart(2, '0')}
            </span>
          </div>

          <div className="news-controls">
            <button className="control-btn" onClick={handlePrev}>&lt;</button>
            <button className="control-btn">||</button>
            <button className="control-btn" onClick={handleNext}>&gt;</button>
          </div>

          <h2 className="news-title">News</h2>
        </div>

        <div className="card-grid">
          {visibleItems.map((item, index) => {
            const isLarge = index === 0;
            return (
              <div 
                key={item.id}
                className={`news-card ${isLarge ? 'large' : 'small'}`}
              >
                <img src={item.image} alt={item.title} className="card-bg-image" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default MainNews;