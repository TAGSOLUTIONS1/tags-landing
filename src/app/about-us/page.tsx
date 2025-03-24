// 'use client'
// import { ParallaxProvider } from 'react-scroll-parallax';
import AboutHeader from '@/components/shared/AboutHeader';
import AboutImageSection from '@/components/shared/AboutImageSection';
import AboutMission from '@/components/shared/AboutMission';
import AboutOffers from '@/components/shared/AboutOffers';
import { AboutPartners } from '@/components/shared/AboutPartners';
import AboutEmpoweringBusiness from '@/components/shared/AboutEmpoweringBusiness';
import { AboutBusinessTransform } from '@/components/shared/AboutBusinessTransform';

const AboutUs = () => {
  return (
    <main className="overflow-x-hidden">
      <AboutHeader />
      <AboutImageSection />
      <AboutMission />
      <AboutOffers />
      <AboutPartners />
      <AboutEmpoweringBusiness />
      <AboutBusinessTransform />
    </main>
  );
};

export default AboutUs;
