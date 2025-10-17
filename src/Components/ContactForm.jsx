import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "James Kucera",
    title: "Former Head of Mobile Development, Bandai Namco America",
    feedback:
      "Kevuru Games’ flexibility and willingness to work quickly despite all issues resulted in a successful product upon first review. They produced good work, and the end product has positive reviews and no major crashes. They provided good feedback, weren't afraid of making suggestions.",
    rating: 5,
    img: "careerBg.jpg",
  },
  {
    name: "Sarah Jordan",
    title: "Project Manager, Gaming Studio",
    feedback:
      "Amazing communication and top-notch delivery. The team was proactive and creative. Highly recommended!",
    rating: 5,
    img: "careerBg.jpg",
  },
  {
    name: "Michael Harris",
    title: "CEO, Tech Innovations",
    feedback:
      "Professional, fast, and skilled. They understood our needs and exceeded expectations!",
    rating: 4,
    img: "careerBg.jpg",
  },
];

const ContactForm = () => {
  const [current, setCurrent] = useState(0);

  // Auto change testimonial every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full text-white pb-10 pt-16 px-6 md:px-16 flex flex-col md:flex-row gap-6 overflow-hidden bg-black" // ✅ Added bg-black as fallback
      style={{
        backgroundImage: `url("contact-bg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ✅ Permanent dark overlay (no animation) */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* ✅ Animated Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 bg-black/30 backdrop-blur-xl text-white w-full md:w-1/2 p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500"
      >
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 px-3 py-2 rounded bg-transparent focus:outline-none"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full border border-gray-300 px-3 py-2 rounded bg-transparent focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full border border-gray-300 px-3 py-2 rounded bg-transparent focus:outline-none"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full border border-gray-300 px-3 py-2 rounded bg-transparent focus:outline-none"
          ></textarea>

          <label className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 accent-[#ff5521]" />
            <span>
              I agree to the{" "}
              <a href="#" className="text-[#ff5521] underline">
                Privacy Policy
              </a>
            </span>
          </label>

          <button
            type="submit"
            className="bg-[#ff5521] text-white px-6 py-2 rounded font-semibold hover:bg-[#ff6b3b] transition-all duration-300"
          >
            SEND
          </button>
        </form>
      </motion.div>

      {/* ✅ Animated Testimonials Section */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 w-full md:w-1/2 bg-transparent p-6 rounded-lg overflow-hidden"
      >
        <div className="min-h-[260px] relative">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                current === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-14 h-14 rounded-full mr-4 object-cover border border-white/20"
                />
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-300">{item.title}</p>
                </div>
              </div>
              <p className="text-gray-200 mb-4 italic leading-relaxed">
                “{item.feedback}”
              </p>
              <div className="flex items-center">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
                <span className="ml-2 text-gray-300">{item.rating}/5</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                current === i ? "bg-white" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
