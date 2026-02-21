


import React from "react";


const Hero = () => {
  return (
    <section className="py-10 sm:py-4 ">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 items-center gap-10">

     
        <div className="text-center  md:text-left">
          <h1 className=" hidden text-xl md:text-5xl font-Plus md:block  Jakarta Sans leading-tight sm:text-4xl md:text-5xl font-bold  mb-8">
            <span className="block mb-2 font-jakarta">Navigating the</span>
  <span className="block mb-2 font-jakarta">digital landscape</span>
  <span className="block font-jakarta">for success</span>
          </h1>
<h1 className="font-jakarta text-xl font-semibold md:hidden  text-xl md:text-5xl font-Plus  Jakarta Sans leading-tight sm:text-4xl md:text-5xl font-bold  mb-8">
  Navigating the digital landscape for success
</h1>
          <p className="text-gray-600 mb-6 text-sm md:text-xl sm:text-base max-w-md mx-auto md:mx-0">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>

          <button className="bg-black md:text-3xl text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition">
            Book a consultation
          </button>
        </div>

   
        <div className="flex justify-center md:justify-end">
          <img
            src="https://i.postimg.cc/RZmNwHPc/HEROO.png"
            alt="megaphone"
            className="w-64 sm:w-80 md:w-[500px] object-contain"
          />
        </div>

      </div>

    
      <div className="max-w-6xl mx-auto mt-16 px-4 sm:px-6 flex flex-wrap justify-center md:justify-between items-center gap-6 text-gray-500 font-semibold md:text-4xl sm:text-lg text-center">
        <span>amazon</span>
        <span>dribbble</span>
        <span>HubSpot</span>
        <span>Notion</span>
        <span>NETFLIX</span>
        <span>zoom</span>
      </div>

    </section>
  );
};

export default Hero;
