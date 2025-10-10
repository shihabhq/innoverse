"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import HomeSpeakerCard from "@/components/HomeSpeakerCard"; // adjust path as needed
import { speakers } from "@/data/speakers";

export default function SpeakerCarousel() {
  return (
    <div className="relative z-20 py-16 max-w-6xl mx-auto">
      <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        // grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        spaceBetween={30}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {speakers.map((speaker) => (
          <SwiperSlide key={speaker.name} className="!w-fit sm:!w-[400px]">
            <div className=" rounded-2xl transition-all duration-500">
              <HomeSpeakerCard {...speaker} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
