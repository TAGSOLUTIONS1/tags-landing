import React from 'react';

const AboutMission: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-12">
      <div className="border-t pt-8 gap-4">
        <p className="text-orange-primary text-lg font-semibold">Our mission</p>
        <p className="text-dark-nameclr text-2xl font-semibold">
          Empowering Businesses Through Custom Solutions
        </p>
        <p className="text-dark-ceoclr text-lg font-normal">
          We are committed to driving business success by providing
          personalized, high-impact solutions that enhance efficiency,
          scalability, and growth for our clients.
        </p>
      </div>
      <div className="border-t pt-8 gap-4">
        <p className="text-orange-primary text-lg font-semibold">Our vision</p>
        <p className="text-dark-nameclr text-2xl font-semibold">
          Leading the Future of B2B Innovation
        </p>
        <p className="text-dark-ceoclr text-lg font-normal">
          We aim to be the foremost provider of innovative, custom-built
          services, shaping the future of B2B interactions through cutting-edge
          technology and unparalleled expertise.
        </p>
      </div>
    </div>
  );
};

export default AboutMission;
