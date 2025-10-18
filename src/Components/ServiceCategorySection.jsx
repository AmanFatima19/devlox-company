import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Full-Cycle Game Development",
    description:
      "From concept to launch, we handle every stage of development — ensuring seamless performance, engaging gameplay, and top-tier visuals.",
    image: "bg-2.jpg",
  },
  {
    id: 2,
    title: "AI Integration",
    description:
      "Enhance your game’s intelligence with AI-driven NPCs, adaptive learning systems, and procedural content generation.",
    image: "bg-2.jpg",
  },
  {
    id: 3,
    title: "Multiplayer Systems",
    description:
      "Bring players together with smooth multiplayer experiences using the latest networking technologies.",
    image: "bg-2.jpg",
  },
  {
    id: 4,
    title: "AR / VR Solutions",
    description:
      "Immerse players in next-level AR and VR experiences that redefine engagement and realism.",
    image: "bg-2.jpg",
  },
];

const ServiceCategorySection = () => {
  return (
    <section className="w-full bg-[#0b0b0b] text-white py-10 px-6 sm:px-10 md:px-10 lg:px-20 font-[Inter] overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-[1300px] mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="backdrop-blur-lg bg-white/10 border border-white/10 rounded-2xl shadow-xl hover:scale-105 hover:bg-white/15 transition-transform duration-300 cursor-pointer overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-md font-semibold mb-3 text-[#ff5521]">
                {service.title}
              </h3>
              <p className="text-gray-300 text-xs leading-relaxed text-justify">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCategorySection;
