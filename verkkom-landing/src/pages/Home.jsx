import React from 'react';
import { Hero } from '../components/hero';
import { Beneficios } from '../components/beneficios'
import { Paquetes } from '../components/paquetes'
import { MapaCobertura } from '../components/cobertura';
import { Soporte } from '../components/soporte';
import { Catalogo } from '../pages/Catalogo'
// Importa las demás cuando las crees:
// import { QueOfrecemos } from '../components/QueOfrecemos';

export function Home() {
  return (
    <div className="home-view">
      <Hero />
      <Beneficios />
      <Paquetes />
      <Soporte />
      <MapaCobertura />
    </div>
  );
}