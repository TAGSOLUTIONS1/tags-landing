import Image from 'next/image';
import Paragraph from '@/components/ui/Paragraph';
const CareerSoundsGood = () => {
  return (
    <div className="p-6 flex flex-col justify-center items-center bg-black">
      <Image
        className="m-8"
        src="/logo/tlogo.png"
        alt="t-logo"
        width={70}
        height={70}
      />
      <h1 className="text-white m-2 text-[35px]"> Sounds Good?</h1>
      <div className="w-[450px] text-sm text-center">
        <Paragraph
          color={'white'}
          title={
            'Get to know our hiring process before you apply or find answers to any lingering questions, right here, right now.'
          }
        />
      </div>
      <div className="flex space-x-5 mt-6 mb-16">
        <button className="p-4 w-[150px] rounded-full border border-white text-sm text-white">
          How we hire
        </button>
        <button className="p-4 w-[150px] rounded-full border border-white text-sm text-white">
          Contact us
        </button>

      </div>
    </div>
  );
};
export default CareerSoundsGood;
