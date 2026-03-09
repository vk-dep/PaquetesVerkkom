import React from 'react';
import { Sparkle } from 'lucide-react'; // Usamos Sparkle para el efecto de la estrella
import '../styles/Soporte.css';

export function Soporte() {
  const handleContratarGeneral = () => {
    // IMPORTANTE: Sin espacios para que funcione en todos los navegadores
    const telefono = "5218128838654";
    const mensaje = "Hola";

    // Codificamos el mensaje para que sea válido en una URL
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
  };
  return (
    <section className="vk-support-final" id="soporte">
      <div className="support-centered-container">

        {/* EFECTO PLANES VERKKOM APLICADO AQUÍ */}
        <div className="support-tag">
          <Sparkle size={18} fill="currentColor" className="sparkle-icon" />
          <span>ATENCIÓN GARANTIZADA</span>
        </div>

        <h2 className="support-title">
          Estamos trabajando para brindarte un <br />
          <span className="text-highlight">servicio de excelencia</span>
        </h2>

        <div className="support-rule-container">
          <h3 className="rule-heading">Regla 24 Horas</h3>
          <p className="rule-description">
            Si tu reporte técnico no es resuelto en un lapso de
            <span className="rule-number-highlight"> 24 Horas</span>, recorremos los días
            de tu servicio automáticamente. Sin excusas.
          </p>
        </div>

        <div className="support-action-wrapper">
          <button className="vk-btn-support" onClick={handleContratarGeneral}>
            Pedir soporte técnico
          </button>
        </div>

      </div>
    </section>
  );
}