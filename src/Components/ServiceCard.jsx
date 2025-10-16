import React from 'react'
import { Link } from 'react-router-dom'
import bgImage from "../assets/backgrounds/servicesSectionBg.png"

const ServiceCard = ({ title, icon, services }) => {
  return (
    <div>
      <div
        className="w-full h-[420px] bg-transparent border border-gray-200 rounded-lg shadow-sm sm:p-5 dark:bg-gray-800 transition-transform transform hover:scale-[1.03] ease-out duration-500 hover:border-[#ff5521] flex flex-col justify-between"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <div className="flex items-center mb-2">
            {icon}
            <h5 className="text-base font-semibold text-gray-900 md:text-xl dark:text-white">
              {title}
            </h5>
          </div>

          <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-3">
            Explore our professional {title.toLowerCase()} services.
          </p>

          <ul className="space-y-1.5">
            {services.map((service) => (
              <li key={service.to}>
                <Link
                  to={service.to}
                  className="flex items-center py-1 text-[15px] font-semibold text-gray-900 dark:text-white transition-all duration-300 hover:text-[#ff5521] group"
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

        {/* Moved to bottom, no underline */}
        <div className="mt-4 text-left">
          <Link
            to="/contact"
            className="text-xs font-normal text-gray-500 hover:text-[#ff5521] transition-all duration-300 dark:text-gray-400"
          >
            Want to discuss your project with us?
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
