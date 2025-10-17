import React from "react";
import { Trophy, Zap, Shield, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const CompanyProfile = () => {
  const values = [
    {
      title: "Award-Winning Team",
      description:
        "Industry-recognized developers with proven track records in delivering exceptional digital experiences.",
      icon: <Trophy size={32} strokeWidth={2} />,
    },
    {
      title: "Rapid Development",
      description:
        "Agile methodology ensures faster time-to-market without compromising on quality or functionality.",
      icon: <Zap size={32} strokeWidth={2} />,
    },
    {
      title: "Robust & Secure",
      description:
        "Enterprise-grade security and best practices integrated into every project we deliver.",
      icon: <Shield size={32} strokeWidth={2} />,
    },
    {
      title: "24/7 Support",
      description:
        "Dedicated support team available round-the-clock to ensure your project runs smoothly.",
      icon: <Headphones size={32} strokeWidth={2} />,
    },
  ];

  return (
    <div className="bg-black overflow-hidden">
      <div className="bg-black bg-cover bg-center bg-no-repeat py-12 sm:py-20 px-4 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-24">
            <h1 className="max-w-3xl mx-auto text-white text-lg sm:text-3xl md:text-2lg md:pt-3 lg:text-3xl font-bold font-[Inter] tracking-wide leading-snug">
              WHAT MAKES KEVURU A LEADING GAME DEVELOPMENT STUDIO
            </h1>
            <p className="text-[#ff5521] text-center mt-1 text-sm sm:text-base">
              Our Company Values
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index === 0 ? -80 : index === 3 ? 80 : 0,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <motion.div
                  whileHover={{ rotate: 6, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 220, damping: 12 }}
                  className="bg-[#1c1c1c]/80 rounded-full p-6 mb-5 transition-all duration-500 shadow-md shadow-orange-500/10"
                >
                  <div className="text-[#ff5521]">{item.icon}</div>
                </motion.div>

                <h3 className="text-white text-lg sm:text-xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm sm:text-base w-[90%] sm:w-[80%] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
