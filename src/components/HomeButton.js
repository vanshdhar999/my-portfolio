import React from 'react';
import '../css/HomeButton.css';

function HomeButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className="home-button" onClick={scrollToTop}>
      VD
    </button>
  );
}

export default HomeButton;
