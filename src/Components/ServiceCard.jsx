import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/backgrounds/servicesSectionBg.png";

const ServiceCard = ({ title, icon, services }) => {
  return (
    <div
      className="flex-shrink-0 p-6 sm:p-8 rounded-xl overflow-hidden my-2
                         border border-white/20 bg-white/10 
                       
                         hover:scale-[1.03] transition-all duration-500"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80"></div>

      <div className="relative z-10 flex flex-col justify-between h-full p-5 sm:p-6 text-white">
        <div>
          <div className="flex items-center mb-3">
            {icon}
            <h5 className="text-lg sm:text-xl font-semibold ml-2">{title}</h5>
          </div>

          <p className="text-sm text-gray-300 mb-3">
            Explore our professional {title.toLowerCase()} services.
          </p>

          <ul className="space-y-2">
            {services.map((service) => (
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

      <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-tr from-[#ff5521]/5 via-transparent to-[#ff5521]/5 opacity-40"></div>
    </div>
  );
};

export default ServiceCard;
