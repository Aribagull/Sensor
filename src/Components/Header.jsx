import logo from "../Assets/Logo/logo.png";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState("home"); // Default active item

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Features", href: "#features" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-30">
      <div className="bg-[#1b2231] rounded-full max-w-7xl mx-auto flex items-center justify-between py-2 px-10 mt-5">

        {/* Left - Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Center - Navigation Links */}
        <nav className="flex-1 flex justify-center gap-8 ml-36 text-white">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name.toLowerCase())} // Click sets active
              className={`relative py-1 transition-colors 
                ${active === link.name.toLowerCase() ? "text-blue-300" : ""}
                hover:text-blue-300`}
            >
              {link.name}
              {/* Underline */}
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-blue-300 transition-all
                  ${active === link.name.toLowerCase() ? "scale-x-100" : "scale-x-0"} origin-left`}
              ></span>
            </a>
          ))}
        </nav>

        {/* Right - Login/Signup Buttons */}
        <div className="flex items-center gap-4">
          <button className="px-6 py-2 bg-[#0575c5] text-white rounded-full hover:bg-blue-700 transition">
            Signup
          </button>
          <button className="px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-black transition">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
