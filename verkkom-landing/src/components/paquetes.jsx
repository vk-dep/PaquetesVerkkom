import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight, LayoutGrid, Sparkle } from 'lucide-react';
import '../styles/Paquetes.css';

export function Paquetes() {
  const navigate = useNavigate();

  const handleContratar = (planNombre) => {
    // IMPORTANTE: Número real sin espacios
    const telefono = "5218123921000";
    const mensaje = `¡Hola Verkkom! Me interesa contratar el plan: ${planNombre}. ¿Me pueden dar más información?`;

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="vk-pricing-section" id="paquetes">
      <div className="pricing-header">
        <div className="pricing-tag">
          <Sparkle size={18} fill="currentColor" className="sparkle-icon" />
          <span>PLANES JYB WIFI</span>
        </div>
        <h2>Elige el poder de tu <span>Conexión</span></h2>
        <p className="pricing-subtitle">
          Internet diseñado para la zona industrial y residencial de Pesquería y Salinas.
        </p>
      </div>

      <div className="pricing-grid">

        {/* PAQUETE ANTENA */}
        <Card badge="1er Mes Gratis">
          <h3>Antena</h3>
          <div className="price"><span>$</span>499<span>/mes</span></div>
          <p className="speed">40 Mbps</p>
          <ul className="features">
            <li><Check size={16} /> $1,000 Instalación</li>
            <li><Check size={16} /> Tecnología Inalámbrica</li>
          </ul>
          {/* CORRECCIÓN: Pasamos el nombre como texto "Antena 40 Megas" */}
          <Button
            variant="outline"
            onClick={() => handleContratar("Antena 40 Megas")}
            className="mt-auto"
          >
            Contratar
          </Button>
        </Card>

        {/* PAQUETE FIBRA */}
        <Card variant="featured" badge="Más Popular">
          <h3>Fibra</h3>
          <div className="price"><span>$</span>600<span>/mes</span></div>
          <p className="speed">150 Mbps</p>
          <ul className="features">
            <li><Check size={16} /> <strong>Costo $0 Instalación</strong></li>
            <li><Check size={16} /> Home to Home (FTTH)</li>
          </ul>
          {/* CORRECCIÓN: Pasamos el nombre como texto "Fibra 150 Megas" */}
          <Button
            variant="primary"
            onClick={() => handleContratar("Fibra 150 Megas")}
            className="mt-auto"
          >
            Contratar Ahora
          </Button>
        </Card>

        {/* PAQUETE FIBRA + CÁMARA */}
        <Card badge="Seguridad">
          <h3>Fibra + Cámara</h3>
          <div className="price"><span>$</span>799<span>/mes</span></div>
          <p className="speed">100 Mbps</p>
          <ul className="features">
            <li><Check size={16} /> 1 Cámara Incluida</li>
            <li><Check size={16} /> $700 Activación</li>
          </ul>
          {/* CORRECCIÓN: Pasamos el nombre como texto "Fibra + Cámara 100 Megas" */}
          <Button
            variant="outline"
            onClick={() => handleContratar("Fibra + Cámara 100 Megas")}
            className="mt-auto"
          >
            Contratar
          </Button>
        </Card>
      </div>

      <div className="pricing-footer-connected">
        <p>¿Buscas una solución a tu medida?</p>
        <button
          className="minimal-catalog-btn"
          onClick={() => navigate('/catalogo')}
        >
          <LayoutGrid size={18} />
          Ver catálogo completo
          <ArrowRight size={18} className="arrow-move" />
        </button>
      </div>
    </section>
  );
}