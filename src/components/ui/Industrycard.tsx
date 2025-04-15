import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgImageUrl: string;
}

const Industrycard: React.FC<CardProps> = ({
  title,
  description,
  icon,
  bgImageUrl,
}) => {
  return (
    <div className="relative overflow-hidden rounded-3xl w-full cursor-pointer transform transition-transform hover:scale-105 shadow-md">
      <Image
        src={bgImageUrl}
        alt="Card Background"
        fill
        className="absolute inset-0 bg-industry object-cover"
        priority
      />
      <div className="absolute inset-0 bg-industry"></div>{' '}
      <div className="relative z-10 flex flex-col justify-between h-full p-6 rounded-3xl">
        <div className="text-3xl flex justify-between text-black">{icon}</div>
        <div className="flex-grow">
          <h3 className="text-lg text-white font-semibold my-4">{title}</h3>
          <p className="text-white text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default Industrycard;
