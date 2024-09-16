import React from 'react';
import Image from 'next/image';
import Paragraph from '@/components/ui/Paragraph';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';

interface Aboutprops {
  id: string;
}
const About: React.FC<Aboutprops> = ({ id }) => {
  return (
    <section id={id}>
      <div className="bg-light-white w-full shadow-md h-auto max-h-max ">
        <div className="flex mx-10 lg:flex-row lg:justify-center flex-col gap-12 xl:gap-24 xl:mx-28 lg:mx-20 justify-start mb-4">
          <div className="w-72 lg:mt-24">
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
          <div className="w-98 h-[200px] flex flex-col justify-between lg:mt-28 text-dark-secondary">
            <p className="text-p1 font-h-bold">Company</p>
            <Link href={'/#industries'}>
              <p className="text-hh4 hover:text-orange-primary">Industries</p>
            </Link>
            <Link href={'/#services'}>
              <p className="text-hh4 hover:text-orange-primary">Services</p>
            </Link>
            <Link href={'/#why-tags'}>
              <p className="text-hh4 hover:text-orange-primary">Testimonials</p>
            </Link>
            <Link href={'/#case-studies'}>
              <p className="text-hh4 hover:text-orange-primary">Case Studies</p>
            </Link>
          </div>
          <div className="w-98 h-[200px] flex flex-col justify-between lg:mt-28">
            <p className="text-p1 font-h-bold text-dark-secondary">Help</p>
            <Paragraph title="Customer Support" color="dark-secondary" />
            <Paragraph title="Careers" color="dark-secondary" />
            <Paragraph title="Terms and Conditions" color="dark-secondary" />
            <Paragraph title="Privacy Policy" color="dark-secondary" />
          </div>
          <div className="w-72 h-full flex flex-col justify-between lg:mt-28 text-dark-secondary">
            <p className="text-p1 font-h-bold">Address:</p>
            <ul className="list-disc pl-7 mt-2">
              <li>Dubai Silicon Oasis</li>
              <li>Lahore, Punjab, Pakistan</li>
            </ul>

            <Link href={'/#about-us'}>
              <p className="text-p1 font-h-bold mt-4">Contact:</p>
            </Link>
            <ul className="list-disc pl-7 mt-2">
              <li>+97-1508620567</li>
              <li>+92-3125050567</li>
              <li>contact@tags-ltd.com</li>
            </ul>
          </div>
          {/* <div className="w-72 h-full flex flex-col justify-between lg:mt-28">
            <input
              type="text"
              placeholder="Enter your email address"
              className="lg:mt-12 w-full p-2 bg-light-white text-white rounded-[10px] border border-gray-200 h-[55px] items-center"
            />
            <button className="mt-3 bg-orange-primary text-white px-5 py-4 rounded-lg hover:bg-orange-600 w-full">
              Subscribe now
            </button>
          </div> */}
        </div>
        <div className="flex justify-center mx-auto gap-10 mt-7 mb-4">
          <Link
            href="https://www.linkedin.com/company/tagsolutions-ltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="grayscale hover:grayscale-0"
          >
            <Image
              src="/icons/linkedin.png"
              alt="linkedin"
              width={30}
              height={30}
            />
          </Link>
          <Link
            href="https://www.instagram.com/tagsltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="grayscale hover:grayscale-0"
          >
            <Image
              src="/icons/instagram.png"
              alt="instagram"
              width={33}
              height={33}
            />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61555203740162"
            target="_blank"
            rel="noopener noreferrer"
            className="grayscale hover:grayscale-0"
          >
            <Image
              src="/icons/facebook.png"
              alt="facebook"
              width={30}
              height={30}
            />
          </Link>
        </div>
        <Footer></Footer>
      </div>
    </section>
  );
};

export default About;
