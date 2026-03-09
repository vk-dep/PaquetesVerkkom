import React from 'react';
import { Button } from '../ui/Button';
import { Link, useLocation } from 'react-router-dom'; // Importamos useLocation
import '../styles/Header.css';

export function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Función de contacto general para el Header
  const handleContratarGeneral = () => {
    // IMPORTANTE: Sin espacios para que funcione en todos los navegadores
    const telefono = "5218123921000";
    const mensaje = "¡Hola Verkkom! Vengo de su sitio web y me interesa contratar su servicio de internet. ¿Me podrían dar más información?";

    // Codificamos el mensaje para que sea válido en una URL
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
  };

  return (
    <header className="vk-header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-v">JYB </span>
          <span className="logo-text">WIFI</span>
        </div>

        <nav className="nav-menu">
          <a href="/">Inicio</a>
          <a href="/#paquetes">Paquetes</a>
          <a href="/#soporte">Soporte</a>
          {/* Si usas React Router, recuerda que este puede ser un <Link to="/catalogo"> */}
          <Link to="/catalogo" className="nav-highlight">Paquetes Completos</Link>
        </nav>

        <div className="header-actions">
          {/* Cambiamos el onClick para que llame a la función general */}
          <Button
            variant="primary"
            onClick={handleContratarGeneral}
            className="btn-header"
          >
            Contratar
          </Button>
        </div>
      </div>
    </header>
  );
}