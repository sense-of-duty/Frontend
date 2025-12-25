import React from 'react';
import Header from '../components/Header';
import MainBanner from '../components/MainBanner';
import MainNews from '../components/MainNews';
import Footer from '../components/Footer';

const MainPage: React.FC = () => {
  return (
    <div className="main-page-wrapper" style={{ width: '100%', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      <MainBanner />

      <MainNews />

      <Footer />
    </div>
  );
};

export default MainPage;