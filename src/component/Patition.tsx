import React, { useState } from 'react';

import {
  AiOutlineLeft,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineRight,
} from 'react-icons/ai';

type Props = {
  patitionLenght: number;
  lenghtonClick: number;
  dataLenght: number;
  value: any;
  setValue: any;
};
export const Patition = ({ patitionLenght, lenghtonClick, dataLenght, value, setValue }: Props) => {
  // const [value, setValue] = useState<any>(1);
  console.log(value);

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
    <div>
      <div>
        <div className='flex justify-center items-center gap-5'>
          <p className=' text-lg font-semibold'>{dataLenght} items</p>
          <button
            className='w-[35px] h-[35px] border-2 border-solid flex justify-center items-center cursor-pointer bg-slate-100 rounded-md shadow-sm hover:border-sky-700 disabled:opacity-75 disabled:border-none'
            disabled={value <= 1}
            onClick={handleonClickLeft}
          >
            <AiOutlineDoubleLeft className='icons' />
          </button>
          <button
            className='w-[35px] h-[35px] border-2 border-solid flex justify-center items-center cursor-pointer bg-slate-100 rounded-md shadow-sm hover:border-sky-700 disabled:opacity-75 disabled:border-none'
            disabled={value <= 1}
            onClick={handleonClickpaginationLeft}
          >
            <AiOutlineLeft className='icons' />
          </button>
          <input
            aria-label='name'
            className='w-[40px] h-[35px] border border-solid text-center  shadow-sm'
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
            className='w-[35px] h-[35px] border-2 border-solid flex justify-center items-center cursor-pointer bg-slate-100 rounded-md shadow-sm hover:border-sky-700 disabled:opacity-75 disabled:border-none'
            disabled={value >= patitionLenght}
            onClick={handleonClickpaginationRight}
          >
            <AiOutlineRight className='icons' />
          </button>
          <button
            className='w-[35px] h-[35px] border-2 border-solid flex justify-center items-center cursor-pointer bg-slate-100 rounded-md shadow-sm hover:border-sky-700 disabled:opacity-75 disabled:border-none'
            disabled={value >= patitionLenght}
            onClick={handleonClickRight}
          >
            <AiOutlineDoubleRight className='icons' />
          </button>
        </div>
      </div>
    </div>
  );
};
