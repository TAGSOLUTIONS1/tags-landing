import Button from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import Paragraph from '@/components/ui/Paragraph';
import React from 'react';

interface BusinessProps {
  id?: string;
}

const BusinessTransform: React.FC<BusinessProps> = ({ id }) => {
  return (
    <section id={id}>
      <div className="relative w-full h-screen mt-20 shadow-globe">
        <video
          className="absolute inset-0 w-full h-full object-cover rotate-180"
          src="/videos/spacex.mp4"
          autoPlay
          loop
          muted
        ></video>

        <div className="z-10 flex flex-col w-full h-full text-white">
          <div className="lg:w-2/6 sm:text-center lg:text-left lg:ml-48 relative top-36">
            <Heading
              title={'Transform Your Business with Global B2B Solutions'}
              color={'light-white'}
            ></Heading>
            <div className="mt-3">
              <Paragraph
                title="Unlock limitless opportunities with our tailor-made B2B services. From anywhere on Earth, we deliver solutions that elevate your business to new heights. Start your global journey today!"
                color="light-white"
              ></Paragraph>
            </div>

            <div className="relative w-full">
              <input
                type="text"
                placeholder="Enter your email address"
                className="relative w-full h-[66px] py-2 pl-2 pr-[150px] bg-light-white text-white rounded-lg border mt-6"
              />
              <div className="absolute inset-y-0 top-6 right-0 flex items-center pr-2">
                <Button title={'Contact Us'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessTransform;
