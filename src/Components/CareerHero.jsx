import React from "react";

const CareerHero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[90vh] flex items-center"
      style={{
        backgroundImage: `url("careerBg.jpg")`,
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-white px-6 md:px-16 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          WORK IN KEVURUGAMES.<br />A CAREER THAT GROWS WITH YOU
        </h1>

        <p className="mt-6 text-lg text-gray-200 leading-relaxed">
          We know what it’s like to chase deadlines and pour heart into a game.
          At Kevuru Games, we back our team with stability, remote options, and
          projects that reach the top of the charts. No empty promises – just
          real work, real growth, and the support to keep going.
        </p>

       <button
  className="mt-8 bg-[#ff5521] text-white font-semibold px-6 py-3 rounded-sm 
             hover:bg-[#ff6b3d] hover:scale-105 transition-all duration-300 
             shadow-md hover:shadow-orange-500/50"
>
  JOIN OUR TEAM →
</button>

      </div>
    </section>
  );
};

export default CareerHero;
