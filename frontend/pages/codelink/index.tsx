import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function CodelinkIndex() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic or navigation here
    alert(`Buscar: ${searchTerm}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f111a] to-[#12131f] text-white font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-extrabold text-cyan-400">Code</span>
          <span className="text-3xl font-extrabold text-white">Link</span>
        </div>
        <nav className="space-x-6 text-gray-300 text-sm font-medium hidden md:flex">
          <Link href="/codelink/programadores" className="hover:text-cyan-400">Programadores</Link>
          <Link href="/codelink/cursos" className="hover:text-cyan-400">Cursos</Link>
          <Link href="/codelink/recursos" className="hover:text-cyan-400">Recursos</Link>
          <Link href="/codelink/blog" className="hover:text-cyan-400">Blog</Link>
          <Link href="/codelink/sobre-nosotros" className="hover:text-cyan-400">Sobre</Link>
          <Link href="/codelink/contacto" className="hover:text-cyan-400">Contacto</Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <button className="relative">
            <svg className="w-6 h-6 text-gray-300 hover:text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M15 17h5l-1.405-1.405M19 13v-2a7 7 0 10-14 0v2"></path>
            </svg>
            <span className="absolute -top-1 -right-1 bg-green-400 text-black rounded-full text-xs px-1">3</span>
          </button>
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold">DU</div>
            <span>DevUser</span>
          </div>
          <button className="bg-gradient-to-r from-green-400 to-cyan-400 text-black px-4 py-2 rounded-full font-semibold hover:brightness-110 transition">
            + Portafolio
          </button>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto">
        {/* Left Content */}
        <section className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold text-cyan-400 drop-shadow-lg">
            CODELINK!
          </h1>
          <h2 className="text-xl font-semibold text-white drop-shadow-md tracking-widest">
            CONECTANDO TALENTOS TECNOLÓGICOS
          </h2>
          <p className="text-gray-300 max-w-md">
            La plataforma definitiva para programadores que buscan mostrar su trabajo y empresas que buscan talento. Únete a la revolución tecnológica.
          </p>
          <form onSubmit={handleSearch} className="flex max-w-md">
            <input
              type="text"
              placeholder="Buscar programadores, tecnologías o proyectos"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow rounded-l-md px-4 py-2 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button
              type="submit"
              className="bg-cyan-400 text-black px-4 py-2 rounded-r-md font-semibold hover:bg-cyan-500 transition"
            >
              Buscar
            </button>
          </form>
          <div className="flex space-x-4 mt-4">
            <button className="bg-green-400 text-black px-6 py-2 rounded-full font-semibold hover:brightness-110 transition flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7m-4-4h8" />
              </svg>
              <span>Registrarse</span>
            </button>
            <button className="bg-gray-800 text-white px-6 py-2 rounded-full font-semibold hover:brightness-110 transition">
              Ingresar
            </button>
          </div>
        </section>

        {/* Right Image */}
        <section className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="relative w-80 h-[420px] rounded-lg overflow-hidden shadow-lg glow-neon">
            <Image
              src="codelink-pixel-art.png"
              alt="Pixel art of a programmer at a desk"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6 border-t border-gray-700">
        © 2025 codelink - comunidad de programadores | todos los derechos reservados
      </footer>

      <style jsx>{`
        .glow-neon {
          box-shadow: 0 0 15px 5px #0ff;
        }
      `}</style>
    </div>
  );
}
