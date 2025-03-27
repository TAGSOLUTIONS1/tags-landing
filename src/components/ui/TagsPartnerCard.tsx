import React from 'react';
import Button from './Button';
import Image from 'next/image';
import Image from 'next/image';

interface TagsPartnerValues {
  title: string;
  description: string;
  button: string;
  width: number;
  height: number;
}

export const TagsPartnerCard = (props: TagsPartnerValues) => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-3xl shadow-md flex flex-col justify-between h-full w-full">
      <div className="space-y-3">
        <Image
          className=""
          src={props.title}
          alt={props.title}
          width={props.width}
          height={props.height}
        />

        <p className="text-dark-ceoclr text-sm md:text-base font-normal">
          {props.description}
        </p>
      </div>
      <div className="mt-3">
        <Button title={props.button}></Button>
      </div>
    </div>
  );
};
