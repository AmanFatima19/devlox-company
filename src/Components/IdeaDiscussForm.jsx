import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const IdeaDiscussForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");

  const MAX_FILE_SIZE = 5 * 1024 * 1024;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFileError("");
    const f = e.target.files?.[0];
    if (!f) {
      setFile(null);
      return;
    }

    if (f.size > MAX_FILE_SIZE) {
      setFile(null);
      setFileError("File is too large — max allowed size is 5 MB.");
      e.target.value = "";
      return;
    }

    setFile(f);
  };

  const removeFile = () => {
    setFile(null);
    setFileError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (file && file.size > MAX_FILE_SIZE) {
      setFileError("File is too large — max allowed size is 5 MB.");
      return;
    }

    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("projectType", formData.projectType);
    payload.append("budget", formData.budget);
    payload.append("message", formData.message);
    if (file) payload.append("attachment", file);

    console.log("Form submitted:", {
      ...formData,
      fileName: file?.name ?? null,
      fileSize: file?.size ?? null,
    });

    alert("Thanks! Your idea has been submitted.");

    setFormData({
      name: "",
      email: "",
      projectType: "",
      budget: "",
      message: "",
    });
    setFile(null);
    setFileError("");
  };

  return (
    <section className="relative flex items-center justify-center py-16 px-6 sm:px-10 lg:px-20 overflow-hidden text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-black to-[#1a1a1a] opacity-95"></div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-[90%] max-w-5xl rounded-2xl 
        bg-white/10 backdrop-blur-2xl border border-white/20 
        p-10 sm:p-12 transition-all duration-300"
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-3 text-white">
            Let’s Discuss Your Idea
          </h2>
          <p className="text-gray-300 text-center mb-8 text-sm sm:text-base">
            Tell us a bit about your project, and we’ll help you bring your vision to life.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {[
            { label: "Name", name: "name", type: "text", placeholder: "Your name" },
            { label: "Email", name: "email", type: "email", placeholder: "you@example.com" },
          ].map((field, i) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i }}
              viewport={{ once: true }}
            >
              <label className="block text-sm mb-2 text-gray-300">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 
                focus:border-[#ff5521] focus:ring-1 focus:ring-[#ff5521]/30 outline-none transition-all"
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <label className="block text-sm mb-2 text-gray-300">Project Type</label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg appearance-none bg-white/10 border border-white/20 text-white focus:border-[#ff5521] focus:ring-1 focus:ring-[#ff5521]/30 outline-none transition-all cursor-pointer"
            >
              <option value="" className="text-black">Select project type</option>
              <option value="game" className="text-black">Game Development</option>
              <option value="app" className="text-black">Mobile App</option>
              <option value="web" className="text-black">Web App / Website</option>
              <option value="animation" className="text-black">3D / Animation</option>
              <option value="uiux" className="text-black">UI / UX Design</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-[6px] text-[#ff5521] pointer-events-none">▼</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <label className="block text-sm mb-2 text-gray-300">Budget</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg appearance-none bg-white/10 border border-white/20 text-white focus:border-[#ff5521] focus:ring-1 focus:ring-[#ff5521]/30 outline-none transition-all cursor-pointer"
            >
              <option value="">Select your budget</option>
              <option value="lt15k" className="text-black">$ &lt; 15k</option>
              <option value="15k-40k" className="text-black">$ 15k - 40k</option>
              <option value="40k-100k" className="text-black">$ 40k - 100k</option>
              <option value="100k-200k" className="text-black">$ 100k - 200k</option>
              <option value="gt200k" className="text-black">$ &gt; 200k</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-[6px] text-[#ff5521] pointer-events-none">▼</div>
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <label className="block text-sm mb-2 text-gray-300">Your Message</label>
            <textarea
              name="message"
              placeholder="Tell us about your idea..."
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 
              focus:border-[#ff5521] focus:ring-1 focus:ring-[#ff5521]/30 outline-none transition-all"
            />
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <label className="block text-sm mb-2 text-gray-300">
              Attach a file (optional, max 5 MB)
            </label>
            <div className="flex items-center gap-3">
              <label className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-lg cursor-pointer text-white hover:bg-white/20 transition">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <span className="text-sm">Choose file</span>
              </label>
              <div className="flex-1">
                {file ? (
                  <div className="flex items-center justify-between bg-white/5 px-3 py-2 rounded-md">
                    <div className="truncate text-sm text-white">{file.name}</div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="ml-3 text-xs text-gray-300 hover:text-[#ff5521] transition"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="text-sm text-gray-400">No file chosen</div>
                )}
                {fileError && <p className="mt-2 text-xs text-red-400">{fileError}</p>}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="sm:col-span-2 flex justify-center mt-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <button
              type="submit"
              className="bg-[#ff5521] text-white text-sm px-10 py-3 rounded-md font-medium 
              hover:bg-[#ff6b3d] transition-all duration-300 
              shadow-md hover:shadow-orange-500/40"
            >
              Submit Your Idea
            </button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default IdeaDiscussForm;
