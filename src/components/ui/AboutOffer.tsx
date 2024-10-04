import React from 'react';
import { CircleButton } from './CircleButton';

interface AboutOfferProps {
  title: string;
  description: string;
}

const AboutOffer = (props: AboutOfferProps) => {
  return (
    <div className="flex md:pl-14">
      <div className="mt-2">
        <CircleButton></CircleButton>
      </div>

      <div className="ml-14">
        <h3 className="text-lg font-medium">{props.title}</h3>
        <p className="text-base mt-4 text-dark-textofferexplain font-light">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default AboutOffer;
