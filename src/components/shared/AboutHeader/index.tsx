import React from 'react';

const AboutHeader: React.FC = () => {
  return (
    <div className="text-center py-12 sm:py-16 px-4">
      <h3 className="text-orange-primary text-base sm:text-lg font-semibold uppercase mb-2">
        About Us
      </h3>
      <h1 className="text-3xl sm:text-5xl font-bold text-dark-nameclr mb-4">
        Your Vision, Our Innovation
      </h1>
      <p className="text-dark-p4 text-sm sm:text-lg mb-6 w-full sm:w-4/5 md:w-3/4 lg:w-1/2 mx-auto">
        Tag Solutions is dedicated to providing custom B2B services that help
        businesses thrive. From tailored software to specialized tech
        strategies, we deliver solutions designed to meet your specific needs.
      </p>
      <button className="bg-orange-primary text-white py-2 px-6 sm:py-3 sm:px-8 rounded-xl shadow-lg hover:bg-orange-600 transition duration-300 text-sm sm:text-base">
        Contact us
      </button>
    </div>
  );
};

export default AboutHeader;
