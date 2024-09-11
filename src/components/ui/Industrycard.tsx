import React from 'react';
import Nextarrow from '../svg/Nextarrow';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Industrycard: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col justify-between bg-white rounded-3xl p-6 w-full shadow-md transition-transform transform hover:scale-105 cursor-pointer">
      <div className="text-3xl flex justify-between">
        {icon}
        <Nextarrow></Nextarrow>
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold my-4">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Industrycard;
