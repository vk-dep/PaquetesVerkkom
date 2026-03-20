import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Check, Sparkle } from 'lucide-react';
import '../styles/Catalogo.css';

export function Catalogo() {
  const navigate = useNavigate();
  const [filtro, setFiltro] = useState('todos');

  const handleContratar = (planNombre) => {
    const telefono = "5218123921000";
    const mensaje = `¡Hola Verkkom! Me interesa el plan del catálogo: ${planNombre}.`;
    window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  const todosLosPaquetes = [
    // --- FIBRA ---
    { id: 4, tipo: 'fibra', tecnologia: 'FIBRA', name: "Fibra Start", speed: "100 Mbps", price: "500", features: ["$0 Costo Instalación", "Simetría Total", "Ideal Home Office"], badge: "Básico", img: "/assets/router-standard.png" },
    { id: 5, tipo: 'fibra', tecnologia: 'FIBRA', name: "Fibra Pro", speed: "150 Mbps", price: "700", features: ["$0 Costo Instalación", "Baja Latencia Gamer", "Prioridad Red"], badge: "Popular", destacado: true, img: "/assets/router-premium.png" },
    { id: 6, tipo: 'fibra', tecnologia: 'FIBRA', name: "Fibra Power", speed: "200 Mbps", price: "600", features: ["$0 Costo Instalación", "Ultra Velocidad", "Soporte VIP"], badge: "Oferta", img: "/assets/router-standard.png" },

    // --- ANTENA ---
    { id: 1, tipo: 'antena', tecnologia: 'ANTENA', name: "Antena Start", speed: "30 Mbps", price: "400", features: ["1er Mes GRATIS", "Tecnología Inalámbrica", "Instalación: $1,000"], badge: "Económico", img: "/assets/antena-lite.png" },
    { id: 2, tipo: 'antena', tecnologia: 'ANTENA', name: "Antena Plus", speed: "40 Mbps", price: "500", features: ["1er Mes GRATIS", "Estabilidad Mejorada", "Instalación: $1,000"], badge: "Popular", destacado: true, img: "/assets/antena-mesh.png" },
    { id: 3, tipo: 'antena', tecnologia: 'ANTENA', name: "Antena Max", speed: "50 Mbps", price: "600", features: ["1er Mes GRATIS", "Máximo Alcance", "Instalación: $1,000"], badge: "Pro", img: "/assets/antena-max.png" },

    // --- CÁMARAS ---
    { id: 9, tipo: 'camara', tecnologia: 'FIBRA', name: "Fibra + Seguridad", speed: "100 Mbps", price: "799", features: ["1 Cámara IP Incluida", "Monitoreo en App", "Activación Bonificada"], badge: "Seguridad", img: "/assets/camara-wifi.png" },
    { id: 10, tipo: 'camara', tecnologia: 'FIBRA', name: "Doble Vigilancia", speed: "150 Mbps", price: "899", features: ["2 Cámaras Incluidas", "Grabación en Nube", "Kit Autoinstalable"], badge: "Doble", destacado: true, img: "/assets/camara-kit.png" },
    { id: 11, tipo: 'camara', tecnologia: 'FIBRA', name: "Kit Vigilante", speed: "200 Mbps", price: "1050", features: ["3 Cámaras Incluidas", "Monitoreo 24/7", "Soporte Premium"], badge: "Premium", img: "/assets/camara-kit.png" },
  ];

  const filtrados = filtro === 'todos' ? todosLosPaquetes : todosLosPaquetes.filter(p => p.tipo === filtro);

  return (
    <div className="vk-catalogo-page">
      <div className="catalogo-bg-glow"></div>
      
      <header className="catalogo-hero">
        <div className="tag-neon">
          <Sparkle size={18} fill="currentColor" />
          <span>CATÁLOGO OFICIAL 2024</span>
        </div>
        <h1>Planes Sin <span>Excusas</span></h1>
      </header>

      <div className="filter-container">
        {['todos', 'fibra', 'antena', 'camara'].map(f => (
          <button key={f} onClick={() => setFiltro(f)} className={filtro === f ? 'active' : ''}>
            {f === 'camara' ? 'Cámaras' : f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className="catalogo-grid-3x3">
        {filtrados.map((p) => (
          <Card key={p.id} badge={p.badge} variant={p.destacado ? 'featured' : 'default'} className="catalogo-card-visual">
            <div className="card-visual-header">
              <div className={`glow-effect glow-${p.tecnologia.toLowerCase()}`}></div>
              <img src={p.img} alt={p.name} className="product-img-float" />
              <span className={`tech-label tech-${p.tecnologia.toLowerCase()}`}>
                {p.tecnologia}
              </span>
            </div>

            <div className="card-body">
              <h3>{p.name}</h3>
              <p className="cat-speed">{p.speed}</p>
              <div className="cat-price"><span>$</span>{p.price}<small>/mes</small></div>

              <ul className="cat-list">
                {p.features.map((feat, i) => (
                  <li key={i}><Check size={16} color="#02f695" /> {feat}</li>
                ))}
              </ul>

              <Button 
                variant={p.destacado ? 'primary' : 'outline'} 
                className="mt-auto"
                onClick={() => handleContratar(p.name)}
              >
                Contratar
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}