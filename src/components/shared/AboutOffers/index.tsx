'use client';

import AboutOffer from '@/components/ui/AboutOffer';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';

const offersData = [
  {
    title: 'Generative AI',
    description:
      'Unlock creativity and innovation with our cutting-edge generative AI solutions, designed to automate content creation, enhance user experiences, and drive business growth.',
    image: '/images/aboutoffer1.jpg',
  },
  {
    title: 'Cloud Computing',
    description:
      'Empower your business with scalable, secure, and flexible cloud computing solutions that streamline operations and support your digital transformation journey.',
    image: '/images/aboutoffer3.jpg',
  },
  {
    title: 'Machine Learning',
    description:
      'Leverage the power of machine learning to turn data into actionable insights, enabling smarter decision-making and predictive analytics tailored to your business.',
    image: '/images/aboutoffer1.jpg',
  },
  {
    title: 'Web App Development',
    description:
      'Bring your ideas to life with our robust and intuitive web app development services, creating seamless, user-friendly applications that engage and retain customers.',
    image: '/images/aboutoffer2.jpg',
  },
  {
    title: 'Data Analytics',
    description:
      'Transform your raw data into valuable insights with our data analytics services, helping you make informed decisions and gain a competitive edge in your industry.',
    image: '/images/aboutoffer3.jpg',
  },
];

const AboutOffers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollingEnabled, setScrollingEnabled] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const ticking = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const throttleScroll = (callback: () => void, delay: number) => {
    if (scrollTimeoutRef.current) return;
    scrollTimeoutRef.current = setTimeout(() => {
      callback();
      scrollTimeoutRef.current = null;
    }, delay);
  };

  const handleScroll = (deltaY: number) => {
    throttleScroll(() => {
      if (deltaY > 0 && activeIndex < offersData.length - 1) {
        setActiveIndex((prevIndex) => prevIndex + 1);
        console.log('index is ', activeIndex);
      } else if (deltaY < 0 && activeIndex > 0) {
        setActiveIndex((prevIndex) => prevIndex - 1);
        console.log('index is ', activeIndex);
      }
    }, 700);
  };
  const containertoTop = () => {
    if (containerRef.current) {
      console.log('go to top please');
      containerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // console.log(containerRef.current)
    }
  };
  // const containertoTop = () => {
  //   if (containerRef.current) {
  //     containerRef.current.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start',
  //     });
  //   }
  // };

  // const scrollToTop = () => {
  //   if (containerRef.current) {
  //     containerRef.current.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start',
  //     });
  //   }
  // };

  const preventDefaultScroll = (event: Event) => {
    if (!scrollingEnabled) {
      console.log(' called ');
      containertoTop();
      event.preventDefault();
    }
  };

  const handleWheelScroll = (event: WheelEvent) => {
    if (!scrollingEnabled) {
      event.preventDefault();
      console.log('iam in viewwwww');
      preventDefaultScroll(event);
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          handleScroll(event.deltaY);
          ticking.current = false;
        });
      }
    }

    if (
      (activeIndex === offersData.length - 1 && event.deltaY > 0) ||
      (activeIndex === 0 && event.deltaY < 0)
    ) {
      console.log('scrolling enabled');
      setScrollingEnabled(true);
    }
  };

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        console.log('observe ', entry);
        setScrollingEnabled(false);
      } else {
        setScrollingEnabled(true);
      }
    },
    [],
  );

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.8,
    });

    if (containerRef.current) {
      observerRef.current.observe(containerRef.current);
    }

    return () => {
      if (observerRef.current && containerRef.current) {
        observerRef.current.unobserve(containerRef.current);
      }
    };
  }, [handleIntersection]);

  useEffect(() => {
    window.addEventListener('wheel', handleWheelScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheelScroll);
    };
  }, [activeIndex, scrollingEnabled]);

  return (
    <div className="p-3">
      <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black">
          What We Offer
        </h2>
        <p className="text-black text-lg text-center font-normal p-5">
          At Tag Solutions, we provide a comprehensive suite of services
          designed to empower your business.
        </p>
      </div>

      <div
        className="relative px-5 bg-dark-offer text-white p-10 rounded-t-3xl overflow-hidden mt-5"
        ref={containerRef}
      >
        <div className="grid md:grid-cols-2 gap-10 mt-2">
          <div>
            {offersData.map((offer, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer transition-opacity duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-30'}`}
              >
                <AboutOffer
                  title={offer.title}
                  description={offer.description}
                />
              </div>
            ))}
          </div>

          <div className="relative sm:block hidden mt-5">
            <Swiper
              direction="vertical"
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              modules={[EffectCoverflow]}
              effect="coverflow"
              loop={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 10,
                depth: 150,
                modifier: 1.5,
                slideShadows: false,
              }}
              className="overflow-hidden max-h-[700px] transition-shadow"
            >
              {offersData.map((_, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`relative h-96 z-20 ml-20 -mt-32 cursor-pointer transition-transform duration-300 ease-in-out ${activeIndex === index ? 'top-0' : 'top-[50px]'}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <Image
                      src={
                        offersData[(activeIndex + index) % offersData.length]
                          ?.image
                      }
                      alt={
                        offersData[(activeIndex + index) % offersData.length]
                          ?.title
                      }
                      fill
                      className="gap-0 rounded-2xl w-[441px] h-[356px] max-w-[441px] object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOffers;
