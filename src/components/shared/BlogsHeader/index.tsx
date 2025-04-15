import Image from 'next/image';
import Link from 'next/link';
import { Next } from '@/components/svg/Next';

const BlogsHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 max-w-7xl mx-auto">
      {/* Left Section */}
      <div className="mt-6 p-2 m-2 lg:w-1/2 w-full text-center sm:text-left flex flex-col justify-between space-y-5 items-center sm:items-start">
        <p className="text-orange-case text-sm sm:text-lg font-semibold">
          OUR BLOGS
        </p>
        <p className="text-p3 sm:text-hh8 lg:text-hh13 text-fontWeight-h1 font-bold sm:leading-tight text-black w-full sm:w-10/12">
          Insights on Custom Tech Solutions
        </p>
        <p className="text-black text-sm sm:text-lg w-full sm:w-3/4">
          Welcome to the TAGS blog, where we explore the latest trends, tips,
          and innovations in technology.
        </p>
        <Link href={'/#about-us'}>
          <button className="bg-orange-button text-white px-5 py-4 rounded-xl hover:bg-orange-600 flex items-center gap-3">
            Contact Us
            <Next />
          </button>
        </Link>
      </div>

      {/* Right Section (Blog Card) */}
      <div className="w-full md:w-1/2 p-4 mt-6 md:mt-0 flex justify-center">
        <div className="bg-white w-full max-w-[550px] lg:w-[650px] rounded-[15px] shadow-lg flex flex-col items-center">
          <div className="m-2 drop-shadow-lg py-1 px-2 w-full">
            <Image
              src="/images/blog1.jpeg"
              alt="description"
              className="rounded-[15px] w-full h-auto max-h-[250px] object-cover"
              height={200}
              width={300}
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 space-y-2 md:space-y-0 md:space-x-[20px] pb-4">
            <p className="text-md text-center md:text-left">
              Life at Tags: What It’s Like to Be Part?
            </p>
            <p className="text-sm underline text-orange-case hover:cursor-pointer">
              Learn more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsHeader;
