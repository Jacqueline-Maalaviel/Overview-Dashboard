'use client';
import React from "react";
import Header from "../components/Header";
import TopCards from "../components/TopCards";
import Link from "next/link";
import { AiFillCaretDown } from "react-icons/ai";
import ChartBar from "@/components/ChartBar";
import Customers from "@/components/Customers";
import TrackOrder from "@/components/TrackOrder";


export default function Home() {
  return (
    <div  className="bg-blue-400">
      <Header />
        <div className="bg-gray-100 min-h-screen">
          <div className="flex justify-between px-4 pt-4 pb-4">
            <div className="flex items-center">
              <h1 className="ml-4 mt-2 font-sans font-bold text-gray-700 text-lg">My Dashboard</h1>
            </div>
            <div className="flex items-center border rounded-lg p-2 bg-gray-100">
              <Link href="/">
                <AiFillCaretDown className="text-gray-500 mr-1 "/>
              </Link>
                <h2 className="font-sans font-bold text-gray-500">June</h2>
            </div>    
          </div>
          <TopCards />
            <div className='p-4 grid md:grid-cols-2 grid-cols-1 gap-4'>
            <Customers />
              <ChartBar />
              
            </div> 
            <div >
              <TrackOrder />
            </div> 
        </div>
    </div>
    
  );
};
