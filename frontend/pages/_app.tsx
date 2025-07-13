import "@/styles/globals.css";

export default function LandingPage() {
  return (
    <main>
      {/* Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Club Crecimiento Tecnológico</h1>
          <p>Innovando Hoy para el Crecimiento del Mañana</p>
          <a href="#contacto" className="btn-cta">¡Únete al club!</a>
        </div>
      </section>

      {/* Features */}
      <div className="features-container">
        <div className="feature-card">
          <div className="feature-icon">📚</div>
          <h3>Cursos y Talleres</h3>
          <p>Aprende tecnologías emergentes con expertos</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💻</div>
          <h3>Proyectos Tecnológicos</h3>
          <p>Desarrolla soluciones reales en equipo</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🏆</div>
          <h3>Competencias</h3>
          <p>Participa en hackathones y desafíos</p>
        </div>
      </div>

      {/* Sobre Nosotros */}
      <section className="about-section">
        <h2 className="section-title">Sobre Nosotros</h2>
        <div className="about-grid">
          <div className="about-item">
            <h3>Misión</h3>
            <p>
              Fomentar el desarrollo y la formación de sus miembros en áreas tecnológicas,
              creando espacios de aprendizaje, desarrollo de proyectos y la participación activa
              en actividades tecnológicas tanto dentro como fuera del ámbito universitario.
            </p>
          </div>
          <div className="about-item">
            <h3>Visión</h3>
            <p>
              Convertirse en un referente dentro de la universidad en la formación y promoción
              de tecnologías emergentes, creando una comunidad de estudiantes con habilidades
              competitivas para el mundo laboral y el emprendimiento.
            </p>
          </div>
        </div>
      </section>

      {/* Noticias */}
      <section className="news-section">
        <h2 className="section-title">Últimas Noticias</h2>
        <div className="news-grid">
          <article className="news-card">
            <h3>Inicio de nuevos talleres</h3>
            <p>Mayo 2025</p>
            <a href="#">Leer más →</a>
          </article>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="contact-section">
        <div className="contacto-container">
          <div className="contacto-card">
            <h2 className="section-title">Contacto</h2>
            <div className="contact-grid">
              <form className="contact-form">
                <input type="text" placeholder="Nombre" required />
                <input type="email" placeholder="Email" required />
                <br />
                <textarea placeholder="Mensaje" />
                <button type="submit">Enviar</button>
              </form>
              <div className="contact-info">
                <p>📍 Universidad Alejandro de Humboldt, Sede Dos Caminos, Caracas</p>
                <p>📧 clubcrecimientotecnologico@unihumboldt.edu.ve</p>
                <p>📱 @crecimiento_tecnologico en Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
