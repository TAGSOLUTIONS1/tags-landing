import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface CardProps {
  description: string;
  buttoncontent: string;
  image: string | StaticImport;
}

const CardInclusive: React.FC<CardProps> = (props) => {
  return (
    <div className="bg-light-white p-4 rounded-2xl max-w-md mx-auto flex flex-col items-center">
      <div className="w-full">
        <Image
          className="w-[434px] h-[358px] rounded-2xl"
          src={props.image}
          alt="Logo"
          width={434}
          height={358}
        />
      </div>
      <p className="text-p1 mt-6 text-black text-center">{props.description}</p>
      <div className="mt-6">
        <Button title={props.buttoncontent} />
      </div>
    </div>
  );
};

export default CardInclusive;
