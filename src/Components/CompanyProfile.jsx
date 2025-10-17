import React from 'react'
import { Trophy, Zap, Shield, Headphones } from 'lucide-react'

const CompanyProfile = () => {
  
  const values = [
    {
      title: "Award-Winning Team",
      description:
        "Industry-recognized developers with proven track records in delivering exceptional digital experiences.",
      icon: <Trophy size={32} strokeWidth={2} />,
    },
    {
      title: "Rapid Development",
      description:
        "Agile methodology ensures faster time-to-market without compromising on quality or functionality.",
      icon: <Zap size={32} strokeWidth={2} />,
    },
    {
      title: "Robust & Secure",
      description:
        "Enterprise-grade security and best practices integrated into every project we deliver.",
      icon: <Shield size={32} strokeWidth={2} />,
    },
    {
      title: "24/7 Support",
      description:
        "Dedicated support team available round-the-clock to ensure your project runs smoothly.",
      icon: <Headphones size={32} strokeWidth={2} />,
    },
  ]

  return (
    <div className='bg-black'>
    <div
      className="bg-black bg-cover bg-center bg-no-repeat py-8 sm:py-20 md:py-8 px-4 sm:px-8 md:px-16"
    >
      <div className="text-center mb-16 sm:mb-24">
        <h1 className="max-w-3xl mx-auto text-white text-lg sm:text-3xl md:text-2lg md:pt-3 lg:text-3xl font-bold font-[Inter] tracking-wide leading-snug">
          WHAT MAKES KEVURU A LEADING GAME DEVELOPMENT STUDIO
        </h1>
       <p className="text-[#ff5521] text-center mt-1 text-sm sm:text-base ">
Our Company Values        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center py-0 my-0">
        {values.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <div className="bg-[#1c1c1c]/80 rounded-full p-6 mb-5 transition-all duration-500">
              <div className="text-[#ff5521]">{item.icon}</div>
            </div>
            <h3 className="text-white text-lg sm:text-xl font-bold mb-3">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base w-[90%] sm:w-[80%] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default CompanyProfile
