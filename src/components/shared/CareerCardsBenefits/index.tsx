import Image from 'next/image';
import Paragraph from '@/components/ui/Paragraph';

const CareerCardBenefit: React.FC = () => {
  return (
    <div className="p-6 flex justify-center items-center">
      <div className="flex w-[930px] h-[300px] rounded-xl bg-[#4F4A45]">
        <Image
          src="/images/career4.jpeg"
          alt="Career Benefits"
          className="w-[350px] h-full object-cover rounded-tl-xl rounded-bl-xl"
          width={500}
          height={300}
        />
        <div className="flex flex-col p-6">
          <h1>Our Benefits</h1>
          <Paragraph
            color="red"
            title="At Tags, we provide more than just perks—we offer the resources and opportunities to grow like an entrepreneur within a tech-driven environment. With continuous learning, leadership opportunities, and a culture of innovation, you’ll be empowered to push boundaries and drive your career forward."
          />
        </div>
      </div>
    </div>
  );
};

export default CareerCardBenefit;
