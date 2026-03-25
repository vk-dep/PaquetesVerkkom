import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import './LeadModal.css';

export function LeadModal({ isOpen, onClose, selectedPlan }) {
  const [formData, setFormData] = useState({ nombre: '', telefono: '', direccion: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Si no hay plan (viene del Header), ponemos "Información General"
    const planTexto = selectedPlan ? ` *Plan de interés:* ${selectedPlan}` : ` *¿Que plan me recomiendan?*`;

    const mensaje = encodeURIComponent(
      `¡Hola Verkkom! \n\n` +
      `Me interesa contratar. Aquí mis datos:\n\n` +
      `${planTexto}\n` + // <--- Aquí se añade el plan automáticamente
      `*Nombre:* ${formData.nombre}\n` +
      `*Teléfono:* ${formData.telefono}\n` +
      `*Dirección:* ${formData.direccion}\n\n` +
      `¿Me podrían dar más información?`
    );

    window.open(`https://wa.me/5218123921000?text=${mensaje}`, '_blank');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}><X /></button>
        <h3>¡Casi listo! 🚀</h3>
        <p>{selectedPlan ? `Estás a un paso de contratar: ${selectedPlan}` : 'Déjanos tus datos para contactarte.'}</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Nombre Completo</label>
            <input type="text" required onChange={(e) => setFormData({...formData, nombre: e.target.value})} />
          </div>
          <div className="input-group">
            <label>Teléfono</label>
            <input type="tel" required onChange={(e) => setFormData({...formData, telefono: e.target.value})} />
          </div>
          <div className="input-group">
            <label>Dirección (Calle y Colonia)</label>
            <input type="text" required onChange={(e) => setFormData({...formData, direccion: e.target.value})} />
          </div>
          <button type="submit" className="submit-lead-btn">ENVIAR DATOS <Send size={18} /></button>
        </form>
      </div>
    </div>
  );
}