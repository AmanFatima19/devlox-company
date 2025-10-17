import React from "react";
import { motion } from "framer-motion";
import blogImage from "../../assets dummy/Downloaded Assets/blogimage.webp";

const BlogsSection = () => {
  const blogs = [
    {
      id: 1,
      title: "How to Build a Modern React Blog",
      description: "A step-by-step guide to creating a stunning blog UI.",
      date: "Oct 15, 2025",
      views: "1316 Views",
      image: blogImage,
    },
    {
      id: 2,
      title: "Top 10 Game Dev Tools in 2025",
      description: "Explore cutting-edge tools every developer should know.",
      date: "Sep 30, 2025",
      views: "2542 Views",
      image: blogImage,
    },
    {
      id: 3,
      title: "Web3: The Future of the Internet",
      description: "A deep dive into decentralized web technologies.",
      date: "Aug 20, 2025",
      views: "1864 Views",
      image: blogImage,
    },
    {
      id: 4,
      title: "Mastering UI/UX for Mobile Apps",
      description: "Learn design principles for next-gen mobile apps.",
      date: "Jul 10, 2025",
      views: "999 Views",
      image: blogImage,
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="bg-black text-white py-16 px-6 sm:px-10 lg:px-20 min-h-screen flex flex-col items-center">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide text-white font-[inter]">
          BLOGS
        </h1>
        <p className="text-gray-400 mt-3 text-sm sm:text-base tracking-wide">
          Unlock a world of trends shaping the future of development.
        </p>
      </motion.div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 w-full max-w-7xl">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-md 
                       border border-white/20 bg-white/10 backdrop-blur-md 
                       transform hover:scale-[1.03] 
                       transition-all duration-500 ease-out cursor-pointer h-[400px]"
          >
            <img
              src={blog.image}
              alt="Blog"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-between p-4 text-white">
              <div className="flex justify-between text-xs sm:text-sm opacity-90">
                <p>{blog.date}</p>
                <p>{blog.views}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-1">{blog.title}</h2>
                <p className="text-sm text-gray-300">{blog.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogsSection;
