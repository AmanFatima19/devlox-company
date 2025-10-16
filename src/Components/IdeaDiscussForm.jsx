import React, { useState } from "react";

const IdeaDiscussForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks! Your idea has been submitted 🚀");
  };

  return (<>
 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[inter] text-center bg-black pt-5 text-white">
          Contact Us
        </h2>
    <section className="relative bg-black text-white flex items-center justify-center py-16 px-6 sm:px-10 lg:px-20">
      <div className="absolute inset-0 bg-[url('/src/assets/bgpattern.png')] bg-cover bg-center opacity-10 pointer-events-none"></div>
      <div className="relative w-full max-w-3xl rounded-2xl bg-white/5 backdrop-blur-md border border-[#ff5521]/20 shadow-[0_0_30px_rgba(255,85,33,0.2)] p-8 sm:p-10 lg:p-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-3 text-white">
          Let’s Discuss Your Idea
        </h2>
        <p className="text-gray-300 text-center mb-10 text-sm sm:text-base">
          Tell us a bit about your project, and we’ll help you bring your vision to life.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div>
            <label className="block text-sm mb-2 text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 text-white placeholder-gray-400 focus:border-[#ff5521] focus:outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 text-white placeholder-gray-400 focus:border-[#ff5521] focus:outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Project Type</label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 text-white focus:border-[#ff5521] focus:outline-none transition-all"
            >
              <option value="">Select project type</option>
              <option value="game">Game Development</option>
              <option value="app">Mobile App</option>
              <option value="web">Web App / Website</option>
              <option value="animation">3D / Animation</option>
              <option value="uiux">UI / UX Design</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Budget</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 text-white focus:border-[#ff5521] focus:outline-none transition-all"
            >
              <option value="">Select your budget</option>
              <option value="lt15k">$ &lt; 15k</option>
              <option value="15k-40k">$ 15k - 40k</option>
              <option value="40k-100k">$ 40k - 100k</option>
              <option value="100k-200k">$ 100k - 200k</option>
              <option value="gt200k">$ &gt; 200k</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm mb-2 text-gray-300">Your Message</label>
            <textarea
              name="message"
              placeholder="Tell us about your idea..."
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 text-white placeholder-gray-400 focus:border-[#ff5521] focus:outline-none transition-all"
            ></textarea>
          </div>

          <div className="sm:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="px-8 py-3 bg-[#ff5521] text-white rounded-lg font-semibold hover:bg-[#ff6b3d] transition-all shadow-[0_0_15px_rgba(255,85,33,0.4)] hover:shadow-[0_0_30px_rgba(255,85,33,0.6)]"
            >
              Submit Your Idea
            </button>
          </div>
        </form>
      </div>
    </section>
    </>
  );
};

export default IdeaDiscussForm;
