import Image from 'next/image';
import { FC } from 'react';

interface ServiceItemProps {
  title: string;
  description: string;
}

const ServiceItem: FC<ServiceItemProps> = ({ title, description }) => {
  return (
    <div className="border-l-4 border-blue-500 pl-4">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-300">{description}</p>
    </div>
  );
};

const AboutOffers: FC = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">What We Offer</h2>
        <p className="text-center text-lg mb-12">
          At Tag Solutions, we provide a comprehensive suite of services
          designed to empower your business.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left column: Services */}
          <div className="space-y-8">
            <ServiceItem
              title="Generative AI"
              description="Unlock creativity and innovation with our cutting-edge generative AI solutions, designed to automate content creation, enhance user experiences, and drive business growth."
            />
            <ServiceItem
              title="Software Development"
              description="We craft custom software solutions tailored to your specific needs, driving efficiency, innovation, and competitive advantage in today's fast-paced market."
            />
            <ServiceItem
              title="Cloud Computing"
              description="Empower your business with scalable, secure, and flexible cloud computing solutions that streamline operations and support your digital transformation journey."
            />
            <ServiceItem
              title="Machine Learning"
              description="Leverage the power of machine learning to turn data into actionable insights, enabling smarter decision-making and predictive analytics tailored to your business."
            />
            <ServiceItem
              title="Web App Development"
              description="Bring your ideas to life with our robust and intuitive web app development services, creating seamless, user-friendly applications that engage and retain customers."
            />
            <ServiceItem
              title="Data Analytics"
              description="Transform your raw data into valuable insights with our data analytics services, helping you make informed decisions and gain a competitive edge in your industry."
            />
          </div>

          {/* Right column: Images */}
          <div className="space-y-8">
            <div className="relative h-64">
              <Image
                src="/images/team-meeting.jpg" // Use actual image path
                alt="Team Meeting"
                layout="fill"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative h-64">
              <Image
                src="/images/team-discussion.jpg" // Use actual image path
                alt="Team Discussion"
                layout="fill"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOffers;
