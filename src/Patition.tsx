import React, {  useEffect, useState } from 'react'
import { Data } from './fakeData/Data'
import {AiOutlineLeft, AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineRight} from 'react-icons/ai'

interface PaginationProps {
  valueInput: number,
  lenght: number
}


 export const Patition = ({valueInput, lenght}: PaginationProps) => {
  const [value, setValue] = useState<number>(1);
  
  const dataLenght = lenght || Data.length;  
  const patitionLenght = Math.ceil(dataLenght/5);
  
  const datapatition = Data.filter((arr, index) => {
    if(index >= (value *5 -5 ) && index < (value*5)){
      return arr
    }
  } )
  
  
  useEffect(() =>{  
    if(valueInput <= patitionLenght && valueInput >= 1){
      setValue(valueInput)   
    }else{
      
      setValue(1)
    }
  },[valueInput, patitionLenght])

  const handleonClickLeft = () =>{
  setValue(Math.max(value-10,1))
  }

  const handleonClickpaginationLeft = () => {
         if(value > 1   ){
          setValue(value-1);

        }  
  }
 

  const handleonClickpaginationRight = () => {
    if(value < patitionLenght ){
     setValue(value + 1);
    }
}
 
const handleonClickRight =()=>{
  setValue(Math.min(patitionLenght, value + 10))
}



  return (
    <div>
        <div className='gap-5 flex justify-center items-center w-full '>{datapatition.map((data: any ) =>(
        <h1 className='w-11 bg-amber-300 font-normal text-xl  h-11 text-center top-0 bottom-0 my-auto mb-11 ' key={data.id}>{data.name}</h1>

      ))}</div>
      <div>
        <div className='flex justify-center items-center gap-5'> 
          <p className=' text-lg font-semibold'>{dataLenght} items</p>
          <button className='w-[35px] h-[35px] border-2 border-solid flex justify-center items-center cursor-pointer bg-slate-100 rounded-md shadow-sm hover:border-sky-700 disabled:opacity-75 disabled:border-none' disabled={value <= 1}  onClick={handleonClickLeft}><AiOutlineDoubleLeft  className='icons'/></button>
          <button className='w-[35px] h-[35px] border-2 border-solid flex justify-center items-center cursor-pointer bg-slate-100 rounded-md shadow-sm hover:border-sky-700 disabled:opacity-75 disabled:border-none' disabled={value <= 1}  onClick={handleonClickpaginationLeft}><AiOutlineLeft className='icons' /></button>
          <input className='w-[40px] h-[35px] border border-solid text-center  shadow-sm' type={'number'} value={value} 
          onChange={(e)=>{ 
           const page = +e.target.value >  patitionLenght ? 1:  +e.target.value  && +e.target.value < 1 ? 1 :  +e.target.value
          setValue(page)
           }}
          />
           <p className='font-semibold text-base '> of {patitionLenght}</p>
          <button className='w-[35px] h-[35px] border-2 border-solid flex justify-center items-center cursor-pointer bg-slate-100 rounded-md shadow-sm hover:border-sky-700 disabled:opacity-75 disabled:border-none' disabled={value >= patitionLenght}   onClick={handleonClickpaginationRight}><AiOutlineRight className='icons' /></button>
          <button  className='w-[35px] h-[35px] border-2 border-solid flex justify-center items-center cursor-pointer bg-slate-100 rounded-md shadow-sm hover:border-sky-700 disabled:opacity-75 disabled:border-none' disabled={value >= patitionLenght}  onClick={handleonClickRight}><AiOutlineDoubleRight className='icons' /></button>
        </div>
      </div>   
    </div>
  )
}

