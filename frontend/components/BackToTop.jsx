import React from 'react';

const BackToTop = ({ isVisible }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`back-to-top ${isVisible ? 'visible' : ''}`} 
      id="backToTop" 
      onClick={scrollToTop}
      style={{ display: isVisible ? 'flex' : 'none' }}
    >
      <i className="fas fa-arrow-up"></i>
    </div>
  );
};

export default BackToTop; 