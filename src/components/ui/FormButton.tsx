import React from 'react';

interface FormButtonprops {
  title: String;
  onClick?: () => void;
  disabled?: boolean;
}
const FormButton = (props: FormButtonprops) => {
  return (
    <div>
      <button
        className="bg-orange-primary text-white px-5 py-4 rounded-lg hover:bg-orange-600"
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.title}
      </button>
    </div>
  );
};
export default FormButton;
