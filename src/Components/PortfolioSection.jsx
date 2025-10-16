import React from "react";
import PortfolioCard from "./PortfolioCard";
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
    <div className="bg-[#0b0b0b] min-h-screen py-16 px-8 text-center">
      <h1 className="text-4xl font-[inter] font-extrabold text-white mb-2">Our Portfolio</h1>
      <p className="text-gray-400 mb-12">
        Explore our creative and technical achievements across gaming, design, and development.
      </p>

      {/* Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {portfolioItems.map((item, index) => (
          <PortfolioCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
