'use client'
import TestimonialCard from '@/components/ui/TestimonialCard'
import React, { useState,useEffect} from 'react'
import Testimonial1 from '../../../../public/images/Testimonial1.png'
import Testimonial2 from '../../../../public/images/Testimonial2.jpg'
import Testimonial3 from '../../../../public/images/Testimonial3.jpg'
import Testimonial4 from '../../../../public/images/Testimonial4.png'
import Heading from '@/components/ui/Heading'
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: 'Brandon Moore',
    description: `"Tags brought FindxStorage to life with a seamless, user-friendly platform that sets us apart. Their AI expertise and industry knowledge have positioned us for success. Tags delivered not just a product, but our vision."`,
    attribute: 'CEO at FindxStorage',
    image: Testimonial1,
  },
  {
    name: 'Steve Davis',
    description: `""Tags turned my vision into a leading restaurant reservation platform. Their AI expertise and innovation set us apart. Tags didn’t just deliver a project—they delivered our future.""`,
    attribute: 'CEO at Have A Seat',
    image: Testimonial2,
  },
  {
    name: 'Jason Wong',
    description: "The custom analytics platform from Tags has given us powerful insights, driving better business decisions.",
    attribute: 'CEO at Omnicharge',
    image: Testimonial3,
  },
  {
    name: 'Jason Wang',
    description: "Tags' generative AI solutions have revolutionized our innovation process, allowing us to create value faster than ever.",
    attribute: 'CEO at Omnicharge',
    image: Testimonial4,
  },
  {
    name: 'Jason Wang3',
    description: "Tags' generative AI solutions have revolutionized our innovation process, allowing us to create value faster than ever.",
    attribute: 'CEO at Omnicharge',
    image: Testimonial1,
  },
  // incase want to add more ;;
];

interface TestimonialProps{
  id:string,
}
const Testimonials: React.FC<TestimonialProps> = ({id}) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
};

const [coloredindex , setColoredinndex]=useState(0);
const [count , setCount] =useState(2);

const handleNextClick = () => {
  if ((currentIndex == (Math.floor(testimonials.length/2))) && windowWidth>=800)
  {
    setCurrentIndex(0);
    setCount(Math.ceil(testimonials.length/2));
    setColoredinndex(0);
  }
  else if ((currentIndex == (Math.floor(testimonials.length/3))) && windowWidth>=1000)
  {
    setCurrentIndex(0);
    setCount(Math.ceil(testimonials.length/3));
    setColoredinndex(0);
  }
  else
  {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setColoredinndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }
    
};

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = ((currentIndex == (Math.floor(testimonials.length/2))) && windowWidth>=800) || 
  ((currentIndex == (Math.floor(testimonials.length/3))) && windowWidth>=1000)
  console.log(" cc " ,  count);

  return (
    <section id={id}>
    <div className='mt-20'>
      <div className='text-center'>
        <Heading title='Voices of Success' color='orange-primary' />
        <Heading title='Real Feedback from our Partners' color='dark-secondary' />
      </div>

      <div className="relative flex justify-center items-center mt-10">
        <button
          onClick={handlePrevClick}
          className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md z-10 ${isPrevDisabled ? 'opacity-10' : ''}`}
        >
          <ChevronLeft />
        </button>

        <div
          className="overflow-hidden w-full"
        >
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 80}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className='ml-10'>
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
          className={`absolute right-24 top-1/2 transform -translate-y-1/2 text-black w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md z-10 ${isNextDisabled ? 'opacity-10' : ''}`}
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
  )
}

export default Testimonials;

