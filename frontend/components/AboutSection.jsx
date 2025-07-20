import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">Quiénes Somos</h2>
      <div className="about-content">
        <div className="mission-vision">
          <div className="mission">
            <h3>Misión</h3>
            <p>Fomentar el desarrollo y la formación de sus miembros en áreas tecnológicas, proporcionando herramientas, conocimientos y espacios de colaboración para impulsar la innovación y el crecimiento profesional.</p>
          </div>
          <div className="vision">
            <h3>Visión</h3>
            <p>Convertirse en un referente dentro de la universidad en la formación y promoción del talento tecnológico, creando una comunidad que impulse la transformación digital y el desarrollo sostenible.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 