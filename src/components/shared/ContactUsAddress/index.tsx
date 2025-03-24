import React from 'react';
import Image from 'next/image';

const ContactUsAddress: React.FC = () => {
  return (
    <div className="p-6 flex justify-center items-center">
      <div className="rounded-[15px] drop-shadow-lg flex justify-center items-center w-full max-w-[1100px] bg-gray-500">
        <Image
          src="/images/tagsMap.jpg"
          alt="map"
          width={1000}
          height={1000}
          className="w-full h-auto max-h-[500px] rounded-[15px] drop-shadow-lg"
        />
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex flex-col h-auto max-w-[90%] sm:w-[300px] p-4 space-y-3 bg-white rounded-[15px] drop-shadow-md">
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
