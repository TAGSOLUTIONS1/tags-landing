import React from 'react';

interface LinkbuttonProps {
  title: string;
  href: string;
}

const Linkbutton = (props: LinkbuttonProps) => {
  return (
    <a
      href={props.href}
      className="bg-orange-primary text-white text-sm sm:text-base px-4 sm:px-5 py-3 sm:py-4 rounded-lg hover:bg-orange-600 transition duration-300 inline-block text-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.title}
    </a>
  );
};

export default Linkbutton;
