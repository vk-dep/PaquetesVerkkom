import React from 'react';
import { Facebook, Instagram, MapPin, Mail, MessageSquare, ShieldCheck } from 'lucide-react';
import '../styles/footer.css';

export function Footer() {
  const handleContratarGeneral = () => {
    const telefono = "5218128838654";
    const mensaje = "Hola Verkkom, me gustaría recibir información.";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="vk-footer-premium">
      {/* Línea de luz superior para separar de la sección anterior */}
      <div className="footer-glow-divider"></div>

      <div className="footer-main-container">
        
        {/* COLUMNA 1: IDENTIDAD */}
        <div className="footer-col-brand">
          <div className="footer-logo">
            <span className="logo-v">V</span>
            <span className="logo-text">VERKKOM</span>
          </div>
          <p className="footer-description">
            Llevando conectividad de alta capacidad a las zonas que mueven el motor industrial de Nuevo León.
          </p>
          <div className="footer-social-group">
            <a href="https://facebook.com/VerkkomRT" target="_blank" rel="noreferrer" className="social-link">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com/verkkom.oficial" target="_blank" rel="noreferrer" className="social-link">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* COLUMNA 2: COBERTURA */}
        <div className="footer-col-links">
          <h4 className="footer-title">Cobertura</h4>
          <ul className="footer-list">
            <li><MapPin size={14} className="icon-blue" /> Salinas Victoria</li>
            <li><MapPin size={14} className="icon-blue" /> Pesquería</li>
            <li><MapPin size={14} className="icon-blue" /> Zuazua</li>
          </ul>
        </div>

        {/* COLUMNA 3: SOPORTE Y CONTACTO */}
        <div className="footer-col-links">
          <h4 className="footer-title">Soporte</h4>
          <ul className="footer-list">
            <li>
              <button onClick={handleContratarGeneral} className="footer-link-btn">
                <MessageSquare size={14} /> Centro de Ayuda
              </button>
            </li>
            <li>
              <a href="mailto:contacto@verkkom.com" className="footer-link">
                <Mail size={14} /> contacto@verkkom.com
              </a>
            </li>
            <li className="footer-status">
              <ShieldCheck size={14} className="icon-green" /> 
              <span>Red Monitoreada 24/7</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-line"></div>
        <div className="footer-legal">
          <p>© 2026 <strong>VERKKOM</strong>. Todos los derechos reservados.</p>
          <p className="dev-signature">Visual Render by <span>Equipo Verkkom</span></p>
        </div>
      </div>
    </footer>
  );
}