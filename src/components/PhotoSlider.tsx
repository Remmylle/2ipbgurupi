// src/components/PhotoSlider.tsx

"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Importa os estilos principais do Swiper e os módulos de navegação/paginação
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Define o tipo para as fotos
interface Photo {
  src: string;
  alt: string;
}

interface PhotoSliderProps {
  photos: Photo[];
}

export default function PhotoSlider({ photos }: PhotoSliderProps) {
  if (photos.length === 0) return null;

  return (
    <Swiper
      // Módulos que queremos usar (navegação por setas e paginação por bolinhas)
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={0} // Sem espaço entre os slides
      slidesPerView={1} // Mostra apenas uma foto por vez
      navigation // Ativa as setas de navegação
      pagination={{ clickable: true }} // Ativa as bolinhas de navegação
      loop={true} // Permite girar o carrossel infinitamente
      className="w-full h-full"
    >
      {photos.map((photo, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}