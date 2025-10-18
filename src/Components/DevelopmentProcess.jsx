import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    title: "Discovery",
    description:
      "The process begins with defining the game concept, scope, and feasibility. We create a Game Design Document (GDD) to outline mechanics, core features, and narrative elements. During this stage, we determine the most suitable Unity tools and frameworks, set the art direction, and establish a solid foundation for development.",
  },
  {
    title: "Pre-Production",
    description:
      "At this stage, the technical framework takes shape. We set up repositories, establish development environments, and define workflows. Content pipelines are structured for efficient asset creation and integration. As part of our Unity 3D game development services, we break down the development process into milestones with clear deliverables to maintain a structured workflow.",
  },
  {
    title: "Production",
    description:
      "This is the core development phase, where gameplay mechanics, levels, UI, and assets are implemented. The process starts with a Minimum Viable Product (MVP) to establish basic gameplay functionality, then progresses through Alpha (feature-complete but unpolished) and Beta (content-complete with refinements) stages. Our Unity gaming company ensures continuous iteration on mechanics, performance, and visuals to refine the player experience.",
  },
  {
    title: "Testing & Deployment",
    description:
      "Before release, the game undergoes extensive testing to fix bugs, optimize performance, and validate platform compliance. This includes QA testing, platform certification, and storefront integration. Closed and open beta releases may also be conducted to gather player feedback before the final launch.",
  },
  {
    title: "Post-Launch & Live Ops",
    description:
      "After launch, we provide ongoing support, including updates, patches, and new content to keep the game engaging. For live-service games, we monitor player behavior, analytics, and community feedback to introduce updates such as balance changes, seasonal events, and feature expansions. Our Unity3D game development services extend beyond release to keep games relevant and profitable in the long run.",
  },
];

const DevelopmentProcess = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#0b0b0b] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16 lg:px-24 font-[Inter]">
      <motion.div
        className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16 mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-tight w-full md:w-[45%]"
        >
          OUR UNITY <span className="text-[#ff5521]">DEVELOPMENT</span> <br /> PROCESS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-gray-300 text-sm sm:text-base md:text-[15px] lg:text-[16px] leading-relaxed text-justify w-full md:w-[50%]"
        >
          Developing a game in Unity is a structured, iterative process that involves careful
          planning, technical execution, and creative collaboration. At Kevuru Games, we follow a
          step-by-step approach to transform ideas into fully realized gaming experiences.
        </motion.p>
      </motion.div>

      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 sm:gap-8">
        {faqData.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleDescription(index)}
            className="w-[90%] sm:w-[85%] md:w-full backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-5 sm:p-6 cursor-pointer hover:bg-white/20 transition-all duration-300"
          >
            <div className="flex justify-between items-center flex-wrap gap-3 sm:gap-4">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                {item.title}
              </h3>

              <motion.div
                animate={{
                  rotate: openIndex === index ? 360 : 0,
                  backgroundColor: openIndex === index ? "#ff5521" : "transparent",
                  color: openIndex === index ? "#ffffff" : "#ff5521",
                  borderColor: openIndex === index ? "#ff5521" : "#ff5521",
                }}
                transition={{ duration: 0.4 }}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full font-bold 
                text-base sm:text-lg md:text-xl border-2 border-[#ff5521] 
                shadow-[0_0_10px_rgba(255,85,33,0.4)]"
              >
                {index + 1}
              </motion.div>
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-300 mt-3 sm:mt-4 text-sm sm:text-[15px] md:text-base leading-relaxed"
                >
                  {item.description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DevelopmentProcess;
