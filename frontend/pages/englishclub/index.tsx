import React, { useState, useEffect } from 'react';
import Head from 'next/head';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const EnglishClub = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('es');
  const [translations] = useState<Translations>({
    en: {
      "header.title": "English Club",
      "header.subtitle": "Universidad Alejandro de Humboldt",
      "menu.home": "Home",
      "menu.about": "About Us",
      "menu.activities": "Activities",
      "menu.gallery": "Gallery",
      "menu.schedule": "Schedule",
      "menu.contact": "Contact",
      "hero.title": "English Club",
      "hero.subtitle": "Don't be afraid to fail. Be afraid not to try",
      "hero.description": "An academic space where students from Universidad Alejandro de Humboldt practice, perfect and master English through dynamic cultural and academic activities with prizes for winners.",
      "hero.btn1": "Upcoming Sessions",
      "hero.btn2": "Learn More",
      "about.title": "About Our Club",
      "about.card1.title": "Who We Are",
      "about.card1.content": "We are an academic community of students committed to excellence in English learning. Our club brings together students from all faculties with a common goal: mastering the English language.",
      "about.card2.title": "Our Mission",
      "about.card2.content": "Promote excellence in English learning through academic, cultural and professional activities that complement university training and prepare our members for global challenges.",
      "about.card3.title": "Methodology",
      "about.card3.content": "We combine academic approaches with innovative practices: formal debates, academic presentations, reading club and professional simulations to develop comprehensive language skills.",
      "testimonial.content": "Practice your English, have fun, and make new friends.",
      "testimonial.author": "Fernando Silva Trejo y Reycer Pimentel",
      "testimonial.role": "Club Founders",
      "activities.title": "Our Activities",
      "activities.card1.title": "Academic Debates",
      "activities.card1.content": "Dynamic sessions where we discuss current global issues, developing argumentation and critical thinking skills in English with prizes for the best debaters.",
      "activities.card2.title": "Reading Club",
      "activities.card2.content": "We analyze literary and academic works in English, improving reading comprehension and specialized vocabulary with interactive sessions.",
      "activities.card3.title": "Conversation Sessions",
      "activities.card3.content": "We prepare and present research and projects in English, simulating international academic conferences with games and dynamic activities.",
      "activities.card4.title": "Language Competitions",
      "activities.card4.content": "Challenges and games in English where participants demonstrate their skills to win prizes and special recognitions.",
      "gallery.title": "Activity Gallery",
      "schedule.info.title": "Regular Meeting Schedule",
      "schedule.info.days": "Tuesdays and Thursdays",
      "schedule.info.time": "12:30 PM - 2:00 PM",
      "schedule.info.description": "Dynamic activities with prizes for outstanding participants",
      "schedule.title": "Upcoming Sessions",
      "schedule.item1.date": "Tuesday<br>",
      "schedule.item1.title": "Pronunciation Workshop with Prizes",
      "schedule.item1.time": "12:30 - 14:00 ",
      "schedule.item1.location": "6th Floor, Engineering Tower",
      "schedule.item2.date": "Thursday<br>",
      "schedule.item2.title": "Conversation Session: Global Culture",
      "schedule.item2.time": "12:30 - 14:00 ",
      "schedule.item2.location": "6th Floor, Engineering Tower",
      "footer.title": "English Club",
      "footer.subtitle": "Universidad Alejandro de Humboldt",
      "footer.program": "Linguistic Competencies Development Program",
      "footer.contact": "Contact",
      "footer.phone": "+58 412 802 1075",
      "footer.address": "6th Floor, Engineering Tower",
      "footer.quicklinks": "Quick Links",
      "footer.copyright": "2025 English Club - Universidad Alejandro de Humboldt. All rights reserved."
    },
    es: {
      "header.title": "English Club",
      "header.subtitle": "Universidad Alejandro de Humboldt",
      "menu.home": "Inicio",
      "menu.about": "Nosotros",
      "menu.activities": "Actividades",
      "menu.gallery": "Galería",
      "menu.schedule": "Calendario",
      "menu.contact": "Contacto",
      "hero.title": "English Club",
      "hero.subtitle": "Don't be afraid to fail. Be afraid not to try",
      "hero.description": "Un espacio académico donde estudiantes de la Universidad Alejandro de Humboldt practican, perfeccionan y dominan el inglés a través de actividades culturales y académicas dinámicas con premios para los ganadores.",
      "hero.btn1": "Próximas Sesiones",
      "hero.btn2": "Conoce más",
      "about.title": "Sobre Nuestro Club",
      "about.card1.title": "Quiénes Somos",
      "about.card1.content": "Somos una comunidad académica de estudiantes comprometidos con la excelencia en el aprendizaje del inglés. Nuestro club reúne a estudiantes de todas las facultades con un objetivo común: dominar el idioma inglés.",
      "about.card2.title": "Nuestra Misión",
      "about.card2.content": "Promover la excelencia en el aprendizaje del inglés a través de actividades académicas, culturales y profesionales que complementen la formación universitaria y preparen a nuestros miembros para desafíos globales.",
      "about.card3.title": "Metodología",
      "about.card3.content": "Combinamos enfoques académicos con prácticas innovadoras: debates formales, presentaciones académicas, club de lectura y simulaciones profesionales para desarrollar competencias lingüísticas integrales.",
      "testimonial.content": "Pon en práctica tu inglés, divirtiéndote y haciendo nuevos amigos.",
      "testimonial.author": "Fernando Silva Trejo y Reycer Pimentel",
      "testimonial.role": "Fundadores del Club",
      "activities.title": "Nuestras Actividades",
      "activities.card1.title": "Debates Académicos",
      "activities.card1.content": "Sesiones dinámicas donde discutimos temas de actualidad global, desarrollando habilidades de argumentación y pensamiento crítico en inglés con premios para los mejores debatientes.",
      "activities.card2.title": "Club de Lectura",
      "activities.card2.content": "Analizamos obras literarias y académicas en inglés, mejorando comprensión lectora y vocabulario especializado con sesiones interactivas.",
      "activities.card3.title": "Sesiones de Conversación",
      "activities.card3.content": "Preparamos y presentamos investigaciones y proyectos en inglés, simulando conferencias académicas internacionales con juegos y actividades dinámicas.",
      "activities.card4.title": "Competiciones Lingüísticas",
      "activities.card4.content": "Desafíos y juegos en inglés donde los participantes demuestran sus habilidades para ganar premios y reconocimientos especiales.",
      "gallery.title": "Galería de Actividades",
      "schedule.info.title": "Horario Regular de Reuniones",
      "schedule.info.days": "Martes y Jueves",
      "schedule.info.time": "12:30 PM - 2:00 PM",
      "schedule.info.description": "Actividades dinámicas con premios para los participantes destacados",
      "schedule.title": "Próximas Sesiones",
      "schedule.item1.date": "Martes<br>",
      "schedule.item1.title": "Taller de Pronunciación con Premios",
      "schedule.item1.time": "12:30 - 14:00 ",
      "schedule.item1.location": "Piso 6, Torre de Ingeniería",
      "schedule.item2.date": "Jueves<br>",
      "schedule.item2.title": "Sesión de Conversación: Cultura Global",
      "schedule.item2.time": "12:30 - 14:00 ",
      "schedule.item2.location": "Piso 6, Torre de Ingeniería",
      "footer.title": "English Club",
      "footer.subtitle": "Universidad Alejandro de Humboldt",
      "footer.program": "Programa de Desarrollo de Competencias Lingüísticas",
      "footer.contact": "Contacto",
      "footer.phone": "+58 412 802 1075",
      "footer.address": "Piso 6, Torre de Ingeniería",
      "footer.quicklinks": "Enlaces Rápidos",
      "footer.copyright": "2025 English Club - Universidad Alejandro de Humboldt. Todos los derechos reservados."
    }
  });

  // Función para obtener texto traducido
  const t = (key: string) => translations[currentLang][key] || translations['es'][key];

  // Cambiar idioma
  const changeLanguage = (lang: string) => {
    setCurrentLang(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  // Scroll suave a secciones
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  // Efectos
  useEffect(() => {
    // Cargar idioma guardado
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language');
      if (savedLang) {
        setCurrentLang(savedLang);
      }
    }
    
    // Observador para animación de tarjetas
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card').forEach(card => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <title>English Club - Universidad Alejandro de Humboldt</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Crimson+Text:wght@400;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      <div className="english-club-container">
        {/* Header */}
        <header className="academic-header">
          <div className="university-brand">
            <div className="university-logo">
              <img src="https://i.pinimg.com/736x/34/c4/1b/34c41bacae631275be93180301c52e40.jpg" alt="UAH Logo" />
            </div>
            <div className="brand-text">
              <h1>{t('header.title')}</h1>
              <p>{t('header.subtitle')}</p>
            </div>
          </div>
          
          <nav className="nav-menu">
            <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}>{t('menu.home')}</a>
            <a href="#nosotros" onClick={(e) => { e.preventDefault(); scrollToSection('nosotros'); }}>{t('menu.about')}</a>
            <a href="#actividades" onClick={(e) => { e.preventDefault(); scrollToSection('actividades'); }}>{t('menu.activities')}</a>
            <a href="#galeria" onClick={(e) => { e.preventDefault(); scrollToSection('galeria'); }}>{t('menu.gallery')}</a>
            <a href="#calendario" onClick={(e) => { e.preventDefault(); scrollToSection('calendario'); }}>{t('menu.schedule')}</a>
            <a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}>{t('menu.contact')}</a>
            
            <div className="language-switcher">
              <button 
                className={`language-btn ${currentLang === 'es' ? 'active' : ''}`} 
                onClick={() => changeLanguage('es')}
              >
                ES
              </button>
              <button 
                className={`language-btn ${currentLang === 'en' ? 'active' : ''}`} 
                onClick={() => changeLanguage('en')}
              >
                EN
              </button>
            </div>
          </nav>
          
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </header>
        
        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-nav-menu">
            <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); }}>{t('menu.home')}</a>
            <a href="#nosotros" onClick={(e) => { e.preventDefault(); scrollToSection('nosotros'); }}>{t('menu.about')}</a>
            <a href="#actividades" onClick={(e) => { e.preventDefault(); scrollToSection('actividades'); }}>{t('menu.activities')}</a>
            <a href="#galeria" onClick={(e) => { e.preventDefault(); scrollToSection('galeria'); }}>{t('menu.gallery')}</a>
            <a href="#calendario" onClick={(e) => { e.preventDefault(); scrollToSection('calendario'); }}>{t('menu.schedule')}</a>
            <a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}>{t('menu.contact')}</a>
          </div>
          <div className="mobile-language-switcher">
            <button 
              className={`mobile-language-btn ${currentLang === 'es' ? 'active' : ''}`} 
              onClick={() => { changeLanguage('es'); setMobileMenuOpen(false); }}
            >
              ES
            </button>
            <button 
              className={`mobile-language-btn ${currentLang === 'en' ? 'active' : ''}`} 
              onClick={() => { changeLanguage('en'); setMobileMenuOpen(false); }}
            >
              EN
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero-section" id="inicio">
          <div className="bubbles" id="bubbles-container"></div>
          <div className="hero-content">
            <h1 className="hero-title">{t('hero.title')}</h1>
            <h2 className="hero-subtitle">{t('hero.subtitle')}</h2>
            <p className="hero-description">{t('hero.description')}</p>
            <div className="btn-container">
              <a href="#calendario" className="btn" onClick={(e) => { e.preventDefault(); scrollToSection('calendario'); }}>
                {t('hero.btn1')}
              </a>
              <a href="#nosotros" className="btn btn-outline" onClick={(e) => { e.preventDefault(); scrollToSection('nosotros'); }}>
                {t('hero.btn2')}
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection t={t} />

        {/* Testimonial Section */}
        <TestimonialSection t={t} />

        {/* Activities Section */}
        <ActivitiesSection t={t} />

        {/* Gallery Section */}
        <GallerySection t={t} />

        {/* Schedule Section */}
        <ScheduleSection t={t} />

        {/* Footer */}
        <FooterSection t={t} />
      </div>
    </>
  );
};

