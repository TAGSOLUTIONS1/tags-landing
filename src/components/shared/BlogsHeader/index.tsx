import Image from 'next/image';

const BlogsHeader = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="w-full p-4">
        <p className="text-orange-primary m-3 font-semibold text-md">OUR BLOGS</p>
        <div className="w-[300px] m-3 ">
          <h1 className="font-bold text-[40px] leading-tight">
            Insights on Custom Tech Solutions
          </h1>
        </div>
        <p className="m-3 text-sm w-[400px]">
          Welcome to the TAGS blog, where we explore the latest trends, tips,
          and innovations in technology
        </p>
        <button className="justify-start rounded-[10px] w-1/4 bg-orange-case p-3 m-3 text-white text-sm flex items-center hover:bg-orange-primary hover:cursor-pointer">
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
      {/* right side blog card here  */}
      <div className="w-full p-4 mt-3">
        <div className="bg-white w-[500px] h-[320px] rounded-[15px] shadow-lg m-6 flex flex-col items-center justify-center">
          <div className="m-2 mt-[-25px] drop-shadow-lg py-2">
            <Image
              src="/images/blog1.jpeg"
              alt="description"
              className="h-[250px] w-[500px] rounded-[15px]"
              height={200}
              width={300}
            />
          </div>
          <div className="flex space-x-[100px]">
            <p className="text-md">Life at Tags: What It’s Like to Be Part?</p>
            <p className="text-sm underline text-orange-case">Learn more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsHeader;
