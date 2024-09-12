import React from 'react';
import Industryservices from '@/components/ui/Industryservices';

const industries = [
  {
    title: 'Technology',
    description:
      'Innovative IT solutions to enhance security and streamline operations data.',
    imageUrl: '/images/industry1.jpeg',
  },
  {
    title: 'Education',
    description:
      'Transforming education with digital tools, e-learning platforms, and IT infrastructure support.',
    imageUrl: '/images/industry2.jpeg',
  },
  {
    title: 'Finance',
    description:
      'Revolutionizing finance with digital solutions, online platforms, and IT infrastructure support.',
    imageUrl: '/images/industry3.jpeg',
  },
];

interface ServicesProps {
  id: string;
}

const IndustriesweServe: React.FC<ServicesProps> = ({ id }) => {
  return (
    <section id={id} className="mt-20">
      <div className="container mx-auto text-center">
        <h2 className="text-hh7 md:text-hh9 font-bold text-dark-secondary">
          Industries We Served
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-4 xl:mx-36 mt-5">
          {industries.map((industry) => (
            <Industryservices
              key={industry.title}
              title={industry.title}
              description={industry.description}
              image={industry.imageUrl}
            />
          ))}
        </div>
        <div className="mt-8">
          <a href="/Industry">
            <button className="bg-orange-primary text-white px-5 py-3 h-12 rounded-lg font-bold hover:bg-orange-600">
              Explore All Industries
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustriesweServe;
