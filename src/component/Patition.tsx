import React, { useState } from 'react';

import {
  CgChevronLeft,
  CgChevronDoubleLeft,
  CgChevronRight,
  CgChevronDoubleRight,
} from 'react-icons/cg';

type Props = {
  patitionLenght: number;
  lenghtonClick: number;
  dataLenght: number;
  value: any;
  setValue: any;
};
export const Patition = ({ patitionLenght, lenghtonClick, dataLenght, value, setValue }: Props) => {
  const handleonClickLeft = () => {
    setValue(Math.max(value - lenghtonClick, 1));
  };

  const handleonClickpaginationLeft = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const handleonClickpaginationRight = () => {
    if (value < patitionLenght) {
      setValue(value + 1);
    }
  };

  const handleonClickRight = () => {
    setValue(Math.min(patitionLenght, value + lenghtonClick));
  };

  return (
    <div className='flex justify-center items-center gap-5'>
      <p className=' text-lg font-semibold'>{dataLenght} items</p>
      <button
        className='w-[35px] h-[35px] border-2 border-solid border-gray-300 flex justify-center  disabled:text-slate-600 items-center cursor-pointer bg-slate-100 rounded-md shadow-sm hover:border-sky-700  hover:shadow-md disabled:opacity-75 disabled:border-none'
        disabled={value <= 1}
        onClick={handleonClickLeft}
      >
        <CgChevronDoubleLeft className='text-xl font-black text-gray-800 ' />
      </button>
      <button
        className='w-[35px] h-[35px] border-2 border-solid border-gray-300 flex justify-center disabled:text-slate-600 items-center cursor-pointer bg-slate-100 rounded-md shadow-sm hover:border-sky-700  hover:shadow-md disabled:opacity-75 disabled:border-none'
        disabled={value <= 1}
        onClick={handleonClickpaginationLeft}
      >
        <CgChevronLeft className='text-xl font-black text-gray-800 ' />
      </button>
      <input
        aria-label='name'
        className='w-[40px] h-[35px] border-gray-300 font-medium focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-400 border border-solid text-center  shadow-sm'
        type={'number'}
        value={value}
        onChange={(e) => {
          const page =
            +e.target.value > patitionLenght
              ? 1
              : +e.target.value && +e.target.value < 1
              ? 1
              : +e.target.value;
          setValue(page === 0 ? '' : page);
        }}
      />
      <p className='font-semibold text-base '> of {patitionLenght}</p>
      <button
        className='w-[35px] h-[35px] border-2 border-solid border-gray-300 flex justify-center disabled:text-slate-600 items-center cursor-pointer bg-slate-100 rounded-md shadow-sm hover:border-sky-700  hover:shadow-md disabled:opacity-75 disabled:border-none'
        disabled={value >= patitionLenght}
        onClick={handleonClickpaginationRight}
      >
        <CgChevronRight className='text-xl font-black text-gray-800 ' />
      </button>
      <button
        className='w-[35px] h-[35px] border-2 border-solid border-gray-300 flex justify-center disabled:text-slate-600 items-center cursor-pointer bg-slate-100 rounded-md shadow-sm hover:border-sky-700  hover:shadow-md disabled:opacity-75 disabled:border-none'
        disabled={value >= patitionLenght}
        onClick={handleonClickRight}
      >
        <CgChevronDoubleRight className='text-xl font-black text-gray-800 ' />
      </button>
    </div>
  );
};
