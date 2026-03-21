import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Wifi } from 'lucide-react';
import { Button } from '../ui/Button';
import '../styles/header.css';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const handleContratar = () => {
    const msg = encodeURIComponent(`¡Hola! Vengo de su pagina Web, quiero saber más`);
    window.open(`https://wa.me/5218123921000?text=${msg}`, '_blank');
  };

  return (
    <header className={`vk-header-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="vk-header-container">
        
        {/* IZQUIERDA: LOGO */}
        <Link to="/" className="vk-logo" onClick={closeMenu}>
          <Wifi size={24} className="logo-icon" />
          <span className="logo-text">VERK<span>KOM</span></span>
        </Link>

        {/* CENTRO: NAVEGACIÓN DESKTOP */}
        <nav className="vk-nav-desktop">
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/catalogo">Planes</NavLink>
          <NavLink to="/nosotros">¿Quiénes Somos?</NavLink>
        </nav>

        {/* DERECHA: ACCIONES */}
        <div className="vk-header-actions">
          <Button variant="primary" className="btn-contratar-header" onClick={handleContratar}>
            CONTRATAR
          </Button>
          
          <button className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL (CORREGIDO) */}
      <div className={`vk-mobile-overlay ${isOpen ? 'active' : ''}`}>
        <nav className="vk-nav-mobile">
          <NavLink to="/" onClick={closeMenu}>Inicio</NavLink>
          <NavLink to="/catalogo" onClick={closeMenu}>Planes</NavLink>
          <NavLink to="/nosotros" onClick={closeMenu}>¿Quiénes Somos?</NavLink>
          <Button variant="primary" className="w-full mt-4" onClick={closeMenu}>CONTRATAR</Button>
        </nav>
      </div>
    </header>
  );
}