'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Paragraph from '@/components/ui/Paragraph';
const slides = [
  {
    text: 'Transform Your Business with Generative AI',
    description:
      'Unlock new levels of innovation and efficiency with our cutting-edge generative AI solutions.',
    image: '/images/sliderpic.jpg',
  },
  {
    text: 'Tailored Solutions for Your Unique Business Needs',
    description:
      'Our custom service solutions are designed to meet the specific challenges and goals of your business',
    image: '/images/slider2.jpg',
  },
  {
    text: 'Trusted by Industry Leaders Like Meta',
    description:
      'Join forces with top companies like Meta who trust our expertise to drive their business forward',
    image: '/images/sliderpic.jpg',
  },
];

interface SliderProps {
  id: string;
}

const Slider: React.FC<SliderProps> = ({ id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayInterval = 5000;
  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id={id}>
      <div className="relative overflow-hidden bg-light-white shadow-md mt-1">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full flex flex-col lg:flex-row items-center justify-center px-8 md:px-12 lg:px-36 py-12 md:py-20 lg:py-24 gap-8"
            >
              <div className="lg:w-1/2 w-full text-left">
                <p className=" text-hh7 sm:text-hh10 lg:text-hh13  text-lineHeight-h1 text-fontWeight-h1 font-bold text-black mt-1">
                  {slide.text}
                </p>
                <div className="mt-1">
                  <Paragraph
                    color="black"
                    title={slide.description}
                  ></Paragraph>
                </div>
                <div className="mt-5">
                  <Button title="Learn More"></Button>
                </div>
              </div>
              <div className="lg:w-1/2 w-full flex justify-center ">
                <div className="w-full h-[405px] overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={slide.text}
                    width={556}
                    height={405}
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrevClick}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-orange-primary w-12 h-12 flex items-center justify-center bg-white rounded-full hover:shadow-md"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handleNextClick}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-orange-primary w-12 h-12 flex items-center justify-center bg-white rounded-full hover:shadow-md"
        >
          <ChevronRight />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-orange-primary' : 'border-2 border-orange-primary'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
