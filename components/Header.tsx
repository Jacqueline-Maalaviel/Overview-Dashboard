import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { UserCircle } from 'lucide-react';

const Header = () => {
    return(
        <div className="flex justify-between px-4 pt-4 pb-4">
            <div className="flex items-center">
            <Image src={Logo} alt="Dawurobo-Logo" width={40} height={40} className="rounded-full mr-1"/>
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