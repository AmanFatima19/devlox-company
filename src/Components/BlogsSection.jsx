import React from 'react'
import BlogTemplate from './BlogTemplate'

const BlogsSection = () => {
  return (
    <div className="text-black py-10 px-6 bg-gray-50 min-h-screen flex flex-col items-center">
      <div className="text-center max-w-2xl">
        <h1 className="heading">Blogs</h1>
        <p className="subText text-black">
          Unlock a world of trends shaping the future of development.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <BlogTemplate />
        <BlogTemplate />
        <BlogTemplate />
        <BlogTemplate />
      </div>
    </div>
  )
}

export default BlogsSection
