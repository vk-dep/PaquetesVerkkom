import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import { ShieldCheck, Radio, Zap, Clock } from 'lucide-react';
import 'maplibre-gl/dist/maplibre-gl.css';
import '../styles/Cobertura.css';

export function MapaCobertura() {
    const mapContainer = useRef(null);

    useEffect(() => {
        const map = new maplibregl.Map({
            container: mapContainer.current,
            // Cambiado a 'nolabels' para que el mapa permanezca limpio y usar nuestras etiquetas
            style: 'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json', 
            // Centro ajustado para abarcar el triángulo Pesquería-Zuazua-Salinas
            center: [-100.12, 25.88], 
            zoom: 10.2, // Zoom ideal para ver las 3 zonas
            
            /* --- BLOQUEO TOTAL DEL MAPA --- */
            interactive: false,
            dragPan: false,
            scrollZoom: false,
            boxZoom: false,
            dragRotate: false,
            keyboard: false,
            doubleClickZoom: false,
            touchZoomRotate: false,
            attributionControl: false
        });

        const puntos = [
            { coords: [-100.05, 25.78], city: 'Pesquería', status: 'active' },
            { coords: [-100.29, 25.96], city: 'Salinas Victoria', status: 'active' },
            { coords: [-100.11, 25.89], city: 'Zuazua', status: 'soon' }
        ];

        puntos.forEach(p => {
            // Creamos el contenedor del marcador con el puntito
            const el = document.createElement('div');
            el.className = `marker-tech ${p.status}`;
            
            const dot = document.createElement('div');
            dot.className = 'dot-core';
            el.appendChild(dot);

            const pulse = document.createElement('div');
            pulse.className = 'dot-pulse';
            el.appendChild(pulse);

            // Creamos la etiqueta con el nombre de la ciudad
            const label = document.createElement('div');
            label.className = `city-label ${p.status}`;
            label.innerText = p.city;
            el.appendChild(label);

            new maplibregl.Marker(el)
                .setLngLat(p.coords)
                .addTo(map);
        });

        return () => map.remove();
    }, []);

    return (
        <section className="vk-coverage-section" id="cobertura">
            <div className="coverage-wrapper">
                <div className="coverage-content">
                    <div className="tag-industrial">
                        <ShieldCheck size={14} /> <span>RED PROPIA VERKKOM</span>
                    </div>
                    <h2 className="main-title">Conectividad <br/><span className="neon-text">INTELIGENTE</span></h2>
                    <p className="main-desc">
                        Infraestructura diseñada para los motores industriales de Nuevo León. 
                        Cobertura garantizada en zonas estratégicas.
                    </p>

                    <div className="coverage-status-list">
                        <div className="status-item active">
                            <div className="status-indicator"></div>
                            <div className="text-box">
                                <h4>Pesquería</h4>
                                <p>SERVICIO ACTIVO</p>
                            </div>
                        </div>

                        <div className="status-item active">
                            <div className="status-indicator"></div>
                            <div className="text-box">
                                <h4>Salinas Victoria</h4>
                                <p>SERVICIO ACTIVO</p>
                            </div>
                        </div>

                        <div className="status-item soon">
                            <div className="status-indicator"></div>
                            <div className="text-box">
                                <h4>Zuazua</h4>
                                <p className="soon-label">PRÓXIMAMENTE 2026</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="map-visual-container">
                    <div ref={mapContainer} className="map-view no-interact" />
                    <div className="map-shadow-overlay"></div>
                </div>
            </div>
        </section>
    );
}