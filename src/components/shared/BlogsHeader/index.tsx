import Image from 'next/image';

const BlogsHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-4">
        <p className="text-orange-primary m-3 font-semibold text-md">
          OUR BLOGS
        </p>
        <div className="max-w-[300px] m-3">
          <h1 className="font-bold text-[35px] md:text-[45px] leading-tight">
            Insights on Custom Tech Solutions
          </h1>
        </div>
        <p className="m-3 text-sm max-w-[400px]">
          Welcome to the TAGS blog, where we explore the latest trends, tips,
          and innovations in technology.
        </p>
        <button className="flex items-center justify-center md:justify-start rounded-[10px] w-2/4 md:w-1/4 bg-orange-case p-3 m-3 text-white text-sm hover:bg-orange-primary hover:cursor-pointer">
          Contact us
          <Image
            src="/icons/warrow.png"
            alt="arrow-icon"
            className="ml-4 h-[10px] w-[6px]"
            height={10}
            width={15}
          />
        </button>
      </div>

      {/* Right Section (Blog Card) */}
      <div className="w-full md:w-1/2 p-4 mt-3 md:mt-0 md:ml-6 flex justify-center">
        <div className="bg-white max-w-[550px] lg:w-[650px] h-auto md:h-[320px] rounded-[15px] shadow-lg flex flex-col items-center justify-center">
          <div className="m-2 drop-shadow-lg py-2">
            <Image
              src="/images/blog1.jpeg"
              alt="description"
              className="rounded-[15px] w-full lg:w-[530px] max-w-[650px] h-auto md:h-[250px]"
              height={200}
              width={300}
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 space-y-2 md:space-y-0 md:space-x-[20px]">
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
