import React from 'react';
import Image from 'next/image';

const AboutImageSection: React.FC = () => {
  return (
    <div className="flex gap-8 p-12">
      <div className="w-2/5 h-auto relative">
        <Image
          src="/images/aboutus1.jpg"
          alt="Team working together"
          className="rounded-lg w-full h-auto object-cover"
          layout="responsive"
          height={540}
          width={1000}
        />
      </div>
      <div className="w-4/6 h-auto relative">
        <Image
          src="/images/aboutus2.jpg"
          alt="Presentation in office"
          className="rounded-lg w-full h-auto object-cover"
          layout="responsive"
          height={560}
          width={1000}
        />
      </div>
    </div>
  );
};

export default AboutImageSection;