// Componentes separados para cada sección
const AboutSection = ({ t }: { t: (key: string) => string }) => (
  <section className="content-section" id="nosotros">
    <h2 className="section-title">{t('about.title')}</h2>
    
    <div className="features-grid">
      <div className="feature-card">
        <div className="feature-icon">
          <i className="fas fa-users"></i>
        </div>
        <h3>{t('about.card1.title')}</h3>
        <p>{t('about.card1.content')}</p>
      </div>
      
      <div className="feature-card">
        <div className="feature-icon">
          <i className="fas fa-graduation-cap"></i>
        </div>
        <h3>{t('about.card2.title')}</h3>
        <p>{t('about.card2.content')}</p>
      </div>
      
      <div className="feature-card">
        <div className="feature-icon">
          <i className="fas fa-chalkboard-teacher"></i>
        </div>
        <h3>{t('about.card3.title')}</h3>
        <p>{t('about.card3.content')}</p>
      </div>
    </div>
  </section>
);

const TestimonialSection = ({ t }: { t: (key: string) => string }) => (
  <section className="testimonial-section">
    <div className="testimonial-container">
      <div className="testimonial-content">
        {t('testimonial.content')}
      </div>
      <div className="testimonial-author">{t('testimonial.author')}</div>
      <div className="testimonial-role">{t('testimonial.role')}</div>
    </div>
  </section>
);

