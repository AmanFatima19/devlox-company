import React, { useState } from "react";

const CalculatorSection = () => {
  const [selectedNeed, setSelectedNeed] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  const needs = ["Full-Cycle Game Dev", "Game Art", "MVP", "Live Ops", "Maintenance"];
  const budgets = ["< $15K", "$15K - $40K", "$40K - $100K", "$100K - $200K", "$200K +"];

  return (
    <section className="relative w-full flex items-center justify-center bg-black overflow-hidden min-h-[90vh]">
      {/* Liquid Glass Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97')",
          filter: "blur(12px) saturate(1.2)",
          transform: "scale(1.1)"
        }}
      ></div>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-lg"></div>

      {/* Form Container */}
      <div className="relative z-10 w-[90%] max-w-4xl bg-white/90 backdrop-blur-md rounded-3xl shadow-[0_0_45px_rgba(255,115,0,0.25)] p-12 flex flex-col gap-5 border border-white/20">
        <h2 className="text-3xl font-extrabold mb-6 text-orange-600 tracking-wider text-center uppercase">
          Let’s Discuss Your Idea
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">I AM</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
        </div>

        {/* I NEED */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">I NEED</label>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {needs.map((need) => (
              <button
                key={need}
                onClick={() => setSelectedNeed(need)}
                className={`p-3 rounded-md text-sm font-bold uppercase border tracking-wide relative overflow-hidden group transition-all duration-300
                  ${
                    selectedNeed === need
                      ? "bg-orange-600 text-white border-orange-600 shadow-[0_0_15px_rgba(255,115,0,0.4)]"
                      : "bg-white hover:bg-orange-50 border-gray-300 text-gray-700"
                  }`}
              >
                <span
                  className={`absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    selectedNeed === need ? "opacity-100" : ""
                  }`}
                ></span>
                <span className="relative z-10">{need}</span>
              </button>
            ))}
          </div>
        </div>

        {/* GOAL */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">MY GOAL IS</label>
          <input
            type="text"
            placeholder="Describe your goal"
            className="w-full p-3 rounded-md bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
        </div>

        {/* BUDGET */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">I HAVE A BUDGET</label>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {budgets.map((budget) => (
              <button
                key={budget}
                onClick={() => setSelectedBudget(budget)}
                className={`p-3 rounded-md text-sm font-bold uppercase border tracking-wide relative overflow-hidden group transition-all duration-300
                  ${
                    selectedBudget === budget
                      ? "bg-orange-600 text-white border-orange-600 shadow-[0_0_15px_rgba(255,115,0,0.4)]"
                      : "bg-white hover:bg-orange-50 border-gray-300 text-gray-700"
                  }`}
              >
                <span
                  className={`absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    selectedBudget === budget ? "opacity-100" : ""
                  }`}
                ></span>
                <span className="relative z-10">{budget}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <input
            type="email"
            placeholder="E-mail"
            className="p-3 rounded-md bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="p-3 rounded-md bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
        </div>

        {/* Company */}
        <input
          type="text"
          placeholder="Company"
          className="w-full p-3 mb-4 rounded-md bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
        />

        {/* NDA */}
        <div className="flex items-center mb-6">
          <input type="checkbox" id="nda" className="mr-2 accent-orange-600 cursor-pointer" />
          <label htmlFor="nda" className="text-sm text-gray-700 cursor-pointer">
            and please send me NDA
          </label>
        </div>

        {/* Submit */}
        <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-md font-extrabold tracking-wider uppercase transition transform hover:scale-[1.02] shadow-[0_0_35px_rgba(255,115,0,0.4)]">
          Send Message
        </button>
      </div>
    </section>
  );
};

export default CalculatorSection;
