import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0b] text-white px-8 md:px-16 lg:px-24 py-16 font-poppins  border-t border-[#ff5521]/20 shadow-[0_-6px_15px_rgba(255,85,33,0.1)]">
      <div className="flex flex-wrap justify-between gap-12">
        <div className="w-full md:w-[25%] space-y-6">
          <img src={logo} alt="Kevuru Games" className="w-36" />
          <div className="space-y-3 text-gray-400 text-sm">
            <p>al. Jana Pawła II 61, lok.241, biuro 1.7,<br />Warsaw, 01-031, Poland</p>
            <p>Phone: +48 22 419 38 000</p>
            <p>8 The Green, STE R, Dover, Delaware, 19901</p>
            <p>Phone: +1-424-413-5692</p>
            <p>95 3rd Street, 2nd Floor, San Francisco, CA 94103</p>
          </div>
          <div className="text-sm text-gray-400">
            <p className="font-semibold text-white">E-mail:</p>
            <p>contact@kevurugames.com</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-between w-full md:w-[70%] gap-12">
          <div>
            <h4 className="text-lg font-semibold mb-3">Game Art</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>3D Art</li>
              <li>3D Characters Design</li>
              <li>AAA</li>
              <li>Concept Art</li>
              <li>Slots Game Art</li>
              <li>2D Art</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Game Development</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Unity Development</li>
              <li>Unreal Game Development</li>
              <li>PC Game Development</li>
              <li>Mobile Game Development</li>
              <li>Hyper Casual Game Development</li>
              <li>Android Game Development</li>
              <li>iOS Game Development</li>
              <li>3D Game Development</li>
              <li>Game Testing</li>
              <li>Game Porting</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Animation</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>2D Animation</li>
              <li>3D Animation</li>
              <li>VFX</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Outstaffing</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Hire Game Developers</li>
              <li>Hire Unity Developers</li>
              <li>Hire Unreal Developers</li>
              <li>Hire 3D Artists</li>
              <li>Hire Game Designers</li>
              <li>Hire Character Designers</li>
              <li>Hire Concept Artists</li>
              <li>Hire 2D Artists</li>
              <li>Hire 2D Animators</li>
              <li>Hire 3D Animators</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-12 border-t border-gray-500 pt-6">
        © 2025 <span className="text-[#ff5521] ">Devlox</span> Games. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
