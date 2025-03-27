import Paragraph from '@/components/ui/Paragraph';

const CareerJobOpenings: React.FC = () => {
  const jobOpenings = [
    {
      title: 'UI/UX Designer',
      location: 'Lahore',
      type: 'Part-time',
      categories: ['User Experience'],
    },
    {
      title: 'Software Engineer',
      location: 'Lahore',
      type: 'Permanent',
      categories: ['Development'],
    },
    {
      title: 'Content Writer',
      location: 'Lahore',
      type: 'Permanent',
      categories: ['Content Creation', 'Digital Marketing'],
    },
    {
      title: 'Customer Support Specialist',
      location: 'Lahore',
      type: 'Permanent',
      categories: ['Communication', 'Customer Experience'],
    },
    {
      title: 'Data Scientist, Financial Data & Insights',
      location: 'Lahore',
      type: 'Permanent',
      categories: ['Reporting', 'Data Science'],
    },
  ];

  return (
    <div className="p-6 flex flex-col justify-center items-center mt-4">
      <div className="mb-4">
        <Paragraph title={'Job Openings'} color={'[#4F4A45]'} />
      </div>

      <div className="flex flex-col space-y-4 w-full max-w-[950px]">
        {jobOpenings.map((job, index) => (
          <div
            key={index}
            className="flex justify-between items-center border p-5 rounded-[15px] drop-shadow-md"
          >
            <div>
              <p className="text-md text-[#191414]">{job.title}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {job.categories.map((category, idx) => (
                  <span
                    key={idx}
                    className="bg-orange-primary text-white text-xs rounded-full px-3 py-1"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-gray-500 text-sm flex flex-col items-end space-y-5">
              <p>{job.location}</p>
              <p>{job.type}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center mt-5">
        <p className={'text-[#10101899] text-sm m-5'}>
          apply at{' '}
          <span className="hover:text-black hover:underline">
            hr@tagsolutionsltd.com
          </span>
        </p>
        {/* <button className="bg-orange-primary text-white px-4 py-2 rounded-full">
          Load more jobs
        </button> */}
      </div>
    </div>
  );
};

export default CareerJobOpenings;
