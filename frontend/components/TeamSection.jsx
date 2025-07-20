import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    { name: "Carlos Williams", role: "Coordinador de Proyectos" },
    { name: "Gabriel Rodríguez", role: "Presidente" },
    { name: "Gabriel Romay", role: "Coordinador de Proyectos" },
    { name: "David", role: "Vicepresidente" },
  ];

  return (
    <section id="team" className="section">
      <h2 className="section-title">Nuestro Equipo</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="member" key={index}>
            <h4>{member.name}</h4>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection; 