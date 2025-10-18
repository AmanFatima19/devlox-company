import React from "react";
import { motion } from "framer-motion";

const techLogos = [
  { id: 1, src: "bg-2.jpg", alt: "Unity" },
  { id: 2, src: "bg-2.jpg", alt: "Unreal Engine" },
  { id: 3, src: "bg-2.jpg", alt: "Blender" },
  { id: 4, src: "bg-2.jpg", alt: "Maya" },
  { id: 5, src: "bg-2.jpg", alt: "C#" },
  { id: 6, src: "bg-2.jpg", alt: "JavaScript" },
  { id: 7, src:"bg-2.jpg", alt: "React" },
  { id: 8, src: "bg-2.jpg", alt: "Firebase" },
  { id: 9, src: "bg-2.jpg", alt: "Three.js" },
];

const Technologies = () => {
  return (
    <section className="w-full bg-[#0b0b0b] text-white py-16 overflow-hidden font-[Inter]">
      <div className="text-center mb-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          TECHNOLOGIES <span className="text-[#ff5521]">WE USE</span>
        </h2>
        <p className="mt-3 text-gray-300 text-xs sm:text-sm md:text-base lg:text-[15px] ">
          Powering innovation with the latest tools and engines
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-16 items-center"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 150,
            ease: "linear",
          }}
        >
          {[...techLogos, ...techLogos].map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-16 sm:w-20 md:w-24 h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
