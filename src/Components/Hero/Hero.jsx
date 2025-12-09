import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    img: "https://i.ibb.co.com/twFHZZch/trans.gif",
    title: "Your blood is someone’s second chance",
    subtitle: "Every drop counts and can save a life",
  },
  {
    img: "https://i.ibb.co/k2kgJ1jw/bg2.png",
    title: "A few minutes from you, a lifetime for them",
    subtitle: "Your small effort can change someone’s future",
  },
  {
    img: "https://i.ibb.co/BHj4cczY/GIF.gif",
    title: "Be the reason someone gets a tomorrow",
    subtitle: "Donate blood and become a hero today",
  },
];

const HeroSlider = () => {
  return (
    <div className="w-full pt-5 bg-red-50">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className=" px-6 md:px-12 flex flex-col md:flex-row items-center gap-8 ">
              
              {/* Text Left */}
              <div className="flex-1  md:text-left">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-[#FF0019]">
                  {slide.title}
                </h1>
                <p className=" text-lg md:text-xl mb-6">
                  {slide.subtitle}
                </p>
                <button
                  className="px-5 py-1.5 rounded-xl font-bold text-white text-lg  transition transform hover:scale-105"
                  style={{ backgroundColor: "#FF0019" }}
                >
                  Donate Now
                </button>
              </div>

              {/* Image Right */}
              <div className="flex-1 flex justify-center md:justify-end">
                <img
                  src={slide.img}
                  alt="hero"
                  className="max-w-full h-auto rounded-xl "
                />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
