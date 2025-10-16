import React from "react";

const TestimonialCard = ({ name, role, message }) => {
  return (
    <div
      className="relative w-full max-w-sm p-6 rounded-md overflow-hidden 
                 border border-gray-700 text-white
                 bg-white/5 backdrop-blur-md 
                 shadow-[0_0_25px_rgba(255,85,33,0.05)]
                 hover:shadow-[0_0_25px_rgba(255,85,33,0.3)]
                 hover:scale-[1.02] transition-all duration-500"
    >
      {/* Glow Accent (subtle orange edge) */}
      <div className="absolute inset-0 rounded-md pointer-events-none bg-gradient-to-tr from-[#ff5521]/10 via-transparent to-[#ff5521]/10 opacity-40" />

      {/* Content */}
      <div className="relative z-10">
        <p className="text-gray-300 text-sm leading-relaxed italic mb-5">
          “{message}”
        </p>

        <div className="h-[1px] bg-gray-800 mb-5"></div>

        <div className="text-left">
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
