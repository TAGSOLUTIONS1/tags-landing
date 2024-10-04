import AboutOffer from '@/components/ui/AboutOffer';
import { FC } from 'react';
import Image from 'next/image';

const AboutOffers: FC = () => {
  return (
    <div className="p-3">
      <div className="relative px-5 bg-dark-offer text-white p-10 rounded-t-3xl overflow-hidden">
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            What We Offer
          </h2>
          <p className="text-dark-textoffer text-sm md:text-base text-center font-normal p-5">
            At Tag Solutions, we provide a comprehensive suite of services
            designed to empower your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-2">
          <div className="">
            <AboutOffer
              title="Generative AI"
              description="Unlock creativity and innovation with our cutting-edge generative AI solutions, designed to automate content creation, enhance user experiences, and drive business growth."
            />
            <AboutOffer
              title="Software Development"
              description="We craft custom software solutions tailored to your specific needs, driving efficiency, innovation, and competitive advantage in today’s fast-paced market."
            />
            <AboutOffer
              title="Cloud Computing"
              description="Empower your business with scalable, secure, and flexible cloud computing solutions that streamline operations and support your digital transformation journey."
            />
            <AboutOffer
              title="Machine Learning"
              description="Leverage the power of machine learning to turn data into actionable insights, enabling smarter decision-making and predictive analytics tailored to your business."
            />
            <AboutOffer
              title="Web App Development"
              description="Bring your ideas to life with our robust and intuitive web app development services, creating seamless, user-friendly applications that engage and retain customers."
            />
            <AboutOffer
              title="Data Analytics"
              description="Transform your raw data into valuable insights with our data analytics services, helping you make informed decisions and gain a competitive edge in your industry."
            />
          </div>

          <div className="relative mt-14 sm:block hidden">
            <div className="relative ml-36 h-80 z-10">
              <Image
                src="/images/aboutoffer1.jpg"
                alt="Team Meeting"
                layout="fill"
                className="w-[412px] h-[320px] max-w-[412px] gap-0 rounded-2xl rotate-[-5.21deg] object-cover"
              />
            </div>
            <div className="relative ml-20 mt-5 h-96 z-10">
              <Image
                src="/images/aboutoffer2.jpg"
                alt="Team Meeting"
                layout="fill"
                className="w-[481px] h-[356px] max-w-[481px] gap-0 rounded-2xl rotate-[5.21deg] object-cover shadow-offerimage"
              />
            </div>
            <div className="absolute ml-28 h-80 -mt-20 z-0">
              <Image
                src="/images/aboutoffer3.jpg"
                alt="Team Meeting"
                className="w-[436px] h-[312px] max-w-[436px] gap-0 rounded-2xl rotate-[-7.45deg] object-cover"
                width={436}
                height={312}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOffers;
