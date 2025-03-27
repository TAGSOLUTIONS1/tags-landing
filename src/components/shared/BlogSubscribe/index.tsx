import Image from 'next/image';
import Heading from '@/components/ui/Heading';

const BlogsSubscribe = () => {
  return (
    <div className="bg-black text-white p-4 m-8 rounded-[20px] flex items-center justify-center gap-[150px]">
      <div className="h-[350px] w-[500px] m-4 p-4">
        <Heading title={'Subscribe to our Blog'} color="white" />
        <p>
          Get weekly tips and insights on how to grow your business from
          Belkins’ experts in your inbox.
        </p>
        <form className="flex flex-col gap-4 mt-4">
          <input
            type="name"
            placeholder="First Name"
            className="p-2 rounded-[10px] border border-gray-600 bg-[#414040] text-white"
          />
          <input
            type="email"
            placeholder="Your email"
            className="p-2 rounded-[10px] border border-gray-600 bg-[#414040] text-white"
          />
          <button className="justify-start rounded-[10px] w-1/4 bg-orange-case p-3 text-white text-sm flex items-center hover:bg-orange-primary hover:cursor-pointer">
            Subscribe
            <Image
              src="/icons/warrow.png"
              alt="arrow-icon"
              className="ml-4 h-[10px] w-[6px]"
              height={10}
              width={15}
            />
          </button>
        </form>
      </div>
      <div>
        <Image
          src="/images/subscribe.jpeg"
          alt="Subscribe"
          width={500}
          height={300}
          className="rounded-[20px]"
        />
      </div>
    </div>
  );
};
export default BlogsSubscribe;
