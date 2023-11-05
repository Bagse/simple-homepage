import React from "react";
import Button from "./Button";
import TextInfo from "./TextInfo";

function BodySection() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between py-14 gap-20 lg:gap-0">
      <section className="sm:w-[700px] lg:w-[450px] flex flex-col gap-12">
        <span className="text-base uppercase font-medium dark:text-white">😎  Simple way to communicate</span>
        <h1 className="text-5xl md:text-6xl font-bold leading-relaxed dark:text-white">Actions for Accessibility in Design</h1>
        <p className="text-lg text-[#66748a] font-medium">The fastest way to build and deploy websites with resusable components.</p>
        <div className="flex gap-7 items-center">
          <Button />
          <a href="http://" className="text-[#2A4DD0] underline font-medium">Get live demo</a>
        </div>
        <div className="flex gap-3 sm:gap-10 md:gap-7 mt-3">
          <TextInfo name="No credit card required" />
          <TextInfo name="No software to install" />
        </div>
      </section>
      <section className="w-[360px] sm:w-[640px] md:w-[600px]">
        <img src="./hero-homepage.png" alt="hero homepage" className="md:w-full md:h-full"  />
      </section>
    </div>
  );
}

export default BodySection;
