import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { RadioTower, Server, Camera, ShieldCheck, Antenna, Zap } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import '../styles/CarruselInstalaciones.css';

export function CarruselInstalaciones() {
  const slides = [
    {
      img: 'https://res.cloudinary.com/dkor1vopn/image/upload/v1774114172/img1_artruh.jpg', 
      title: 'Torres Propias', 
      desc: 'Salinas Victoria - 50m Altura', 
      icon: <RadioTower size={24} />
    },
    {
      img: 'https://res.cloudinary.com/dkor1vopn/image/upload/v1774114172/img3_zlia9q.jpg', 
      title: 'Enlaces Core', 
      desc: 'Tecnología de Microondas 10Gbps', 
      icon: <Zap size={24} />
    },
    {
      img: 'https://res.cloudinary.com/dkor1vopn/image/upload/v1774114172/img2_wwtblt.jpg', 
      title: 'Data Center', 
      desc: 'Arquitectura de Red Redundante', 
      icon: <Server size={24} />
    },
    {
      img: 'https://res.cloudinary.com/dkor1vopn/image/upload/v1774114172/img4_a3ldqx.jpg', 
      title: 'Monitoreo App', 
      desc: 'Vigilancia y Soporte 24/7', 
      icon: <Camera size={24} />
    },
    {
      img: 'https://res.cloudinary.com/dkor1vopn/image/upload/v1774114173/img5_d0rilx.jpg', 
      title: 'Nodos Estratégicos', 
      desc: 'Cobertura en Pesquería y Zuazua', 
      icon: <Antenna size={24} />
    },
    {
      img: 'https://res.cloudinary.com/dkor1vopn/image/upload/v1774114173/img6_psdl0a.jpg', 
      title: 'Nodos Estratégicos', 
      desc: 'Cobertura en Pesquería y Zuazua', 
      icon: <Antenna size={24} />
    }
  ];

  return (
    <section className="vk-infra-section">
      <div className="infra-container">
        
        <div className="infra-header">
          <div className="infra-tag">
            <RadioTower size={16} /> <span>COMPROMISO EN ACCION</span>
          </div>
          <h2 className="infra-title">Que nuestro trabajo hable más que nosotros <span className="neon">en cada conexión</span></h2>
        </div>

        <div className="swiper-viewport">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'} // Muestra partes de las fotos laterales
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1200: { slidesPerView: 3, spaceBetween: 40 }
            }}
            className="infra-swiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="infra-slide">
                <div className="infra-card">
                  <img src={slide.img} alt={slide.title} className="infra-img" />
                  <div className="infra-overlay">
                    <div className="infra-icon-box">{slide.icon}</div>
                    <div className="infra-info">
                      <h3>{slide.title}</h3>
                      <p>{slide.desc}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}