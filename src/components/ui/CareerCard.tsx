import React from 'react';
import Image from 'next/image';

interface CareerCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const CareerCard: React.FC<CareerCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-[300px] transition-transform transform hover:scale-105">
      <Image
        src={imageSrc}
        alt={title}
        width={400}
        height={250}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-[#E76621]">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
        <a
          href="#"
          className="text-[#E76621] font-medium mt-4 inline-block hover:underline"
        >
          Learn more &gt;
        </a>
      </div>
    </div>
  );
};

export default CareerCard;
