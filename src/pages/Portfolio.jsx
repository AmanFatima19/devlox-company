import React from 'react'
import bgImage from "../assets/backgrounds/bg-pg2.png"
import mainImage from "../assets/Portfolio/main.png"
import img1 from "../../assets dummy/Portfolio/1.png"
import img2 from "../../assets dummy/Portfolio/2.png"
import img3 from "../../assets dummy/Portfolio/3.png"
import img4 from "../../assets dummy/Portfolio/4.png"
import img5 from "../../assets dummy/Portfolio/5.png"
import img6 from "../../assets dummy/Portfolio/6.png"
import img7 from "../../assets dummy/Portfolio/7.jpg"
import { NavLink } from 'react-router-dom'


const Portfolio = () => {
  const categories = [{
  name:"Characters",
  to:"/characters"
}, {
  name:"RPG",
  to:"/rpg"
},{
  name:"Enviroments",
  to:"/environments"
},
]
  return (
<div className='' >
      <div className=''>
      <div className=' overflow-hidden relative  h-[40vh] md:h-[60vh] flex-col  justify-center items-center'>
        <img src={mainImage} alt="" className=' h-full w-auto md:w-full md:h-full object-cover object-center ' />

        <div className='absolute left-5 top-0 flex w-full h-full  px-6 md:pd-8 flex-col items-center justify-center'>
        <h1 className=' font-extrabold 
          text-6xl sm:text-3xl md:text-5xl lg:text-6xl 
          w-[85%] md:w-[60%] lg:w-[45%] text-white text-center'>OUR PORTFOLIO</h1>
        <p className=' text-white  mt-2 text-sm sm:text-base md:text-sm tracking-wide 
          w-full sm:w-[80%] md:w-[55%] lg:w-[30%] text-gray-200 text-center'>
          We craft high-quality game assets and immersive experiences, aligning with our clients’ vision! Hope you will enjoy our latest portfolio!
        </p>
        </div>
        <div>
          <h1></h1>
        </div>
      </div>



<div className='pt-6' style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>
<div className='px-6 flex justify-center space-x-2' >
  {categories.map((category,index)=>(
    <NavLink to={category.to} end key={index} className={({isActive})=>`relative border-1 border-[#ff5521] text-white px-5 py-2.5 rounded-sm font-md
               transition-all duration-300 hover:scale-105 shadow-md hover:shadow-orange-500/40 group ${isActive?"bg-[#ff5521]":""}`} >
                {category.name}
                <span className='absolute bg-[#ff5521] h-1 bottom-0 left-0 w-0 group-hover:w-full transition-all ease-in-out duration-150 '></span></NavLink>
  ))}
    
  
</div>
<div className="columns-1 sm:columns-2 md:columns-3 gap-3 px-4 sm:px-10 md:px-20 pt-8 pb-6" >
  {[img1, img2, img3, img4, img5, img6].map((img, index) => (
    <div
      key={index}
      className="mb-3 border-2 border-[#ff5521] overflow-hidden rounded-lg transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_20px_#ff5521] break-inside-avoid"
    >
      <img
        src={img}
        className="w-full h-auto object-cover transition-opacity duration-500 hover:opacity-90"
      />
    </div>
  ))}
</div>
</div>

    
    </div>
    </div>
  )
}

export default Portfolio
