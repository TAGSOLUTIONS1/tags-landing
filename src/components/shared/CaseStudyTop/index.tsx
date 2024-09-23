import React from 'react';

export const CaseStudyTop: React.FC = () => {
  return (
    <section className="bg-gray-50 p-8 flex justify-between items-center">
      <div className="space-y-4 max-w-lg">
        <h2 className="text-orange-600 uppercase tracking-wide">Case Studies</h2>
        <h1 className="text-4xl font-bold">Success Stories: Technology That Delivers Impact</h1>
        <p className="text-gray-600">
          See how TAGS has helped businesses across industries achieve their goals with innovative tech solutions.
        </p>
        <button className="bg-orange-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-orange-600 transition">
          Contact us
        </button>
      </div>
      <div>
        <img src="/hero-image.jpg" alt="Team working" className="rounded-lg shadow-lg" />
        <button className="mt-4 underline text-gray-600 hover:text-gray-800 transition">Learn more</button>
      </div>
    </section>
  );
};
