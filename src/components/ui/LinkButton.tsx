import React from 'react';

interface LinkbuttonProps {
  title: string;
  href: string;
}
const Linkbutton = (props: LinkbuttonProps) => {
  return (
    <>
      <a
        href={props.href}
        className="bg-orange-primary text-white px-5 py-4 rounded-lg hover:bg-orange-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.title}
      </a>
    </>
  );
};

export default Linkbutton;
