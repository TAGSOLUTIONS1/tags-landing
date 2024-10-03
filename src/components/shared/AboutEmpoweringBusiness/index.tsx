// import React from 'react'

// export const AboutEmpoweringBusiness = () => {
//   return (
//     <div className='w-full flex p-20 gap-20'>
//         <div className='w-1/2 items-center'>
//             <div className='mx-auto gap-3 space-y-3'>
//             <p className='text-4xl font-bold text-orange-primary'>Empowering Businesses with Innovative B2B Solutions</p>
//             <p className='text-dark-secondary text-base font-medium'>As a competitive, certified company, Tags delivers excellence through custom solutions designed to meet your unique business needs</p>
//             </div>
//         </div>
//     <div className='w-1/2'>

//     </div>
//     </div>
//   )
// }

import Image from 'next/image';
import React from 'react';

const AboutEmpoweringBusiness: React.FC = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-600 mb-4">
          Empowering Businesses with Innovative B2B Solutions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          As a competitive, certified company, Tags delivers excellence through
          custom solutions designed to meet your unique business needs.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="flex justify-center items-center bg-white shadow-md p-6 rounded-lg">
            <Image
              src="/path/to/award1.png"
              alt="Award 1"
              className="w-24 h-24"
              width={50}
              height={50}
            />
          </div>
          {/* <div className="flex justify-center items-center bg-white shadow-md p-6 rounded-lg">
            <img
              src="/path/to/award2.png" 
              alt="Award 2"
              className="w-24 h-24"
            />
          </div>

          <div className="flex justify-center items-center bg-white shadow-md p-6 rounded-lg">
            <img
              src="/path/to/award3.png"
              alt="Award 3"
              className="w-24 h-24"
            />
          </div>


          <div className="flex justify-center items-center bg-white shadow-md p-6 rounded-lg">
            <img
              src="/path/to/award4.png"
              alt="Award 4"
              className="w-24 h-24"
            />
          </div>

          <div className="flex justify-center items-center bg-white shadow-md p-6 rounded-lg">
            <img
              src="/path/to/award5.png"
              alt="Award 5"
              className="w-24 h-24"
            />
          </div>

          <div className="flex justify-center items-center bg-white shadow-md p-6 rounded-lg">
            <img
              src="/path/to/award6.png"
              alt="Award 6"
              className="w-24 h-24"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutEmpoweringBusiness;
