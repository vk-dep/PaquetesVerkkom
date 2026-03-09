import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, MapPin } from 'lucide-react';
import '../styles/Hero.css';
import { MapaCobertura } from '../components/cobertura';

export function Hero() {
  const handleContratarGeneral = () => {
    // IMPORTANTE: Sin espacios para que funcione en todos los navegadores
    const telefono = "5218123921000";
    const mensaje = "¡Hola Verkkom! Vengo de su sitio web y me interesa contratar su servicio de internet. ¿Me podrían dar más información?";

    // Codificamos el mensaje para que sea válido en una URL
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
  };

  // Función para manejar el salto a la sección
  const scrollToCobertura = () => {
    const section = document.getElementById('cobertura');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="vk-hero">
      <div className="hero-overlay"></div> {/* Capa de oscuridad extra */}

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Internet de alta velocidad en <span>Nuevo León.</span>
          </h1>

          <p className="hero-description">
            Conectamos tu mundo, sin límites. <strong>JYB WIFI</strong> rapidez para
            hogares y empresas industriales donde otros no llegan.
          </p>

          <div className="hero-actions">
            <Button variant="primary" onClick={handleContratarGeneral} className="btn-hero-main">
              Contratar Ahora <ArrowRight size={20} />
            </Button>

            <Button
              variant="outline"
              className="btn-hero-sec"
              onClick={scrollToCobertura}
            >

              <MapPin size={18} /> Ver Cobertura
            </Button>
          </div>
        </div>
      </div>

      {/* Decoración inferior para conectar con la siguiente sección */}
      <div className="hero-bottom-gradient"></div>
    </section>
  );
}