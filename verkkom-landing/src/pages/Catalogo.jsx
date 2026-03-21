import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Sparkle, Zap, Shield, Radio } from 'lucide-react';
import '../styles/Catalogo.css';

export function Catalogo() {
  const [filtro, setFiltro] = useState('todos');

  const handleContratar = (plan) => {
    const msg = encodeURIComponent(`¡Hola! Me interesa el plan: ${plan}`);
    window.open(`https://wa.me/5218123921000?text=${msg}`, '_blank');
  };

  const paquetes = [
    { id: 1, tipo: 'fibra', tech: 'FIBRA', name: "Fibra Start", speed: "100", price: "500", badge: "Básico", img: "/assets/router-standard.png" },
    { id: 2, tipo: 'fibra', tech: 'FIBRA', name: "Fibra Pro", speed: "150", price: "700", badge: "Popular", destacado: true, img: "/assets/router-premium.png" },
    { id: 3, tipo: 'fibra', tech: 'FIBRA', name: "Fibra Power", speed: "200", price: "600", badge: "Oferta", img: "/assets/router-standard.png" },
    { id: 4, tipo: 'antena', tech: 'ANTENA', name: "Antena Start", speed: "30", price: "400", badge: "Económico", img: "/assets/antena-lite.png" },
    { id: 5, tipo: 'antena', tech: 'ANTENA', name: "Antena Plus", speed: "40", price: "500", badge: "Popular", destacado: true, img: "/assets/antena-mesh.png" },
    { id: 6, tipo: 'camara', tech: 'SEGURIDAD', name: "Kit Vigilante", speed: "100", price: "799", badge: "Protección", img: "/assets/camara-wifi.png" },
  ];

  const filtrados = filtro === 'todos' ? paquetes : paquetes.filter(p => p.tipo === filtro);

  return (
    <div className="vk-catalogo-page">
      <div className="catalogo-bg-glow"></div>
      
      <header className="catalogo-hero">
        <div className="tag-neon">
          <Sparkle size={16} /> <span>CATÁLOGO 2024</span>
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
          <Card key={p.id} variant={p.destacado ? 'featured' : 'default'} className="catalogo-card-visual">
            <div className="card-visual-header">
              <div className={`glow-effect glow-${p.tech.toLowerCase()}`}></div>
              <img src={p.img} alt={p.name} className="product-img-float" />
              <span className="tech-badge">{p.tech}</span>
            </div>

            <div className="card-body">
              <div className="card-info-main">
                <h3>{p.name}</h3>
                <div className="cat-speed-pill">{p.speed} Mbps</div>
              </div>
              
              <div className="cat-price">
                <span className="symbol">$</span>{p.price}<small>/mes</small>
              </div>

              <Button 
                variant={p.destacado ? 'primary' : 'outline'} 
                className="mt-auto w-full"
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