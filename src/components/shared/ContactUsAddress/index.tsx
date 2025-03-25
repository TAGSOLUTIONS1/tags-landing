import React from 'react';
import Image from 'next/image';

const ContactUsAddress: React.FC = () => {
  return (
    <div className="p-6 flex justify-center items-center">
      <div className="rounded-[15px] drop-shadow-lg flex justify-center items-center w-full max-w-[1100px] bg-gray-500">
        <iframe
          className="rounded-[15px] drop-shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d108949.71826607827!2d74.15257280588342!3d31.422977438528125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39190323b81db30f%3A0x950b40e0b8e0ad06!2sFloor%20B1%2C%20OPF%20Commercial%20Building%2C%2015%20Khayaban-e-Jinnah%2C%20Block%20A%20Opf%20Housing%20Scheme%2C%20Lahore%2C%2054000!3m2!1d31.4230038!2d74.2349741!5e0!3m2!1sen!2s!4v1742844387100!5m2!1sen!2s"
          width="100%"
          height="500px"
          loading="lazy"
        ></iframe>
        <div className="absolute top-[390px] left-8 transform -translate-y-1/2 flex flex-col h-auto max-w-[90%] sm:w-[300px] p-4 space-y-3 bg-white rounded-[15px] drop-shadow-md">
          <p className="text-xl font-semibold text-black">
            Our global presence
          </p>
          <p className="text-[#666666] text-sm">
            Tags operates globally with a strong presence in key markets,
            including Pakistan and Dubai.
          </p>
          <p className="text-orange-primary text-sm flex items-center hover:text-orange-case hover:cursor-pointer">
            More about TAGS
            <Image
              src="/icons/arrow.png"
              alt="arrow-icon"
              className="ml-2 h-[10px] w-[6px]"
              height={10}
              width={15}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsAddress;
