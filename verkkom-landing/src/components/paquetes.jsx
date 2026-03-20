import React from 'react';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight, LayoutGrid, Sparkle, Radio, Zap, Shield } from 'lucide-react';
import '../styles/Paquetes.css';

export function Paquetes() {
  const navigate = useNavigate();

  const handleContratar = (planNombre) => {
    const telefono = "5218123921000";
    const mensaje = `¡Hola Verkkom! Me interesa contratar el plan: ${planNombre}. ¿Me pueden dar más información?`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="vk-pricing-section" id="paquetes">
      <div className="pricing-bg-decor"></div>
      
      <div className="pricing-header">
        <div className="pricing-tag">
          <Sparkle size={18} className="sparkle-icon" />
          <span>PLANES VERKKOM 2024</span>
        </div>
        <h2>Elige el poder de tu <span>Conexión</span></h2>
        <p className="pricing-subtitle">
          Infraestructura propia para una estabilidad garantizada en Pesquería, Zuazua y Salinas.
        </p>
      </div>

      <div className="pricing-grid">
        
        {/* PLAN ANTENA */}
        <div className="pricing-card">
          <div className="card-badge">1ER MES GRATIS</div>
          <div className="card-icon"><Radio size={24} /></div>
          <h3>Antena</h3>
          <div className="speed-display">
            <span className="mbps">40</span>
            <span className="unit">Mbps</span>
          </div>
          <div className="price-tag">
            <span className="currency">$</span>499<span className="period">/mes</span>
          </div>
          <ul className="feature-list">
            <li><Check size={18} /> Tecnología Inalámbrica</li>
            <li><Check size={18} /> $1,000 Pago Instalación</li>
            <li><Check size={18} /> Soporte Local 24/7</li>
          </ul>
          <Button variant="outline" onClick={() => handleContratar("Antena 40 Megas")} className="w-full">
            Contratar
          </Button>
        </div>

        {/* PLAN FIBRA (DESTACADO) */}
        <div className="pricing-card featured">
          <div className="card-badge popular">MÁS POPULAR</div>
          <div className="card-icon"><Zap size={24} /></div>
          <h3>Fibra Óptica</h3>
          <div className="speed-display">
            <span className="mbps">150</span>
            <span className="unit">Mbps</span>
          </div>
          <div className="price-tag">
            <span className="currency">$</span>600<span className="period">/mes</span>
          </div>
          <ul className="feature-list">
            <li><Check size={18} /> <strong>Instalación $0</strong></li>
            <li><Check size={18} /> Conexión Simétrica</li>
            <li><Check size={18} /> Home to Home (FTTH)</li>
          </ul>
          <Button variant="primary" onClick={() => handleContratar("Fibra 150 Megas")} className="w-full btn-glow">
            Contratar Ahora
          </Button>
        </div>

        {/* PLAN FIBRA + CÁMARA */}
        <div className="pricing-card">
          <div className="card-badge safety">SEGURIDAD</div>
          <div className="card-icon"><Shield size={24} /></div>
          <h3>Fibra + Cámara</h3>
          <div className="speed-display">
            <span className="mbps">100</span>
            <span className="unit">Mbps</span>
          </div>
          <div className="price-tag">
            <span className="currency">$</span>799<span className="period">/mes</span>
          </div>
          <ul className="feature-list">
            <li><Check size={18} /> 1 Cámara IP Incluida</li>
            <li><Check size={18} /> $700 Pago Activación</li>
            <li><Check size={18} /> Monitoreo en App</li>
          </ul>
          <Button variant="outline" onClick={() => handleContratar("Fibra + Cámara 100 Megas")} className="w-full">
            Contratar
          </Button>
        </div>

      </div>

      <div className="pricing-footer">
        <p>¿Buscas un plan empresarial o mayor velocidad?</p>
        <button className="catalog-link-btn" onClick={() => navigate('/catalogo')}>
          <LayoutGrid size={20} />
          Explorar catálogo completo
          <ArrowRight size={20} className="arrow" />
        </button>
      </div>
    </section>
  );
}