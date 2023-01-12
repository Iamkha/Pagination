import React, { ReactNode } from 'react';

interface ButtonProps {
  Children?: string;
  background?: string;
  color?: string;
  borderColor?: string;
  padding?: number;
  disabled?: boolean;
}

const Button = ({
  disabled,
  padding,
  borderColor,
  color,
  background,
  Children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type='button'
      className='p-2 h-[35px] border-2 border-solid flex justify-center items-center cursor-pointer bg-slate-100 rounded-md shadow-sm hover:border-sky-700 disabled:opacity-75 disabled:border-none'
      style={{ background, color, borderColor, padding }}
      disabled={disabled}
      {...props}
    >
      {Children}
    </button>
  );
};

export default Button;
