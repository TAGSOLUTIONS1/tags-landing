// import { useState } from 'react';
// import emojiFlags from 'emoji-flags';

// interface CountryCode {
//   code: string;
//   flag: string;
//   name: string;
// }

// const countryCodes: CountryCode[] = [
//   { code: '+971', flag: '🇦🇪', name: 'UAE' },
//   { code: '+1', flag: '🇺🇸', name: 'USA' },
//   { code: '+44', flag: '🇬🇧', name: 'UK' },
//   { code: '+91', flag: '🇮🇳', name: 'India' },
//   { code: '+92', flag: '🇵🇰', name: 'Pakistan' },
//   { code: '+61', flag: '🇦🇺', name: 'Australia' },
// ];

// export default function PhoneInput() {
//   const [selectedCode, setSelectedCode] = useState<CountryCode>(
//     countryCodes[0],
//   );
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <div className="relative">
//       {/* Selected Item */}
//       <div
//         className="flex items-center border border-gray-300 rounded-[12px] p-3 cursor-pointer"
//         onClick={() => setDropdownOpen(!dropdownOpen)}
//       >
//         <span className="mr-2">{selectedCode.flag}</span>
//         <span>{selectedCode.code}</span>
//       </div>

//       {/* Dropdown List */}
//       {dropdownOpen && (
//         <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
//           {countryCodes.map((country) => (
//             <div
//               key={country.code}
//               className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100"
//               onClick={() => {
//                 setSelectedCode(country);
//                 setDropdownOpen(false);
//               }}
//             >
//               <span className="mr-2">{country.flag}</span>
//               <span>{country.code}</span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
