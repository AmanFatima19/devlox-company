import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Gamepad2, Globe, Smartphone } from "lucide-react";
import bgImage from "../assets/backgrounds/servicesSectionBg.png";

const ServicesSection = () => {
  const serviceCategories = [
    {
      title: "Game Development",
      icon: <Gamepad2 size={26} color="#ff5521" className="mr-2" />,
      services: [
        { name: "NFT Games", to: "/nft-games" },
        { name: "Metaverse Games", to: "/metaverse-games" },
        { name: "Unity Games", to: "/unity-games" },
        { name: "Mobile Games", to: "/mobile-games" },
        { name: "Game Art & Design", to: "/game-art-design" },
        { name: "Game Development", to: "/game-development" },
        { name: "QA Testing", to: "/qa-testing" },
        { name: "Game Optimization", to: "/game-optimization" },
      ],
    },
    {
      title: "Web Development",
      icon: <Globe size={26} color="#ff5521" className="mr-2" />,
      services: [
        { name: "WordPress Development", to: "/wordpress-development" },
        { name: "Frontend Development", to: "/frontend-development" },
        { name: "Backend Development", to: "/backend-development" },
        { name: "Full-Stack Development", to: "/fullstack-development" },
        { name: "E-commerce Solutions", to: "/ecommerce-solutions" },
        { name: "Web Applications", to: "/web-applications" },
      ],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone size={26} color="#ff5521" className="mr-2" />,
      services: [
        { name: "iOS App Development", to: "/ios-app-development" },
        { name: "Android App Development", to: "/android-app-development" },
        { name: "Cross-Platform Apps", to: "/cross-platform-apps" },
        { name: "Mobile Game Development", to: "/mobile-game-development" },
        { name: "App Optimization", to: "/app-optimization" },
      ],
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide font-[inter] text-white">
          OUR SERVICES
        </h1>
        <p className="text-gray-400 mt-3 text-sm sm:text-base tracking-wide max-w-xl">
          Comprehensive digital solutions tailored to your needs
        </p>
      </div>

      <div
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 
                   justify-items-center max-w-6xl mx-auto w-full"
      >
        {serviceCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: index === 0 ? -80 : index === 2 ? 80 : 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="w-full h-full flex justify-center"
          >
            <div
              className="relative w-full max-w-[350px] h-[430px] 
                         rounded-3xl border border-white/20 bg-white/10 
                         overflow-hidden flex flex-col justify-between 
                         hover:scale-[1.03] transition-all duration-500"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-80 rounded-3xl"></div>

              <div className="relative z-10 text-white p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center mb-3">
                    {category.icon}
                    <h5 className="text-lg sm:text-xl font-semibold ml-2">
                      {category.title}
                    </h5>
                  </div>

                  <p className="text-sm text-gray-300 mb-3">
                    Explore our professional{" "}
                    {category.title.toLowerCase()} services.
                  </p>

                  <ul className="space-y-2">
                    {category.services.map((service) => (
                      <li key={service.to}>
                        <Link
                          to={service.to}
                          className="flex items-center py-1 text-[15px] font-semibold text-white 
                                     transition-all duration-300 hover:text-[#ff5521] group"
                        >
                          <span className="relative inline-block">
                            {service.name}
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ff5521] transition-all duration-300 group-hover:w-full"></span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-tr from-[#ff5521]/5 via-transparent to-[#ff5521]/5 opacity-40"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
