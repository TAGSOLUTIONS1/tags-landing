import Agencies from '@/components/svg/Agencies';
import Construction from '@/components/svg/Construction';
import Consulting from '@/components/svg/Consulting';
import Financial from '@/components/svg/Financial';
import Healthcare from '@/components/svg/Healthcare';
import InformationTechnologies from '@/components/svg/InformationTechnologies';
import Logistics from '@/components/svg/Logistics';
import Manufacturing from '@/components/svg/Manufacturing';
import MediaProduction from '@/components/svg/MediaProduction';
import Recruitement from '@/components/svg/Recruitement';
import Saas from '@/components/svg/Saas';
import Industrycard from '@/components/ui/Industrycard';
import React from 'react';

const IndustriesServeCards = () => {
  const cards = [
    {
      icon: <Agencies />,
      title: 'Agencies',
      description:
        'We help marketing and creative agencies ditch the busywork and focus on building client relationships.',
    },
    {
      icon: <Consulting />,
      title: 'Consulting',
      description:
        'We make the value prop of B2B consultants clear and captivating, securing more meetings with key decision-makers.',
    },
    {
      icon: <Financial />,
      title: 'Financial services',
      description:
        'We know how to craft and present your unique value proposition to make it resonate with your prospects.',
    },
    {
      icon: <Healthcare />,
      title: 'Healthcare',
      description:
        'Get up to 30 monthly appointments with B2B decision-makers in the health and medical sectors.',
    },
    {
      icon: <InformationTechnologies />,
      title: 'Information technologies',
      description:
        'Secure a predictable flow of appointments with prospects and scale your business even in the tightest market.',
    },
    {
      icon: <Logistics />,
      title: 'Logistics',
      description:
        'We handpick perfect-fit leads for your complex offerings, filling your pipeline with quality meetings.',
    },
    {
      icon: <Manufacturing />,
      title: 'Manufacturing',
      description:
        'We handpick perfect-fit leads for your complex offerings, filling your pipeline with quality meetings.',
    },
    {
      icon: <MediaProduction />,
      title: 'Media production',
      description:
        'Fill your sales pipeline with selected media production leads and get dozens of appointments with Belkins smart outreach.',
    },
    {
      icon: <Recruitement />,
      title: 'Recruitment and staffing',
      description:
        'We attract the perfect clients and candidates for your agency, saving you precious time and doubling ROI.',
    },
    {
      icon: <Saas />,
      title: 'SaaS services',
      description:
        'Enhance your sales pipeline with our expertise in generating high-quality prospects in the SaaS field.',
    },
    {
      icon: <Construction />,
      title: 'Digital Marketing',
      description:
        'Boost your software business with proven digital marketing and SEO strategies to drive traffic, increase visibility, and double your growth.',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
      {cards.map((card, index) => (
        <Industrycard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default IndustriesServeCards;
