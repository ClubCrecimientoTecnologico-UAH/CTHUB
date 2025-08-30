import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">CTHUB</div>
        <div className="contact-info">
          Contacto: <a href="mailto:clubcrecimientotecnologico@unihumboldt.edu.ve">clubcrecimientotecnologico@unihumboldt.edu.ve</a>
        </div>
        <div className="social-links" style={{ marginTop: '1rem' }}>
          <a href="#" style={{ fontSize: '1.5rem', margin: '0 0.5rem' }}><i className="fab fa-discord"></i></a>
          <a href="#" style={{ fontSize: '1.5rem', margin: '0 0.5rem' }}><i className="fab fa-github"></i></a>
          <a href="#" style={{ fontSize: '1.5rem', margin: '0 0.5rem' }}><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 