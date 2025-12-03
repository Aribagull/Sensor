import logo from "../Assets/Logo/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Header() {
  const [active, setActive] = useState("home"); 

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#Contact" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-30">
      <div className="  max-w-7xl mx-auto flex items-center justify-between py-2 px-10 mt-5">

       <Link to="/" onClick={() => setActive("home")}>
  <img src={logo} alt="Logo" className="h-20 w-auto cursor-pointer" />
</Link>

       
       <nav className="flex-1 flex justify-center gap-8 ml-36 text-white">
  {navLinks.map((link) => (
    <Link
      key={link.name}
      to={link.name === "Home" ? "/" : link.href}
      onClick={() => setActive(link.name.toLowerCase())}
      className={`relative py-1 transition-colors 
        ${active === link.name.toLowerCase() ? "text-blue-300" : ""}
        hover:text-blue-300`}
    >
      {link.name}

      <span
        className={`absolute left-0 bottom-0 w-full h-[2px] bg-blue-300 transition-all
          ${active === link.name.toLowerCase() ? "scale-x-100" : "scale-x-0"} origin-left`}
      ></span>
    </Link>
  ))}
</nav>


    
        <div className="flex items-center gap-4">
           <Link
  to="/signup"
  className="
    px-6 py-2 
    bg-[#0575c5] 
    text-white 
    rounded-xl 
    transition 
    hover:shadow-[0_0_12px_#0575c5]
  "
>
  Sign Up
</Link>

          <Link
  to="/signin"
   className="
  px-6 py-2 
  border-2 border-white 
  text-white 
  rounded-xl
  transition 
  hover:border-primary 
  hover:shadow-[0_0_25px_rgba(5,117,197,0.5)]
">
  Sign In
</Link>

        </div>
      </div>
    </header>
  );
}