const ActivitiesSection = ({ t }: { t: (key: string) => string }) => (
  <section className="content-section" id="actividades">
    <h2 className="section-title">{t('activities.title')}</h2>
    
    <div className="features-grid">
      <div className="feature-card">
        <div className="feature-icon">
          <i className="fas fa-comments"></i>
        </div>
        <h3>{t('activities.card1.title')}</h3>
        <p>{t('activities.card1.content')}</p>
      </div>
      
      <div className="feature-card">
        <div className="feature-icon">
          <i className="fas fa-book-reader"></i>
        </div>
        <h3>{t('activities.card2.title')}</h3>
        <p>{t('activities.card2.content')}</p>
      </div>
      
      <div className="feature-card">
        <div className="feature-icon">
          <i className="fas fa-microphone-alt"></i>
        </div>
        <h3>{t('activities.card3.title')}</h3>
        <p>{t('activities.card3.content')}</p>
      </div>
      
      <div className="feature-card">
        <div className="feature-icon">
          <i className="fas fa-trophy"></i>
        </div>
        <h3>{t('activities.card4.title')}</h3>
        <p>{t('activities.card4.content')}</p>
      </div>
    </div>
  </section>
);

const GallerySection = ({ t }: { t: (key: string) => string }) => (
  <section className="gallery-section" id="galeria">
    <h2 className="section-title">{t('gallery.title')}</h2>
    
    <div className="lego-gallery">
      <div 
        className="lego-block medium" 
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/ca/f3/a4/caf3a426907da1516c2ef5ac821af415.jpg')", backgroundPosition: 'center top' }}
      ></div>
      <div 
        className="lego-block small" 
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/fe/37/75/fe37750918e2ef2da277bc5fa43495dc.jpg')", backgroundPosition: 'center center' }}
      ></div>
      <div 
        className="lego-block large" 
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/69/28/82/6928823a3901c65ae2bbc14b64513799.jpg')", backgroundPosition: 'center center' }}
      ></div>
      <div 
        className="lego-block small" 
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/52/e3/08/52e3085d86b3ba10af91533717eb1d9d.jpg')", backgroundPosition: 'center center' }}
      ></div>
      <div 
        className="lego-block large" 
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/84/61/4a/84614aa7f0304941bf929e5a37f2dc29.jpg')", backgroundPosition: 'center center' }}
      ></div>
      <div 
        className="lego-block large" 
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/ba/fa/de/bafade9a58704be73513c81f27611b95.jpg')", backgroundPosition: 'center center' }}
      ></div>
    </div>
  </section>
);

