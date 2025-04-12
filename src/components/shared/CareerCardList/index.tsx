import CareerCard from '@/components/ui/CareerCard';

const CareerCardList: React.FC = () => {
  return (
    <div className="flex space-x-4 flex-wrap justify-center mt-10 space-y-3">
      <CareerCard
        imageSrc="/images/career1.jpeg"
        title="Growth Opportunities"
        description="Expand your skills with mentorship, workshops, and hands-on projects designed to push your career forward."
      />
      <CareerCard
        imageSrc="/images/career2.jpeg"
        title="Flexible Work"
        description="Whether remote, hybrid, or in-office, we offer flexibility to suit your lifestyle and keep you at your best."
      />
      <CareerCard
        imageSrc="/images/career3.jpeg"
        title="Collaborative Culture"
        description="Work with passionate, supportive teammates who are driven by innovation and teamwork."
      />
    </div>
  );
};

export default CareerCardList;
