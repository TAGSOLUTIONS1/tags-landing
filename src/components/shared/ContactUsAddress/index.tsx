import React from 'react';
import Image from 'next/image';

const ContactUsAddress: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 flex justify-center items-center">
      <div className="rounded-[15px] drop-shadow-lg flex flex-col md:flex-row w-full max-w-[1100px] gap-6">
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="relative rounded-[15px] drop-shadow-lg w-full">
            <h1 className="p-3 text-center font-semibold hover:text-orange-case">
              UAE Office
            </h1>
            <iframe
              className="rounded-[15px] drop-shadow-lg  w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28899.22676331266!2d55.3887365!3d25.122051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f640f1dcd4111%3A0xcb38e7be624792c3!2sDubai%20Silicon%20Oasis%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1743085233630!5m2!1sen!2s"
              loading="lazy"
              allowFullScreen
            ></iframe>

            <div className="absolute bottom-6 left-6 bg-white p-3 rounded-[15px] drop-shadow-md w-[90%] sm:w-[280px] space-y-2">
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
                  className="ml-2"
                  height={5}
                  width={8}
                />
              </p>
            </div>
          </div>

          <div className="rounded-[15px] drop-shadow-lg w-full">
            <h1 className="p-3 text-center font-semibold hover:text-orange-case">
              Pakistan Office
            </h1>
            <iframe
              className="rounded-[15px] drop-shadow-lg w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d108949.71826607827!2d74.15257280588342!3d31.422977438528125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39190323b81db30f%3A0x950b40e0b8e0ad06!2sFloor%20B1%2C%20OPF%20Commercial%20Building%2C%2015%20Khayaban-e-Jinnah%2C%20Block%20A%20Opf%20Housing%20Scheme%2C%20Lahore%2C%2054000!3m2!1d31.4230038!2d74.2349741!5e0!3m2!1sen!2s!4v1742844387100!5m2!1sen!2s"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsAddress;
