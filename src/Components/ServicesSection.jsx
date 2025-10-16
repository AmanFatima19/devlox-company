import React from 'react'
import { Gamepad2, Globe, Smartphone } from 'lucide-react'
import ServiceCard from './ServiceCard'

const ServicesSection = () => {
  const serviceCategories = [
    {
      title: "Game Development",
      icon: <Gamepad2 size={26} color="#ff5521" className="mr-2" />,
      services: [
        { name: "NFT Games", to: "/nft-games" },
        { name: "Metaverse Games", to: "/metaverse-games" },
        { name: "Unity Games", to: "/unity-games" },
        { name: "Mobile Games", to: "/mobile-games" },
        { name: "Game Art & Design", to: "/game-art-design" },
        { name: "Game Development", to: "/game-development" },
        { name: "QA Testing", to: "/qa-testing" },
        { name: "Game Optimization", to: "/game-optimization" },
      ],
    },
    {
      title: "Web Development",
      icon: <Globe size={26} color="#ff5521" className="mr-2" />,
      services: [
        { name: "WordPress Development", to: "/wordpress-development" },
        { name: "Frontend Development", to: "/frontend-development" },
        { name: "Backend Development", to: "/backend-development" },
        { name: "Full-Stack Development", to: "/fullstack-development" },
        { name: "E-commerce Solutions", to: "/ecommerce-solutions" },
        { name: "Web Applications", to: "/web-applications" },
      ],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone size={26} color="#ff5521" className="mr-2" />,
      services: [
        { name: "iOS App Development", to: "/ios-app-development" },
        { name: "Android App Development", to: "/android-app-development" },
        { name: "Cross-Platform Apps", to: "/cross-platform-apps" },
        { name: "Mobile Game Development", to: "/mobile-game-development" },
        { name: "App Optimization", to: "/app-optimization" },
      ],
    },
  ]

  return (
    <div className="pt-20">
      <div className="flex flex-col items-center text-center">
        <h1 className="heading">Our Services</h1>
        <p className="subText text-black">
          Comprehensive digital solutions tailored to your needs
        </p>
      </div>

      <div className="flex gap-7 mt-6 justify-center mx-4">
        {serviceCategories.map((category, index) => (
          <ServiceCard
            key={index}
            title={category.title}
            icon={category.icon}
            services={category.services}
          />
        ))}
      </div>
    </div>
  )
}

export default ServicesSection
