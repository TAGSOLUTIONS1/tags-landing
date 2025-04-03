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
    <div className="flex mt-8">
      <div className="m-4 flex flex-col gap-4">
        <div className="m-6 w-[650px] h-[300px] rounded-full">
          <Image
            className="rounded-[35px]"
            src="/images/blog2.jpeg"
            alt="Blog Image"
            width={650}
            height={300}
          />
        </div>
        <div className="w-[550px] m-6 mt-[130px]">
          <p className="text-orange-case text-sm font-semibold">
            COLLABORATION
          </p>
          <Heading
            title={'The Power of Collaboration in Custom Tech Solutions'}
            color={'black'}
          />
          <p className="text-[#17191D] text-md">
            Discover how teamwork and collaboration fuel innovation at Tags,
            empowering our teams to overcome challenges and deliver
            groundbreaking, custom tech solutions.
          </p>
          <p className="text-[#9FA1A7] text-sm mt-3">By TAGS Team </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 m-6">
        <p className="font-semibold">Recent Articles</p>
        {blogs.map((blog, index) => (
          <div key={index} className="flex gap-5">
            <div>
              <Image
                className="w-[200px] h-[130px] object-cover rounded-[15px]"
                src={blog.image}
                alt="Blog Image"
                width={200}
                height={130}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-orange-case text-sm font-semibold">
                {blog.category}
              </p>
              <p>{blog.title}</p>
              <p className="text-[#9FA1A7] text-sm mt-2">By TAGS Team </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlogsMain;
