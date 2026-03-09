import React from 'react';
import { Facebook, Linkedin, Instagram, MapPin, Mail } from 'lucide-react';
import '../styles/footer.css';

export function Footer() {
  const handleContratarGeneral = () => {
    // IMPORTANTE: Sin espacios para que funcione en todos los navegadores
    const telefono = "5218128838654";
    const mensaje = "Hola";

    // Codificamos el mensaje para que sea válido en una URL
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
  };

  return (
    <footer className="vk-footer-final">
      <div className="footer-top-gradient"></div>

      <div className="footer-content">
        {/* COLUMNA 1: IDENTIDAD */}
        <div className="footer-brand">
          <div className="logo-main">
            <span className="v-bold">JYB</span>
            <span className="v-name">WIFI</span>
          </div>
          <p className="brand-tagline">
            Conectividad industrial de alta capacidad en el corazón de Nuevo León.
          </p>
          <div className="social-pills">
            <a href="#" className="social-pill"><Facebook size={18} /></a>
            <a href="#" className="social-pill"><Instagram size={18} /></a>
            <a href="#" className="social-pill"><Linkedin size={18} /></a>
          </div>
        </div>

        {/* COLUMNA 2: COBERTURA LOCAL */}
        <div className="footer-links-group">
          <h4>Cobertura</h4>
          <ul>
            <li><MapPin size={14} /> Salinas, N.L.</li>
            <li><MapPin size={14} /> Pesquería, N.L.</li>
            <li><MapPin size={14} /> Zonas Industriales</li>
          </ul>
        </div>

        {/* COLUMNA 3: SOPORTE */}
        <div className="footer-links-group">
          <h4>Soporte</h4>
          <ul>
            <li><a href="#" onClick={handleContratarGeneral}>Centro de Ayuda</a></li>
            <li><Mail size={14} /> contacto@verkkom.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-signature">
        <div className="signature-line"></div>
        <p>© 2026 Visual Render by <strong>Studio JYB</strong></p>
      </div>
    </footer>
  );
}