import React from 'react'
import { Trophy, Zap, Shield, Headphones } from 'lucide-react'
import bgImage from "../assets/backgrounds/bg-pg2.png"

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
    <div
      className="min-h-screen bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Header */}
      <div className="flex justify-between w-screen px-10">
        <div>
          <h1 className="text-white text-3xl font-bold font-[inter] w-[32vw] tracking-wide leading-snug">
            WHAT MAKES KEVURU A LEADING GAME DEVELOPMENT STUDIO
          </h1>
        </div>
        <div>
          <p className="subText">
            Kevuru Games is dedicated to creating standout games that captivate players worldwide.
            With a team of 300+ professionals experienced in game development, art production, and
            cutting-edge technologies, we deliver quality and innovation tailored to your vision.
          </p>
        </div>
      </div>

      {/* Value Icons Section */}
      <div className="mt-20 mx-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {values.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <div className="bg-[#1c1c1c] rounded-full p-6 mb-5 group-hover:shadow-[0_0_25px_#ff5521] transition-all duration-500">
              <div className="text-[#ff5521]">{item.icon}</div>
            </div>
            <h3 className="text-white text-lg font-bold mb-3">{item.title}</h3>
            <p className="text-gray-300 text-sm w-[85%] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompanyProfile
