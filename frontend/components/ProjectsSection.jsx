import React from 'react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Proyectos</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>CodeLink</h3>
          <p>Plataforma de desarrollo colaborativo donde los miembros pueden compartir proyectos, resolver problemas técnicos y aprender nuevas tecnologías.</p>
        </div>
        <div className="project-card">
          <h3>English Club</h3>
          <p>Plataforma del Club de Ingles: Espacio para practicar y mejorar habilidades en inglés técnico a través de sesiones interactivas, talleres y grupos de conversación.</p>
        </div>
        <div className="project-card">
          <h3>Hackathon CTHUB</h3>
          <p>Eventos Semestrales, reune a talentos tecnológicos para desarrollar soluciones innovadoras en trabajo intensivo.</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 