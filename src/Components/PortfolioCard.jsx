import React from "react";

const PortfolioCard = ({ category, title, description, tags, image }) => {
  return (
    <div className="bg-[#0d0d0d] text-white w-full max-w-sm rounded-sm overflow-hidden 
                    shadow-md transition-all duration-300 hover:scale-[1.02] 
                    border border-gray-700 hover:shadow-[0_0_25px_#ff5521]/20">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover"
        />
        <span className="absolute top-3 left-3 bg-[#ff5521] text-white text-sm font-semibold px-3 py-1 rounded-md shadow-md">
          {category}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#13151C] text-gray-300 text-xs font-medium px-3 py-1 
                         rounded-full border border-gray-700 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
