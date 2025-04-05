// import Paragraph from '@/components/ui/Paragraph';
// import Heading from '../../ui/Heading';
// import React from 'react';
// import Button from '@/components/ui/Button';
// import emojiFlags from 'emoji-flags';
// import { useState } from 'react';

// interface CountryCode {
//   code: string;
//   country: keyof typeof emojiFlags; // Ensure country is a valid key
// }

// const countryCodes: CountryCode[] = [
//   { code: '+971', country: 'AE' },
//   { code: '+1', country: 'US' },
//   { code: '+44', country: 'GB' },
//   { code: '+91', country: 'IN' },
// ];

// const ContactUsForm: React.FC = () => {
//   const [form, setForm] = useState({ firstname: '', lastname: '', jobtitle: '', phone: '', email: '', message: '' });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const res = await fetch('/api/contact', {
//       method: 'POST',
//       body: JSON.stringify(form),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     const data = await res.json();
//     alert(data.message || data.error);
//   };
//   return (
//     <div className="flex flex-col md:flex-row md:space-x-[170px] p-4">
//       {/* Left section with contact details */}
//       <div className="flex flex-col ml-4 md:ml-[30px]">
//         <div className="p-4 md:p-6">
//           <Heading title="Connect With Us" color="Black" />
//           <div className="w-full md:w-[415px]">
//             <Paragraph
//               color="gray-600"
//               title="Have service-related questions or interested in Joining TAGS? We're here to support you every step of the way"
//             />
//           </div>
//         </div>
//         <hr className="ml-4 md:ml-[30px] w-full md:w-[400px] h-[2px] text-[black]" />

//         <div className="p-4 md:p-6 mt-3 space-y-2">
//           <p className="font-semibold text-gray-600">
//             Learn about our services
//           </p>
//           <div className="flex flex-col md:flex-row md:space-x-6">
//             <p className="text-gray-600 text-sm underline">
//               contact@tagsolutionsltd.com
//             </p>
//             <p className="text-gray-600 text-sm underline">+971 50 862 0567</p>
//           </div>
//           <Paragraph title="Request a callback" color="orange-primary" />
//         </div>

//         <div className="p-4 md:p-6 space-y-2">
//           <p className="font-semibold text-gray-600">
//             Talk to our support team
//           </p>
//           <p className="text-gray-600 text-sm underline">
//             contact@tagsolutionsltd.com
//           </p>
//         </div>
//         <div className="p-4 md:p-6 space-y-2">
//           <p className="font-semibold text-gray-600">Join TAGS team</p>
//           <p className="text-gray-600 text-sm underline">
//             hr@tagsolutionsltd.com
//           </p>
//         </div>
//       </div>

//       {/* Right section with the form */}
//       <div className="bg-white rounded-[20px] h-auto w-full md:w-[600px] p-6 drop-shadow-lg mt-8">
//         <p className="text-lg font-semibold text-gray-700 mb-4">
//           Fill out the form and we will contact you
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name Fields */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               type="text"
//               placeholder="First name"
//               value={form.firstname}
//               onChange={(e) => setForm({ ...form, firstname: e.target.value })}
//               className="w-full p-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-1 focus:ring-gray-300"
//             />
//             <input
//               type="text"
//               placeholder="Last name"
//               value={form.lastname}
//               onChange={(e) => setForm({ ...form, lastname: e.target.value })}
//               className="w-full p-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-1 focus:ring-gray-300"
//             />
//           </div>

//           {/* Job Title & Email */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               type="text"
//               placeholder="Job title"
//               value={form.jobtitle}
//               onChange={(e) => setForm({ ...form, jobtitle: e.target.value })}
//               className="w-full p-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-1 focus:ring-gray-300"
//             />
//             <input
//               type="email"
//               placeholder="Business email"
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//               className="w-full p-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-1 focus:ring-gray-300"
//             />
//           </div>

//           {/* Phone Number */}
//           <div className="flex flex-col md:flex-row items-center border border-gray-300 rounded-[12px] p-3">
//             <select
//               className="focus:outline-none bg-[#F5F5F5] rounded-[7px] p-2 mb-2 md:mb-0 md:mr-2">
//               {countryCodes.map((c) => {
//                 const countryData = emojiFlags[
//                   c.country
//                 ] as emojiFlags.CountryData;
//                 return (
//                   <option key={c.code} value={c.code}>
//                     {countryData?.emoji} {c.code}
//                   </option>
//                 );
//               })}
//             </select>
//             <input
//               type="tel"
//               placeholder="Enter phone number"
//               className="focus:outline-none w-full"
//               required
//             />
//           </div>

//           {/* Message Box */}
//           <textarea
//             placeholder="Your message"
//             value={form.message}
//             onChange={(e) => setForm({ ...form, message: e.target.value })}
//             rows={4}
//             className="w-full p-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-1 focus:ring-gray-300"
//           />

