import React from 'react';
import { Button } from '../ui/Button';
import { ShieldCheck, HardHat, CheckCircle } from 'lucide-react';
import '../styles/Hero.css';

export function Hero() {
  return (
    <section className="vk-hero">
      <div className="hero-main-glow"></div>

      {/* LADO DERECHO: VISUAL */}
      <div className="vk-hero-visual">
        <div className="hero-img-mask">
          <img 
            src="/fondo_hero.jpeg" 
            alt="Técnico Verkkom" 
            className="hero-main-img"
          />
        </div>
        <div className="floating-ui item-1">
          <ShieldCheck size={16} color="#02f695" /> <span>Red Segura</span>
        </div>
        <div className="floating-ui item-2">
          <CheckCircle size={16} color="#02f695" /> <span>Velocidad Asegurada</span>
        </div>
      </div>

      <div className="vk-hero-container">
        <div className="vk-hero-content">
          <div className="vk-hero-tag">
            <HardHat size={14} />
            <span>Infraestructura Propia</span>
          </div>
          
          {/* Texto más impactante y grande */}
          <h1>EL INTERNET <br/><span>QUE MERECES</span></h1>
          
          <p>
            Experimenta el poder de la fibra óptica real. Sin intermediarios, 
            sin caídas, solo velocidad pura.
          </p>

          <div className="vk-hero-btns">
            <Button variant="primary" className="btn-hero-main">
              CONTRATAR AHORA
            </Button>
            <Button variant="outline" className="btn-hero-sec">
              VER PLANES
            </Button>
          </div>
        </div>
      </div>
      
      <div className="scan-line"></div>
    </section>
  );
}