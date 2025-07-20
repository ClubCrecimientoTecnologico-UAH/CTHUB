import React, { useState, useEffect } from 'react';

const WelcomeText = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="welcome-text" id="welcomeText">
      <div>{'>'} Bienvenido a CTHUB <span className="loading-dots"></span></div>
      <div>{'>'} Sistema Optimizado para Codelink<span className="loading-dots"></span></div>
      <div>{'>'} ¿Listo para English Club?<span className="loading-dots"></span></div>
    </div>
  );
};

export default WelcomeText; 