import React from 'react';

const Header = ({ toggleTheme, theme }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <span className="logo-icon">▣</span> CTHUB
      </div>
      <nav className="nav-links">
        <button onClick={() => scrollToSection('home')} className="nav-link">Inicio</button>
        <button onClick={() => scrollToSection('about')} className="nav-link">Quiénes Somos</button>
        <button onClick={() => scrollToSection('projects')} className="nav-link">Proyectos</button>
        <button onClick={() => scrollToSection('team')} className="nav-link">Miembros</button>
        <button className="theme-toggle" id="themeToggle" onClick={toggleTheme}>
          <i className="fas fa-palette"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header; 