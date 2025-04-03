import Image from 'next/image';
import Heading from '@/components/ui/Heading';
const BlogsMain = () => {
  const blogs = [
    {
      category: 'CAREER DEVELOPMENT',
      title: 'Unlocking Career Growth in Tech',
      image: '/images/blog3.jpg',
    },
    {
      category: 'INNOVATION',
      title: 'From Idea to Impact: Exploring the Critical Role of UI/UX',
      image: '/images/blog4.jpg',
    },
    {
      category: 'ENTREPRENEURSHIP',
      title: 'Entrepreneurship in Tech',
      image: '/images/blog5.jpg',
    },
    {
      category: 'COLLABORATION',
      title: 'Building Custom Solutions',
      image: '/images/blog6.jpg',
    },
    {
      category: 'WORK-LIFE BALANCE',
      title: 'Work-Life Balance in the Tech Industry: Our Approach',
      image: '/images/blog7.jpg',
    },
    {
      category: 'COMPANY CULTURE',
      title: "Life at Tags: What It's Like to Be Part of Our Dynamic Team",
      image: '/images/blog8.jpg',
    },
    {
      category: 'COLLABORATION',
      title: 'Building Custom Solutions',
      image: '/images/blog9.jpg',
    },
    {
      category: 'CONINUOUS LEARNING',
      title: 'Why Continuous Learning is Key',
      image: '/images/bloog10.jpg',
    },
  ];
  return (
    <div className="flex flex-col md:flex-row mt-8 px-4 md:px-10">
      {/* Left Side - Main Blog Post */}
      <div className="flex flex-col gap-4 w-full md:w-2/3">
        <div className="w-full max-w-[650px] h-auto rounded-[35px] mx-auto">
          <Image
            className="rounded-[35px] w-full"
            src="/images/blog2.jpeg"
            alt="Blog Image"
            width={650}
            height={300}
          />
        </div>
        <div className="w-full max-w-[550px] mx-auto mt-6 md:mt-[50px]">
          <p className="text-orange-case text-sm font-semibold">
            COLLABORATION
          </p>
          <h2 className="text-black text-lg md:text-2xl font-bold">
            The Power of Collaboration in Custom Tech Solutions
          </h2>
          <p className="text-[#17191D] text-md mt-2">
            Discover how teamwork and collaboration fuel innovation at Tags,
            empowering our teams to overcome challenges and deliver
            groundbreaking, custom tech solutions.
          </p>
          <p className="text-[#9FA1A7] text-sm mt-3">By TAGS Team</p>
        </div>
      </div>

      {/* Right Side - Recent Articles */}
      <div className="flex flex-col gap-4 mt-8 md:mt-0 w-full md:w-1/3 mx-auto md:ml-10">
        <p className="font-semibold text-lg text-center md:text-left">
          Recent Articles
        </p>
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-4 items-center md:items-start"
          >
            <div className="w-full max-w-[200px]">
              <Image
                className="w-full h-auto md:h-[130px] object-cover rounded-[15px]"
                src={blog.image}
                alt="Blog Image"
                width={200}
                height={130}
              />
            </div>
            <div className="flex flex-col gap-2 text-center md:text-left">
              <p className="text-orange-case text-sm font-semibold">
                {blog.category}
              </p>
              <p className="text-md">{blog.title}</p>
              <p className="text-[#9FA1A7] text-sm mt-2">By TAGS Team</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsMain;
