import bgVideo from "../Assets/Video/bg-video.mp4";
import { FaUserPlus } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import Header from "./Header";

import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      <Header />

      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video src={bgVideo} autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-20 text-center max-w-3xl px-6 mt-24">
          <p className="uppercase mb-6">Smarter Cooling Solutions with Acooler 🚀</p>
          <h1 className="text-6xl font-bold text-white mb-6 uppercase">
            Reliable Temperature <br /> Monitoring  for <br /> Coolers & Freezers
          </h1>
         
          <p className="text-gray-200 mb-10">
            A Cooler Service Company provides installation, maintenance, and sales of commercial refrigeration units, ensuring optimal performance and safe storage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/new-customer")}
              className="flex items-center px-6 py-3 bg-[#0575c5] rounded-full hover:bg-blue-700 transition justify-center"
            >
              <FaUserPlus className="mr-3" size={20} /> 
              <span className="mr-3 font-semibold">New Customer</span>
            </button>

            <button
              onClick={() => navigate("/existing-customer")}
              className="flex items-center px-6 py-3 border-2 rounded-full hover:bg-white hover:text-black transition justify-center"
            >
              <FaUserGroup className="mr-3" size={20} />  
              <span className="mr-3 font-semibold">Existing Customer</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
