import Button from '@/components/ui/Button';
import Image from 'next/image';
import React from 'react';
import Paragraph from '@/components/ui/Paragraph';

const ContactUsHeader: React.FC = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center h-[500px] text-center bg-cover bg-center px-4 sm:px-6 md:px-8"
      style={{ backgroundImage: "url('/images/contactheader.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-55"></div>

      <div className="relative z-10 text-white w-full max-w-[800px] space-y-4">
        <div className="flex items-center space-x-2 justify-center">
          <Image
            src="/logo/tags.png"
            alt="Logo"
            width={25}
            height={25}
            className="h-[25px] w-[25px]"
          />
          <p className="text-white text-md font-semibold">TAG Solutions</p>
        </div>

        <h1 className="text-[30px] sm:text-[35px] md:text-[43px] text-white font-bold leading-tight">
          Let's Build the Future of Your Business
        </h1>

        <Paragraph
          title="Whether you need a custom tech solution or support from our experts, TAG Solutions is here to help. Reach out and let’s create technology that powers your success"
          color="white"
        />

        <Button title="Connect with us" />
      </div>
    </div>
  );
};

export default ContactUsHeader;
