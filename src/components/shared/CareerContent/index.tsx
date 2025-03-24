import Paragraph from '@/components/ui/Paragraph';
import Heading from '../../ui/Heading';

const CareerContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-6 mt-11">
      <Heading title="Why Choose TAGS?" color="orange-primary" />
      <div className="w-1/2 text-[#4F4A45] text-center mt-3">
        <Paragraph title="At Tags, we’re not just offering a job—we’re offering a chance to be part of a dynamic, forward-thinking team that’s shaping the future of custom tech solutions. Whether you’re looking to grow your skills, enjoy work-life balance, or collaborate with like-minded innovators, Tags is where you’ll thrive." />
      </div>
    </div>
  );
};
export default CareerContent;
