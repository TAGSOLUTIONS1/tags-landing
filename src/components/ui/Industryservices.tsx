import React from 'react';

interface ServicesProps {
  image: string;
  title: string;
  description: string;
}

const Industryservices = (props: ServicesProps) => {
  return (
    <div
      className="relative bg-cover bg-center h-[460px] w-full rounded-2xl overflow-hidden shadow-lg"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>{' '}
      {/* This adds a dark overlay */}
      <div className="absolute bottom-0 left-0 p-6 text-white z-10">
        <h3 className="text-lg font-semibold">{props.title}</h3>
        <p className="text-sm">{props.description}</p>
      </div>
    </div>
  );
};

export default Industryservices;
