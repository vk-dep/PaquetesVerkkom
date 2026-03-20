import React from 'react';
import { Zap, History, ZapOff, Globe } from 'lucide-react';
import '../styles/Beneficios.css';

export function Beneficios() {
  const benefits = [
    {
      icon: <Zap size={30} />,
      title: "Home to Home",
      desc: "Fibra óptica pura desde nuestra central hasta tu equipo sin pérdida de señal."
    },
    {
      icon: <History size={30} />,
      title: "Regla 24 Horas",
      desc: "Si no resolvemos tu reporte en menos de 24 horas, abonamos días a tu cuenta."
    },
    {
      icon: <ZapOff size={30} />,
      title: "Baja Latencia",
      desc: "Infraestructura propia de alto rendimiento para gaming y streaming 4K."
    },
    {
      icon: <Globe size={30} />,
      title: "Cobertura Total",
      desc: "Llegamos donde otros no pueden en Pesquería, Zuazua y Salinas."
    }
  ];

  return (
    <section className="vk-features-clean">
      <div className="features-inner">

        <div className="features-header">
          <span className="features-tag">✦ Por qué elegirnos</span>
          <h2>Beneficios de <br /><span>VERKKOM</span></h2>
          <p className="features-tagline">
            Tecnología industrial de alta capacidad con la cercanía que tu hogar necesita.
          </p>
        </div>

        <div className="features-grid-four">
          {benefits.map((item, index) => (
            <div key={index} className="benefit-card-white">
              <div className="feature-icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}