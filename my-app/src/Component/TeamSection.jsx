import React from "react";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    desc: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
    img:"https://i.postimg.cc/HkQNWJcs/hero1.png"
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    desc: "7+ years of experience in project management and team leadership. Strong organizational and communication skills.",
    img:"https://i.postimg.cc/B6NgR41y/John2.png"
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    desc: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.",
    img:"https://i.postimg.cc/mZJMkPRS/john3.png"
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    desc: "5+ years of experience in paid search advertising. Skilled in campaign management and performance analysis.",
    img:"https://i.postimg.cc/T3D6VYyT/john4.png"
  },
  {
    name: "Brian Williams",
    role: "Social Media Specialist",
    desc: "4+ years of experience in social media marketing. Proficient in creating and scheduling content.",
    img:"https://i.postimg.cc/jq30BJPD/John5.png"
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    desc: "2+ years of experience in writing and editing. Skilled in creating compelling SEO-optimized content.",
    img:"https://i.postimg.cc/136kgCTy/john6.png"
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 px-4 sm:px-8 bg-[#f4f4f4]">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
        <span className="bg-lime-400 px-4 py-1 md:text-5xl text-xl font-semibold rounded-md w-fit">
          Team
        </span>
        <p className="text-gray-600 text-left  md:text-xl max-w-md text-sm">
          Meet the skilled and experienced team behind our successful digital marketing strategies
        </p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative bg-[#FFFFFF] rounded-3xl border border-black p-6 shadow-[0_6px_0_#000]"
          >
            {/* LinkedIn Icon */}
            <div className="absolute top-5 right-5 bg-black text-white rounded-full p-2">
              <Linkedin size={16} />
            </div>

            {/* Avatar */}
            <div className="w-36 h-36 bg-lime-400 rounded-2xl mb-4">
                 <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover"
            /> 
            </div>

            <h3 className="font-semibold md:text-2xl ">{member.name}</h3>
            <p className="text-sm text-gray-500 mb-4 md:text-xl">{member.role}</p>

            <hr className="border-gray-300 mb-4" />

            <p className="text-sm text-gray-600 md:text-xl text-black">{member.desc}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-end mt-10">
        <button className="bg-black md:text-2xl text-white px-8 py-3 rounded-md">
          See all team
        </button>
      </div>

    </section>
  );
};

export default TeamSection;