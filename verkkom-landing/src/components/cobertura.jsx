import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import { Radio, Zap, Clock } from 'lucide-react';
import 'maplibre-gl/dist/maplibre-gl.css';
import '../styles/Cobertura.css';

export function MapaCobertura() {
    const mapContainer = useRef(null);

    useEffect(() => {
        const map = new maplibregl.Map({
            container: mapContainer.current,
            style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json', // Mapa normal/claro
            center: [-100.15, 25.88],
            zoom: 10,
        });

        const puntos = [
            { coords: [-100.05, 25.78], city: 'Pesquería', status: 'active' },
            { coords: [-100.29, 25.96], city: 'Salinas Victoria', status: 'active' },
            { coords: [-100.11, 25.89], city: 'Zuazua', status: 'soon' }
        ];

        puntos.forEach(p => {
            const el = document.createElement('div');
            el.className = `marker-verkkom ${p.status}`;
            new maplibregl.Marker(el).setLngLat(p.coords).addTo(map);
        });

        return () => map.remove();
    }, []);

    return (
        <section className="vk-coverage-section" id="cobertura">
            <div className="coverage-wrapper">

                <div className="coverage-content">
                    <div className="tag-industrial">RED NACIONAL</div>
                    <h2 className="main-title">Conectividad sin <span className="neon-text">Fronteras</span></h2>
                    <p className="main-desc">
                        Nuestra red se expande para llevar internet real a las zonas que mueven la economía de Nuevo León.
                    </p>

                    <div className="coverage-status-list">
                        <div className="status-item active">
                            <Radio size={22} color="#02f695" />
                            <div className="text-box">
                                <h4>Pesquería</h4>
                                <p>SERVICIO ACTIVO</p>
                            </div>
                        </div>

                        <div className="status-item active">
                            <Zap size={22} color="#02f695" />
                            <div className="text-box">
                                <h4>Salinas Victoria</h4>
                                <p>SERVICIO ACTIVO</p>
                            </div>
                        </div>

                        <div className="status-item soon">
                            <Clock size={22} color="#37a4dc" />
                            <div className="text-box">
                                <h4>Zuazua</h4>
                                <p className="soon-label">PRÓXIMAMENTE 2026</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="map-visual-container">
                    <div ref={mapContainer} className="map-view" />
                </div>

            </div>
        </section>
    );
}