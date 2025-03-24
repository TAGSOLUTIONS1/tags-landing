import React from 'react';

interface TagsValueProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

export const TagsValuesCard = (props: TagsValueProps) => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-3xl shadow-md space-y-3 pb-8 md:pb-16 w-full">
      <div>{props.icon}</div>
      <p className="text-dark-nameclr text-xl md:text-2xl font-bold">
        {props.title}
      </p>
      <p className="text-dark-ceoclr text-sm md:text-base font-normal">
        {props.description}
      </p>
    </div>
  );
};