//           {/* Submit Button */}
//           <div className="flex flex-col md:flex-row items-center">
//             <Button title="Submit" />
//             <p className="text-gray-500 text-sm mt-2 md:mt-0 md:ml-3">
//               By submitting the form I agree with the{' '}
//               <a href="#" className="text-orange-500 underline">
//                 Privacy policy
//               </a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactUsForm;

'use client';

import Paragraph from '@/components/ui/Paragraph';
import Heading from '../../ui/Heading';
import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import emojiFlags from 'emoji-flags';

interface CountryCode {
  code: string;
  country: keyof typeof emojiFlags;
}

const countryCodes: CountryCode[] = [
  { code: '+971', country: 'AE' },
  { code: '+1', country: 'US' },
  { code: '+44', country: 'GB' },
  { code: '+91', country: 'IN' },
  { code: '+92', country: 'PK' },
  { code: '+93', country: 'AF' },
];

const ContactUsForm: React.FC = () => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    jobtitle: '',
    phone: '',
    email: '',
    message: '',
  });

  const [selectedCode, setSelectedCode] = useState(countryCodes[0].code);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          ...form,
          phone: `${selectedCode} ${form.phone}`, // Combine code + number
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();
      alert(data.message || data.error);
      if (res.ok) {
        setForm({
          firstname: '',
          lastname: '',
          jobtitle: '',
          phone: '',
          email: '',
          message: '',
        });
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:space-x-[170px] p-4">
      {/* Left section with contact details */}
      <div className="flex flex-col ml-4 md:ml-[30px]">
        <div className="p-4 md:p-6">
          <Heading title="Connect With Us" color="Black" />
          <div className="w-full md:w-[415px]">
            <Paragraph
              color="gray-600"
              title="Have service-related questions or interested in Joining TAGS? We're here to support you every step of the way"
            />
          </div>
        </div>
        <hr className="ml-4 md:ml-[30px] w-full md:w-[400px] h-[2px] text-[black]" />

        <div className="p-4 md:p-6 mt-3 space-y-2">
          <p className="font-semibold text-gray-600">
            Learn about our services
          </p>
          <div className="flex flex-col md:flex-row md:space-x-6">
            <p className="text-gray-600 text-sm underline">
              contact@tagsolutionsltd.com
            </p>
            <p className="text-gray-600 text-sm underline">+971 50 862 0567</p>
          </div>
          <Paragraph title="Request a callback" color="orange-primary" />
        </div>

        <div className="p-4 md:p-6 space-y-2">
          <p className="font-semibold text-gray-600">
            Talk to our support team
          </p>
          <p className="text-gray-600 text-sm underline">
            contact@tagsolutionsltd.com
          </p>
        </div>
        <div className="p-4 md:p-6 space-y-2">
          <p className="font-semibold text-gray-600">Join TAGS team</p>
          <p className="text-gray-600 text-sm underline">
            hr@tagsolutionsltd.com
          </p>
        </div>
      </div>

      {/* Right section with the form */}
      <div className="bg-white rounded-[20px] h-auto w-full md:w-[600px] p-6 drop-shadow-lg mt-8">
        <p className="text-lg font-semibold text-gray-700 mb-4">
          Fill out the form and we will contact you
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              value={form.firstname}
              onChange={(e) => setForm({ ...form, firstname: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-1 focus:ring-gray-300"
              required
            />
            <input
              type="text"
              placeholder="Last name"
              value={form.lastname}
              onChange={(e) => setForm({ ...form, lastname: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-1 focus:ring-gray-300"
              required
            />
          </div>

          {/* Job Title & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Job title"
              value={form.jobtitle}
              onChange={(e) => setForm({ ...form, jobtitle: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-1 focus:ring-gray-300"
              required
            />
            <input
              type="email"
              placeholder="Business email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-1 focus:ring-gray-300"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col md:flex-row items-center border border-gray-300 rounded-[12px] p-3">
            <select
              value={selectedCode}
              onChange={(e) => setSelectedCode(e.target.value)}
              className="focus:outline-none bg-[#F5F5F5] rounded-[7px] p-2 mb-2 md:mb-0 md:mr-2"
            >
              {countryCodes.map((c) => {
                const countryData = emojiFlags[
                  c.country
                ] as emojiFlags.CountryData;
                return (
                  <option key={c.code} value={c.code}>
                    {countryData?.emoji} {c.code}
                  </option>
                );
              })}
            </select>
            <input
              type="tel"
              placeholder="Enter phone number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="focus:outline-none w-full"
              required
            />
          </div>

          {/* Message Box */}
          <textarea
            placeholder="Your message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-1 focus:ring-gray-300"
            required
          />

          {/* Submit Button */}
          <div className="flex flex-col md:flex-row items-center">
            <Button
              title={submitting ? 'Submitting...' : 'Submit'}
              disabled={submitting}
            />
            <p className="text-gray-500 text-sm mt-2 md:mt-0 md:ml-3">
              By submitting the form I agree with the{' '}
              <a href="#" className="text-orange-500 underline">
                Privacy policy
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
