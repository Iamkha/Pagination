import React from 'react';

interface InputProps {
  type?: string;
  value?: string;
  background?: string;
  borderColor?: string;
  padding?: number;
  color?: string;
  borderRadius?: number;
  onChange?: () => void;
}

const Input = ({
  borderRadius,
  type,
  value,
  padding,
  borderColor,
  color,
  background,
}: InputProps) => {
  return (
    <input
      className=' h-[35px] border border-solid text-center  shadow-sm'
      type={type}
      style={{ background, color, borderColor, padding, borderRadius }}
      value={value}
    />
  );
};

export default Input;
