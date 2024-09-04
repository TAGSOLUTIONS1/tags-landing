import React from 'react';
import Image from 'next/image';

const Certifications: React.FC = () => {
  return (
    <div className="mt-16">
      <p className="text-p4 text-dark-secondary text-center">
        Our Employees are certified by Big Companies
      </p>
      <div className="flex lg:flex-row md:flex-row flex-col gap-20 mt-5">
        <Image
          width={156}
          height={60}
          src="/logo/google.png"
          className="mix-blend-luminosity object-contain"
          alt="googlelogo"
        />
        <Image
          width={156}
          height={60}
          src="/logo/openai.png"
          className="mix-blend-luminosity object-contain"
          alt="openailogo"
        />
        <Image
          width={156}
          height={60}
          src="/logo/microsoft.png"
          className="mix-blend-luminosity object-contain"
          alt="microsoftogo"
        />
        <Image
          width={156}
          height={60}
          src="/logo/linkedin.png"
          className="mix-blend-luminosity object-contain"
          alt="linkedinlogo"
        />
        <Image
          width={156}
          height={60}
          src="/logo/hubspot.png"
          className="mix-blend-luminosity object-contain"
          alt="hubspotlogo"
        />
        <Image
          width={156}
          height={60}
          src="/logo/meta.png"
          className="mix-blend-luminosity object-contain"
          alt="metalogo"
        />
        <Image
          width={156}
          height={60}
          src="/logo/webflow.png"
          className="mix-blend-luminosity object-contain"
          alt="webflowlogo"
        />
      </div>
    </div>
  );
};

export default Certifications;
