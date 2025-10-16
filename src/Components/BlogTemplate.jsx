import React from 'react'
import blogImage from "../../assets dummy/Downloaded Assets/blogimage.webp"

const BlogTemplate = () => {
  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-md border border-transparent hover:border-[#ff5521] transform hover:scale-[1.03] transition-all duration-500 ease-out cursor-pointer h-[400px]"
    >
      {/* Blog Image */}
      <img src={blogImage} alt="Blog" className="w-full h-full object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-between p-4 text-white">
        {/* Top bar: date + views */}
        <div className="flex justify-between text-sm opacity-90">
          <p>Oct 15, 2025</p>
          <p>1316 Views</p>
        </div>

        {/* Bottom text */}
        <div>
          <h2 className="text-lg font-semibold">How to Build a Modern React Blog</h2>
          <p className="text-sm text-gray-200">
            A step-by-step guide to creating a stunning blog UI.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogTemplate
