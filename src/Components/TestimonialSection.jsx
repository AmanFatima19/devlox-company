import React from "react";
import TestimonialCard from "./TestimonialCard";
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
    <section className="bg-[#0b0b0b] text-center py-20 px-6">
      <h2 className="heading  text-center w-screen">What Our Clients Say</h2>
      <p className="subText">
        Hear from our partners and clients who have experienced our creativity, passion, and precision.
      </p>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
