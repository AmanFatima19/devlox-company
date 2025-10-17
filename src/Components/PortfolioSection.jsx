import React from "react";
import img1 from "../../assets dummy/Downloaded Assets/blogimage.webp";
import img2 from "../../assets dummy/Downloaded Assets/2.png";
import img3 from "../../assets dummy/Downloaded Assets/3.png";
const PortfolioSection = () => {
  const portfolioItems = [
    {
      category: "Game Development",
      title: "Cyber Warriors - NFT Game",
      description:
        "Multiplayer NFT-based battle royale game with blockchain integration and immersive gameplay.",
      tags: ["Unity", "NFT", "Multiplayer"],
      image: img1,
    },
    {
      category: "3D Animation",
      title: "Fantasy Realm Cinematic",
      description:
        "High-quality 3D cinematic animation project for a fantasy adventure series.",
      tags: ["Maya", "Blender", "Render"],
      image: img2,
    },
    {
      category: "Mobile App",
      title: "Pixel Quest Adventure",
      description:
        "A cross-platform mobile game featuring pixel art and real-time combat mechanics.",
      tags: ["React Native", "Firebase", "Game Design"],
      image: img3,
    },
  ];
  return (
    <div className="relative bg-black text-white min-h-screen py-10 px-6 sm:px-10 lg:px-20 flex flex-col items-center bg-cover bg-center bg-no-repeat">
      {" "}
      <div className="text-center max-w-2xl">
        {" "}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[inter] mb-2">
          {" "}
          OUR PORTFOLIO{" "}
        </h1>{" "}
        <p className="text-gray-400 text-sm sm:text-base">
          {" "}
          Explore our creative and technical achievements across gaming, design,
          and development.{" "}
        </p>{" "}
      </div>{" "}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full max-w-7xl">
        {" "}
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="relative w-full max-w-sm rounded-xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md shadow-md transform hover:scale-[1.03] transition-all duration-500"
          >
            {" "}
            <div className="relative">
              {" "}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover opacity-80"
              />{" "}
              <span className="absolute top-3 left-3 bg-[#ff5521] text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-md shadow-md">
                {" "}
                {item.category}{" "}
              </span>{" "}
            </div>{" "}
            <div className="p-5 sm:p-6">
              {" "}
              <h2 className="text-lg sm:text-xl font-semibold mb-2">
                {item.title}
              </h2>{" "}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                {" "}
                {item.description}{" "}
              </p>{" "}
              <div className="flex flex-wrap gap-2">
                {" "}
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white/10 text-gray-200 text-xs font-medium px-3 py-1 rounded-full border border-gray-500/30 hover:border-[#ff5521] cursor-pointer transition-all duration-300"
                  >
                    {" "}
                    {tag}{" "}
                  </span>
                ))}{" "}
              </div>{" "}
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};
export default PortfolioSection;
