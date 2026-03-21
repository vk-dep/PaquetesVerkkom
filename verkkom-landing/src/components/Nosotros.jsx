import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { RadioTower, Target, Rocket, ShieldCheck, Lightbulb, Award, Handshake, Zap } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../styles/Nosotros.css';

// ... imports iguales
export function Nosotros() {
  const valores = [
    { nombre: "Integridad", icon: <ShieldCheck size={38} /> },
    { nombre: "Innovación", icon: <Lightbulb size={38} /> },
    { nombre: "Excelencia", icon: <Award size={38} /> },
    { nombre: "Compromiso", icon: <Handshake size={38} /> },
    { nombre: "Agilidad", icon: <Zap size={38} /> }
  ];

  return (
    <section className="vk-nosotros-section" id="nosotros">
      <div className="tower-bg-container">
        <RadioTower className="tower-svg" strokeWidth={0.5} />
      </div>

      <div className="nosotros-layout">
        {/* ARRIBA IZQUIERDA: MISIÓN */}
        <div className="node-container mission-node">
          <div className="node-circle">
            <Target className="node-icon" />
            <div className="node-glow"></div>
          </div>
          <div className="node-text">
            <h3>MISIÓN</h3>
            <p>Proporcionar <span>conectividad industrial</span> de alta capacidad a áreas estratégicas.</p>
          </div>
        </div>

        {/* ARRIBA DERECHA: VALORES */}
        <div className="values-module">
          <span className="values-tag">VALORES</span>
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect={'fade'}
            fadeEffect={{ crossFade: true }}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className="values-mini-swiper"
          >
            {valores.map((v, i) => (
              <SwiperSlide key={i}>
                <div className="value-item">
                  <div className="v-icon">{v.icon}</div>
                  <span className="v-name">{v.nombre}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ABAJO DERECHA: VISIÓN */}
        <div className="node-container vision-node">
          <div className="node-text align-right">
            <h3>VISIÓN</h3>
            <p>Liderar la siguiente generación de <span>redes industriales</span>.</p>
          </div>
          <div className="node-circle">
            <Rocket className="node-icon" />
            <div className="node-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}