import Image from 'next/image';
import Paragraph from '@/components/ui/Paragraph';
import Link from 'next/link';
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
        <Link
          href="https://www.linkedin.com/company/tagsolutionsltd/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 w-[150px] rounded-full border flex justify-center border-white text-sm text-white transition-transform duration-300 hover:scale-105"
        >
          How we hire
        </Link>
        <Link
          href="/contact-us"
          className="p-4 w-[150px] rounded-full border flex justify-center border-white text-sm text-white transition-transform duration-300 hover:scale-105"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};
export default CareerSoundsGood;
