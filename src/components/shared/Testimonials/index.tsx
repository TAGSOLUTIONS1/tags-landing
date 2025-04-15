'use client';
import TestimonialCard from '@/components/ui/TestimonialCard';
import React, { useState, useEffect } from 'react';
// import Heading from '@/components/ui/Heading';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Brandon Moore',
    description: `"Tag Solutions brought FindxStorage to life with a seamless, user-friendly platform that sets us apart. Their AI expertise and industry knowledge have positioned us for success. Tags delivered not just a product, but our vision."`,
    attribute: 'CEO at FindxStorage',
    image: '/icons/maleicon.png',
  },
  {
    name: 'Steven Davis',
    description: `"My vision into a leading restaurant reservation platform by Tags. Their AI expertise and innovation set us apart. Tags didn’t just deliver a project—they delivered our future."`,
    attribute: 'CEO at Have A Seat',
    image: '/images/steven.jpg',
  },
  {
    name: 'Jason Wong',
    description:
      '"The custom analytics platform from Tags has given us powerful insights, driving better business decisions."',
    attribute: 'CEO at Omnicharge',
    image: '/images/testimonial2.jpg',
  },
  {
    name: 'Joe',
    description: `"Tag Solutions generative AI solutions have revolutionized our innovation process, allowing us to create value faster than ever."`,
    attribute: 'Client',
    image: '/images/testimonial1.png',
  },
  {
    name: 'Smith',
    description: `"It is a highly professional and efficient company, skilled in breaking down tasks and gathering precise requirements. Their focus on component-based development makes them ideal for projects with tight deadlines."`,
    attribute: 'Upwork Client',
    image: '/images/testimonial4.png',
  },
  // here on extra are addded
  {
    name: 'Jason Wong',
    description:
      '"The custom analytics platform from Tags has given us powerful insights, driving better business decisions."',
    attribute: 'CEO at Omnicharge',
    image: '/images/testimonial2.jpg',
  },
  {
    name: 'Smith',
    description: `"It is a highly professional and efficient company, skilled in breaking down tasks and gathering precise requirements. Their focus on component-based development makes them ideal for projects with tight deadlines."`,
    attribute: 'Upwork Client',
    image: '/images/testimonial4.png',
  },
  {
    name: 'Steven Davis',
    description: `"My vision into a leading restaurant reservation platform by Tags. Their AI expertise and innovation set us apart. Tags didn’t just deliver a project—they delivered our future."`,
    attribute: 'CEO at Have A Seat',
    image: '/images/steven.jpg',
  },
];

interface TestimonialProps {
  id: string;
}
const Testimonials: React.FC<TestimonialProps> = ({ id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  const [count, setCount] = useState(2);

  const handleNextClick = () => {
    if (
      currentIndex == Math.floor(testimonials.length / 2) &&
      windowWidth >= 660
    ) {
      setCurrentIndex(0);
      setCount(Math.ceil(testimonials.length / 2));
    } else if (
      currentIndex == Math.floor(testimonials.length / 3) &&
      windowWidth >= 1000
    ) {
      setCurrentIndex(0);
      setCount(Math.ceil(testimonials.length / 3));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      if (windowWidth < 660) {
        setCount(Math.ceil(testimonials.length));
      }
    }
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled =
    (currentIndex == Math.floor(testimonials.length / 2) &&
      windowWidth >= 800) ||
    (currentIndex == Math.floor(testimonials.length / 3) &&
      windowWidth >= 1000);

  return (
    <section id={id}>
      <div className="mt-20">
        <div className="text-center">
          <h1
            className={
              'text-orange-primary text-[20px] sm:text-[25px] md:text-[30px] lg:text-Heading font-bold'
            }
          >
            {' '}
            Voices of Success
          </h1>
          <h1
            className={
              'lg:text-Heading md:text-[29px] text-dark-secondary font-bold sm:text-[20px]'
            }
          >
            {' '}
            Feedback from our Partners
          </h1>
        </div>
        <div className="relative flex justify-center items-center mt-10">
          <button
            onClick={handlePrevClick}
            className={`absolute left-3 sm:left-6 top-1/2 transform -translate-y-1/2 text-black w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md z-10 ${isPrevDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <ChevronLeft />
          </button>

          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 80}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="ml-10">
                  <TestimonialCard
                    name={testimonial.name}
                    description={testimonial.description}
                    attribute={testimonial.attribute}
                    image={testimonial.image}
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleNextClick}
            className={`absolute right-3 sm:right-6 top-1/2 transform -translate-y-1/2 text-black w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md z-10 ${isNextDisabled ? 'opacity-10' : ''}`}
          >
            <ChevronRight />
          </button>
        </div>

        <div className="mt-8 flex justify-center space-x-2">
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-orange-primary' : 'border-2 border-orange-primary'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
