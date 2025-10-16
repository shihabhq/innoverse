import HomeAdditionalText from "@/components/HomeAdditionalText";
import HomeEvents from "@/components/HomeEvents";
import HomeExpoSection from "@/components/HomeExpoSection";
import HomeHero from "@/components/HomeHero";
import HomeHeroSection from "@/components/HomeHeroSection";
import HomeInfoSection from "@/components/HomeInfoSection";
import HomeOfferings from "@/components/HomeOfferings";
import HomeSpeakers from "@/components/HomeSpeakers";
import HomeSpeakSection from "@/components/HomeSpeakSection";
import HomeSupporters from "@/components/HomeSupporters";
import HomeTimeVenue from "@/components/HomeTimeVenue";
import WhatAwaints from "@/components/WhatAwaints";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      {/* <HomeHero /> */}
      <HomeInfoSection />
      <WhatAwaints />
      <HomeExpoSection />
      <HomeSpeakSection />
      {/* <HomeTimeVenue /> */}
      <HomeOfferings />
      <HomeSpeakers />
      <HomeEvents />
      {/* <HomeAdditionalText /> */}
      <HomeSupporters />
    </>
  );
}
