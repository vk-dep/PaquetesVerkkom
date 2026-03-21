import React from 'react';
import { Hero } from '../components/hero';
import { Beneficios } from '../components/beneficios'
import { Paquetes } from '../components/paquetes'
import { MapaCobertura } from '../components/cobertura';
import { CarruselInstalaciones } from '../components/Carrusel'
import { Soporte } from '../components/soporte';
import { Import } from 'lucide-react';
import { Nosotros } from '../components/Nosotros';
// Importa las demás cuando las crees:
// import { QueOfrecemos } from '../components/QueOfrecemos';

export function Home() {
  return (
    <div className="home-view">
      <Hero />
      <Beneficios />
      <CarruselInstalaciones />
      <Paquetes />
      <Soporte />
      <MapaCobertura />
      <Nosotros />
    </div>
  );
}