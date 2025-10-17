import React from 'react'

const Navbar2 = () => {
  return (
    <div className='fixed z-100 h-[9vh] bg-white text-black w-screen justify between'>
        <div>
            <ul className='flex justify-between w-screen'>
                <li>
                    hello
                </li>
                  <li className='cursor-pointer group'>
                    hello
                    <div className=' hidden group-hover:block cursor-pointer'>
                        <span>
                            Services
                        </span>
                        <div>
                            Hello
                        </div>
                    </div>
                </li>
                  <li>
                    hello
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar2