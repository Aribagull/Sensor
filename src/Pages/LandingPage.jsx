import { useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import logo from "../Assets/Logo/logo.png";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black bg-cover bg-center"
      style={{
        backgroundImage: "url('https://aithm-react.vercel.app/img/banner/background-main.png')",
        backgroundPosition: "center 100px",
       
      }}
    >
      {/* ---- Animated Left Circle ---- */}
      <div className="absolute top-1/4 left-[-100px] w-80 h-80 bg-[#119dff] rounded-full opacity-30 blur-3xl animate-leftRight"></div>

      {/* ---- Animated Right Circle ---- */}
      <div className="absolute bottom-1/3 right-[-120px] w-96 h-96 bg-[#119dff] rounded-full opacity-20 blur-3xl animate-rightLeft"></div>

      {/* ---- CENTER BLUE GLOW ---- */}
      <div className="absolute w-[500px] h-[500px] bg-[#119dff] rounded-full blur-[150px] opacity-40"></div>

      {/* Logo */}
      <img src={logo} alt="Logo" className="w-32 mb-6 z-10 " />

      {/* Heading */}
      <h1 className="text-5xl text-center font-bold text-white my-5 z-10">
        A COOLER SERVICES <br /> <span className="text-[#119dff]">COMPANY</span> 
      </h1>

      {/* Description */}
      <p className="text-center text-gray-300 mb-10 max-w-xl z-10 text-lg">
        Professional refrigeration solutions for hospitals and commercial businesses.
        Expert installations, maintenance, and cooler/freezer sales you can trust.
      </p>

      {/* Buttons */}
      <div className="flex flex-row space-x-10 z-10">
        <button
          onClick={() => navigate("/new-customer")}
          className="group flex items-center bg-[#119dff] text-white px-8 py-3 rounded-xl"
        >
          <FaUserPlus className="mr-3" size={20} /> 
          <span className="mr-3 font-semibold">New Customer</span>
        </button>

        <button
          onClick={() => navigate("/existing-customer")}
          className="group flex items-center border border-[#119dff] text-white px-8 py-3 rounded-xl"
        >
          <FaUserGroup className="mr-3" size={20} />  
          <span className="mr-3 font-semibold">Existing Customer</span>
        </button>
      </div>

      {/* Tailwind animation classes */}
      <style>
        {`
          @keyframes leftRight {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(80px); }
          }
          @keyframes rightLeft {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-80px); }
          }
          .animate-leftRight {
            animation: leftRight 6s ease-in-out infinite;
          }
          .animate-rightLeft {
            animation: rightLeft 8s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}
