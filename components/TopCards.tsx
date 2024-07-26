import React from "react";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';


const TopCards = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-4 p-4 w-full  ">
        <div className="lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
         <div className="flex flex-col w-full pt-1">
         <p className="font-sans font-bold text-gray-600">NUMBER OF SALES</p>
          <p className="text-2xl ">752</p>
          </div> 
          <p className='bg-blue-200 flex justify-center items-center p-2  border rounded-lg'>
            <span className="text-blue-700 text-sm  flex items-center"><FaAngleUp className="mr-1" /> 18%</span>
          </p>
        </div>
        <div className="lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pt-1">
         <p className="font-sans font-bold text-gray-600">REVENUE</p>
          <p className="text-2xl ">32,752gh</p>
          </div> 
          <p className='bg-red-200 flex justify-center items-center p-2  border rounded-lg'>
            <span className="text-red-700 text-sm flex items-center"><FaAngleDown className="mr-1" /> 29%</span>
          </p>
        </div>
        <div className="lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pt-1">
         <p className="font-sans font-bold text-gray-600">PROFIT</p>
          <p className="text-2xl ">45,752gh</p>
          </div> 
          <p className='bg-blue-200 flex justify-center items-center p-2 border rounded-lg'>
            <span className="text-blue-700 text-sm  flex items-center"><FaAngleUp className="mr-1" /> 30%</span>
          </p>
        </div>
        <div className="lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pt-1">
         <p className="font-sans font-bold text-gray-600">COST</p>
          <p className="text-2xl ">675gh</p>
          </div> 
          <p className='bg-blue-200 flex justify-center items-center p-2 border rounded-lg'>
            <span className="text-blue-700 text-sm flex items-center"><FaAngleUp className="mr-1" /> 48%</span>
          </p>
        </div>
        
    </div>
  )
}

export default TopCards;
