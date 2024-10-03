import React from 'react';
import { TagsPartnerCard } from '@/components/ui/TagsPartnerCard';

export const AboutPartners = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="space-y-5 lg:pr-5">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-dark-nameclr">
            Our Partners
          </h2>
          <p className="mt-4 text-dark-ceoclr text-sm md:text-base lg:text-lg">
            We team up with top innovators to deliver exceptional solutions that
            elevate your business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <TagsPartnerCard
            title={'LOGO'}
            description={
              'Our collaboration with FindXStorage ensures they have the advanced technology and secure infrastructure needed to offer top-tier storage solutions to their clients.'
            }
            button="Learn More"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 ">
          <TagsPartnerCard
            title={'LOGO'}
            description={
              'We support Have A Seat with tailored tech solutions that streamline their operations and enhance the efficiency of their overall company.'
            }
            button="Learn More"
          />
        </div>
      </div>
    </>
  );
};
