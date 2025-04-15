'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Navbutton from '@/components/ui/Navbutton';
import Link from 'next/link';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { RiHome2Line } from 'react-icons/ri';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import { BsFileEarmarkBarGraph } from 'react-icons/bs';
import { PiArticleMediumLight } from 'react-icons/pi';
import { LuBriefcase } from 'react-icons/lu';
import { IoIosPeople } from 'react-icons/io';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-light-white shadow-md h-[80px] flex justify-center items-center w-full">
      <div className="container w-full mx-6 md:mt-0 lg:mx-0 xl:px-36 lg:ml-16 xl:ml-0">
        <div className="flex justify-between items-center w-full">
          {/* Logo and Nav Links */}
          <div className="flex items-center gap-[5px]">
            <Link href="/">
              <Image
                src="/logo/tagslogo.png"
                alt="Logo"
                width={120}
                height={40}
                className="h-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-4 items-center">
            <Navbutton title="Home" href="/" />
            <Navbutton title="Industries" href="/industry" />
            <Navbutton title="Case Studies" href="/case-studies" />
            <Navbutton title="Blogs" href="/blogs" />
            <Navbutton title="Careers" href="/careers" />
            <Navbutton title="About Us" href="/about-us" />
            <Link href="/contact-us">
              <Button title="Contact Us" />
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <HiOutlineX size={28} />
              ) : (
                <HiOutlineMenu size={28} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
    fixed top-0 right-0 w-full h-full bg-white z-50 p-5 flex flex-col gap-4
    transform transition-transform duration-300 ease-in-out
    ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
  `}
        >
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src="/logo/tagslogo.png"
                alt="Logo"
                // className=""
                width={100}
                height={200}
              />
            </Link>
            {/* Close Button */}
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <HiOutlineX size={28} />
            </button>
          </div>

          <hr className="bg-dark-secondary w-3/4 ml-[35px] mt-[-10px] mb-[20px]" />

          {/* Mobile Nav Links */}
          <div className="flex">
            <RiHome2Line className="ml-3 mt-[18px] h-[22px] w-[22px] text-dark-secondary hover:text-orange-primary" />
            <Navbutton title="Home" href="/" />
          </div>
          <div className="flex">
            <MdOutlineBusinessCenter className="ml-3 mt-[18px] h-[22px] w-[22px] text-dark-secondary hover:text-orange-primary" />
            <Navbutton title="Industries" href="/industry" />
          </div>
          <div className="flex">
            <BsFileEarmarkBarGraph className="ml-3 mt-[18px] h-[22px] w-[22px] text-dark-secondary hover:text-orange-primary" />
            <Navbutton title="Case Studies" href="/case-studies" />
          </div>
          <div className="flex">
            <PiArticleMediumLight className="ml-3 mt-[18px] h-[22px] w-[22px] text-dark-secondary hover:text-orange-primary" />
            <Navbutton title="Blogs" href="/blogs" />
          </div>
          <div className="flex">
            <LuBriefcase className="ml-3 mt-[18px] h-[22px] w-[22px] text-dark-secondary hover:text-orange-primary" />
            <Navbutton title="Careers" href="/careers" />
          </div>
          <div className="flex">
            <IoIosPeople className="ml-3 mt-[18px] h-[22px] w-[22px] text-dark-secondary hover:text-orange-primary" />
            <Navbutton title="About Us" href="/about-us" />
          </div>

          <Link href="/contact-us">
            <Button title="Contact Us" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
