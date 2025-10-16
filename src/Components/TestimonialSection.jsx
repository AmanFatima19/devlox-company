import React from "react";
import person1 from "../../assets dummy/Downloaded Assets/1.png";
import person2 from "../../assets dummy/Downloaded Assets/2.png";
import person3 from "../../assets dummy/Downloaded Assets/3.png";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Game Designer, PixelForge Studios",
      message:
        "Working with Devlox was a pleasure — their dedication and creativity turned our ideas into a flawless gaming experience.",
      image: person1,
    },
    {
      name: "Daniel Carter",
      role: "CEO, VisionTech Labs",
      message:
        "The team delivered beyond expectations. The UI and animation quality were top-notch, and communication was seamless.",
      image: person2,
    },
    {
      name: "Aisha Khan",
      role: "Creative Director, Lumina Media",
      message:
        "Their ability to blend technology with design is unmatched. We’ll definitely collaborate again on future projects.",
      image: person3,
    },
  ];

  return (
    <section className="relative bg-[#0b0b0b] text-white py-20 px-6 sm:px-10 lg:px-20 min-h-screen flex flex-col items-center">
      <div className="text-center max-w-2xl mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[inter] mb-3">
          What Our Clients Say
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Hear from our partners and clients who have experienced our creativity, passion, and precision.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center w-full max-w-7xl">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="relative w-full max-w-sm p-6 sm:p-8 rounded-xl overflow-hidden 
                       border border-white/20 bg-white/10 backdrop-blur-md 
                       shadow-[0_0_25px_rgba(255,85,33,0.08)]
                       hover:shadow-[0_0_35px_rgba(255,85,33,0.4)]
                       hover:scale-[1.03] transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#ff5521]/10 via-transparent to-[#ff5521]/10 opacity-30 pointer-events-none" />

            <div className="relative z-10 text-left">
              <div className="flex items-center mb-5 gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#ff5521]/30"
                />
                <div>
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base italic leading-relaxed">
                “{t.message}”
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
