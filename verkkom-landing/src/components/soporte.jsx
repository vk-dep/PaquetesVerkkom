import React from 'react';
import { Sparkle, Clock, MessageSquare } from 'lucide-react';
import '../styles/Soporte.css';

export function Soporte() {
  const handleSoporte = () => {
    const telefono = "5218128838654";
    const mensaje = "Hola";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="vk-support-white" id="soporte">
      <div className="support-dots-pattern"></div>

      <div className="support-container">
        <div className="support-header">
          <div className="support-tag">
            <Sparkle size={18} className="sparkle-icon" />
            <span>ATENCIÓN GARANTIZADA</span>
          </div>
          <h2 className="support-title">
            Trabajamos para brindarte un <br />
            <span className="text-highlight-blue">servicio de excelencia</span>
          </h2>
        </div>

        {/* Tarjeta Regla 24h en versión clara */}
        <div className="rule-card-white">
          <div className="rule-card-icon">
            <Clock size={40} />
          </div>
          <div className="rule-card-content">
            <h3>Regla 24 Horas</h3>
            <p>
              Si tu reporte técnico no es resuelto en un lapso de 
              <span className="time-highlight"> 24 Horas</span>, 
              recorremos los días de tu servicio automáticamente. 
              <strong> Sin excusas.</strong>
            </p>
          </div>
          <div className="rule-card-badge">GARANTÍA VERKKOM</div>
        </div>

        <div className="support-footer">
          <p>¿Necesitas ayuda inmediata? Nuestro equipo técnico está listo.</p>
          <button className="vk-btn-support-white" onClick={handleSoporte}>
            <MessageSquare size={20} />
            Pedir soporte técnico
          </button>
        </div>
      </div>
    </section>
  );
}