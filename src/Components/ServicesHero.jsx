import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesHero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden pt-[2vh]">
      {/* Background Image */}
      <img
        src="services-bg.jpg"
        alt="Services Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-75"
      />

      {/* Dark Overlay (slightly darker for less opacity look) */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Text Section */}
      <div
        className="absolute z-20 text-white font-[Inter] 
        px-4 sm:px-8 md:px-16 lg:px-36 
        top-[25%] sm:top-[30%]"
      >
        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-extrabold 
          text-4xl sm:text-2xl md:text-5xl lg:text-6xl 
          w-full sm:w-[85%] md:w-[60%] lg:w-[45%]"
        >
          UNITY GAME DEVELOPMENT COMPANY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="mt-4 text-sm sm:text-base md:text-sm tracking-wide 
          w-full sm:w-[80%] md:w-[55%] lg:w-[40%] text-gray-200"
        >
          At Kevuru Games, experienced professionals use their deep knowledge of
          Unity technologies to develop exceptional games from concept to
          launch. We collaborate with world-renowned companies and industry
          leaders — join the list!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="my-10"
        >
          <Link
            to="/idea-discuss"
            className="bg-[#ff5521] text-white text-sm px-7 py-2.5 rounded-sm font-sm
              hover:bg-[#ff6b3d] transition-all duration-300 hover:scale-105 
              shadow-md hover:shadow-orange-500/40"
          >
            Let's Discuss Idea
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesHero;
