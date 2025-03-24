import CareerCardBenefit from '@/components/shared/CareerCardsBenefits';
import CareerContent from '@/components/shared/CareerContent';
import CareerHeader from '@/components/shared/CareerHeader';
import CareerJobOpenings from '@/components/shared/CareerJobOpenings';
import CareerCardList from '@/components/shared/CareerCardList';
import CareerSoundsGood from '@/components/shared/CareerSoundsGood';

const Careers = () => {
  return (
    <main className="overflow-x-hidden">
      <CareerHeader />
      <CareerContent />
      <CareerCardList />
      <CareerCardBenefit />
      <CareerJobOpenings />
      <CareerSoundsGood />
    </main>
  );
};

export default Careers;
