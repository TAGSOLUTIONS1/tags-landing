import Button from '@/components/ui/Button';
import Image from 'next/image';
import React from 'react';
import Paragraph from '@/components/ui/Paragraph';

const CareerHeader: React.FC = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center h-[500px] text-center bg-cover bg-center px-4 sm:px-6 md:px-8"
      style={{ backgroundImage: "url('/images/careerheader.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-55"></div>

      <div className="relative z-10 text-white w-full max-w-[800px] space-y-4">
        <div className="flex items-center space-x-2 justify-center">
          <Image
            src="/logo/tags.png"
            alt="Logo"
            width={25}
            height={25}
            className="h-[25px] w-[25px]"
          />
          <p className="text-white text-md font-semibold">TAG Solutions</p>
        </div>

        <h1 className="text-[30px] sm:text-[35px] md:text-[47px] text-white font-bold leading-tight">
          Shape the Future of Technology with Us
        </h1>

        <Paragraph
          title="Join our innovative team at Tags, where creativity meets technology. We’re passionate about building custom solutions that solve real-world challenges for businesses. If you’re looking for a place to grow, collaborate, and make an impact, you’ve found your home."
          color="white"
        />

        <Button title="View open positions" />
      </div>
    </div>
  );
};

export default CareerHeader;
