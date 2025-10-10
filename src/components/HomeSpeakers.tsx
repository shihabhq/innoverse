"use client";

import { HomeSpeaker } from "@/types/types";
import Link from "next/link";
import React from "react";
import HomeSpeakerCard from "./HomeSpeakerCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SpeakerCarousel from "./SpeakerCarousel";

const speakers: HomeSpeaker[] = [
  {
    image: "/home/speakers/ashik-chowdhury.png",
    name: "Ashik Chowdhury",
    description:
      "Bangladeshi biomedical physicist and is notable for developing the focused impedance measurement method",
    facebookLink: "/",
    twitterLink: "/",
    linkedInLink: "/",
  },
  {
    image: "/home/speakers/chamok-hasan.png",
    name: "Chamok Hasan",
    description:
      "Bangladeshi biomedical physicist and is notable for developing the focused impedance measurement method",
    facebookLink: "/",
    twitterLink: "/",
    linkedInLink: "/",
  },
  {
    image: "/home/speakers/jhankar-mahbub.png",
    name: "Jhankar Mahbub",
    description:
      "Bangladeshi biomedical physicist and is notable for developing the focused impedance measurement method",
    facebookLink: "/",
    twitterLink: "/",
    linkedInLink: "/",
  },
  {
    image: "/home/speakers/khondoker.png",
    name: "Khondkar Siddique-e Rabbani",
    description:
      "Bangladeshi biomedical physicist and is notable for developing the focused impedance measurement method",
    facebookLink: "/",
    twitterLink: "/",
    linkedInLink: "/",
  },
  {
    image: "/home/speakers/zubayer.png",
    name: "Zubuyer Kaolin",
    description:
      "Bangladeshi biomedical physicist and is notable for developing the focused impedance measurement method",
    facebookLink: "/",
    twitterLink: "/",
    linkedInLink: "/",
  },
  {
    image: "/home/speakers/jahrat.png",
    name: "Jahrat Adib Chowdhury",
    description:
      "Bangladeshi biomedical physicist and is notable for developing the focused impedance measurement method",
    facebookLink: "/",
    twitterLink: "/",
    linkedInLink: "/",
  },
  {
    image: "/home/speakers/fahim-mashroor.png",
    name: "A.K.M Fahim Mashroor",
    description:
      "Bangladeshi biomedical physicist and is notable for developing the focused impedance measurement method",
    facebookLink: "/",
    twitterLink: "/",
    linkedInLink: "/",
  },
  {
    image: "/home/speakers/shohag.png",
    name: "Mahmudul Hasan Sohag",
    description:
      "Bangladeshi biomedical physicist and is notable for developing the focused impedance measurement method",
    facebookLink: "/",
    twitterLink: "/",
    linkedInLink: "/",
  },
];

const HomeSpeakers = () => {
  return (
    <section className="py-34">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-center text-4xl md:text-5xl lg:text-7xl font-extrabold leading-snug">
          Meet The <span className="text-secondary">Speakers</span>
        </h2>
        <h4 className="font-medium text-center mt-4 px-4 sm:mt-6 max-w-4xl md:max-w-5xl mx-auto text-lg sm:text-xl leading-relaxed">
          Be inspired by{" "}
          <span className="text-secondary">
            Bangladesh&apos;s leading minds in science and technology
          </span>{" "}
          as they share insights, experiences, and visions for the future.
        </h4>
        {/* Swiper for mobile/tablet (hidden on lg screens) */}
        {/* <div className="lg:hidden relative z-20 py-20 max-w-2xl mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1.2}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              500: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
            }}
            className="pb-12"
          >
            {speakers.map((speaker) => (
              <SwiperSlide key={speaker.name}>
                <HomeSpeakerCard {...speaker} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
        {/* Grid for desktop (hidden on smaller screens) */}
        {/* <div className="hidden lg:grid grid-cols-3 z-20 py-16 max-w-6xl mx-auto gap-8">
          {speakers.map((speaker) => (
            <HomeSpeakerCard key={speaker.name} {...speaker} />
          ))}
        </div> */}
        <SpeakerCarousel />
      </div>
    </section>
  );
};

export default HomeSpeakers;
