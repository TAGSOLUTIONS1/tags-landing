import Image from 'next/image';
import React from 'react';

const AboutEmpoweringBusiness: React.FC = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:p-14 lg:p-16 xl:p-20 gap-10 md:gap-20 justify-center">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="mx-auto space-y-3">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-primary text-center md:text-left">
            Empowering Businesses with Innovative B2B Solutions
          </p>
          <p className="text-dark-secondary text-sm md:text-base font-medium text-center md:text-left">
            As a competitive, certified company, Tags delivers excellence
            through custom solutions designed to meet your unique business
            needs.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 justify-center items-center">
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          <div className="flex justify-center items-center bg-custom-gradient2 border border-light-background p-4 md:p-6 rounded-3xl">
            <Image
              src="/logo/b2b1.png"
              alt="Award 1"
              className="w-full h-auto"
              width={126}
              height={128}
            />
          </div>
          <div className="flex justify-center items-center bg-custom-gradient2 border border-light-background p-4 md:p-6 rounded-3xl">
            <Image
              src="/logo/b2b2.png"
              alt="Award 2"
              className="w-full h-auto"
              width={126}
              height={128}
            />
          </div>
          <div className="flex justify-center items-center bg-custom-gradient2 border border-light-background p-4 md:p-6 rounded-3xl">
            <Image
              src="/logo/b2b4.png"
              alt="Award 3"
              className="w-full h-auto"
              width={126}
              height={128}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
          <div className="flex justify-center items-center bg-custom-gradient2 border border-light-background p-4 md:p-6 rounded-3xl">
            <Image
              src="/logo/b2b4.png"
              alt="Award 4"
              className="w-full h-auto"
              width={126}
              height={128}
            />
          </div>
          <div className="flex justify-center items-center bg-custom-gradient2 border border-light-background p-4 md:p-6 rounded-3xl">
            <Image
              src="/logo/b2b5.png"
              alt="Award 5"
              className="w-full h-auto"
              width={120}
              height={128}
            />
          </div>
          <div className="flex justify-center items-center bg-custom-gradient2 border border-light-background p-4 md:p-6 rounded-3xl">
            <Image
              src="/logo/b2b6.png"
              alt="Award 6"
              className="w-full h-auto"
              width={126}
              height={128}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEmpoweringBusiness;
