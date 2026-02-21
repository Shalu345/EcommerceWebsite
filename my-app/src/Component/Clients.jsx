

import React from "react";

const CaseStudySection = () => {
  return (
    <div className="bg- px-4 sm:px-6 md:px-10 py-10">

      
      <div className="relative bg-[#e9e9e9] overflow-visible rounded-3xl px-6 sm:px-10 py-10 flex flex-col md:flex-row items-center sm:overflow-hidden md:overflow-visible">

        <div className="max-w-xl relative z-10 text-center md:text-left">
          <h1 className="text-xl md:text-4xl sm:text-3xl font-semibold mb-4">
            Let’s make things happen
          </h1>

          <p className="text-gray-600 md:text-xl mb-6 leading-relaxed text-sm sm:text-base">
            Contact us today to learn more about how our digital<br></br>
            marketing services can help your business grow and<br></br>
            succeed online.
          </p>

          <button className="bg-[#111827] md:text-3xl text-white px-6 py-4 rounded-lg hover:opacity-90 transition">
            Get your free proposal
          </button>
        </div>

 
        
        <div className="md:absolute sm:bottom-0 md:right-0 md:-top-10 md:-bottom-10 
                        w-64 sm:w-72 md:w-[390px] mt-8 md:mt-0">
          <img
            src="https://i.postimg.cc/zD4kBGkq/lets-make-removebg-preview.png"
            alt="Let’s make illustration"
            className="w-full h-full object-contain"
          />
        </div>

      </div>

 
      <div className="mt-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-10 text-center md:text-left">
          <span className="bg-lime-400 px-4 py-1 md:text-4xl sm:text-2xl font-semibold rounded-md w-fit mx-auto md:mx-0">
            Case Studies
          </span>

          <p className="text-gray-600 md:text-xl max-w-lg text-sm sm:text-base mx-auto md:mx-0">
            Explore Real-Life Examples of Our Proven Digital Marketing
            Success through Our Case Studies
          </p>
        </div>

        {/* Dark Card */}
        <div className="bg-[#0f172a] text-white rounded-[40px] p-6 sm:p-10 md:p-12 
                        flex flex-col md:flex-row gap-8 md:gap-0">

          {/* Card 1 */}
          <div className="md:w-1/3 md:pr-8">
            <p className="mb-6 leading-relaxed text-gray-300 text-sm sm:text-base">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <a href="#" className="text-lime-400 font-semibold hover:underline">
              Learn more →
            </a>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-700"></div>

          {/* Card 2 */}
          <div className="md:w-1/3 md:px-8">
            <p className="mb-6 leading-relaxed text-gray-300 text-sm sm:text-base">
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>
            <a href="#" className="text-lime-400 font-semibold hover:underline">
              Learn more →
            </a>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-700"></div>

          {/* Card 3 */}
          <div className="md:w-1/3 md:pl-8">
            <p className="mb-6 leading-relaxed text-gray-300 text-sm sm:text-base">
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
            <a href="#" className="text-lime-400 font-semibold hover:underline">
              Learn more →
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CaseStudySection;