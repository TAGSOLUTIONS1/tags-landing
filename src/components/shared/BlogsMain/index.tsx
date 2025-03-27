import Image from 'next/image';
const BlogsMain = () => {
  const blogs = [
    {
      category: 'CAREER DEVELOPMENT',
      title: 'Unlocking Career Growth in Tech',
    },
    {
      category: 'INNOVATION',
      title: 'From Idea to Impact: Exploring the Critical Role of UI/UX',
    },
    {
      category: 'ENTREPRENEURSHIP',
      title: 'Entrepreneurship in Tech',
    },
    {
      category: 'COLLABORATION',
      title: 'Building Custom Solutions',
    },
    {
      category: 'WORK-LIFE BALANCE',
      title: 'Work-Life Balance in the Tech Industry: Our Approach',
    },
    {
      category: 'COMPANY CULTURE',
      title: "Life at Tags: What It's Like to Be Part of Our Dynamic Team",
    },
  ];
  return (
    <div className="flex mt-8">
      <div className="m-4 flex flex-col gap-4">
        <div className="m-6 w-[700px] h-[300px] rounded-full">
          <Image
            className="rounded-[35px]"
            src="/images/blog2.jpeg"
            alt="Blog Image"
            width={700}
            height={300}
          />
        </div>
        <p>collaboration</p>
        <h1>The Power of Collaboration in Custom Tech Solutions</h1>
        <p>
          Discover how teamwork and collaboration fuel innovation at Tags,
          empowering our teams to overcome challenges and deliver
          groundbreaking, custom tech solutions.
        </p>
        <p>By TAGS Team </p>
      </div>
      <div className="flex flex-col gap-4 m-4">
        <p>Recent Articles</p>
        <div></div>
      </div>
    </div>
  );
};
export default BlogsMain;
