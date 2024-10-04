import React from 'react';

export const CircleButton = () => {
  return (
    <>
      <div className="flex flex-col">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
            fill="#3D3D3D"
            stroke="#A3A3A3"
            stroke-width="4"
          />
        </svg>
        <div className="ml-2 -mt-10">
          <svg
            width="2"
            height="164"
            viewBox="0 0 2 164"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="2" height="164" fill="white" fill-opacity="0.2" />
          </svg>
        </div>
      </div>
    </>
  );
};
