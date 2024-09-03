import React from 'react';

// interface HeadingProps {color: string, title:string}
// function Heading(props: HeadingProps) {
interface Buttonprops{title:String}
const Button = (props:Buttonprops) => {
  return (
    <div>
      <button
        className="bg-orange-primary text-white px-5 py-4 rounded-lg hover:bg-orange-600">
        {props.title}
      </button>
    </div>
  );
}
export default Button;
