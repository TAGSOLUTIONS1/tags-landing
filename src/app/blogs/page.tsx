import BlogsHeader from '@/components/shared/BlogsHeader';
import BlogsMain from '@/components/shared/BlogsMain';
import BlogsSubscribe from '@/components/shared/BlogSubscribe';

const Blogs = () => {
  return (
    <main className="overflow-x-hidden">
      <BlogsHeader />
      <BlogsMain />
      <BlogsSubscribe />
    </main>
  );
};

export default Blogs;
