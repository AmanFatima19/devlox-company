import React, { useState, useEffect } from "react";
import whitelogo from "../assets/white_devlox.png";
import logoicon from "../assets/logo-icon.png";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const clearDropdownTimeout = () => {
    if (window.dropdownTimeout) clearTimeout(window.dropdownTimeout);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setOpenDropdown(null);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <nav className="h-[10vh] flex justify-between items-center px-6 md:px-10 text-white font-[Inter] relative">

        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/">
            <img className="h-[5vh] w-auto mr-2" src={logoicon} alt="Logoicon" />
          </Link>

          <Link to="/">
            <img className="h-[3vh] w-auto" src={whitelogo} alt="Logo" />
          </Link>

          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>

        <ul
          className={`flex flex-col md:flex-row md:space-x-6 text-[13px] font-light
            md:static absolute bg-black/70 md:bg-transparent backdrop-blur-xl 
            md:backdrop-blur-0 w-full md:w-auto left-0 top-[11vh] md:top-0 
            md:opacity-100 transition-all duration-300 ease-in-out
            ${
              menuOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible md:visible"
            } md:visible
            md:flex-grow md:justify-start md:ml-8`}
        >
          <li className="px-6 md:px-0 py-2 md:py-0">
            <Link to="/about" className="hover:text-[#ff5521] transition-colors duration-300">
              About
            </Link>
          </li>

          <li
            className="relative group cursor-pointer px-6 md:px-0 py-2 md:py-0"
            onMouseEnter={() => {
              if (window.innerWidth > 768) {
                clearDropdownTimeout();
                setOpenDropdown("services");
              }
            }}
            onMouseLeave={() => {
              if (window.innerWidth > 768) {
                window.dropdownTimeout = setTimeout(() => setOpenDropdown(null), 500);
              }
            }}
          >
            <span
              className="hover:text-[#ff5521] transition-colors duration-300"
              onClick={() =>
                window.innerWidth <= 768 &&
                setOpenDropdown(openDropdown === "services" ? null : "services")
              }
            >
              Services ▾
            </span>

            {openDropdown === "services" && (
              <div
                className={`${
                  window.innerWidth <= 768
                    ? "static grid-cols-1 p-4 w-[80%] bg-white/10"
                    : "absolute left-[-200px] top-[40px] w-[1100px] grid-cols-5 px-8 py-5"
                } grid gap-8 bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg 
                text-white text-[14px] font-light rounded-2xl transition-all duration-300`}
                onMouseEnter={() => {
                  if (window.innerWidth > 768) {
                    clearDropdownTimeout();
                    setOpenDropdown("services");
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth > 768) {
                    window.dropdownTimeout = setTimeout(() => setOpenDropdown(null), 500);
                  }
                }}
              >
                <div>
                  <h3 className="font-semibold text-[16px] mb-2 border-b-2 border-[#ff5521] inline-block">
                    Web Development
                  </h3>
                  <ul className="space-y-1">
                    <li><Link to="/service" className="hover:text-[#ff5521]">WordPress Website</Link></li>
                    <li><Link to="/service" className="hover:text-[#ff5521]">Ecommerce Website</Link></li>
                    <li><Link to="/service" className="hover:text-[#ff5521]">Matrimonial Website</Link></li>
                    <li><Link to="/service" className="hover:text-[#ff5521]">Web Designing</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-[16px] mb-2 border-b-2 border-[#ff5521] inline-block">
                    App Development
                  </h3>
                  <ul className="space-y-1">
                    <li><Link to="/android-app" className="hover:text-[#ff5521]">Android App</Link></li>
                    <li><Link to="/cross-platform" className="hover:text-[#ff5521]">Cross-Platform</Link></li>
                    <li><Link to="/dapp" className="hover:text-[#ff5521]">dApp Development</Link></li>
                    <li><Link to="/api" className="hover:text-[#ff5521]">API Development</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-[16px] mb-2 border-b-2 border-[#ff5521] inline-block">
                    Software Development
                  </h3>
                  <ul className="space-y-1">
                    <li><Link to="/school-software" className="hover:text-[#ff5521]">School Management</Link></li>
                    <li><Link to="/hotel-software" className="hover:text-[#ff5521]">Hotel Management</Link></li>
                    <li><Link to="/hrm" className="hover:text-[#ff5521]">HRM Software</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-[16px] mb-2 border-b-2 border-[#ff5521] inline-block">
                    Digital Marketing
                  </h3>
                  <ul className="space-y-1">
                    <li><Link to="/seo" className="hover:text-[#ff5521]">SEO Services</Link></li>
                    <li><Link to="/smo" className="hover:text-[#ff5521]">SMO Services</Link></li>
                    <li><Link to="/content" className="hover:text-[#ff5521]">Content Marketing</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-[16px] mb-2 border-b-2 border-[#ff5521] inline-block">
                    Branding
                  </h3>
                  <ul className="space-y-1">
                    <li><Link to="/logo" className="hover:text-[#ff5521]">Logo Design</Link></li>
                    <li><Link to="/branding" className="hover:text-[#ff5521]">Brand Identity</Link></li>
                    <li><Link to="/ads" className="hover:text-[#ff5521]">Ad Campaigns</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </li>

          <li
            className="relative group cursor-pointer px-6 md:px-0 py-2 md:py-0"
            onMouseEnter={() => {
              if (window.innerWidth > 768) {
                clearDropdownTimeout();
                setOpenDropdown("games");
              }
            }}
            onMouseLeave={() => {
              if (window.innerWidth > 768) {
                window.dropdownTimeout = setTimeout(() => setOpenDropdown(null), 500);
              }
            }}
          >
            <span
              className="hover:text-[#ff5521] transition-colors duration-300"
              onClick={() =>
                window.innerWidth <= 768 &&
                setOpenDropdown(openDropdown === "games" ? null : "games")
              }
            >
              Games ▾
            </span>

            {openDropdown === "games" && (
              <div
                onMouseEnter={() => {
                  if (window.innerWidth > 768) {
                    clearDropdownTimeout();
                    setOpenDropdown("games");
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth > 768) {
                    window.dropdownTimeout = setTimeout(() => setOpenDropdown(null), 500);
                  }
                }}
                className={`${
                  window.innerWidth <= 768
                    ? "static grid-cols-1 p-4 w-full bg-white/10"
                    : "absolute left-[-100px] top-[40px] w-[700px] grid-cols-3 px-8 py-5"
                } grid gap-8 bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg 
                text-white text-[14px] font-light rounded-2xl transition-all duration-300`}
              >
                <div>
                  <h3 className="font-semibold text-[16px] mb-2 border-b-2 border-[#ff5521] inline-block">
                    Mobile Games
                  </h3>
                  <ul className="space-y-1">
                    <li><Link to="/service" className="hover:text-[#ff5521]">Unity Games</Link></li>
                    <li><Link to="/2d-games" className="hover:text-[#ff5521]">2D Game Development</Link></li>
                    <li><Link to="/3d-games" className="hover:text-[#ff5521]">3D Game Development</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-[16px] mb-2 border-b-2 border-[#ff5521] inline-block">
                    PC / Web Games
                  </h3>
                  <ul className="space-y-1">
                    <li><Link to="/web-games" className="hover:text-[#ff5521]">Web Browser Games</Link></li>
                    <li><Link to="/metaverse-games" className="hover:text-[#ff5521]">Metaverse Games</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-[16px] mb-2 border-b-2 border-[#ff5521] inline-block">
                    Console / VR
                  </h3>
                  <ul className="space-y-1">
                    <li><Link to="/vr-games" className="hover:text-[#ff5521]">Virtual Reality Games</Link></li>
                    <li><Link to="/ar-games" className="hover:text-[#ff5521]">Augmented Reality Games</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </li>

          <li className="px-6 md:px-0 py-2 md:py-0">
            <Link to="/portfolio" className="hover:text-[#ff5521] transition-colors duration-300">
              Portfolio
            </Link>
          </li>

          <li className="px-6 md:px-0 py-2 md:py-0">
            <Link to="/career" className="hover:text-[#ff5521] transition-colors duration-300">
              Career
            </Link>
          </li>

          <li className="px-6 md:px-0 py-2 md:py-0">
            <Link to="/blog" className="hover:text-[#ff5521] transition-colors duration-300">
              Blog
            </Link>
          </li>
        </ul>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-[#ff5521] text-white text-sm px-5 py-2.5 rounded-sm font-xs
              hover:bg-[#ff6b3d] transition-all duration-300 hover:scale-105 
              shadow-md hover:shadow-orange-500/40"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
