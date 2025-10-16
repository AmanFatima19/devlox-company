import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent ">
      <nav className="h-[11vh] flex justify-between items-center px-6 py-3 text-white font-medium font-[inter] text-[16px] bg-transparent backdrop-blur-md">
        
        <div>
          <img className="h-[5vh] w-[14vw] " src={logo} alt="Logo" />
        </div>

        <div>
          <ul className="flex space-x-6 items-center">
            <li className="relative group/nav p-6">
              <button className="navbarLinks flex items-center">
                Services
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="fixed left-0 top-[11vh] w-full bg-white shadow-lg text-black z-40 opacity-0 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:pointer-events-auto transition-all duration-300 ease-in-out transform translate-y-2 group-hover/nav:translate-y-0">
                <div className="px-16 py-10 flex justify-between max-w-7xl mx-auto">
                  <div>
                    <h3 className="font-semibold text-lg border-b-2 border-pink-500 inline-block mb-4">
                      Web Development
                    </h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="hover:text-pink-500">WordPress Website Development</a></li>
                      <li><a href="#" className="hover:text-pink-500">Ecommerce Website Development</a></li>
                      <li><a href="#" className="hover:text-pink-500">Matrimonial Website Development</a></li>
                      <li><a href="#" className="hover:text-pink-500">Web Designing Services</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg border-b-2 border-pink-500 inline-block mb-4">
                      App Development
                    </h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="hover:text-pink-500">Android App Development</a></li>
                      <li><a href="#" className="hover:text-pink-500">Cross-Platform App Development</a></li>
                      <li><a href="#" className="hover:text-pink-500">dApp Development</a></li>
                      <li><a href="#" className="hover:text-pink-500">Crowdfunding App Development</a></li>
                      <li><a href="#" className="hover:text-pink-500">API Development</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg border-b-2 border-pink-500 inline-block mb-4">
                      Software Development
                    </h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="hover:text-pink-500">Salesforce Development</a></li>
                      <li><a href="#" className="hover:text-pink-500">School Management Software</a></li>
                      <li><a href="#" className="hover:text-pink-500">Hotel Management Software</a></li>
                      <li><a href="#" className="hover:text-pink-500">HRM Software Development</a></li>
                      <li><a href="#" className="hover:text-pink-500">Shipping Management Software</a></li>
                      <li><a href="#" className="hover:text-pink-500">MLM Software</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg border-b-2 border-pink-500 inline-block mb-4">
                      Digital Marketing
                    </h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="hover:text-pink-500">ASO Services</a></li>
                      <li><a href="#" className="hover:text-pink-500">SEO Services</a></li>
                      <li><a href="#" className="hover:text-pink-500">SMO Services</a></li>
                      <li><a href="#" className="hover:text-pink-500">PPC Marketing Services</a></li>
                      <li><a href="#" className="hover:text-pink-500">Content Marketing Services</a></li>
                      <li><a href="#" className="hover:text-pink-500">Performance Marketing Company</a></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg border-b-2 border-pink-500 inline-block mb-4">
                      Latest Technology
                    </h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="hover:text-pink-500">IoT Development</a></li>
                      <li><a href="#" className="hover:text-pink-500">Augmented Reality App Development</a></li>
                      <li><a href="#" className="hover:text-pink-500">Virtual Reality App Development</a></li>
                      <li><a href="#" className="hover:text-pink-500">Metaverse App Development</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li><Link to="/about" className="navbarLinks">About</Link></li>
            <li><Link to="/portfolio" className="navbarLinks">Portfolio</Link></li>
            <li><Link to="/career" className="navbarLinks">Career</Link></li>
            <li><Link to="/blog" className="navbarLinks">Blog</Link></li>
          </ul>
        </div>

        <div>
          <button className="button type1">Contact Us</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
