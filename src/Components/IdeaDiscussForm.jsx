import React, { useState } from "react";

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
    <>
      <section className="relative bg-black text-white flex items-center justify-center py-16 px-6 sm:px-10 lg:px-20">
        <div className="absolute inset-0 bg-[url('/src/assets/bgpattern.png')] bg-cover bg-center opacity-10 pointer-events-none"></div>

        <div className="relative w-full max-w-3xl rounded-2xl bg-white/10 backdrop-blur-lg border border-[#ff5521]/30 shadow-[0_0_40px_rgba(255,85,33,0.15)] p-8 sm:p-10 lg:p-12 transition-all duration-300">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-3 text-white">
            Let’s Discuss Your Idea
          </h2>
          <p className="text-gray-300 text-center mb-8 text-sm sm:text-base">
            Tell us a bit about your project, and we’ll help you bring your vision to life.
          </p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2 text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:border-[#ff5521] focus:ring-1 focus:ring-[#ff5521]/30 focus:outline-none transition-all"
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
                className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:border-[#ff5521] focus:ring-1 focus:ring-[#ff5521]/30 focus:outline-none transition-all"
              />
            </div>

            <div className="relative">
              <label className="block text-sm mb-2 text-gray-300">Project Type</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg appearance-none bg-white/10 backdrop-blur-md border border-white/20 text-white focus:border-[#ff5521] focus:ring-1 focus:ring-[#ff5521]/30 focus:outline-none transition-all cursor-pointer"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", backdropFilter: "blur(8px)" }}
              >
                <option value=""  className="text-black">Select project type</option>
                <option value="game"  className="text-black">Game Development</option>
                <option value="app"  className="text-black">Mobile App</option>
                <option value="web"  className="text-black">Web App / Website</option>
                <option value="animation"  className="text-black">3D / Animation</option>
                <option value="uiux"  className="text-black">UI / UX Design</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-[6px] text-[#ff5521] pointer-events-none">▼</div>
            </div>

            <div className="relative">
              <label className="block text-sm mb-2 text-gray-300">Budget</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg appearance-none bg-white/10 backdrop-blur-md border border-white/20 text-white focus:border-[#ff5521] focus:ring-1 focus:ring-[#ff5521]/30 focus:outline-none transition-all cursor-pointer"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", backdropFilter: "blur(8px)" }}
              >
                <option value="" >Select your budget</option>
                <option value="lt15k" className="text-black">$ &lt; 15k</option>
                <option value="15k-40k"  className="text-black">$ 15k - 40k</option>
                <option value="40k-100k"  className="text-black">$ 40k - 100k</option>
                <option value="100k-200k"  className="text-black">$ 100k - 200k</option>
                <option value="gt200k"  className="text-black">$ &gt; 200k</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-[6px] text-[#ff5521] pointer-events-none">▼</div>
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
                className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:border-[#ff5521] focus:ring-1 focus:ring-[#ff5521]/30 focus:outline-none transition-all"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm mb-2 text-gray-300">Attach a file (optional, max 5 MB)</label>

              <div className="flex items-center gap-3">
                <label
                  className="inline-flex items-center px-4 py-2 bg-white/8 backdrop-blur-md border border-white/20 rounded-lg cursor-pointer text-white hover:bg-white/12 transition"
                >
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
            </div>

            <div className="sm:col-span-2 flex justify-center mt-2">
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
