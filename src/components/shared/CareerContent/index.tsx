import Paragraph from '@/components/ui/Paragraph';
import Heading from '../../ui/Heading';

const CareerContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4 sm:px-6 md:px-10 lg:px-16 py-10 mt-11 text-center">
      <Heading title="Why Choose TAGS?" color="orange-primary" />

      <div className="w-full max-w-2xl mt-4">
        <Paragraph
          color="black"
          title="At Tags, we’re not just offering a job—we’re offering a chance to be part of a dynamic, forward-thinking team that’s shaping the future of custom tech solutions. Whether you’re looking to grow your skills, enjoy work-life balance, or collaborate with like-minded innovators, Tags is where you’ll thrive."
        />
      </div>
    </div>
  );
};

export default CareerContent;
