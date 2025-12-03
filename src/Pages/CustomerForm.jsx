import { useNavigate } from "react-router-dom";
import logo from "../Assets/Logo/logo.png";
import { FiUser, FiBriefcase, FiMessageCircle } from "react-icons/fi";

export default function CustomerForm({ type }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${type} form submitted!`);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-black overflow-y-auto">

      {/* ---- CENTER BLUE GLOW AT TOP ---- */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#119dff] rounded-full blur-[150px] opacity-40 pointer-events-none z-0"></div>

      {/* Back to Home Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-10 left-10 bg-[#119dff] text-white px-4 py-2 rounded-full shadow-md hover:opacity-90 transition-all z-20"
      >
        ← Back to Home
      </button>

      {/* Logo */}
      <img src={logo} alt="Logo" className="w-28 mt-10 mb-6 z-10" />

      {/* Transparent Form */}
      <form
        onSubmit={handleSubmit}
        className="z-10 p-8 w-[550px] space-y-6 mb-10"
      >
        <h2 className="text-5xl text-center font-bold text-white my-5 z-10">{type} Form</h2>
        
        <p className="text-center text-gray-300 mb-10 max-w-xl z-10 text-lg">
          Enter your details to create a new service request. Your information helps us assist you quickly. Submit the form to proceed.
        </p>

        {/* Name */}
        <div> 
          <label className="text-white text-sm">Full Name</label>
          <div className="relative">
            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 text-xl" />
            <input
              type="text"
              placeholder="Enter your full name..."
              required
              className="w-full mt-1 border border-gray-600 rounded-full px-10 py-3 bg-transparent placeholder:text-gray-400 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <label className="text-white text-sm">Company</label>
          <div className="relative">
            <FiBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 text-xl" />
            <input
              type="text"
              placeholder="Enter your company..."
              required
              className="w-full mt-1 border border-gray-600 rounded-full px-10 py-3 bg-transparent placeholder:text-gray-400 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Services Needed → TEXTAREA */}
        <div>
          <label className="text-white text-sm">Services Needed</label>
          <div className="relative">
            <FiMessageCircle className="absolute left-4 top-4 text-gray-300 text-xl" />
            <textarea
              placeholder="Write your message..."
              required
              rows={4}
              className="w-full mt-1 border border-gray-600 rounded-xl px-12 py-3 bg-transparent placeholder:text-gray-400 text-white focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#119dff] text-white py-3 rounded-xl shadow-md hover:opacity-90 transition-all"
        >
          Submit Form →
        </button>
      </form>
    </div>
  );
}
