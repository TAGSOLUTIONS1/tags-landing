import React from 'react';
import Image from 'next/image';

const ContactUsAddress: React.FC = () => {
  return (
    <div className="p-6 flex justify-center items-center">
      <div className="rounded-[15px] drop-shadow-lg flex flex-col md:flex-row justify-center items-center w-full max-w-[1100px]">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="rounded-[15px] drop-shadow-lg w-full">
            <h1 className="p-3 text-center font-semibold hover:text-orange-case">
              UAE Office
            </h1>
            <iframe
              className="rounded-[15px] drop-shadow-lg m-3 w-full md:w-[520px] h-[300px] md:h-[500px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28899.22676331266!2d55.3887365!3d25.122051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f640f1dcd4111%3A0xcb38e7be624792c3!2sDubai%20Silicon%20Oasis%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1743085233630!5m2!1sen!2s"
              loading="lazy"
            ></iframe>
          </div>
          <div className="rounded-[15px] drop-shadow-lg w-full">
            <h1 className="p-3 text-center font-semibold hover:text-orange-case">
              Pakistan Office
            </h1>
            <iframe
              className="rounded-[15px] drop-shadow-lg m-3 w-full md:w-[520px] h-[300px] md:h-[500px]"
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d108949.71826607827!2d74.15257280588342!3d31.422977438528125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39190323b81db30f%3A0x950b40e0b8e0ad06!2sFloor%20B1%2C%20OPF%20Commercial%20Building%2C%2015%20Khayaban-e-Jinnah%2C%20Block%20A%20Opf%20Housing%20Scheme%2C%20Lahore%2C%2054000!3m2!1d31.4230038!2d74.2349741!5e0!3m2!1sen!2s!4v1742844387100!5m2!1sen!2s"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="relative md:absolute md:top-[390px] left-8 transform -translate-y-1/2 flex flex-col h-auto max-w-[90%] sm:w-[300px] p-4 space-y-3 bg-white rounded-[15px] drop-shadow-md mt-6 md:mt-0">
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
