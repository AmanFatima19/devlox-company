import React from "react";
import { motion } from "framer-motion";

const ServiceIntroSection = () => {
  return (
    <section className="w-full bg-[#0b0b0b] text-white py-16 sm:py-20 px-5 sm:px-10 md:px-16 lg:px-24 font-[Inter]">
      <motion.div
        className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-20 text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* LEFT: HEADING */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-4xl leading-snug md:leading-tight w-full md:w-[45%]"
        >
          BRING YOUR <span className="text-[#ff5521]">GAME IDEA</span> TO LIFE
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-gray-300 text-sm sm:text-base md:text-sm lg:text-sm leading-relaxed w-full md:w-[50%] text-center md:text-justify"
        >
          Our Unity game development team delivers immersive gameplay and stunning visuals.
          From initial concept to launch, we ensure every detail meets your creative and
          technical expectations. With years of experience, we transform ideas into reality —
          crafting experiences that inspire and captivate players worldwide.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ServiceIntroSection;
