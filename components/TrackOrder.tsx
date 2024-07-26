import React from 'react';
import { FaCheckCircle, FaCircle, FaDotCircle, FaTimesCircle } from 'react-icons/fa';

const TrackOrder = () => {
    return(
        <div className='pt-6 px-4 pb-6'> 
            <p className='text-gray-500 font-bold font-sans'>Track My Order</p>
        <div className="grid lg:grid-cols-3 gap-4  w-full  pt-2">
        <div className="lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
         <div className="flex flex-col w-full pt-1">
         <p className="font-sans font-bold text-gray-600">New Order</p>               
          <p className="text-2xl ">752</p>
          </div> 
          <p className=' flex justify-center  p-2  '>
            <FaCheckCircle className='w-5 h-5 text-blue-500' />
            
          </p>
        </div>
        <div className="lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pt-1">
         <p className="font-sans font-bold text-gray-600">In Progress</p>
          <p className="text-2xl ">32</p>
          </div> 
          <p className=' flex justify-center  p-2  '>
           <FaCheckCircle className='text-yellow-500 h-5 w-5'/>
          </p>
        </div>
        <div className="lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pt-1">
         <p className="font-sans font-bold text-gray-600">Completed</p>
          <p className="text-2xl ">457</p>
          </div> 
          <p className=' flex justify-center  p-2 '>
            <FaCheckCircle className='text-green-500 w-5 h-5' />
          </p>
        </div>
        </div>
        </div>
    );
};

export default TrackOrder;