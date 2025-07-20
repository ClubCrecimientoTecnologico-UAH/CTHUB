import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
//qlq mrc, todo fino?, sabes, hablando con los compas, acoordamos que a este peo le pondremos derechos de autor, igual, ningun abogado nos esta supporteando, asi que por lo menos podre nuestros nombres en cada parte de aqui aunque sea pa ladillar la paciencia
interface Particle {
  x: number;
  y: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
  tx: number;
  ty: number;
}
//PD: Final fantasy XV tiene tremendo gameplay, aunque el mundo esta un poco vacio, es un juegazo, la banda sonora es sexo
export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [theme, setTheme] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [showWelcomeText, setShowWelcomeText] = useState(true);
  const particlesContainerRef = useRef<HTMLDivElement>(null);

  // Inicializar partículas I honestamente estuve buscando bastantes recursos en Internet para esta parte, creeme, que los bugs aqui se pusieron chistosos xddddddd
  useEffect(() => {
    if (!particlesContainerRef.current) return;
    
    const container = particlesContainerRef.current;
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let particles: Particle[] = [];
    let mouse = { x: 0, y: 0 };
    let canvasSize = { w: 0, h: 0 };
    const dpr = window.devicePixelRatio || 1;
    
    // Parámetros a utilizar
    const quantity = window.innerWidth < 768 ? 50 : 100;
    const staticity = 50;
    const ease = 50;
    const size = 0.4;
    const color = "#ffffff";
    const vx = 0;
    const vy = 0;
    
    // Convertir color hex a rgb
    const hexToRgb = (hex: string): number[] => {
      hex = hex.replace("#", "");
      if (hex.length === 3) {
        hex = hex.split('').map((char: string) => char + char).join('');
      }
      const hexInt = parseInt(hex, 16);
      return [
        (hexInt >> 16) & 255,
        (hexInt >> 8) & 255,
        hexInt & 255
      ];
    };
    
    const rgb = hexToRgb(color);
    
    // Tamaño del canvas
    const resizeCanvas = () => {
      canvasSize.w = container.offsetWidth;
      canvasSize.h = container.offsetHeight;
      canvas.width = canvasSize.w * dpr;
      canvas.height = canvasSize.h * dpr;
      canvas.style.width = `${canvasSize.w}px`;
      canvas.style.height = `${canvasSize.h}px`;
      ctx.scale(dpr, dpr);
      createParticles();
    };
    
    // Crear partículas
    const createParticles = () => {
      particles = [];
      for (let i = 0; i < quantity; i++) {
        particles.push({
          x: Math.random() * canvasSize.w,
          y: Math.random() * canvasSize.h,
          size: (Math.random() * 2 + size),
          alpha: 0,
          targetAlpha: parseFloat((Math.random() * 0.6 + 0.1).toFixed(1)),
          dx: (Math.random() - 0.5) * 0.1,
          dy: (Math.random() - 0.5) * 0.1,
          magnetism: 0.1 + Math.random() * 4,
          tx: 0,
          ty: 0
        });
      }
    };
    
    // Dibujar partículas
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvasSize.w, canvasSize.h);
      particles.forEach(p => {
        p.alpha += 0.01;
        if (p.alpha > p.targetAlpha) p.alpha = p.targetAlpha;
        
        p.x += p.dx + vx;
        p.y += p.dy + vy;
        
        // Magnetismo al ratón
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distance = Math.sqrt(dx*dx + dy*dy);
        
        if (distance < 120) {
          const force = (120 - distance) / 120;
          p.tx += (dx * force * p.magnetism) / staticity;
          p.ty += (dy * force * p.magnetism) / staticity;
        }
        
        // Suavizar el movimiento
        p.x += p.tx;
        p.y += p.ty;
        p.tx *= 0.8;
        p.ty *= 0.8;
        
        // aqui si la particula de sale del canvas reposicionas, mano, una cosa, aqui antes de seguir colocando comentarios diciendo lo obvio, te vacilaste que el juego de Dalas Review tiene un malware?, naaaawebona
        if (p.x < -p.size || p.x > canvasSize.w + p.size || p.y < -p.size || p.y > canvasSize.h + p.size) {
          p.x = Math.random() * canvasSize.w;
          p.y = Math.random() * canvasSize.h;
        }
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${p.alpha})`;
        ctx.fill();
      });
      
      requestAnimationFrame(drawParticles);
    };
    
    // Evento del ratón
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    // Inicializar
    const init = () => {
      resizeCanvas();
      drawParticles();
      canvas.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('resize', resizeCanvas);
    };
    
    init();
    
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, [particlesContainerRef]);

  // Esto es para que la terminal de bienvenida de CTHUB desaparezca despues de 5 segundos, es que era muy invasivo xdddd
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  // Efecto para ocultar texto de bienvenida después de 12 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeText(false);
    }, 12000);
    
    return () => clearTimeout(timer);
  }, []);

  // Efecto para mostrar/ocultar botón de volver arriba
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      const title = document.getElementById('cthubTitle');
      if (title) {
        title.classList.add('pixel');
      }
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    if (theme === 'vinotinto-theme') {
      setTheme('monochrome-theme');
    } else if (theme === 'monochrome-theme') {
      setTheme('');
    } else {
      setTheme('vinotinto-theme');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToPlatforms = () => {
    const platformsSection = document.querySelector('.platforms-container');
    if (platformsSection) {
      platformsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Head>
        <title>CTHUB - Club de Crecimiento Tecnológico</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Orbitron:wght@400;600;700&family=Press+Start+2P&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      <div className={`${theme}`}>
        {/* Pantalla de inicio */}
        {showSplash && (
          <div className="splash-screen" id="splashScreen">
            <div ref={particlesContainerRef} id="splashParticles" style={{ position: 'absolute', width: '100%', height: '100%' }}></div>
            <div className="retro-grid">
              <div className="grid-container">
                <div className="grid-animation"></div>
              </div>
              <div className="gradient-overlay"></div>
            </div>
            <div className="distortion"></div>
            <h1 className="cthub-title glitch" id="cthubTitle" data-text="CTHUB">CTHUB</h1>
            <p style={{ color: 'var(--accent-color)', zIndex: 10, fontSize: '1.2rem', marginTop: '1rem', textAlign: 'center' }}>
              <span className="loading-dots"></span> Club Crecimiento Tecnológico <span className="loading-dots"></span>
            </p>
            <div className="scan-line"></div>
          </div>
        )}
        
        {/* Botón para volver arriba, super sofisticado vacila JAJAJAJA */}
        <div 
          className="back-to-top" 
          id="backToTop" 
          onClick={scrollToTop}
          style={{ display: isVisible ? 'flex' : 'none' }}
        >
          <i className="fas fa-arrow-up"></i>
        </div>
        
        {/* Contenido principal */}
        <div className="container" id="mainContainer" style={{ opacity: showSplash ? 0 : 1 }}>
          <div className="retro-grid">
            <div className="grid-container">
              <div className="grid-animation"></div>
            </div>
            <div className="gradient-overlay"></div>
          </div>
          <div className="distortion"></div>
          
          <header className="header">
            <div className="logo">
              <span className="logo-icon">▣</span> CTHUB
            </div>
            <nav className="nav-links">
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Inicio</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Quiénes Somos</a>
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Proyectos</a>
              <a href="#team" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}>Miembros</a>
              <button className="theme-toggle" id="themeToggle" onClick={toggleTheme}>
                <i className="fas fa-palette"></i>
              </button>
            </nav>
          </header>
          
          {/* Sección de inicio */}
          <section id="home" className="section" style={{ paddingTop: '5rem' }}>
            <div className="main-content">
              <h1 className="main-title">CTHUB</h1>
              <p className="subtitle">Conecta con nuestras plataformas internas, gestiona tu acceso y forma parte de nuestra comunidad tecnológica.</p>
              <button className="cta-button" onClick={scrollToPlatforms}>Comenzar ahora</button>
              
              {/* Espaciado antes de las plataformas, esto es especialmente necesario porque al principio el diseño se veia peruanisimo xddddd mas marron y no nace */}
              <div style={{ marginTop: '4rem' }}>
                <h2 className="section-title">Nuestras Plataformas</h2>
                <div className="platforms-container">
                  <div className="platform-card codelink">
                    <div className="platform-content">
                      <h2>CodeLink</h2>
                      <p>Plataforma para desarrolladores y entusiastas de la tecnología donde podrás colaborar en proyectos, resolver desafíos técnicos y aprender nuevas tecnologías.</p>
                      <a href="/codelink" className="platform-link">Acceder a CodeLink</a>
                    </div>
                  </div>
                  <div className="platform-card englishclub">
                    <div className="platform-content">
                      <h2>English Club</h2>
                      <p>Comunidad para practicar y mejorar tu inglés técnico con sesiones interactivas, talleres especializados y grupos de conversación.</p>
                      <a href="/englishclub" className="platform-link">Acceder a English Club</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Sección Quiénes Somos */}
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
          
          {/* Sección de Proyectos, sabes la parte de la hackathon, esto es especialmente chistoso porque estoy aplicando la de "No he ganado la hackethon en la ucab?, creeare mi propio concurso con Persona 5 y Mujerzuelas" */}
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
          
          {/* Sección de Miembros, aqui estamos los reales, el resto es monte y culebra */}
          <section id="team" className="section">
            <h2 className="section-title">Nuestro Equipo</h2>
            <div className="team-members">
              <div className="member">
                <h4>Carlos Williams</h4>
                <p>Coordinador de Proyectos</p>
              </div>
              <div className="member">
                <h4>Gabriel Rodríguez</h4>
                <p>Presidente</p>
              </div>
              <div className="member">
                <h4>Gabriel Romay</h4>
                <p>Coordinador de Proyectos</p>
              </div>
              <div className="member">
                <h4>David Díaz</h4> 
                <p>Vicepresidente</p>
              </div>
            </div>
          </section>
          
          {/* Texto de bienvenida en la parte inferior izquierda, esto lo hice para un efecto mas ciberpunk */}
          {showWelcomeText && (
            <div className="welcome-text" id="welcomeText">
              <div>{'>'} Bienvenido a CTHUB <span className="loading-dots"></span></div>
              <div>{'>'} Sistema Optimizado para Codelink<span className="loading-dots"></span></div>
              <div>{'>'} ¿Listo para English Club?<span className="loading-dots"></span></div>
            </div>
          )}
          
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
        </div>
      </div>
    </>
  );
}
