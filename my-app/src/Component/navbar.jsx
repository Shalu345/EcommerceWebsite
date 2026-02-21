

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative px-6 py-4">

      <div className="flex justify-between items-center">
        <h1 className="text-2xl sm:text-[29px] font-bold">
          Positivus
        </h1>

     
        <ul className="hidden md:flex gap-8 text-[22px] font-medium">
          <li className="cursor-pointer hover:text-lime-500">About</li>
          <li className="cursor-pointer hover:text-lime-500">Services</li>
          <li className="cursor-pointer hover:text-lime-500">Use Cases</li>
          <li className="cursor-pointer hover:text-lime-500">Pricing</li>
          <li className="cursor-pointer hover:text-lime-500">Blog</li>
        </ul>

       
        <button className="hidden md:block border px-4 py-2 rounded-sm text-lg hover:bg-black hover:text-white transition">
          Request a quote
        </button>


        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>


      {isOpen && (
        <div className="md:hidden mt-4 bg-white shadow-lg rounded-xl p-6 space-y-4 text-center font-medium">
          <ul className="space-y-4">
            <li className="hover:text-lime-500 cursor-pointer">About</li>
            <li className="hover:text-lime-500 cursor-pointer">Services</li>
            <li className="hover:text-lime-500 cursor-pointer">Use Cases</li>
            <li className="hover:text-lime-500 cursor-pointer">Pricing</li>
            <li className="hover:text-lime-500 cursor-pointer">Blog</li>
          </ul>

          <button className="border w-full py-2 rounded-md hover:bg-black hover:text-white transition">
            Request a quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;