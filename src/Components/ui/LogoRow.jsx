import React from "react";

export default function LogoRow() {
  const logos = [
    {
      src: "https://icon-library.com/images/icon-logo-png/icon-logo-png-29.jpg",
      label: "Investify",
    },
    {
      src: "https://static.vecteezy.com/system/resources/thumbnails/029/571/045/small/blue-glass-style-3d-letter-s-png.png",
      label: "Ximora",
    },
    {
      src: "https://cdn-icons-png.freepik.com/256/17914/17914657.png?semt=ais_white_label",
      label: "Knewish",
    },
    {
      src: "https://www.pngmart.com/files/23/Free-Logos-PNG-Isolated-Pic.png",
      label: "Upglam",
    },
    {
      src: "https://static.vecteezy.com/system/resources/thumbnails/019/897/563/small/modern-real-estate-and-construction-logo-free-png.png",
      label: "Nutril",
    },
  ];

  return (
    <div className="w-full bg-[#192030]/70 py-10 flex justify-center">
      <div className="flex items-center gap-20">
        {logos.map((item, index) => (
          <div key={index} className="flex items-center gap-3 opacity-80">
            <img src={item.src} alt={item.label} className="h-10 w-auto object-contain" />
            <span className="text-gray-400 text-2xl font-semibold">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
