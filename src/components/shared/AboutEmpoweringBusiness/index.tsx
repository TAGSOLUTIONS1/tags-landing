import Image from 'next/image';
import React from 'react';

const AboutEmpoweringBusiness: React.FC = () => {
  return (
    <div className="w-full flex flex-col md:flex-row px-4 sm:px-6 md:px-14 lg:px-16 xl:px-20 py-10 md:py-14 lg:py-16 gap-8 md:gap-20 justify-center items-center">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="space-y-4 text-center md:text-left max-w-md sm:max-w-lg">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-primary">
            Empowering Businesses with Innovative B2B Solutions
          </p>
          <p className="text-dark-secondary text-sm sm:text-base font-medium">
            As a competitive, certified company, Tags delivers excellence
            through custom solutions designed to meet your unique business
            needs.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          <div className="flex justify-center items-center bg-custom-gradient2 border border-light-background p-4 md:p-6 rounded-3xl">
            <Image
              src="/logo/cloud.png"
              alt="Cloud"
              width={90}
              height={70}
              className="w-[70px] sm:w-[90px] h-auto"
            />
          </div>
          <div className="flex justify-center items-center bg-custom-gradient2 border border-light-background p-4 md:p-6 rounded-3xl">
            <Image
              src="/logo/microsoft.png"
              alt="Microsoft"
              width={126}
              height={128}
              className="w-[70px] sm:w-[90px] h-auto"
            />
          </div>
          <div className="flex justify-center items-center bg-custom-gradient2 border border-light-background p-4 md:p-6 rounded-3xl">
            <Image
              src="/logo/aws.png"
              alt="AWS"
              width={90}
              height={60}
              className="w-[70px] sm:w-[90px] h-auto"
            />
          </div>
          <div className="flex justify-center items-center bg-custom-gradient2 border border-light-background p-4 md:p-6 rounded-3xl">
            <Image
              src="/logo/b2b6.png"
              alt="B2B"
              width={126}
              height={128}
              className="w-[70px] sm:w-[90px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEmpoweringBusiness;
