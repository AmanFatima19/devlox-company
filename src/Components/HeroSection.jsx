import React from "react";
import video from "../assets/heroVideo.mp4";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden pt-[2vh]">
      <video
        src={video}
        loop
        autoPlay
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      ></video>

      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div
        className="absolute z-20 text-white font-[Inter] 
        px-4 sm:px-8 md:px-16 lg:px-36 
        top-[25%] p-0 sm:top-[30%]"
      >
        <h1
          className="font-extrabold 
          text-6xl sm:text-4xl md:text-5xl lg:text-6xl 
         
          w-full sm:w-[85%] md:w-[60%] lg:w-[45%]"
        >
          FULL-CYCLE GAME DEVELOPMENT COMPANY
        </h1>

        <p
          className="mt-4 text-sm sm:text-base md:text-sm tracking-wide 
          w-full sm:w-[80%] md:w-[55%] lg:w-[40%] text-gray-200"
        >
          Blending our passion for games and technology with your unique vision
          through expert game art and development services.
        </p>

        <div className="my-10">
          <Link
            to="/idea-discuss"
            className="bg-[#ff5521] text-white text-sm  px-7 py-2.5 rounded-sm font-sm
              hover:bg-[#ff6b3d] transition-all duration-300 hover:scale-105 
              shadow-md hover:shadow-orange-500/40"
          >
           Let's Discuss Idea
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
