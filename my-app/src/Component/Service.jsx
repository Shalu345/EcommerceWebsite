

import React from "react";


const cardImages = [
  "https://i.postimg.cc/7PG912s4/ENgine-removebg-preview.png", 
  "https://i.postimg.cc/KvFZHNx6/Pay-PEr-Click-removebg-preview.png",    
  "https://i.postimg.cc/TYhkf8dr/Social-Media-removebg-preview.png", 
  "https://i.postimg.cc/hPVf1ybh/image.png",   
  "https://i.postimg.cc/26q5b28M/image.png",
  "https://i.postimg.cc/Vk3ZPN0L/image.png" 
];

const Services = () => {
  return (
    <section className="bg-] py-16 sm:py-10 ">
      <div className="max-w-7xl mx-auto px-6">
        
        
        <div className="mb-12 flex flex-col md:flex-row md:items-center md:gap-6">
          <span className="bg-lime-400 px-3 py-1 rounded inline-block text-2xl font-bold">
            Services
          </span>
          <p className="text-gray-600 max-w-2xl mt-4 md:mt-0">
            At our digital marketing agency, we offer a range of services to<br/>
            help businesses grow and succeed online. These services include
          </p>
        </div>

   
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
     
          <div className="bg-[#F3F3F3] py-[60px] rounded-3xl border-1 border-black p-6 md:p-18 md:px-12 shadow-[0_5px_0_black] flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-3xl font-semibold mb-14">
                <span className="bg-lime-400 px-2 rounded">Search engine</span><br/>
                <span className="bg-lime-400 px-2 rounded">optimization</span>
              </h3>
              <button className="flex items-center gap-2 font-medium mt-2">
                <span className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full">→</span>
                Learn more
              </button>
            </div>
            <img src={cardImages[0]} alt="SEO" className="w-28 md:w-[220px] object-contain" />
          </div>

    
          <div className="bg-[#B9FF66] rounded-3xl border-2 border-black p-6 md:p-8 shadow-[0_3px_0_black] flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-3xl font-semibold mb-14">
                <span className="bg-white px-2 rounded">Pay-per-click</span><br/>
                <span className="bg-white px-2 rounded">advertising</span>
              </h3>
              <button className="flex items-centertext-[25px] gap-2 font-medium mt-2">
                <span className="bg-black text-[25px] text-white w-8 h-8 flex items-center justify-center rounded-full">→</span>
                Learn more
              </button>
            </div>
            <img src={cardImages[1]} alt="PPC" className="w-28 md:w-[220px] object-contain" />
          </div>

         
          <div className="bg-[#0f172a] text-white rounded-3xl border-2 border-black p-6 md:p-8 shadow-[0_5px_0_black] flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-3xl font-semibold mb-14">
                <span className="bg-white text-black px-2 rounded">Social Media</span><br/>
                <span className="bg-white text-black px-2 rounded">Marketing</span>
              </h3>
              <button className="flex items-center gap-2 font-medium mt-2">
                <span className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-full">→</span>
                Learn more
              </button>
            </div>
            <img src={cardImages[2]} alt="Social Media" className="w-28 md:w-[220px] object-contain" />
          </div>

    
          <div className="bg-[#F3F3F3] rounded-3xl border-2 border-black p-6 md:p-8 shadow-[0_3px_0_black] flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-3xl font-semibold mb-14">
                <span className="bg-lime-400 px-2 rounded">Email</span><br/>
                <span className="bg-lime-400 px-2 rounded">Marketing</span>
              </h3>
              <button className="flex items-center gap-2 font-medium mt-2">
                <span className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full">→</span>
                Learn more
              </button>
            </div>
            <img src={cardImages[3]} alt="Email Marketing" className="w-28 md:w-[220px] object-contain" />
          </div>

  
          <div className="bg-[#B9FF66] rounded-3xl border-2 border-black p-6 md:p-8 shadow-[0_3px_0_black] flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-3xl font-semibold mb-14">
                <span className="bg-white px-2 rounded">Content</span><br/>
                <span className="bg-white px-2 rounded">Creation</span>
              </h3>
              <button className="flex items-center gap-2 font-medium mt-2">
                <span className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full">→</span>
                Learn more
              </button>
            </div>
            <img src='https://i.postimg.cc/26q5b28M/image.png' alt="Content Creation" className="w-28 md:w-[220px] object-contain" />
          </div>

          <div className="bg-[#0f172a] text-white rounded-3xl border-2 border-black p-6 md:p-8 shadow-[0_5px_0_black] flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-3xl font-semibold mb-14">
                <span className="bg-lime-400 text-black px-2 rounded">Analytics and</span><br/>
                <span className="bg-lime-400 text-black px-2 rounded">Tracking</span>
              </h3>
              <button className="flex items-center gap-2 font-medium mt-2">
                <span className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-full">→</span>
                Learn more
              </button>
            </div>
            <img src={cardImages[5]} alt="Analytics" className="w-28 md:w-[220px] object-contain" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
