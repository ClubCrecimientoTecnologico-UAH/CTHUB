import React, { useState, useEffect, useMemo } from 'react';
import Head from 'next/head';
import { fetchCourses } from '../../api/courses';

// Agregado consulta al back y generacion de array de cursos segun lo que exista en la DB | David Diaz

interface FormattedCourse {
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students: string;
  image: string;
}

export const getFormattedCourses = async (): Promise<Record<number, FormattedCourse>> => {
  try {
    const courses = await fetchCourses();
    
    // Transformar los datos al formato deseado
    const formattedCourses: Record<number, FormattedCourse> = {};
    
    courses.forEach((course, index) => {
      const courseNumber = index + 1; // Para que empiece en 1 en lugar de 0
      
      formattedCourses[courseNumber] = {
        title: course.title,
        description: course.description,
        instructor: course.instructor_name || 'Instructor no asignado',
        duration: `${course.duration} horas`,
        students: `${course.students} estudiantes`,
        image: course.image
      };
    });
    
    return formattedCourses;
  } catch (error) {
    console.error('Error al obtener y formatear los cursos:', error);
    throw error;
  }
};

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [courseInput, setCourseInput] = useState('');
  const [resourceInput, setResourceInput] = useState<string>('');
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [selectedResource, setSelectedResource] = useState<any>(null);
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  

  // MRC PERSONA IV ES INCREIBLE WN
  // Agreed con el comentario de arriba (No he jugado ningun persona) Att. David Diaz

  // Datos de los cursos
  // Cambiado de un array quemado a un llamado a una funcion para generar array dinamicamente | David Diaz

  const [courses, setCourses] = useState<Record<number, FormattedCourse>>({});

  useEffect(() => {
    getFormattedCourses()
      .then(setCourses)
      .catch(console.error);
  }, []);

  // Datos de recursos
  const resources = {
    1: {
      title: "Inspiración",
      items: [
        {name: "Mobbin.design", url: "https://mobbin.design"},
        {name: "Layers.to", url: "https://layers.to"},
        {name: "Dribble.com", url: "https://dribble.com"},
        {name: "NicelyDone.club", url: "https://nicelydone.club"},
        {name: "Awwwards.com", url: "https://awwwards.com"},
        {name: "SiteInspire.com", url: "https://siteinspire.com"}
      ]
    },
    2: {
      title: "Fuentes",
      items: [
        {name: "Google Fonts", url: "https://fonts.google.com"},
        {name: "Fontesk.com", url: "https://fontesk.com"},
        {name: "FontShare.com", url: "https://fontshare.com"},
        {name: "FontSpace.com", url: "https://fontspace.com"},
        {name: "DaFont.com", url: "https://dafont.com"},
        {name: "FontSquirrel.com", url: "https://fontsquirrel.com"}
      ]
    },
    3: {
      title: "Mockups",
      items: [
        {name: "Is.Graphics", url: "https://is.graphics"},
        {name: "Animockups.com", url: "https://animockups.com"},
        {name: "Nappy.co", url: "https://nappy.co/all-hands"},
        {name: "Freepik.com", url: "https://freepik.com"},
        {name: "MockupWorld.co", url: "https://mockupworld.co"},
        {name: "GraphicBurger.com", url: "https://graphicburger.com"}
      ]
    },
    4: {
      title: "Iconos",
      items: [
        {name: "Iconsax.io", url: "https://iconsax.io"},
        {name: "Iconly.pro", url: "https://iconly.pro"},
        {name: "NounProject.com", url: "https://thenounproject.com"},
        {name: "Flaticon.com", url: "https://flaticon.com"},
        {name: "IconScout.com", url: "https://iconscout.com"},
        {name: "FeatherIcons.com", url: "https://feathericons.com"}
      ]
    },
    5: {
      title: "Imágenes",
      items: [
        {name: "Unsplash.com", url: "https://unsplash.com"},
        {name: "Pixabay.com", url: "https://pixabay.com"},
        {name: "Pexels.com", url: "https://pexels.com"},
        {name: "Burst.Shopify", url: "https://burst.shopify.com"},
        {name: "Gratisography.com", url: "https://gratisography.com"},
        {name: "Reshot.com", url: "https://reshot.com"}
      ]
    },
    6: {
      title: "Juegos",
      items: [
        {name: "GameMaker.com", url: "https://gamemaker.com"},
        {name: "Unity.com", url: "https://unity.com"},
        {name: "RPGMakerWeb.com", url: "https://rpgmakerweb.com"},
        {name: "GodotEngine.org", url: "https://godotengine.org"},
        {name: "UnrealEngine.com", url: "https://unrealengine.com"},
        {name: "CryEngine.com", url: "https://cryengine.com"}
      ]
    }
  };

  // Manejar la selección de sección
  const showSection = (section: string | null) => {
    setActiveSection(section);
    setSelectedCourse(null);
    setSelectedResource(null);
    setMobileNavActive(false);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // seleccion de cursos 
  const showCourseInfo = (courseId: number) => {
    setSelectedCourse(courses[courseId as keyof typeof courses]);
    setCourseInput(courseId.toString());
  };

  
  const showResourceInfo = (resourceId: number) => {
    setSelectedResource(resources[resourceId as keyof typeof resources]);
    setResourceInput(resourceId.toString());
  };

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormMessage("Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.");
    
    setTimeout(() => {
      setFormMessage("Gracias por contactarnos. Hemos recibido tu mensaje.");
    }, 2000);
    
    // Resetear formulario
    e.currentTarget.reset();
  };

  // Toggle mobile nav
  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive);
  };

  // Asegurar que el estado inicial sea correcto
  useEffect(() => {
    setActiveSection(null);
  }, []);

  // Event listeners para teclado y terminales - Simplificado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeSection === 'courses' && e.key >= '1' && e.key <= '6') {
        showCourseInfo(parseInt(e.key));
        setCourseInput(e.key);
      } else if (activeSection === 'resources' && e.key >= '1' && e.key <= '6') {
        showResourceInfo(parseInt(e.key));
        setResourceInput(e.key);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  // eventos para terminales xd
  useEffect(() => {
    const handleTerminalClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('terminal-line') && target.classList.contains('option')) {
        const value = target.getAttribute('data-value');
        if (value) {
          if (activeSection === 'courses') {
            showCourseInfo(parseInt(value));
            setCourseInput(value);
          } else if (activeSection === 'resources') {
            showResourceInfo(parseInt(value));
            setResourceInput(value);
          }
        }
      }
    };

    document.addEventListener('click', handleTerminalClick);
    return () => document.removeEventListener('click', handleTerminalClick);
  }, [activeSection]);

  // Input numérico para móvil - Separado
  useEffect(() => {
    const numericInput = document.getElementById('numericInput') as HTMLInputElement;
    if (!numericInput) return;

    const handleNumericInput = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const value = target.value;
      if (value && parseInt(value) >= 1 && parseInt(value) <= 6) {
        if (activeSection === 'courses') {
          showCourseInfo(parseInt(value));
          setCourseInput(value);
        } else if (activeSection === 'resources') {
          showResourceInfo(parseInt(value));
          setResourceInput(value);
        }
      }
      target.value = '';
    };
    
    numericInput.addEventListener('input', handleNumericInput);
    return () => numericInput.removeEventListener('input', handleNumericInput);
  }, [activeSection]);

  return (
    <>
      <Head>
        <title>CodeLink - Conectando Talentos Tecnológicos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Orbitron:wght@400;600;700&family=Press+Start+2P&family=Nunito:wght@400;600;700&family=Montserrat:wght@400;600;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div className="codelink-page">
        <ArtParticles />
        
        {/* Iconos de prueba directos */}
        <div style={{
          position: 'fixed',
          top: '50px',
          left: '50px',
          fontSize: '3rem',
          color: '#f7df1e',
          zIndex: -1,
          animation: 'float 10s infinite ease-in-out'
        }}>
          <i className="fab fa-js-square"></i>
        </div>
        <div style={{
          position: 'fixed',
          top: '150px',
          right: '100px',
          fontSize: '3rem',
          color: '#3776ab',
          zIndex: -1,
          animation: 'float 12s infinite ease-in-out'
        }}>
          <i className="fab fa-python"></i>
        </div>
        <div style={{
          position: 'fixed',
          bottom: '100px',
          left: '200px',
          fontSize: '3rem',
          color: '#61dafb',
          zIndex: -1,
          animation: 'float 15s infinite ease-in-out'
        }}>
          <i className="fab fa-react"></i>
        </div>
        
        
        {/* Esto activa el teclado movil */}
        <input type="number" id="numericInput" className="numeric-keyboard-activator" />
        
        <Header showSection={showSection} toggleMobileNav={toggleMobileNav} />
        <MobileNav showSection={showSection} active={mobileNavActive} toggleMobileNav={toggleMobileNav} />
        

        
        {/* Esto es para el renderizado */}
        {activeSection === null && (
          <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 5%',
            position: 'relative',
            paddingTop: '80px',
            background: 'radial-gradient(circle at top right, rgba(0, 255, 106, 0.1), transparent 30%)',
            zIndex: 1,
            color: 'white'
          }}>
            <div style={{
              maxWidth: '600px',
              zIndex: 10,
              position: 'relative',
              paddingRight: '15px'
            }}>
              <h1 style={{
                fontFamily: 'Josefin Sans, Arial, sans-serif',
                fontWeight: 600,
                fontSize: '3.2rem',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
                background: 'linear-gradient(45deg, #00f6ff, #00ff6a, #ffdd00)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                letterSpacing: '2px',
                display: 'block',
                textAlign: 'center',
                textTransform: 'uppercase',
                animation: 'rotateAndColor 4s infinite ease-in-out, neonGlow 2s infinite ease-in-out'
              }}>CodeLink!</h1>
              <div style={{
                fontFamily: 'Press Start 2P, cursive',
                fontSize: '1.5rem',
                marginBottom: '2rem',
                color: 'white',
                textShadow: '0 0 5px #fff, 0 0 10px #00f6ff, 0 0 15px #00ff6a',
                letterSpacing: '1px',
                lineHeight: 1.6,
                fontWeight: 400,
                textAlign: 'center'
              }}>CONECTANDO TALENTOS TECNOLÓGICOS</div>
              <p style={{
                fontSize: '1.2rem',
                marginBottom: '2.5rem',
                opacity: 0.9,
                lineHeight: 1.8,
                color: 'white',
                textAlign: 'center'
              }}>La plataforma definitiva para programadores que buscan mostrar su trabajo y empresas que buscan talento. Únete a la revolución tecnológica.</p>
              <div style={{
                display: 'flex',
                marginTop: '2rem',
                maxWidth: '500px',
                boxShadow: '0 0 20px rgba(0, 246, 255, 0.3)',
                borderRadius: '50px',
                background: 'rgba(25, 25, 45, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}>
                <input placeholder="Buscar programadores, tecnologías o proyectos..." type="text" style={{
                  flex: 1,
                  padding: '1rem 1.8rem',
                  border: 'none',
                  borderRadius: '50px 0 0 50px',
                  background: 'transparent',
                  color: 'white',
                  fontSize: '1rem'
                }}/>
                <button style={{
                  padding: '1rem 2rem',
                  borderRadius: '0 50px 50px 0',
                  border: 'none',
                  background: '#00f6ff',
                  color: '#0f0f1f',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}><i className="fas fa-search"></i> Buscar</button>
              </div>
              <div style={{
                display: 'flex',
                gap: '1rem',
                marginTop: '2.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <a href="#" style={{
                  flex: '1',
                  minWidth: '200px',
                  maxWidth: '250px',
                  padding: '0.6rem 1.5rem',
                  borderRadius: '50px',
                  background: 'linear-gradient(45deg, #00f6ff, #00ff6a)',
                  color: 'white',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 0 15px #00f6ff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <i className="fas fa-user-plus"></i> Registrarse
                </a>
                <a href="#" style={{
                  flex: '1',
                  minWidth: '200px',
                  maxWidth: '250px',
                  padding: '0.6rem 1.5rem',
                  borderRadius: '50px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <i className="fas fa-sign-in-alt"></i> Ingresar
                </a>
              </div>
            </div>
            <img src="https://i.pinimg.com/736x/49/80/1b/49801b4e50af5338c113bc79c6c30ceb.jpg" alt="Programador trabajando" style={{
              maxWidth: '500px',
              width: '100%',
              height: 'auto',
              borderRadius: '20px',
              boxShadow: '0 0 50px #00f6ff',
              border: '3px solid #00f6ff',
              zIndex: 5
            }}/>
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              fontSize: '0.9rem',
              opacity: 0.7,
              fontFamily: 'Arial, sans-serif',
              textTransform: 'lowercase',
              color: 'rgba(255, 255, 255, 0.7)',
              letterSpacing: '0.5px',
              zIndex: 10
            }}>
              <p>© 2025 CodeLink - Comunidad de Programadores | Todos los derechos reservados</p>
            </div>
          </div>
        )}
        {activeSection === 'programmers' && <ProgrammersSection />}
        {activeSection === 'courses' && (
          <CoursesSection 
            showCourseInfo={showCourseInfo} 
            courseInput={courseInput} 
            selectedCourse={selectedCourse} 
          />
        )}
        {activeSection === 'resources' && (
          <ResourcesSection 
            showResourceInfo={showResourceInfo} 
            resourceInput={resourceInput} 
            selectedResource={selectedResource} 
          />
        )}
        {activeSection === 'blog' && <BlogSection />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'contact' && (
          <ContactSection 
            handleSubmit={handleSubmit} 
            formMessage={formMessage} 
          />
        )}
        

      </div>
    </>
  );
}

// Componente de partículas decorativas
const ArtParticles = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const ICON_COUNT = isMobile ? 12 : 30;
  const COLS = Math.ceil(Math.sqrt(ICON_COUNT * (16/9)));
  const ROWS = Math.ceil(ICON_COUNT / COLS);
  const icons = [
    { class: 'fas fa-bug', color: '#00f6ff', name: 'Bug' },
    { class: 'fab fa-python', color: '#3776ab', name: 'Python' },
    { class: 'fab fa-java', color: '#ed8b00', name: 'Java' },
    { class: 'fab fa-react', color: '#61dafb', name: 'React' },
    { class: 'fab fa-node-js', color: '#339933', name: 'Node' },
    { class: 'fab fa-html5', color: '#e34f26', name: 'HTML' },
    { class: 'fab fa-css3-alt', color: '#1572b6', name: 'CSS' },
    { class: 'fab fa-git-alt', color: '#f05032', name: 'Git' },
    { class: 'fab fa-docker', color: '#2496ed', name: 'Docker' },
    { class: 'fab fa-aws', color: '#ff9900', name: 'AWS' },
    { class: 'fab fa-php', color: '#777bb4', name: 'PHP' },
    { class: 'fab fa-swift', color: '#fa7343', name: 'Swift' },
    { class: 'fab fa-android', color: '#3ddc84', name: 'Android' },
    { class: 'fab fa-apple', color: '#000000', name: 'iOS' },
    { class: 'fab fa-vuejs', color: '#4fc08d', name: 'Vue' },
    { class: 'fab fa-angular', color: '#dd0031', name: 'Angular' },
    { class: 'fab fa-sass', color: '#cf649a', name: 'Sass' },
    { class: 'fab fa-bootstrap', color: '#7952b3', name: 'Bootstrap' },
    { class: 'fab fa-wordpress', color: '#21759b', name: 'WP' },
    { class: 'fas fa-code', color: '#00f6ff', name: 'Code' },
    { class: 'fas fa-laptop-code', color: '#00ff6a', name: 'Dev' },
    { class: 'fas fa-microchip', color: '#ffdd00', name: 'Chip' },
    { class: 'fas fa-server', color: '#ff6b6b', name: 'Server' },
    { class: 'fas fa-database', color: '#4ecdc4', name: 'DB' },
    { class: 'fas fa-terminal', color: '#45b7d1', name: 'Term' },
    { class: 'fas fa-bug', color: '#96ceb4', name: 'Bug2' },
    { class: 'fas fa-robot', color: '#feca57', name: 'Bot' },
    { class: 'fas fa-brain', color: '#ff9ff3', name: 'AI' }
  ];
  const particles = useMemo(() => {
    const arr = [];
    let usedCells = new Set();
    for (let i = 0; i < ICON_COUNT; i++) {
      // Distribución en cuadrícula
      let cell;
      do {
        const col = Math.floor(i % COLS);
        const row = Math.floor(i / COLS);
        cell = `${col},${row}`;
      } while (usedCells.has(cell));
      usedCells.add(cell);
      const [col, row] = cell.split(',').map(Number);
      // Jitter aleatorio para naturalidad
      const jitterX = (Math.random() - 0.5) * (100 / COLS) * 0.5;
      const jitterY = (Math.random() - 0.5) * (100 / ROWS) * 0.5;
      const left = (col + 0.5) * (100 / COLS) + jitterX;
      const top = (row + 0.5) * (100 / ROWS) + jitterY;
      // Tamaño limitado
      const size = Math.random() * 1.2 + 1.8; // 1.8rem - 3rem
      const icon = icons[Math.floor(Math.random() * icons.length)];
      // Animación personalizada
      const amplitude = Math.random() * 18 + 8; // 8-26 px
      const direction = Math.random() > 0.5 ? 1 : -1;
      const duration = Math.random() * 8 + 12; // 12-20s
      const delay = Math.random() * 8;
      arr.push({
        ...icon,
        size,
        left,
        top,
        amplitude,
        direction,
        duration,
        delay,
        key: `particle-${i}`
      });
    }
    return arr;
  }, [ICON_COUNT, COLS, ROWS]);
  if (!mounted) return null;
  return (
    <div className="art-particles" id="artParticles">
      {/* SVG flotante de JavaScript (Simple Icons) */}
      <svg
        viewBox="0 0 32 32"
        width="60"
        height="60"
        style={{
          position: 'absolute',
          left: '20vw',
          top: '60vh',
          zIndex: 1,
          opacity: 0.7,
          filter: 'drop-shadow(0 0 10px #f7df1e)',
          animation: 'floatLanguage 18s infinite ease-in-out',
        }}
      >
        <circle cx="16" cy="16" r="16" fill="#f7df1e" />
        <text x="16" y="22" textAnchor="middle" fontSize="16" fontFamily="Arial Black,Arial,sans-serif" fill="#222">JS</text>
      </svg>
      {particles.map(p => (
        <i
          key={p.key}
          className={p.class}
          style={{
            position: 'absolute',
            left: `${p.left}%`,
            top: `${p.top}%`,
            fontSize: `${p.size}rem`,
            color: p.color,
            opacity: 0.8,
            filter: `drop-shadow(0 0 10px ${p.color})`,
            zIndex: 1,
            pointerEvents: 'none',
            animation: `particle-move-${p.key} ${p.duration}s infinite ease-in-out`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      <style>{`
        ${particles.map(p => `
          @keyframes particle-move-${p.key} {
            0% { transform: translate(0, 0); }
            25% { transform: translate(${p.amplitude * p.direction}px, ${-p.amplitude}px); }
            50% { transform: translate(0, ${-p.amplitude * 1.2}px); }
            75% { transform: translate(${-p.amplitude * p.direction}px, ${-p.amplitude}px); }
            100% { transform: translate(0, 0); }
          }
        `).join('')}
      `}</style>
    </div>
  );
};

// Componente de encabezado
const Header = ({ showSection, toggleMobileNav }: { showSection: (section: string | null) => void; toggleMobileNav: () => void }) => (
  <header>
    <a className="logo" href="#" onClick={(e) => { e.preventDefault(); showSection(null); }}>
      <i className="fas fa-code"></i>Code<span>Link</span>
    </a>
    <button className="mobile-menu-btn" onClick={toggleMobileNav}>
      <i className="fas fa-bars"></i>
    </button>
    <nav>
      <ul>
        <li><a href="#" onClick={(e) => { e.preventDefault(); showSection(null); }}><i className="fas fa-home"></i> Inicio</a></li>
        <li><a href="#" onClick={(e) => { e.preventDefault(); showSection('programmers'); }}><i className="fas fa-users"></i> Programadores</a></li>
        <li><a href="#" onClick={(e) => { e.preventDefault(); showSection('courses'); }}><i className="fas fa-graduation-cap"></i> Cursos</a></li>
        <li><a href="#" onClick={(e) => { e.preventDefault(); showSection('resources'); }}><i className="fas fa-toolbox"></i> Recursos</a></li>
        <li><a href="#" onClick={(e) => { e.preventDefault(); showSection('blog'); }}><i className="fas fa-blog"></i> Blog</a></li>
        <li><a href="#" onClick={(e) => { e.preventDefault(); showSection('about'); }}><i className="fas fa-info-circle"></i> Sobre</a></li>
        <li><a href="#" onClick={(e) => { e.preventDefault(); showSection('contact'); }}><i className="fas fa-envelope"></i> Contacto</a></li>
      </ul>
    </nav>
    <div className="user-actions">
      <div className="notification-bell">
        <i className="fas fa-bell"></i>
        <span className="notification-count">3</span>
      </div>
      <div className="user-profile">
        <img alt="Usuario" className="user-avatar" src="https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg"/>
        <div className="user-name">DevUser</div>
      </div>
      <a className="cta-button" href="#"><i className="fas fa-plus"></i> Portafolio</a>
    </div>
  </header>
);

// Componente de navegación móvil
const MobileNav = ({ showSection, active, toggleMobileNav }: { showSection: (section: string | null) => void; active: boolean; toggleMobileNav: () => void }) => (
  <div className={`mobile-nav ${active ? 'active' : ''}`} id="mobileNav">
    <button className="close-btn" onClick={toggleMobileNav}>
      <i className="fas fa-times"></i>
    </button>
    <ul>
      <li><a href="#" onClick={(e) => { e.preventDefault(); showSection(null); }}><i className="fas fa-home"></i> Inicio</a></li>
      <li><a href="#" onClick={(e) => { e.preventDefault(); showSection('programmers'); }}><i className="fas fa-users"></i> Programadores</a></li>
      <li><a href="#" onClick={(e) => { e.preventDefault(); showSection('courses'); }}><i className="fas fa-graduation-cap"></i> Cursos</a></li>
      <li><a href="#" onClick={(e) => { e.preventDefault(); showSection('resources'); }}><i className="fas fa-toolbox"></i> Recursos</a></li>
      <li><a href="#" onClick={(e) => { e.preventDefault(); showSection('blog'); }}><i className="fas fa-blog"></i> Blog</a></li>
      <li><a href="#" onClick={(e) => { e.preventDefault(); showSection('about'); }}><i className="fas fa-info-circle"></i> Sobre</a></li>
      <li><a href="#" onClick={(e) => { e.preventDefault(); showSection('contact'); }}><i className="fas fa-envelope"></i> Contacto</a></li>
    </ul>
    <div style={{marginTop: '2rem', textAlign: 'center'}}>
      <a className="cta-button" href="#" style={{display: 'inline-block', marginTop: '1rem'}}>
        <i className="fas fa-plus"></i> Portafolio
      </a>
    </div>
  </div>
);

// Componente Hero
const Hero = ({ showSection }: { showSection: (section: string | null) => void }) => (
  <section className="hero" id="heroSection" style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 5%', position: 'relative', overflow: 'hidden', paddingTop: '80px', background: 'radial-gradient(circle at top right, rgba(0, 255, 106, 0.1), transparent 30%)', zIndex: 1}}>
    <div className="hero-content" style={{maxWidth: '600px', zIndex: 10, position: 'relative', paddingRight: '30px', color: 'white'}}>
      <h1 className="hero-title" style={{fontFamily: 'Press Start 2P, cursive', fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '1.5rem', background: 'linear-gradient(45deg, #00f6ff, #00ff6a, #ffdd00)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', letterSpacing: '2px', display: 'inline-block', textTransform: 'uppercase'}}>CodeLink!</h1>
      <div className="hero-subtitle" style={{fontFamily: 'Press Start 2P, cursive', fontSize: '1.5rem', marginBottom: '2rem', color: 'white', textShadow: '0 0 5px #fff, 0 0 10px #00f6ff, 0 0 15px #00ff6a', letterSpacing: '1px', lineHeight: 1.6, fontWeight: 400}}>CONECTANDO TALENTOS TECNOLÓGICOS</div>
      <p style={{fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9, lineHeight: 1.8, color: 'white'}}>La plataforma definitiva para programadores que buscan mostrar su trabajo y empresas que buscan talento. Únete a la revolución tecnológica.</p>
      <div className="search-bar" style={{display: 'flex', marginTop: '2rem', maxWidth: '500px', boxShadow: '0 0 20px rgba(0, 246, 255, 0.3)', borderRadius: '50px', background: 'rgba(25, 25, 45, 0.8)', border: '1px solid rgba(255, 255, 255, 0.15)'}}>
        <input placeholder="Buscar programadores, tecnologías o proyectos..." type="text" style={{flex: 1, padding: '1rem 1.8rem', border: 'none', borderRadius: '50px 0 0 50px', background: 'transparent', color: 'white', fontSize: '1rem'}}/>
        <button style={{padding: '1rem 2rem', borderRadius: '0 50px 50px 0', border: 'none', background: '#00f6ff', color: '#0f0f1f', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><i className="fas fa-search"></i> Buscar</button>
      </div>
      <div style={{display: 'flex', gap: '1rem', marginTop: '2.5rem', justifyContent: 'center', flexWrap: 'wrap'}}>
        <a className="cta-button" href="#" style={{flex: '1', minWidth: '200px', maxWidth: '250px', padding: '0.6rem 1.5rem', borderRadius: '50px', background: 'linear-gradient(45deg, #00f6ff, #00ff6a)', color: 'white', fontWeight: 600, textDecoration: 'none', border: 'none', cursor: 'pointer', boxShadow: '0 0 15px #00f6ff', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          <i className="fas fa-user-plus"></i> Registrarse
        </a>
        <a className="cta-button" href="#" style={{flex: '1', minWidth: '200px', maxWidth: '250px', padding: '0.6rem 1.5rem', borderRadius: '50px', background: 'rgba(255, 255, 255, 0.1)', color: 'white', fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(255, 255, 255, 0.3)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          <i className="fas fa-sign-in-alt"></i> Ingresar
        </a>
      </div>
    </div>
    <img src="https://i.pinimg.com/736x/49/80/1b/49801b4e50af5338c113bc79c6c30ceb.jpg" alt="Programador trabajando" className="hero-image" style={{maxWidth: '500px', width: '100%', height: 'auto', borderRadius: '20px', boxShadow: '0 0 50px #00f6ff', border: '3px solid #00f6ff', zIndex: 5}}/>
    <div className="hero-footer" style={{position: 'absolute', bottom: '20px', left: '20px', fontSize: '0.9rem', opacity: 0.7, fontFamily: 'Arial, sans-serif', textTransform: 'lowercase', color: 'rgba(255, 255, 255, 0.7)', letterSpacing: '0.5px', zIndex: 10}}>
      <p>© 2025 CodeLink - Comunidad de Programadores | Todos los derechos reservados</p>
    </div>
  </section>
);

// Componente de Programadores
const ProgrammersSection = () => {
  const programmers = [
    {
      name: "CARLOS RODRÍGUEZ",
      username: "@crodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      portfolio: "Desarrollador Full Stack con 5 años de experiencia. Especializado en JavaScript, React y Node.js.",
      skills: ["JAVASCRIPT", "REACT", "NODE.JS", "EXPRESS", "MONGODB"]
    },
    {
      name: "MARÍA GONZÁLEZ",
      username: "@mgonzalez",
      avatar: "https://i.pinimg.com/736x/35/f3/08/35f308c88e0855cb3304a1bd51823622.jpg",
      portfolio: "Desarrolladora Frontend especializada en Vue.js y diseño de interfaces de usuario.",
      skills: ["VUE.JS", "CSS3", "HTML5", "SASS", "FIGMA"]
    },
    {
      name: "ALEJANDRO MARTÍNEZ",
      username: "@amartinez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      portfolio: "Desarrollador Backend con experiencia en Python, Django y bases de datos relacionales.",
      skills: ["PYTHON", "DJANGO", "POSTGRESQL", "DOCKER", "AWS"]
    },
    {
      name: "SOFÍA LÓPEZ",
      username: "@slopez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      portfolio: "Desarrolladora móvil especializada en React Native y Flutter para aplicaciones multiplataforma.",
      skills: ["REACT NATIVE", "FLUTTER", "DART", "FIREBASE", "REDUX"]
    }
  ];

  return (
    <section className="section-container active" id="programmersSection">
      <h2 className="section-title" style={{
        fontFamily: 'Josefin Sans, Arial, sans-serif',
        fontWeight: 500,
        fontSize: '2.1rem',
        marginBottom: '2.5rem',
        textAlign: 'center',
        background: 'linear-gradient(45deg, #00ff6a, #00f6ff)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        textShadow: '0 0 20px rgba(0, 255, 106, 0.3)',
        position: 'relative',
        paddingBottom: '1rem'
      }}>Programadores Destacados</h2>
      <div className="programmers-container">
        {programmers.map((programmer, index) => (
          <div className="programmer-card" key={index}>
            <div className="programmer-header">
              <img src={programmer.avatar} alt={programmer.name} className="programmer-avatar"/>
              <div className="programmer-info">
                <h3 className="programmer-name">{programmer.name}</h3>
                <div className="programmer-username">{programmer.username}</div>
              </div>
            </div>
            <div className="programmer-portfolio">{programmer.portfolio}</div>
            <div className="programmer-skills">
              {programmer.skills.map((skill, i) => (
                <span className="skill-tag" key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Componente de Cursos
const CoursesSection = ({ showCourseInfo, courseInput, selectedCourse }: { 
  showCourseInfo: (courseId: number) => void; 
  courseInput: string; 
  selectedCourse: any 
}) => {
  const [courses, setCourses] = useState<Record<number, FormattedCourse>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await getFormattedCourses();
        setCourses(data);
      } catch (err) {
        setError('Error al cargar los cursos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  if (loading) {
    return (
      <section className="section-container active" id="coursesSection">
        <h2 className="section-title">Cursos Destacados</h2>
        <div className="loading-message">Cargando cursos...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section-container active" id="coursesSection">
        <h2 className="section-title">Cursos Destacados</h2>
        <div className="error-message">{error}</div>
      </section>
    );
  }

  return (
    <section className="section-container active" id="coursesSection">
      <h2 className="section-title" style={{
        fontFamily: 'Josefin Sans, Arial, sans-serif',
        fontWeight: 500,
        fontSize: '2.1rem',
        marginBottom: '2.5rem',
        textAlign: 'center',
        background: 'linear-gradient(45deg, #00ff6a, #00f6ff)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        textShadow: '0 0 20px rgba(0, 255, 106, 0.3)',
        position: 'relative',
        paddingBottom: '1rem'
      }}>Cursos Destacados</h2>
    
      <div className="terminal-panel-container">
        <div className="terminal-container">
          <div className="terminal-header">
            <div className="terminal-title">code-resources.exe</div>
            <div className="terminal-controls">
              <div className="terminal-control close"></div>
              <div className="terminal-control minimize"></div>
              <div className="terminal-control maximize"></div>
            </div>
          </div>
          <div className="terminal-content">
            <div className="terminal-line">{'>'} Bienvenido al sistema de recursos educativos</div>
            <div className="terminal-line">{'>'} Selecciona un curso para ver más detalles:</div>
            <div className="terminal-line">{'>'} </div>
            
            {Object.entries(courses).map(([id, course]) => (
              <div 
                key={id}
                className="terminal-line option" 
                data-value={id}
                onClick={() => showCourseInfo(Number(id))}
              >
                {`> [${id}] ${course.title}`}
              </div>
            ))}
            
            <div className="terminal-line">{'>'} </div>
            <div className="terminal-line">{'>'} Ingresa el número del curso: <span className="terminal-cursor">{courseInput || ''}</span></div>
          </div>
          <div className="scanline"></div>
        </div>
        
        <div className="info-panel" id="courseInfo">
          {selectedCourse ? (
            <div className="info-panel-content">
              <h3 className="info-panel-title">{selectedCourse.title}</h3>
              <img src={selectedCourse.image} alt={selectedCourse.title} className="course-image"/>
              <p className="info-panel-description">{selectedCourse.description}</p>
              <ul className="info-panel-list">
                <li><i className="fas fa-chalkboard-teacher"></i> Instructor: {selectedCourse.instructor}</li>
                <li><i className="fas fa-clock"></i> Duración: {selectedCourse.duration}</li>
                <li><i className="fas fa-user-graduate"></i> Estudiantes: {selectedCourse.students}</li>
                <li><i className="fas fa-play-circle"></i> <a href="#" style={{color: 'var(--secondary)'}}>Ver curso completo</a></li>
              </ul>
            </div>
          ) : (
            <div className="info-panel-content">
              <h3 className="info-panel-title">Selecciona un curso</h3>
              <p className="info-panel-description">Usa la terminal a la izquierda para seleccionar un curso y ver su información detallada.</p>
              <p className="info-panel-description" style={{color: 'var(--accent)', marginTop: '1rem'}}>
                <i className="fas fa-mobile-alt"></i> En móvil: Toca cualquier opción o haz clic en el cursor para usar el teclado numérico
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Componente de Recursos
const ResourcesSection = ({ showResourceInfo, resourceInput, selectedResource }: { showResourceInfo: (resourceId: number) => void; resourceInput: string; selectedResource: any }) => (
  <section className="section-container active" id="resourcesSection">
    <h2 className="section-title" style={{
      fontFamily: 'Josefin Sans, Arial, sans-serif',
      fontWeight: 500,
      fontSize: '2.1rem',
      marginBottom: '2.5rem',
      textAlign: 'center',
      background: 'linear-gradient(45deg, #00ff6a, #00f6ff)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      textShadow: '0 0 20px rgba(0, 255, 106, 0.3)',
      position: 'relative',
      paddingBottom: '1rem'
    }}>Recursos para Programadores</h2>
    
    <div className="terminal-panel-container">
      <div className="terminal-container">
        <div className="terminal-header">
          <div className="terminal-title">dev-resources.exe</div>
          <div className="terminal-controls">
            <div className="terminal-control close"></div>
            <div className="terminal-control minimize"></div>
            <div className="terminal-control maximize"></div>
          </div>
        </div>
        <div className="terminal-content">
          <div className="terminal-line">{'>'} Sistema de recursos para desarrolladores iniciado</div>
          <div className="terminal-line">{'>'} Selecciona una categoría para explorar:</div>
          <div className="terminal-line">{'>'} </div>
          <div className="terminal-line option" data-value="1">{'>'} [1] Inspiración</div>
          <div className="terminal-line option" data-value="2">{'>'} [2] Fuentes</div>
          <div className="terminal-line option" data-value="3">{'>'} [3] Mockups</div>
          <div className="terminal-line option" data-value="4">{'>'} [4] Iconos</div>
          <div className="terminal-line option" data-value="5">{'>'} [5] Imágenes</div>
          <div className="terminal-line option" data-value="6">{'>'} [6] Juegos</div>
          <div className="terminal-line">{'>'} </div>
          <div className="terminal-line">{'>'} Ingresa el número de categoría: <span className="terminal-cursor">{resourceInput || ''}</span></div>
        </div>
        <div className="scanline"></div>
      </div>
      
      <div className="info-panel" id="resourceInfo">
        {selectedResource ? (
          <div className="info-panel-content">
            <h3 className="info-panel-title">{selectedResource.title}</h3>
            <p className="info-panel-description">Recursos útiles para {selectedResource.title.toLowerCase()}:</p>
            <ul className="info-panel-list">
              {selectedResource.items.map((item: { name: string; url: string }, index: number) => (
                <li key={index}>
                  <i className="fas fa-external-link-alt"></i> 
                  <a href={item.url} target="_blank" rel="noopener noreferrer" style={{color: 'var(--secondary)'}}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="info-panel-content">
            <h3 className="info-panel-title">Selecciona una categoría</h3>
            <p className="info-panel-description">Usa la terminal a la izquierda para seleccionar una categoría de recursos.</p>
            <p className="info-panel-description" style={{color: 'var(--accent)', marginTop: '1rem'}}>
              <i className="fas fa-mobile-alt"></i> En móvil: Toca cualquier opción o haz clic en el cursor para usar el teclado numérico
            </p>
          </div>
        )}
      </div>
    </div>
  </section>
);

// Componente de Blog
const BlogSection = () => {
  const blogPosts = [
    {
      title: "El Futuro de la Inteligencia Artificial",
      date: "Publicado el 15 de junio, 2025",
      excerpt: "Exploramos las nuevas tendencias en IA que están revolucionando la industria tecnológica y cómo los desarrolladores pueden prepararse para este futuro."
    },
    {
      title: "Mejores Prácticas para React en 2025",
      date: "Publicado el 12 de junio, 2025",
      excerpt: "Descubre las mejores prácticas actualizadas para desarrollar aplicaciones React modernas y escalables."
    },
    {
      title: "Introducción a DevOps para Desarrolladores",
      date: "Publicado el 10 de junio, 2025",
      excerpt: "Una guía completa para que los desarrolladores entiendan y implementen prácticas DevOps en sus proyectos."
    },
    {
      title: "Optimización de Rendimiento Web",
      date: "Publicado el 8 de junio, 2025",
      excerpt: "Técnicas avanzadas para mejorar la velocidad y rendimiento de aplicaciones web modernas."
    }
  ];

  return (
    <section className="section-container active" id="blogSection">
      <h2 className="section-title" style={{
        fontFamily: 'Josefin Sans, Arial, sans-serif',
        fontWeight: 500,
        fontSize: '2.1rem',
        marginBottom: '2.5rem',
        textAlign: 'center',
        background: 'linear-gradient(45deg, #00ff6a, #00f6ff)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        textShadow: '0 0 20px rgba(0, 255, 106, 0.3)',
        position: 'relative',
        paddingBottom: '1rem'
      }}>Blog Tecnológico</h2>
      
      <div className="blog-container">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <h3 className="blog-title">{post.title}</h3>
            <span className="blog-date">{post.date}</span>
            <p className="blog-excerpt">{post.excerpt}</p>
            <a href="#" className="read-more">Leer más <i className="fas fa-arrow-right"></i></a>
          </div>
        ))}
      </div>
    </section>
  );
};

// Componente Sobre Nosotros
const AboutSection = () => (
  <section className="section-container active" id="aboutSection">
    <h2 className="section-title" style={{
      fontFamily: 'Josefin Sans, Arial, sans-serif',
      fontWeight: 500,
      fontSize: '2.1rem',
      marginBottom: '2.5rem',
      textAlign: 'center',
      background: 'linear-gradient(45deg, #00ff6a, #00f6ff)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      textShadow: '0 0 20px rgba(0, 255, 106, 0.3)',
      position: 'relative',
      paddingBottom: '1rem'
    }}>Sobre CodeLink</h2>
    
    <div className="about-container">
      <div className="mission-vision-container">
        <h3 className="mission-vision-title">NUESTRO PROPÓSITO</h3>
        
        <div className="mission-vision">
          <div className="mission-box">
            <h3><i className="fas fa-rocket"></i> MISIÓN</h3>
            <p>Fomentar el desarrollo y la formación de programadores en áreas tecnológicas, creando espacios de aprendizaje, desarrollo de proyectos y la participación activa en actividades tecnológicas tanto dentro como fuera del ámbito universitario.</p>
          </div>
          
          <div className="vision-box">
            <h3><i className="fas fa-eye"></i> VISIÓN</h3>
            <p>Convertirnos en un referente dentro de la universidad en la formación y promoción de tecnologías emergentes, creando una comunidad de estudiantes con habilidades competitivas para el mundo laboral y el emprendimiento.</p>
          </div>
        </div>
      </div>
      
      <div className="about-content">
        <div>
          <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Equipo de CodeLink" className="about-image"/>
        </div>
      </div>
    </div>
  </section>
);

// Componente de Contacto
const ContactSection = ({ handleSubmit, formMessage }: { handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void; formMessage: string | null }) => (
  <section className="section-container active" id="contactSection">
    <h2 className="section-title" style={{
      fontFamily: 'Josefin Sans, Arial, sans-serif',
      fontWeight: 500,
      fontSize: '2.1rem',
      marginBottom: '2.5rem',
      textAlign: 'center',
      background: 'linear-gradient(45deg, #00ff6a, #00f6ff)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      textShadow: '0 0 20px rgba(0, 255, 106, 0.3)',
      position: 'relative',
      paddingBottom: '1rem'
    }}>Contáctanos</h2>
    
    <div className="contact-form-container">
      <div className="terminal-container">
        <div className="terminal-header">
          <div className="terminal-title">contact-form.exe</div>
          <div className="terminal-controls">
            <div className="terminal-control close"></div>
            <div className="terminal-control minimize"></div>
            <div className="terminal-control maximize"></div>
          </div>
        </div>
        <div className="terminal-content">
          <div className="terminal-line">{'>'} Iniciando sistema de contacto...</div>
          <div className="terminal-line">{'>'} Por favor completa los siguientes campos:</div>
          <div className="terminal-line">{'>'} </div>
          
          <form id="contactForm" onSubmit={handleSubmit} style={{marginTop: '1rem'}}>
            <div style={{marginBottom: '1.5rem'}}>
              <label htmlFor="name" style={{color: 'var(--secondary)', display: 'block', marginBottom: '0.5rem'}}>{'>'} Nombre:</label>
              <input type="text" id="name" required style={{width: '100%', padding: '0.8rem', background: 'rgba(0, 0, 0, 0.3)', border: '1px solid var(--border-color)', borderRadius: '5px', color: 'white'}}/>
            </div>
            
            <div style={{marginBottom: '1.5rem'}}>
              <label htmlFor="email" style={{color: 'var(--secondary)', display: 'block', marginBottom: '0.5rem'}}>{'>'} Email:</label>
              <input type="email" id="email" required style={{width: '100%', padding: '0.8rem', background: 'rgba(0, 0, 0, 0.3)', border: '1px solid var(--border-color)', borderRadius: '5px', color: 'white'}}/>
            </div>
            
            <div style={{marginBottom: '1.5rem'}}>
              <label htmlFor="subject" style={{color: 'var(--secondary)', display: 'block', marginBottom: '0.5rem'}}>{'>'} Asunto:</label>
              <input type="text" id="subject" required style={{width: '100%', padding: '0.8rem', background: 'rgba(0, 0, 0, 0.3)', border: '1px solid var(--border-color)', borderRadius: '5px', color: 'white'}}/>
            </div>
            
            <div style={{marginBottom: '1.5rem'}}>
              <label htmlFor="message" style={{color: 'var(--secondary)', display: 'block', marginBottom: '0.5rem'}}>{'>'} Mensaje:</label>
              <textarea id="message" rows="4" required style={{width: '100%', padding: '0.8rem', background: 'rgba(0, 0, 0, 0.3)', border: '1px solid var(--border-color)', borderRadius: '5px', color: 'white'}}></textarea>
            </div>
            
            <button type="submit" style={{padding: '0.8rem 1.5rem', borderRadius: '5px', background: 'var(--secondary)', color: 'var(--dark-bg)', border: 'none', cursor: 'pointer', fontWeight: 'bold', transition: 'all 0.3s'}}>
              Enviar Mensaje
            </button>
          </form>
          
          {formMessage && (
            <div id="formMessage" style={{marginTop: '1.5rem', padding: '1rem', display: 'block', background: 'rgba(0, 255, 106, 0.2)', border: '1px solid var(--success)', borderRadius: '5px', textShadow: '0 0 5px var(--success)'}}>
              {formMessage}
            </div>
          )}
          
          <div className="terminal-line" style={{marginTop: '1.5rem'}}>{'>'} </div>
          <div className="terminal-line">{'>'} Para soporte técnico: clubcrecimientotecnologico@unihumboldt.edu.ve</div>
          <div className="terminal-line">{'>'} Para colaboraciones: cwilliamsricardo@gmail.com</div>
          <div className="terminal-line">{'>'} Club de Crecimiento tecnologico UAH I Carlos Williams</div>
        </div>
        <div className="scanline"></div>
      </div>
    </div>
  </section>
);
//SUPUESTAMENTE AQUI HAY UN ERROR PERO ES PAJA, NO HE VISTO NADA (NO SE QUE HACER )
export default App;
