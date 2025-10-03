import React from "react";
import HomeSupporterCard from "./HomeSupporterCard";

const TitleSupporters = [
  "/home/supporters/a2i.png",
  "/home/supporters/ict.svg",
  "/home/supporters/undp.webp",
];
const additionalSupporters = [
  "home/supporters/abc.svg",
  "home/supporters/xyz.svg",
  "home/supporters/jamuna.svg",
  "home/supporters/desh.png",
  "home/supporters/bbc.svg",
  "home/supporters/trt.png",
  "home/supporters/aljazeera.png",
  "home/supporters/tbs.svg",
  "home/supporters/manob.svg",
  "home/supporters/somokal.svg",
  "home/supporters/dhakatribune.png",
  "home/supporters/daily-campus.svg",
];

const HomeSupporters = () => {
  return (
    <section className="bg-primary-background py-12 sm:py-16 px-4 relative">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug">
          Our Supporters
        </h2>

        {/* Subheading */}
        <h4 className="font-medium text-center mt-4 sm:mt-6 max-w-md sm:max-w-3xl md:max-w-5xl lg:max-w-fit mx-auto text-base sm:text-lg md:text-3xl leading-relaxed">
          We’re proud to be backed by trusted{" "}
          <span className="font-extrabold uppercase text-secondary">
            sponsors, partners,
          </span>
          and{" "}
          <span className="font-extrabold text-secondary uppercase">
            media allies
          </span>
          , who share our vision and help make{" "}
          <span className="text-secondary uppercase font-extrabold">
            Innoverse
          </span>{" "}
          possible.
        </h4>

        {/* Title Supporters */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-12">
          {TitleSupporters.map((imgSrc, index) => (
            <HomeSupporterCard key={index} imgSrc={imgSrc} />
          ))}
        </div>

        {/* Additional Supporters */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mt-8">
          {additionalSupporters.map((imgSrc, index) => (
            <HomeSupporterCard key={index} imgSrc={imgSrc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSupporters;