const ScheduleSection = ({ t }: { t: (key: string) => string }) => (
  <section className="schedule-section" id="calendario">
    <div className="schedule-info">
      <h3>{t('schedule.info.title')}</h3>
      <p>
        <span className="schedule-highlight">{t('schedule.info.days')}</span> | 
        <span> {t('schedule.info.time')}</span>
      </p>
      <p>{t('schedule.info.description')}</p>
    </div>
    
    <h2 className="section-title">{t('schedule.title')}</h2>
    
    <div className="schedule-container">
      <div className="schedule-item">
        <div 
          className="schedule-date" 
          dangerouslySetInnerHTML={{ __html: t('schedule.item1.date') }} 
        />
        <div className="schedule-details">
          <h4>{t('schedule.item1.title')}</h4>
          <p>{t('schedule.item1.time')}</p>
          <div className="schedule-location">
            <i className="fas fa-map-marker-alt"></i>
            <span>{t('schedule.item1.location')}</span>
          </div>
        </div>
      </div>
      
      <div className="schedule-item">
        <div 
          className="schedule-date" 
          dangerouslySetInnerHTML={{ __html: t('schedule.item2.date') }} 
        />
        <div className="schedule-details">
          <h4>{t('schedule.item2.title')}</h4>
          <p>{t('schedule.item2.time')}</p>
          <div className="schedule-location">
            <i className="fas fa-map-marker-alt"></i>
            <span>{t('schedule.item2.location')}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FooterSection = ({ t }: { t: (key: string) => string }) => (
  <footer className="academic-footer" id="contacto">
    <div className="footer-content">
      <div className="footer-column">
        <h3>{t('footer.title')}</h3>
        <p>{t('footer.subtitle')}</p>
        <p>{t('footer.program')}</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      
      <div className="footer-column">
        <h3>{t('footer.contact')}</h3>
        <ul className="footer-links">
          <li>
            <a href="mailto:englishclub@uah.edu.ve">
              <i className="fas fa-envelope"></i> 
              <span>englishclub@uah.edu.ve</span>
            </a>
          </li>
          <li>
            <a href="tel:+584128021075">
              <i className="fas fa-phone"></i> 
              <span>{t('footer.phone')}</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-map-marker-alt"></i> 
              <span>{t('footer.address')}</span>
            </a>
          </li>
        </ul>
      </div>
      
      <div className="footer-column">
        <h3>{t('footer.quicklinks')}</h3>
        <ul className="footer-links">
          <li>
            <a href="#inicio">
              <i className="fas fa-chevron-right"></i> 
              <span>{t('menu.home')}</span>
            </a>
          </li>
          <li>
            <a href="#nosotros">
              <i className="fas fa-chevron-right"></i> 
              <span>{t('menu.about')}</span>
            </a>
          </li>
          <li>
            <a href="#actividades">
              <i className="fas fa-chevron-right"></i> 
              <span>{t('menu.activities')}</span>
            </a>
          </li>
          <li>
            <a href="#calendario">
              <i className="fas fa-chevron-right"></i> 
              <span>{t('menu.schedule')}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="copyright">
      &copy; <span>{t('footer.copyright')}</span>
    </div>
  </footer>
);

export default EnglishClub;
