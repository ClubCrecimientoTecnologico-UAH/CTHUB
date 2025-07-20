import { useEffect, useRef } from 'react';

const useParticles = (containerRef) => {
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: 0, y: 0 };
    let canvasSize = { w: 0, h: 0 };
    const dpr = window.devicePixelRatio || 1;
    
    // Parámetros
    const quantity = window.innerWidth < 768 ? 50 : 100;
    const staticity = 50;
    const ease = 50;
    const size = 0.4;
    const color = "#ffffff";
    const vx = 0;
    const vy = 0;
    
    // Convertir color hex a rgb
    const hexToRgb = (hex) => {
      hex = hex.replace("#", "");
      if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('');
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
        
        // Si la partícula sale del canvas, la reposicionamos
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
    const handleMouseMove = (e) => {
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
    
    // Limpieza
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      container.removeChild(canvas);
    };
  }, [containerRef]);
};

export default useParticles; 