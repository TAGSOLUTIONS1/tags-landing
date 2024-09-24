import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Next } from '@/components/svg/Next';

const CaseStudyTop = () => {
  return (
    <>
      <div className="bg-light-background min-w-full flex flex-col lg:flex-row items-center justify-center px-14 lg:px-20 lg:py-16 gap-8">
        <div className="lg:w-1/2 w-full text-left flex flex-col justify-between space-y-4">
          <p className="text-orange-case text-lg font-semibold mt-5 lg:mt-0">
            CASE STUDIES
          </p>
          <p className="text-hh7 sm:text-hh8 lg:text-hh13 text-9xl text-fontWeight-h1 font-bold text-black w-10/12">
            Success Stories: Technology That Delivers Impact
          </p>
          <div className="">
            <p className="text-black text-lg w-3/4">
              See how TAGS has helped businesses across industries achieve their
              goals with innovative tech solutions.
            </p>
          </div>
          <Link href={'/#about-us'}>
            <div className="">
              <button className="bg-orange-button text-white px-5 gap-3 py-4 rounded-xl hover:bg-orange-600 flex">
                Contact Us
                <Next></Next>
              </button>
            </div>
          </Link>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="bg-white p-3 pb-7 text-justify rounded-2xl shadow-md">
            <Image
              src="/images/casestudymain.jpg"
              alt="Success Story"
              width={600}
              height={300}
              className="rounded-lg"
            />
            <Link href="/industry">
              <p className="text-dark-p4 mt-7 ml-5 underline text-base font-semibold">
                Learn More
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyTop;
