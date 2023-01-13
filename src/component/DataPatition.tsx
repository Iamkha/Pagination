import React, { useEffect, useRef, useState } from 'react';
import { Data } from '../fakeData/Data';
import { Patition } from './Patition';

interface PaginationProps {
  valueInput: number;
  item: number;
  lenghtonClick: number;
  dataP: number;
}

const DataPatition = ({ dataP, valueInput, item, lenghtonClick }: PaginationProps) => {
  const [value, setValue] = useState<any>(1);
  const valueRef = useRef<any>(value);
  const arr = new Array(dataP);

  const dataC = arr.fill(1).map((item, index) => {
    return { id: ++index, name: ++index };
  });
  const data = dataC || Data;

  const dataLenght = data.length;
  const patitionLenght = Math.ceil(dataLenght / item);

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

  const datapatition = data.filter((arr, index) => {
    if (index >= value * item - item && index < value * item) {
      return arr;
    } else if (
      value == '' &&
      index >= valueRef.current * item - item &&
      index < valueRef.current * item
    ) {
      return arr;
    }
  });

  return (
    <div>
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
          lenghtonClick={lenghtonClick}
          dataLenght={dataLenght}
        />
      </div>
    </div>
  );
};

export default DataPatition;
