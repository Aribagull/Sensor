import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  { name: "Irene Strong", image: "https://randomuser.me/api/portraits/men/32.jpg", text: "Mean if he they been no hold mr. Is at much do made took held help. " },
  { name: "Jonas Kakaroto", image: "https://randomuser.me/api/portraits/men/44.jpg", text: "Blessing it ladyship on sensible judgment settling outweigh. civil jokes leave offer." },
  { name: "Anna Smith", image: "https://randomuser.me/api/portraits/women/68.jpg", text: "Great experience! Very helpful. They were professional and helpful throughout." },
  { name: "John Doe", image: "https://randomuser.me/api/portraits/men/72.jpg", text: "Highly recommend. Highly recommend their service. Friendly and reliable team." },
  { name: "Mary Jane", image: "https://randomuser.me/api/portraits/women/65.jpg", text: "Amazing support. Highly recommend their service. Friendly and reliable team." },
];

export default function TestimonialSlider() {
  const settings = {
    dots: true,           // show navigation dots
    infinite: true,
    slidesToShow: 3,      // 3 cards in a row
    slidesToScroll: 1,    // 1 card moves per click
    autoplay: false,      // NO autoplay
    speed: 800,           // smooth transition
    cssEase: "ease-in-out",
    arrows: true,         // show next/prev arrows
    pauseOnHover: true
  };

  return (
    <div className=" bg-black max-w-7xl mx-auto py-16 px-32">
      <div className="w-full bg-black py-16 px-10">
  <h2 className="text-5xl font-bold text-white text-center mb-6">
    What Our Clients Say
  </h2>
  <p className="text-gray-300 text-center mb-6 max-w-xl mx-auto">
    Hear directly from our satisfied clients and see why they trust us for their solutions.
  </p>
</div>

      <Slider {...settings}>
        {testimonials.map((t, i) => (
          <div key={i} className="px-3 ">
            <div className="bg-[#0c0d25]/70  shadow-lg rounded-xl p-6 text-center">
              <img
                src={t.image}
                className="w-20 h-20 rounded-full mx-auto mb-4"
                alt={t.name}
              />
              <h3 className="text-white font-semibold mb-2">{t.name}</h3>
              <p className="text-gray-300 text-sm">{t.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
