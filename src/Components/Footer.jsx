import React from "react";
import { ArrowRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../Assets/Logo/logo.png";

export default function Footer() {
  return (
    <footer className="w-full relative bg-gradient-to-t from-[#080A14] to-[#0F1B35] text-white py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 relative z-10">

        {/* LEFT — Logo + Description + Newsletter */}
        <div className="md:w-1/2 flex flex-col">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-16" />
            <h1 className="text-3xl font-semibold">Acooler Services</h1>
          </div>

          <p className="mt-4 text-gray-300 leading-relaxed">
            Acooler Services is an image generator powered by <br /> Artificial Intelligence.
          </p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3">Join Our Newsletter</h2>
            <div className="relative w-full max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none"
              />
              <ArrowRight className="absolute right-0 top-2 text-gray-300" size={18} />
            </div>
          </div>
        </div>

        {/* RIGHT — Contact + Social Icons */}
        <div className="md:w-[30%] flex flex-col justify-start mt-10 text-left z-10">
          <h3 className="font-bold mb-2">Contact Us</h3>
          <p>128 Kuaram Old Road, Parkvenue, Greater London,</p>
          <p>NW18JR Puran, United Kingdom</p>
          <p className="mt-2">
            <span className="font-semibold">Phone:</span> +012-3455700
          </p>

          <div className="flex gap-4 mt-5 justify-start">
            <FaFacebookF size={20} className="hover:text-gray-400 transition-colors" />
            <FaInstagram size={20} className="hover:text-gray-400 transition-colors" />
            <FaLinkedinIn size={20} className="hover:text-gray-400 transition-colors" />
          </div>
        </div>
      </div>

      {/* Corner Image — now relative to the FOOTER */}
      <img
        src="https://validthemes.net/site-template/robok/assets/img/shape/globe.png"
        alt="Decorative"
        className="absolute bottom-0 right-0 w-[450px] h-[450px] object-contain pointer-events-none"
      />
    </footer>
  );
}
