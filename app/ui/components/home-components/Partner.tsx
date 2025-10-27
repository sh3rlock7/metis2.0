"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

export const Partner = () => {
  const logos = [
    { src: "/aitch.systems_black.png", alt: "Aitch Systems Logo" },
    { src: "/drawlie_black.png", alt: "Drawlie Logo" },
    { src: "/flowers_black.png", alt: "Flowers Logo" },
    { src: "/skrime_black.png", alt: "Skrime Logo" },
  ];

  return (
    <div className="mb-20 flex flex-col items-center">
      <p className="text-[16px] tracking-tight mb-5 text-center text-gray-400 font-medium mt-10">
        WIR VERTRAUEN AUF
      </p>
      <h1 className="text-5xl text-center text-white font-medium mb-10">
        Unsere Partner
      </h1>

      <div className="w-full lg:w[80%] flex flex-wrap gap-x-2 lg:w-full" >
          {logos.map((logo, idx) => (
            
              <Image key={idx} className="mx-auto mt-5 invert bg-white" src={logo.src} width={150} height={150} alt={logo.alt} />
          ))}
       
      </div>
    </div>
  );
};
