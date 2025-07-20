import React, { useEffect, useRef } from 'react';
import useParticles from '../hooks/useParticles';

const SplashScreen = () => {
  const particlesContainerRef = useRef(null);
  
  useParticles(particlesContainerRef);

  useEffect(() => {
    const title = document.getElementById('cthubTitle');
    if (!title) return;
    
    const timer = setTimeout(() => {
      title.classList.add('pixel');
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="splash-screen" id="splashScreen">
      <div ref={particlesContainerRef} id="splashParticles" style={{ position: 'absolute', width: '100%', height: '100%' }}></div>
      <div className="retro-grid">
        <div className="grid-container">
          <div className="grid-animation"></div>
        </div>
        <div className="gradient-overlay"></div>
      </div>
      <div className="distortion"></div>
      <h1 className="cthub-title glitch" id="cthubTitle" data-text="CTHUB">CTHUB</h1>
      <p style={{ color: 'var(--accent-color)', zIndex: 10, fontSize: '1.2rem', marginTop: '1rem', textAlign: 'center' }}>
        <span className="loading-dots"></span> Club Crecimiento Tecnológico <span className="loading-dots"></span>
      </p>
      <div className="scan-line"></div>
    </div>
  );
};

export default SplashScreen; 