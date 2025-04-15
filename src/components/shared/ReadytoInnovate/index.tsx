import React from 'react';

export const ReadytoInnovate = () => {
  return (
    <div className="bg-light-white w-full flex items-center justify-center py-10 sm:py-16 md:py-20 lg:py-24 xl:py-28 min-h-[350px] sm:min-h-[450px] lg:h-[536px] mb-10">
      <div className="w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 text-center space-y-6 sm:space-y-8">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Ready to Innovate? Let&apos;s Build the Future Together
        </p>
        <p className="text-sm sm:text-base">
          Transform your business with TAGS&apos;s cutting-edge technology
          solutions
        </p>
        <div className="flex items-center justify-center">
          <button className="bg-orange-button text-white px-5 gap-3 py-3 sm:py-4 rounded-xl hover:bg-orange-600 flex">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};
