import React, { useEffect, useRef, useState } from 'react';
import { Data } from '../fakeData/Data';
import { Patition } from './Patition';

interface PaginationProps {
  valueInput: number;
  items: number;
  NumberOfPagesClick: number;
  data: number;
}

const DataPatition = ({ data, valueInput, items, NumberOfPagesClick }: PaginationProps) => {
  const [value, setValue] = useState<any>(1);
  const valueRef = useRef<any>(value);
  const arr = new Array(data);

  const dataC = arr.fill(1).map((item, index) => {
    return { id: index++, name: index++ };
  });
  const dataPG = dataC || Data;

  const dataLenght = dataPG.length;
  const patitionLenght = Math.ceil(dataLenght / items);

  useEffect(() => {
    if (valueInput <= patitionLenght && valueInput >= 1) {
      setValue(valueInput);
    } else {
      setValue(1);
    }
  }, [valueInput, patitionLenght]);

  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  const datapatition = dataPG.filter((arr, index) => {
    if (index >= value * items - items && index < value * items) {
      return arr;
    } else if (
      value == '' &&
      index >= valueRef.current * items - items &&
      index < valueRef.current * items
    ) {
      return arr;
    }
  });

  return (
    <div className='mt-32'>
      <div className='gap-5 flex justify-center items-center w-full '>
        {datapatition.map((data: any) => (
          <h1
            className='w-11 bg-amber-300 font-normal text-xl  h-11 text-center top-0 bottom-0 my-auto mb-11 '
            key={data.id}
          >
            {data.name}
          </h1>
        ))}
      </div>
      <div>
        <Patition
          value={value}
          setValue={setValue}
          patitionLenght={patitionLenght}
          lenghtonClick={NumberOfPagesClick}
          dataLenght={dataLenght}
        />
      </div>
    </div>
  );
};

export default DataPatition;
