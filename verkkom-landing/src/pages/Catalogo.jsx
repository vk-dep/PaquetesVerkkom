import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Check, Wifi, Zap, Video, ArrowLeft, Sparkle } from 'lucide-react';
import '../styles/Catalogo.css';

export function Catalogo() {
  const navigate = useNavigate();
  const [filtro, setFiltro] = useState('todos');

  const todosLosPaquetes = [
    // --- FIBRA (Mantenemos el orden lógico) ---
    { id: 4, tipo: 'fibra', tecnologia: 'FIBRA', name: "Fibra 100", speed: "100 Mbps", price: "500", features: ["$0 Costo Instalación", "Simetría Total"], badge: "Básico" },
    { id: 5, tipo: 'fibra', tecnologia: 'FIBRA', name: "Fibra 150", speed: "150 Mbps", price: "700", features: ["$0 Costo Instalación", "Baja Latencia"], badge: "Popular", destacado: true },
    { id: 6, tipo: 'fibra', tecnologia: 'FIBRA', name: "Fibra 200", speed: "200 Mbps", price: "600", features: ["$0 Costo Instalación"], badge: "Oferta" },

    // --- ANTENA ---
    { id: 1, tipo: 'antena', tecnologia: 'ANTENA', name: "Antena Start", speed: "30 Mbps", price: "400", features: ["1er Mes GRATIS", "Instalación: $1,000"], badge: "Económico" },
    { id: 2, tipo: 'antena', tecnologia: 'ANTENA', name: "Antena Plus", speed: "40 Mbps", price: "500", features: ["1er Mes GRATIS", "Instalación: $1,000"], badge: "Popular", destacado: true },
    { id: 3, tipo: 'antena', tecnologia: 'ANTENA', name: "Antena Max", speed: "50 Mbps", price: "600", features: ["1er Mes GRATIS", "Instalación: $1,000"], badge: "Pro" },

    // --- CÁMARAS (PRIMERA FILA: FIBRA) ---
    { id: 9, tipo: 'camara', tecnologia: 'FIBRA', name: "Fibra + Seg", speed: "100 Mbps", price: "799", features: ["1 Cámara Incluida", "Activación s/ mensualidad"], badge: "Seguridad" },
    { id: 10, tipo: 'camara', tecnologia: 'FIBRA', name: "Fibra Vig", speed: "150 Mbps", price: "899", features: ["2 Cámaras Incluidas", "Activación s/ mensualidad"], badge: "Doble", destacado: true },
    { id: 11, tipo: 'camara', tecnologia: 'FIBRA', name: "Fibra Blindaje", speed: "200 Mbps", price: "1199", features: ["4 Cámaras Incluidas", "Activación s/ mensualidad"], badge: "Total" },

    // --- CÁMARAS (SEGUNDA FILA: ANTENA) ---
    { id: 7, tipo: 'camara', tecnologia: 'ANTENA', name: "Antena + Seg", speed: "40 Mbps", price: "799", features: ["1 Cámara Incluida", "Activación s/ mensualidad"], badge: "Seguridad" },
    { id: 8, tipo: 'camara', tecnologia: 'ANTENA', name: "Antena Vig", speed: "50 Mbps", price: "899", features: ["2 Cámaras Incluidas", "Activación s/ mensualidad"], badge: "Doble", destacado: true },
  ];

  const filtrados = filtro === 'todos' ? todosLosPaquetes : todosLosPaquetes.filter(p => p.tipo === filtro);

  return (
    <div className="vk-catalogo-page">
      <nav className="back-nav">
        <button className="back-btn" onClick={() => navigate('/')}>
          <ArrowLeft size={18} /> Volver a Inicio
        </button>
      </nav>

      <header className="catalogo-hero">
        <div className="tag-neon">
          <Sparkle size={16} fill="currentColor" />
          <span>CATÁLOGO JYB WIFI</span>
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

      <div className="catalogo-grid">
        {filtrados.map((p) => (
          <Card key={p.id} badge={p.badge} variant={p.destacado ? 'featured' : 'default'} className="catalogo-card-visual">
            <div className="card-body">
              <span className={`tech-tag tech-${p.tecnologia.toLowerCase()}`}>
                {p.tecnologia}
              </span>

              <div className="cat-icon-area">
                {p.tecnologia === 'FIBRA' ? <Zap size={32} color="#37a4dc" /> : <Wifi size={32} color="#02f695" />}
              </div>

              <h3>{p.name}</h3>
              <div className="cat-price"><span>$</span>{p.price}</div>
              <p className="cat-speed">{p.speed}</p>

              <ul className="cat-list">
                {p.features.map((feat, i) => <li key={i}><Check size={14} color="#02f695" /> {feat}</li>)}
              </ul>

              <Button variant={p.destacado ? 'primary' : 'outline'} className="mt-auto">
                Contratar
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}