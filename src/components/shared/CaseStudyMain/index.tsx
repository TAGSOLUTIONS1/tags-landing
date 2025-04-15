import React from 'react';
import Paragraph from '@/components/ui/Paragraph';
import Image from 'next/image';
import ReadMoreIcon from '@/components/ui/ReadMoreIcon';

const CaseStudyMain = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center rounded-2xl px-4 py-10 sm:px-6 md:px-10 mx-2 space-y-10 lg:space-y-0 lg:space-x-10">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src="/images/casestudytopcard.jpg"
          width={632}
          height={368}
          alt="Case Study"
          className="w-full max-w-[632px] h-auto rounded-[16px] border-[1px] object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 px-2 sm:px-4 lg:px-0 flex flex-col space-y-8">
        <div>
          <p className="text-dark-p4 text-xs font-medium bg-light-background rounded-[48px] p-2 inline-block">
            Generative AI
          </p>
        </div>
        <div>
          <p className="text-hh4 lg:text-hh6 text-black font-bold w-full">
            TAGS implemented a generative AI solution for a media company,
            automating content creation processes and enhancing creativity.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
          <div className="flex flex-col">
            <p className="text-h2 text-orange-button font-bold">21%</p>
            <Paragraph color={'dark-ceoclr'} title={'Increase in revenue'} />
          </div>
          <div className="flex flex-col">
            <p className="text-h2 text-orange-button font-bold">15%</p>
            <Paragraph
              color={'dark-ceoclr'}
              title={'Enhanced employee Creativity'}
            />
          </div>
        </div>
        <div className="font-semibold flex items-center space-x-3">
          <ReadMoreIcon />
          <Paragraph color={'dark-secondary'} title={'Read the case study'} />
        </div>
      </div>
    </div>
  );
};

export default CaseStudyMain;
