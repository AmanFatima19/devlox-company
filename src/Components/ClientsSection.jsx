import React from "react";
import map from "../assets/map.png";

const ClientsSection = () => {
  return (
    <div
      className="bg-black bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-6 sm:px-10 md:py-10 lg:py-10 sm:py-20"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl gap-12">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[Inter] leading-snug">
            Our Awards & Recognition
          </h1>
          <p className="text-gray-300 mt-4 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Our dedication to excellence has earned us global recognition and numerous
            industry awards. The company’s achievements highlight the team’s commitment
            to quality and innovation, gaining the trust of top-tier clients worldwide.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end lg:w-1/2">
          <img
            src={map}
            alt="Global Awards Map"
            className="w-[90%] sm:w-[80%] lg:w-[85%] h-auto object-contain"
          />
        </div>
      </div>

     
    </div>
  );
};

export default ClientsSection;
