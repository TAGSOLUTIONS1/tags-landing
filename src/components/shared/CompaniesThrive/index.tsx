'use client';
import React, { useState } from 'react';
import Heading from '@/components/ui/Heading';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import OpenAI from '../../../../public/logo/openai.png';

const slides = [
  {
    text: 'Transform Your Business with Generative AI',
    description:
      'Implemented an AI system to tailor user experiences with real-time recommendations. This increased relevance and engagement across the platform.',
  },
  {
    text: 'Transform Your Business with Generative AI',
    description:
      'head2 Implemented an AI system to tailor user experiences with real-time recommendations. This increased relevance and engagement across the platform.',
  },
  {
    text: 'Transform Your Business with Generative AI',
    description:
      'head 3 Implemented an AI system to tailor user experiences with real-time recommendations. This increased relevance and engagement across the platform.',
  },
  {
    text: 'Transform Your Business with Generative AI',
    description:
      'head4 Implemented an AI system to tailor user experiences with real-time recommendations. This increased relevance and engagement across the platform.',
  },
];

interface CompaniesProps {
  id: string;
}

const CompaniesThrive: React.FC<CompaniesProps> = ({ id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <section id={id}>
      <div className="mt-32">
        <div className="ml-36">
          <Heading color="black" title="How Companies Thrive With Us" />
          <p className="text-p3 text-dark-ceoclr">
            Here’s how businesses succeeded after switching to our custom
            services.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden mt-3 mb-10">
        <div className="mt-3 flex justify-end mr-40">
          <div className="p-3">
            <button
              onClick={handlePrevClick}
              className="transform text-black w-8 h-8 items-center justify-center flex bg-light-cutomwhite rounded-3xl hover:shadow-md"
            >
              <ChevronLeft />
            </button>
          </div>
          <div className="p-3">
            <button
              onClick={handleNextClick}
              className="transform text-black w-8 h-8 items-center justify-center flex bg-light-cutomwhite rounded-3xl hover:shadow-md"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 85}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0 transition-transform duration-500 lg:-mr-36"
                style={{ width: 'calc(100% - 40px)' }}
              >
                <div className="w-5/6 flex flex-col lg:flex-row items-center justify-center bg-light-white rounded-2xl">
                  <div className="lg:w-1/2 w-full p-7">
                    <div>
                      <Image src={OpenAI} alt="openai" width={87} height={36} />
                      <p className="text-p4 text-dark-p4 font-semibold mt-3">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesThrive;
