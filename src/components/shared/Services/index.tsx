'use client';
import React, { useState } from 'react';
import Heading from '@/components/ui/Heading';
import CardInclusive from '@/components/shared/CardInclusive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface Servicesprops {
  id: string;
}

const data = [
  {
    title: 'DATA AND AI',
    description:
      'Unlock the power of your data with advanced AI solutions. We transform raw data into actionable insights, helping your business make smarter decisions and stay ahead of the competition.',
    image: '/images/cardpic.jpg',
  },
  {
    title: 'Enterprise Softwares',
    description:
      'Streamline your business operations with custom enterprise software. Our solutions are tailored to meet your unique needs, improving efficiency, scalability, and productivity across your organization.',
    image: '/images/cardpic.jpg',
  },
  {
    title: 'Cloud Engineering',
    description:
      'Optimize your IT infrastructure with our cloud engineering services. We design, deploy, and manage secure, scalable cloud environments, ensuring your business runs smoothly and efficiently.',
    image: '/images/cardpic.jpg',
  },
];

const Services: React.FC<Servicesprops> = ({ id }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id={id} className="bg-black text-white mt-10">
      <div className="container mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <Heading title="The Services We Offer" color="orange-primary" />
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-4 flex flex-col justify-start xl:px-24 lg:px-16 sm:px-20">
            {data.map((item, index) => (
              <div key={index} className="flex items-center mb-4">
                <p
                  className={`text-orange-primary mr-3 font-extrabold ${activeIndex === index ? 'block' : 'hidden'}`}
                >
                  ______
                </p>
                <p
                  className={`text-black mr-3 font-extrabold ${activeIndex !== index ? 'block' : 'hidden'}`}
                >
                  ______
                </p>
                <div className="flex items-center">
                  {' '}
                  {/* Center Heading vertically */}
                  <Heading
                    title={item.title}
                    color={activeIndex === index ? 'orange-primary' : 'white'}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-1/2 flex justify-center items-center">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3000 }}
              loop={true}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="mySwiper"
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <CardInclusive
                    description={item.description}
                    buttoncontent={'Learn More'}
                    image={item.image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
