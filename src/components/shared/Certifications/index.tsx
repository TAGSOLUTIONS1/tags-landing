'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Certifications: React.FC = () => {
  const logos = [
    { src: '/logo/google.png', alt: 'googlelogo' },
    { src: '/logo/openai.png', alt: 'openailogo' },
    { src: '/logo/microsoft.png', alt: 'microsoftlogo' },
    { src: '/logo/linkedin.png', alt: 'linkedinlogo' },
    { src: '/logo/hubspot.png', alt: 'hubspotlogo' },
    { src: '/logo/meta.png', alt: 'metalogo' },
    { src: '/logo/webflow.png', alt: 'webflowlogo' },
    { src: '/logo/google.png', alt: 'googlelogo' },
    { src: '/logo/openai.png', alt: 'openailogo' },
    { src: '/logo/microsoft.png', alt: 'microsoftlogo' },
    { src: '/logo/linkedin.png', alt: 'linkedinlogo' },
    { src: '/logo/hubspot.png', alt: 'hubspotlogo' },
    { src: '/logo/meta.png', alt: 'metalogo' },
    { src: '/logo/webflow.png', alt: 'webflowlogo' },
  ];

  return (
    <div className="mt-16">
      <p className="text-hh4 md:text-hh6  text-dark-secondary text-center">
        Our Employees are certified by Big Companies
      </p>
      <div className="mt-5">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          autoplay={{ delay: 500 }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 6.4,
            },
          }}
          className="mySwiper hover:mix-blend-normal mix-blend-luminosity"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="">
              <div className="mix-blend-luminosity">
                <Image
                  width={156}
                  height={60}
                  src={logo.src}
                  className="object-contain mix-blend-luminosity transition-all duration-300 w-[156px] h-[60px] pl-12 ml-20 sm:ml-0 sm:pl-0"
                  alt={logo.alt}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Certifications;
