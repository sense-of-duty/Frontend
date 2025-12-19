import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
    <h1>예시입니다.</h1>
    <Link to="/link">
    <button> 예시 </button>
    </Link>
    </div>
  )
};

export default HomePage;
