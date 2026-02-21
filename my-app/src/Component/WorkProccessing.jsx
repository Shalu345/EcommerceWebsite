import React, { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
      
  },
  { id: 2, title: "Research and Strategy Development",
     content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
      
   },
  { id: 3, title: "Implementation",
     content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
      
   },
  { id: 4, title: "Monitoring and Optimization",
     content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
      
   },
  { id: 5, title: "Reporting and Communication",
     content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
      
   },
  { id: 6, title: "Continual Improvement",
     content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
      
   },
];

const WorkingProcess = () => {
  const [active, setActive] = useState(1);

  const toggleAccordion = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <div className="bg- min-h-screen px-4 sm:px-6 md:px-10 py-10">


      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-10">
        <span className="bg-lime-400 md:text-4xl px-4 py-2 text-lg sm:text-xl font-semibold rounded-md w-fit">
          Our Working Process
        </span>
        <p className="text-gray-600 md:text-xl text-left text-sm sm:text-base max-w-md">
          Step-by-Step Guide to Achieving<br/> Your Business Goals
        </p>
      </div>

     
      <div className="space-y-5 max-w-4xl mx-auto">

        {steps.map((step) => {
          const isActive = active === step.id;

          return (
            <div
              key={step.id}
              className={`rounded-2xl border-2 transition-all duration-300
              ${isActive
                  ? "bg-[#B9FF66] border-black shadow-[0_6px_0_#000]"
                  : "bg-white border-gray-400 shadow-[0_6px_0_#ccc]"
                }`}
            >
   
              <div
                onClick={() => toggleAccordion(step.id)}
                className="flex justify-between items-center  p-4 sm:p-6 cursor-pointer"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="text-2xl md:text-4xl sm:text-3xl font-semibold">
                    {String(step.id).padStart(2, "0")}
                  </span>
                  <h3 className="text-base md:text-3xl sm:text-lg font-medium">
                    {step.title}
                  </h3>
                </div>

                {/* Plus / Minus */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border border-black text-lg font-bold bg-white">
                  {isActive ? "-" : "+"}
                </div>
              </div>

              {/* Content */}
              {isActive && step.content && (
                <div className="px-4  sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base border-t border-black pt-4">
                  {step.content}
                </div>
              )}
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default WorkingProcess;
