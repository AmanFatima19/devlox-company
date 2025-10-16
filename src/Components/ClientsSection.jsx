import React from 'react'
import bgImage from "../assets/backgrounds/bg-pg2.png"
import img1 from "../../assets dummy/Downloaded Assets/1.png"
import img2 from "../../assets dummy/Downloaded Assets/2.png"
import img3 from "../../assets dummy/Downloaded Assets/3.png"
import img4 from "../../assets dummy/Downloaded Assets/4.png"
import map from "../assets/map.png"
const ClientsSection = () => {
  return (
    <div className='h-screen w-screen' style={{ backgroundImage: `url(${bgImage})` }}>
       <div className="w-full flex justify-center items-center px-10">
        <div className=' pt-20 px-10'>
            <h1 className='heading text-white'>
                Our Awards & Recognition
            </h1>
            <p className='subText mt-2'  >
                Our dedication to excellence has earned us global recognition and numerous industry awards. The company’s achievements highlight the team’s commitment to quality and innovation, gaining the trust of top-tier clients worldwide.
            </p>
      </div>
        {/* RIGHT MAP */}
        <div className="  w-[50vw] pt-50">
          <img src={map} alt="Map" className="w-[90%] h-auto object-contain" />
        </div>
        </div>
    </div>
  )
}

export default ClientsSection