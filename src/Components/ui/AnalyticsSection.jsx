import React from "react";
import { CiCircleCheck } from "react-icons/ci";

export default function AnalyticsSection() {
  return (
    <div className=" bg-black text-white ">
        <div className="max-w-7xl  py-20 flex flex-col lg:flex-row items-center gap-10 mx-auto px-20">

      {/* ---------------- LEFT IMAGES SECTION ---------------- */}
      <div className="relative items-center w-full lg:w-1/2 flex justify-center">

  {/* BLUR WHITE BACKGROUND */}
  <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl -z-10"></div>

  {/* CHART IMAGE */}
  <img
    src="https://saaslyn-merge-html.netlify.app/assets/images/new-images-v2/data/data-1.svg"
    alt="Chart"
    className="w-[75%] h-full rounded-2xl"
  />

  {/* SUMMARY IMAGE */}
  <img
    src="https://saaslyn-merge-html.netlify.app/assets/images/new-images-v2/data/data-2.svg"
    alt="Summary"
    className="w-44 absolute left-[-10px] top-1/3 -translate-y-1/2 animate-floating rounded-2xl shadow-xl"
  />
</div>


      {/* ---------------- RIGHT TEXT CONTENT ---------------- */}
      <div className="w-full lg:w-1/2">
        <p className="text-sm tracking-widest text-primary mb-4">
          Insights & Analytics
        </p>

        <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6">
          Smart Monitoring in Real-Time<br />
          For Informed Decisions
         
        </h1>

        <p className="text-gray-300 mb-10 leading-relaxed">
          Monitor real-time temperature data from all your coolers and freezers, track historical trends over days, weeks, or months, and ensure safe storage of critical items.
        </p>

        <div className="space-y-4">
          {[
            "Average Temperature: Quickly see average readings across all sensors.",
            "Trend Graphs: Visualize temperature changes over time for each cooler/freezer.",
            "Alerts & Notifications: Stay informed of threshold breaches and door open events",
          ].map((item, i) => (
            <p key={i} className="flex items-center gap-3 text-gray-300">
              <CiCircleCheck className="w-5 h-5 text-primary" />
              {item}
            </p>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
