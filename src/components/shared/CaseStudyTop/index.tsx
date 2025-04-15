import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Next } from '@/components/svg/Next';

const CaseStudyTop = () => {
  return (
    <div className="bg-light-background w-full px-6 sm:px-10 lg:px-20 py-10 lg:py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-screen-xl mx-auto">
        {/* Left Section */}
        <div className="lg:w-1/2 w-full text-center sm:text-left flex flex-col justify-between space-y-5 items-center sm:items-start">
          <p className="text-orange-case text-sm sm:text-lg font-semibold">
            CASE STUDIES
          </p>
          <p className="text-p3 sm:text-hh8 lg:text-hh13 text-fontWeight-h1 font-bold sm:leading-tight text-black w-full sm:w-10/12">
            Success Stories: Technology That Delivers Impact
          </p>
          <p className="text-black text-sm sm:text-lg w-full sm:w-3/4">
            See how TAGS has helped businesses across industries achieve their
            goals with innovative tech solutions.
          </p>
          <Link href={'/#about-us'}>
            <button className="bg-orange-button text-white px-5 py-4 rounded-xl hover:bg-orange-600 flex items-center gap-3">
              Contact Us
              <Next />
            </button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="bg-white p-4 pb-7 text-justify rounded-2xl shadow-md w-full max-w-[600px]">
            <Image
              src="/images/casestudymain.jpg"
              alt="Success Story"
              width={600}
              height={300}
              className="rounded-lg w-full h-auto object-cover"
            />
            <Link href="/industry">
              <p className="text-dark-p4 mt-7 ml-5 underline text-base font-semibold">
                Learn More
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyTop;
