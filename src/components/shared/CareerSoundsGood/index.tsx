import Image from 'next/image';
import Paragraph from '@/components/ui/Paragraph';
import Link from 'next/link';

const CareerSoundsGood = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-10 flex flex-col justify-center items-center bg-black text-center">
      <Image
        className="mb-6"
        src="/logo/tlogo.png"
        alt="t-logo"
        width={70}
        height={70}
      />

      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
        Sounds Good?
      </h1>

      <div className="w-full max-w-md px-2">
        <Paragraph
          color="white"
          title="Get to know our hiring process before you apply or find answers to any lingering questions, right here, right now."
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-6 mb-12 w-full max-w-xs sm:max-w-none sm:w-auto justify-center">
        <Link
          href="https://www.linkedin.com/company/tagsolutionsltd/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 sm:p-4 w-full sm:w-[150px] rounded-full border flex justify-center border-white text-sm text-white transition-transform duration-300 hover:scale-105"
        >
          How we hire
        </Link>
        <Link
          href="/contact-us"
          className="p-3 sm:p-4 w-full sm:w-[150px] rounded-full border flex justify-center border-white text-sm text-white transition-transform duration-300 hover:scale-105"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default CareerSoundsGood;
