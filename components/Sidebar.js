import React from 'react';
import Link from 'next/link';
import { FaBell, FaChartLine, FaCircle, FaCog, FaCriticalRole, FaHome, FaSignOutAlt, FaUser } from 'react-icons/fa';


const Sidebar = ({ children }) => {
    return(
        <div className='flex'>
            <div className='fixed v-20 h-screen p-3 bg-white border-r-[1px] flex flex-col justify-between'>
                <div className='flex flex-col items-center pt-4'>
                    <Link href='/'>
                    <div className='bg-blue-100 border rounded-full p-4'>
                        <FaHome className='text-blue-700 h-5 w-5'/>
                        </div>
                        </Link>
                        <Link href='/notifications'>
                    <div className=' hover:bg-blue-100 hover:border rounded-full mt-4 p-4'>
                        <FaBell className='text-blue-700 h-5 w-5'/>
                        <FaCircle className='text-red-600 h-2 w-2 ml-4'/>
                        </div>
                        </Link>
                        <Link href='/reports'>
                    <div className=' hover:bg-blue-100 hover:border rounded-full mt-4 p-4'>
                        <FaChartLine className='text-blue-700 h-5 w-5'/>
                        </div>
                        </Link>
                        <Link href='/profile'>
                    <div className=' hover:bg-blue-100 hover:border rounded-full mt-4 p-4'>
                        <FaUser className='text-blue-700 h-5 w-5'/>
                        </div>
                        </Link>
                        <Link href='/settings'>
                    <div className=' hover:bg-blue-100 hover:border rounded-full mt-4 p-4'>
                        <FaCog className='text-blue-700 h-5 w-5'/>
                        </div>
                        </Link>
                        <Link href='/'>
                    <div className=' hover:bg-blue-100 hover:border rounded-full mt-4 p-4'>
                        <FaSignOutAlt className='text-blue-700 h-5 w-5'/>
                        </div>
                        </Link>
                </div>
            </div>
            <main className=' ml-20 w-full'>{children}</main>
        </div>
    );
};

export default Sidebar;