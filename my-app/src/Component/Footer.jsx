


import React from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg py-10 px-4">
      <footer className="bg-gradient-to-r from-[#0B1220] to-[#111827] text-white rounded-3xl p-8 sm:p-12 max-w-7xl mx-auto">


        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

   
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            ★ Positivus
          </h2>

      
          <nav className="flex md:text-[22px] flex-wrap justify-center gap-6 text-gray-300 text-sm">
            <a href="#" className="hover:text-lime-400">About us</a>
            <a href="#" className="hover:text-lime-400">Services</a>
            <a href="#" className="hover:text-lime-400">Use Cases</a>
            <a href="#" className="hover:text-lime-400">Pricing</a>
            <a href="#" className="hover:text-lime-400">Blog</a>
          </nav>


          <div className="flex gap-4">
            <div className="w-9 h-9 flex items-center justify-center bg-white text-black rounded-full cursor-pointer hover:bg-lime-400 transition">
              <FaLinkedinIn size={14} />
            </div>
            <div className="w-9 h-9 flex items-center justify-center bg-white text-black rounded-full cursor-pointer hover:bg-lime-400 transition">
              <FaFacebookF size={14} />
            </div>
            <div className="w-9 h-9 flex items-center justify-center bg-white text-black rounded-full cursor-pointer hover:bg-lime-400 transition">
              <FaTwitter size={14} />
            </div>
          </div>

        </div>

   
        <div className="flex flex-col lg:flex-row justify-between gap-10 mt-12">

    
          <div className="max-w-sm self-start text-left">
            <span className="bg-lime-400 selft-start md:text-xl  text-black px-6 py-1 rounded-md text-sm font-medium">
              Contact us:
            </span>

            <div className="mt-6 md:text-xl text-left space-y-3 text-gray-300 text-sm">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>
                Address: 1234 Main St <br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>

          <div className="bg-[#292A32] p-6 rounded-2xl flex flex-col sm:flex-row gap-4 items-center w-full lg:w-[500px]">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 bg-transparent border border-gray-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-lime-400 w-full"
            />
            <button className="bg-lime-400 text-black px-6 py-3 rounded-xl font-medium hover:bg-lime-300 transition w-full sm:w-auto">
              Subscribe to news
            </button>
          </div>

        </div>

    
        <div className="border-t border-white my-10"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm gap-4">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <a href="#" className="hover:text-lime-400 underline">
            Privacy Policy
          </a>
        </div>

      </footer>
    </div>
  );
};

export default Footer;