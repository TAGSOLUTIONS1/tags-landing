import React from 'react';
import Image from 'next/image';
import { TagsValuesCard } from '@/components/ui/TagsValuesCard';
import { Collaboration } from '@/components/svg/Collaboration';
import { Growth } from '@/components/svg/Growth';
import { Innovation } from '@/components/svg/Innovation';
import { Integrity } from '@/components/svg/Integrity';

export const AboutTagsValues = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-16">
        <div className="space-y-5 lg:pr-5">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-dark-nameclr">
            TAGS&apos; values
          </h2>
          <p className="mt-4 text-dark-ceoclr text-sm md:text-base lg:text-lg">
            We foster personal and professional development, enabling our
            clients to prosper with us. Core values illuminate our journey to
            excellence.
          </p>
          <Image
            src="/images/tagsvalues.jpg"
            alt="Office team"
            className="rounded-3xl shadow-lg"
            layout="responsive"
            width={381}
            height={100}
          />
        </div>

        <div className="grid grid-cols-1 gap-8 2xl:pl-20">
          <TagsValuesCard
            title={'Growth'}
            icon={<Growth />}
            description={
              'We believe in fostering sustainable growth by delivering solutions that scale with your business.'
            }
          />
          <TagsValuesCard
            title={'Collaboration'}
            icon={<Collaboration />}
            description={
              'We partner closely with our clients, ensuring our services align with your goals and exceed expectations.'
            }
          />
        </div>

        <div className="grid grid-cols-1 gap-8 2xl:pr-20">
          <TagsValuesCard
            title={'Innovation'}
            icon={<Innovation />}
            description={
              'Our team constantly pushes the boundaries of technology to bring you the most cutting-edge solutions.'
            }
          />
          <TagsValuesCard
            title={'Integrity'}
            icon={<Integrity />}
            description={
              'We uphold the highest standards of honesty and transparency, building trust through every interaction.'
            }
          />
        </div>
      </div>
    </>
  );
};
