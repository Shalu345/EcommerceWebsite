

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  { name: "John Smith", role: "Marketing Director at XYZ Corp" },
  { name: "Sarah Lee", role: "CEO at BrightTech" },
  { name: "Michael Brown", role: "Founder at GrowthLab" },
  { name: "Emily Clark", role: "CMO at MarketPro" },
  { name: "David Wilson", role: "Manager at SalesBoost" },
  { name: "Sophia Taylor", role: "Director at WebCore" },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerView = 3;
  const maxIndex = testimonials.length - cardsPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= maxIndex ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? maxIndex : prev - 1
    );
  };

  return (
    <section className="bg-[#0d1323] text-white py-24 px-6 rounded-[45px] overflow-hidden">

      <div className="max-w-7xl mx-auto">

   
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-10"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="w-full md:w-[500px] flex-shrink-0"
              >
                <div className="relative border border-lime-400 rounded-[32px]  p-8 text-gray-300 min-h-[210px]">
                  <p>
                    "We have been working with Positivus for the past year and
                  have seen a significant increase in website traffic and leads
                  as a result of their efforts. The team is professional,
                   responsive, and truly cares about the success of our business. we have highly recommend positive to any company looking to grow their online  presence "
                  </p>

                  <div className="absolute -bottom-4 left-16 w-7 h-7 bg-[#0d1323] border-r border-b border-lime-400 rotate-45"></div>
                </div>

                <div className="mt-10 ml-6">
                  <h4 className="text-lime-400 font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-14 mt-20">

          <ArrowLeft
            onClick={prevSlide}
            className="text-gray-500 cursor-pointer hover:text-white transition"
          />

         
          <div className="flex gap-3">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  currentIndex === index
                    ? "bg-lime-400"
                    : "bg-gray-600"
                }`}
              ></div>
            ))}
          </div>

          <ArrowRight
            onClick={nextSlide}
            className="text-gray-500 cursor-pointer hover:text-white transition"
          />

        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;