import React from 'react';
import { CaseStudyTop } from '../CaseStudyTop';
import { CaseStudyCard } from '@/components/ui/CaseStudyCard';
import { CaseStudyLogoRow } from '../CaseStudyLogoRow';

export const MainLayout: React.FC = () => {
  return (
    <div className="space-y-12">
      <CaseStudyTop />
      <CaseStudyLogoRow />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        <CaseStudyCard
          imageSrc="/robotic-arm.jpg"
          title="AI solution for Media Company"
          description="TAGS implemented a generative AI solution for a media company, automating content creation processes and enhancing creativity."
          revenueIncrease="21"
          creativityIncrease="15"
        />
        <CaseStudyCard
          imageSrc="/robotic-arm.jpg"
          title="Generative AI for Automotives"
          description="AI revolutionizing vehicle design by reducing cost and increasing efficiency through automation."
          revenueIncrease="18"
          creativityIncrease="20"
        />
        <CaseStudyCard
          imageSrc="/robotic-arm.jpg"
          title="AI in Healthcare"
          description="Enhanced medical diagnostics with AI-based image recognition and predictive models."
          revenueIncrease="25"
          creativityIncrease="12"
        />
      </div>
    </div>
  );
};
