import React from 'react';
import { Card } from '../ui/Card'; // Importamos el componente reutilizable
import { Zap, ShieldCheck, Globe, History, ZapOff } from 'lucide-react';
import '../styles/Beneficios.css';

export function Beneficios() {
  const benefits = [
    {
      icon: <Zap size={34} />,
      title: "Home to Home",
      desc: "Fibra óptica pura desde nuestra central hasta tu equipo. Sin intermediarios, sin pérdida de señal, solo velocidad real."
    },
    {
      icon: <History size={34} />,
      title: "Regla 24 Horas",
      desc: "Si no resolvemos tu reporte técnico en menos de 24 horas, abonamos los días proporcionales a tu cuenta automáticamente."
    },
    {
      icon: <ZapOff size={34} />,
      title: "Baja Latencia Industrial",
      desc: "Infraestructura propia de alto rendimiento, ideal para gaming, streaming y procesos industriales exigentes."
    },
    {
      icon: <Globe size={34} />,
      title: "Cobertura en Nuevo León",
      desc: "Especialistas en la conectividad de Apodaca, Pesquería y zonas industriales. Llegamos donde otros no pueden."
    }
  ];

  return (
    <section className="vk-features-dark">
      <div className="features-inner">

        <div className="features-header">
          <span className="features-tag">✦ QUÉ OFRECEMOS</span>
          <h2>Beneficios de <br /><span>JYB WIFI</span></h2>
          <p className="features-tagline">
            Tecnología industrial de alta capacidad, con la garantía y la cercanía que tu empresa y hogar necesitan en NL.
          </p>
        </div>

        <div className="features-grid">
          {benefits.map((item, index) => (
            /* Usamos el componente Card en lugar de un div manual */
            <Card key={index} className="benefit-card-adjust">
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}