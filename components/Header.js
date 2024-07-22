import React from "react";
import Image from "next/image";
import Dawurobo from "../assests/dawurobo-logo.jpg";
import { UserCircle } from 'lucide-react';

const Header = () => {
    return(
        <div className="flex justify-between px-4 pt-4 pb-4">
            <div className="flex items-center">
            <Image src={Dawurobo} alt="Dawurobo-Logo" width={32} height={32} className="rounded-full mr-2"/>
            <h1 className="text-lg font-bold font-sans text-white">Dawurobo</h1>
            </div>
            <div className="flex items-center">
            <h2 className="mr-2 font-sans text-white">Welcome back, Abby</h2>
            <UserCircle className='text-white h-6 w-6' />
            </div>
            
        </div>
    );
};

export default Header;