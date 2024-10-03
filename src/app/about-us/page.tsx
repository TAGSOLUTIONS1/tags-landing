import AboutEmpoweringBusiness from '@/components/shared/AboutEmpoweringBusiness';
import AboutHeader from '@/components/shared/AboutHeader';
import AboutImageSection from '@/components/shared/AboutImageSection';
import AboutMission from '@/components/shared/AboutMission';
// import AboutOffers from '@/components/shared/AboutOffers';
import { AboutPartners } from '@/components/shared/AboutPartners';
import { AboutTagsValues } from '@/components/shared/AboutTagsValues';

const Aboutus = () => {
  return (
    <main className="overflow-x-hidden">
      <AboutHeader></AboutHeader>
      <AboutImageSection></AboutImageSection>
      <AboutMission></AboutMission>
      <AboutTagsValues></AboutTagsValues>
      {/* <AboutOffers></AboutOffers> */}
      <AboutPartners></AboutPartners>
      <AboutEmpoweringBusiness></AboutEmpoweringBusiness>
    </main>
  );
};

export default Aboutus;
