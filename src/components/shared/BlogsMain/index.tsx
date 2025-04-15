import Image from 'next/image';

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
      <div className="p-2 flex flex-col gap-4 w-full md:w-2/3">
        <div className="w-full max-w-[650px] h-auto rounded-[35px]">
          <Image
            className="rounded-[35px] w-full"
            src="/images/blog2.jpeg"
            alt="Blog Image"
            width={650}
            height={300}
          />
        </div>
        <div className="p-2 w-full max-w-[550px] mt-6 md:mt-[50px]">
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
      <div className="w-full md:w-1/3 md:ml-10 mt-8 md:mt-0">
        <p className="font-semibold text-lg text-center md:text-left mb-4 lg:ml-[-150px]">
          Recent Articles
        </p>

        {/* Slider for small screens */}
        <div className="flex md:hidden overflow-x-auto space-x-4 pb-4 scrollbar-hide">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="w-[290px] flex-shrink-0 bg-white shadow-md rounded-xl p-3"
            >
              <Image
                className="w-full h-[130px] object-cover rounded-[15px] mb-3"
                src={blog.image}
                alt="Blog Image"
                width={290}
                height={130}
              />
              <p className="text-orange-case text-sm font-semibold">
                {blog.category}
              </p>
              <p className="text-md mt-1">{blog.title}</p>
              <p className="text-[#9FA1A7] text-sm mt-2">By TAGS Team</p>
            </div>
          ))}
        </div>

        {/* Column layout for medium+ screens */}
        <div className="hidden md:flex flex-col gap-4">
          {blogs.map((blog, index) => (
            <div key={index} className="flex gap-4 items-center lg:ml-[-150px]">
              <div className="w-[130px] flex-shrink-0">
                <Image
                  className="w-full h-[130px] object-cover rounded-[15px]"
                  src={blog.image}
                  alt="Blog Image"
                  width={130}
                  height={130}
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-orange-case text-sm font-semibold">
                  {blog.category}
                </p>
                <p className="text-md">{blog.title}</p>
                <p className="text-[#9FA1A7] text-sm mt-1">By TAGS Team</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsMain;
