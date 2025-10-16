import React from 'react'
import video from "../assets/heroVideo.mp4"
const HeroSection = () => {
  return (
    <div className='relative h-screen top-0'>
        <video src={video} loop autoPlay muted className="absolute top-0 left-0 w-full h-full object-cover z-0"></video>
        <div className='mx-36 absolute top-[10%]'>
            <h1 className='leading-[65px] top-0 w-[40vw] font-[inter] font-extrabold text-6xl text-white '>FULL-CYCLE GAME DEVELOPMENT COMPANY</h1>
            <p className='w-[30vw] font-[inter] tracking-widest text-white text-xs'>Blending our passion for games and technology with your unique vision through expert game art and development services</p>

        <button className=" button type1 my-6 ">
          Contact Us
        </button>
        </div>
        
    </div>
  )
}

export default HeroSection