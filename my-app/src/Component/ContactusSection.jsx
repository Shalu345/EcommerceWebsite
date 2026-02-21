

import React from "react";

const ContactSection = () => {
  return (
    <section className="py-16 px-4 sm:px-8 bg-[]">

  
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
        <span className="bg-lime-400 md:text-4xl px-4 py-1 text-xl font-semibold rounded-md w-fit">
          Contact Us
        </span>
        <p className="text-gray-600 md:text-xl text-sm">
          Connect with Us: Let’s Discuss<br/> Your Digital Marketing Needs
        </p>
      </div>

  
      <div className="relative bg-[#eaeaea] rounded-[30px] p-8 md:p-12 flex flex-col lg:flex-row gap-10 items-center overflow-hidden">

     
        <div className="w-full lg:w-1/2">
          <div className="flex gap-6 mb-6 text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="type" defaultChecked className="accent-lime-400 md:text-xl" />
              Say Hi
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="type" className="accent-lime-400 md:text-xl" />
              Get a Quote
            </label>
          </div>

    
          <div className="space-y-4">

  <div className="flex flex-col">
    <label className="block text-sm mb-1 text-left md:text-xl">
      Name*
    </label>
    <input
      type="text"
      placeholder="Name"
      className="w-full px-4 py-3 rounded-xl border border-gray-400 bg-white"
    />
  </div>

  <div className="flex flex-col">
    <label className="block text-sm mb-1 text-left md:text-xl">
      Email*
    </label>
    <input
      type="email"
      placeholder="Email"
      className="w-full px-4 py-4 rounded-xl border border-gray-400 bg-white"
    />
  </div>

  <div className="flex flex-col">
    <label className="block text-sm mb-1 text-left md:text-xl">
      Message*
    </label>
    <textarea
      rows="4"
      placeholder="Message"
      className="w-full px-4 py-6 rounded-xl border border-gray-400 bg-white"
    />
  </div>

  <button className="w-full md:text-2xl bg-[#111827] text-white py-3 rounded-xl mt-4">
    Send Message
  </button>

</div>
        </div>

        <div className="hidden lg:flex  absolute right-10 bottom-0 h-full items-center">
          <img
            src="https://i.postimg.cc/QdNzhMbk/contactus-removebg-preview.png"
            alt="contact"
            className="max-w-[520px] h-[620px] translate-x-10"
          />
        </div>

      </div>

    </section>
  );
};

export default ContactSection;