"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import { testimonials } from "@/app/lib/testimonials";
import { TestimonialsCards } from "./TestimonialsCards";

export const Testimonials = () => {
  // duplicamos para suavizar el loop visual
  const loopedTestimonials = [
    ...testimonials.slice(-2),
    ...testimonials,
    ...testimonials.slice(0, 2),
  ];

  return (
    <div className="mt-20 text-black text-center mb-20">
      <h6 className="text-gray-500 text-2xl lg:text-xl">Bewertungen unserer Kunden</h6>
      <h1 className="text-6xl font-semibold md:text-5xl lg:text-7xl lg:font-[450] mb-10">
        Sie vertrauen uns!
      </h1>

      <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-y-16 md:gap-y-10">
        {/* Carousel */}
        <div className="w-full max-w-6xl px-4">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            speed={800}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 40,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
          >
            {loopedTestimonials.map((t, i) => (
              <SwiperSlide
                key={t.id + "_" + i}
                className="max-w-[320px] md:max-w-[380px] transition-all duration-500"
              >
                <TestimonialsCards
                  comment={t.comment}
                  url={t.url}
                  avatar={t.avatar}
                  name={t.name}
                  role={t.role}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Side images */}
        <div className="hidden flex-col gap-y-4">
          <Image
            src="/working_man.jpg"
            alt="working man"
            width={500}
            height={592}
            className="rounded-2xl object-cover"
          />
          <Image
            src="/office.jpg"
            alt="office"
            width={500}
            height={592}
            className="rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};
