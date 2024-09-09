'use client';
import React from 'react';
import Image from 'next/image';
import Paragraph from '@/components/ui/Paragraph';
import Footer from '@/components/ui/Footer';

interface Aboutprops {
  id: string;
}
const About: React.FC<Aboutprops> = ({ id }) => {
  return (
    <section id={id}>
      <div className="bg-light-white w-full shadow-md h-auto max-h-max">
        <div className="flex lg:flex-row flex-col gap-12 mx-36 justify-between mb-4">
          <div className="w-72 mt-28">
            <Image
              src="/logo/tagslogo.png"
              alt="Tagslogo"
              width={116}
              height={88}
            />
            <Paragraph
              title="Tags provides custom B2B solutions tailored to enhance business efficiency and drive success."
              color="dark-secondary"
            />
          </div>
          <div className="w-98 h-[216px] flex flex-col justify-between mt-28">
            <p className="text-p1 font-h-bold text-dark-secondary">Company</p>
            <Paragraph title="About" color="dark-secondary" />
            <Paragraph title="Services" color="dark-secondary" />
            <Paragraph title="Testimonials" color="dark-secondary" />
            <Paragraph title="Resources" color="dark-secondary" />
          </div>
          <div className="w-98 h-[216px] flex flex-col justify-between mt-28">
            <p className="text-p1 font-h-bold text-dark-secondary">Help</p>
            <Paragraph title="Customer Support" color="dark-secondary" />
            <Paragraph title="Careers" color="dark-secondary" />
            <Paragraph title="Terms and Conditions" color="dark-secondary" />
            <Paragraph title="Privacy Policy" color="dark-secondary" />
          </div>
          <div className="w-72 h-full flex flex-col justify-between mt-28">
            <input
              type="text"
              placeholder="Enter your email address"
              className="mt-12 w-full bg-light-white text-white rounded-[10px] border border-gray-200 h-[55px] items-center"
            />
            <button className="mt-3 bg-orange-primary text-white px-5 py-4 rounded-lg hover:bg-orange-600 w-full">
              Subscribe now
            </button>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </section>
  );
};

export default About;
