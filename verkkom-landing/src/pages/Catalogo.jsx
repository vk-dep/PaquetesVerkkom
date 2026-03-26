import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { LeadModal } from '../ui/LeadModal'; // 1. IMPORTAMOS EL MODAL
import { Sparkle } from 'lucide-react';
import '../styles/Catalogo.css';

export function Catalogo() {
  const [filtro, setFiltro] = useState('todos');
  
  // 2. ESTADOS PARA EL MODAL Y EL PLAN
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [planParaModal, setPlanParaModal] = useState("");

  // 3. FUNCIÓN ACTUALIZADA: Ahora abre el modal en lugar de WhatsApp
  const handleContratar = (plan) => {
    setPlanParaModal(plan); // Guardamos el nombre del plan
    setIsModalOpen(true);    // Abrimos el modal
  };

  const paquetes = [
    { id: 1, tipo: 'fibra', tech: 'FIBRA', name: "Paquete 100M", speed: "100", price: "500", badge: "Básico", img: "https://res.cloudinary.com/dkor1vopn/image/upload/v1774552939/d7d0073e-fec6-47ea-b220-fb5c24d4ebc3.png" },
    { id: 2, tipo: 'fibra', tech: 'FIBRA', name: "Paquete 150M", speed: "150", price: "600", badge: "Popular", destacado: true, img: "https://res.cloudinary.com/dkor1vopn/image/upload/v1774553108/c9e168b4-375c-45d5-8b32-f771b8c9d5cd.png" },
    { id: 3, tipo: 'fibra', tech: 'FIBRA', name: "Paquete 200M", speed: "200", price: "700", badge: "Oferta", img: "https://res.cloudinary.com/dkor1vopn/image/upload/v1774553174/f0b73105-dc14-423c-9c50-0fb4c5341b0a.png" },
    { id: 4, tipo: 'antena', tech: 'ANTENA', name: "Paquete 30M", speed: "30", price: "400", badge: "Económico", img: "https://res.cloudinary.com/dkor1vopn/image/upload/v1774551039/09e697ff-20df-4cec-b23f-9de8354308e2.png" },
    { id: 5, tipo: 'antena', tech: 'ANTENA', name: "Paquete 40M", speed: "40", price: "500", badge: "Popular", destacado: true, img: "https://res.cloudinary.com/dkor1vopn/image/upload/v1774551009/5f9f1cc8-5e92-49ed-bf18-542a8946f553.png" },
    { id: 6, tipo: 'antena', tech: 'ANTENA', name: "Paquete 50M", speed: "50", price: "500", badge: "Oferta", img: "https://res.cloudinary.com/dkor1vopn/image/upload/v1774551087/3922ea95-1aa9-4a35-bbc2-9412504e6149.png" },
    { id: 7, tipo: 'camara', tech: 'SEGURIDAD', name: "Paquete 40M", speed: "40", price: "799", badge: "Protección", img: "https://res.cloudinary.com/dkor1vopn/image/upload/v1774549039/cbc9e5f6-9e3c-4f88-8130-d3988bc192f9.png" },
    { id: 8, tipo: 'camara', tech: 'SEGURIDAD', name: "Paquete 50M", speed: "50", price: "799", badge: "Protección", img: "https://res.cloudinary.com/dkor1vopn/image/upload/v1774548905/95db7a86-70f2-4ae8-8ff5-c42124353e5d.png" },
    { id: 9, tipo: 'camara', tech: 'SEGURIDAD', name: "Paquete 100M", speed: "100", price: "799", badge: "Protección", destacado: true,img: "https://res.cloudinary.com/dkor1vopn/image/upload/v1774552619/f2524de9-70f5-4756-bc11-ac9be2678db9.png" },
    { id: 10, tipo: 'camara', tech: 'SEGURIDAD', name: "Paquete 150M", speed: "150", price: "799", badge: "Protección", img: "https://res.cloudinary.com/dkor1vopn/image/upload/v1774551942/c9ce276f-32bf-4d9a-a547-1e1d89a2100a.png" },
    { id: 11, tipo: 'camara', tech: 'SEGURIDAD', name: "Paquete 200M", speed: "200", price: "799", badge: "Protección", img: "https://res.cloudinary.com/dkor1vopn/image/upload/v1774552283/7e16d8f7-1e59-4d16-8b44-2eb5a9ae48f7.png" }
  ];

  const filtrados = filtro === 'todos' ? paquetes : paquetes.filter(p => p.tipo === filtro);

  return (
    <div className="vk-catalogo-page">
      <div className="catalogo-bg-glow"></div>
      
      <header className="catalogo-hero">
        <div className="tag-neon">
          <Sparkle size={16} /> <span>CATÁLOGO 2026</span>
        </div>
        <h1>Planes Sin <span>Excusas</span></h1>
      </header>

      <div className="filter-container">
        {['todos', 'fibra', 'antena', 'camara'].map(f => (
          <button 
            key={f} 
            onClick={() => setFiltro(f)} 
            className={filtro === f ? 'active' : ''}
          >
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
                onClick={() => handleContratar(p.name)} // <--- Llama a la nueva lógica
              >
                Suscribirme
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* 4. INSERTAMOS EL MODAL AL FINAL DEL COMPONENTE */}
      <LeadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedPlan={planParaModal} 
      />
    </div>
  );
}