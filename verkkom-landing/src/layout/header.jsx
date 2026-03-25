import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { LeadModal } from '../ui/LeadModal'; // 1. IMPORTAMOS EL MODAL
import '../styles/header.css';
import logo from '../assets/img/verkkomHeader.png';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Ya lo tenías, ¡bien!

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  // Función para abrir modal y cerrar menú (para móviles)
  const openModal = () => {
    setIsModalOpen(true);
    closeMenu();
  };

  return (
    <>
      <header className={`vk-header-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="vk-header-container">
          
          {/* IZQUIERDA: LOGO */}
          <Link to="/" className="vk-logo" onClick={closeMenu}>
            <img src={logo} alt="Verkkom Logo" className="logo-img" />
          </Link>

          {/* CENTRO: NAVEGACIÓN DESKTOP */}
          <nav className="vk-nav-desktop">
            <NavLink to="/" end>Inicio</NavLink>
            <NavLink to="/catalogo">Planes</NavLink>
            <a href="#nosotros" className="nav-link-anchor">¿Quiénes Somos?</a>
          </nav>

          {/* DERECHA: ACCIONES */}
          <div className="vk-header-actions">
            <Button 
              variant="primary" 
              className="btn-contratar-header" 
              onClick={() => setIsModalOpen(true)}
            >
              CONTRATAR
            </Button>
            
            <button className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MENÚ MÓVIL */}
        <div className={`vk-mobile-overlay ${isOpen ? 'active' : ''}`}>
          <nav className="vk-nav-mobile">
            <NavLink to="/" onClick={closeMenu}>Inicio</NavLink>
            <NavLink to="/catalogo" onClick={closeMenu}>Planes</NavLink>
            {/* Ancla para móvil también */}
            <a href="#nosotros" onClick={closeMenu} className="nav-link-mobile">¿Quiénes Somos?</a>
            
            {/* El botón de móvil ahora también abre el modal */}
            <Button 
              variant="primary" 
              className="w-full mt-4" 
              onClick={openModal}
            >
              CONTRATAR
            </Button>
          </nav>
        </div>
      </header>

      {/* 2. COLOCAMOS EL MODAL AQUÍ (Fuera del header para evitar problemas de z-index) */}
      <LeadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}