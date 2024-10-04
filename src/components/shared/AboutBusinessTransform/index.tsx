import { Next } from '@/components/svg/Next';
import React from 'react';

export const AboutBusinessTransform: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/businesstransform.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        color: '#fff',
        margin: '20px',
        borderRadius: '15px',
        overflow: 'hidden',
      }}
    >
      <div className="w-4/5 p-12 rounded-3xl justify-between border border-white bg-custom-gradient-b backdrop-blur-24">
        <div className="flex flex-col md:flex-row">
          <div className="lg:pr-16 space-y-3 w-4/5">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Ready to Transform Your Business?
            </p>
            <p className="text-lg font-normal">
              Partner with us today and let&apos;s build your success together!
            </p>
          </div>
          <div className="flex justify-center items-center mt-5 md:mt-0">
            <button className="bg-orange-primary text-white px-5 gap-3 py-4 rounded-xl hover:bg-orange-600 flex">
              Contact Us
              <Next></Next>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
