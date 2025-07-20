import React from 'react';

const HomeSection = () => {
  const scrollToPlatforms = () => {
    const platformsSection = document.querySelector('.platforms-container');
    if (platformsSection) {
      platformsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="section" style={{ paddingTop: '5rem' }}>
      <div className="main-content">
        <h1 className="main-title">CTHUB</h1>
        <p className="subtitle">Conecta con nuestras plataformas internas, gestiona tu acceso y forma parte de nuestra comunidad tecnológica.</p>
        <button className="cta-button" onClick={scrollToPlatforms}>Comenzar ahora</button>
        <h2 className="section-title">Nuestras Plataformas</h2>
        <div className="platforms-container">
          <div className="platform-card codelink">
            <div className="platform-content">
              <h2>CodeLink</h2>
              <p>Plataforma para desarrolladores y entusiastas de la tecnología donde podrás colaborar en proyectos, resolver desafíos técnicos y aprender nuevas tecnologías.</p>
              <a href="#" className="platform-link">Acceder a CodeLink</a>
            </div>
          </div>
          <div className="platform-card englishclub">
            <div className="platform-content">
              <h2>English Club</h2>
              <p>Comunidad para practicar y mejorar tu inglés técnico con sesiones interactivas, talleres especializados y grupos de conversación.</p>
              <a href="#" className="platform-link">Acceder a English Club</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection; 