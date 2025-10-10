import HomeAdditionalText from "@/components/HomeAdditionalText";
import HomeEvents from "@/components/HomeEvents";
import HomeHero from "@/components/HomeHero";
import HomeHeroSection from "@/components/HomeHeroSection";
import HomeInfoSection from "@/components/HomeInfoSection";
import HomeOfferings from "@/components/HomeOfferings";
import HomeSpeakers from "@/components/HomeSpeakers";
import HomeSupporters from "@/components/HomeSupporters";
import HomeTimeVenue from "@/components/HomeTimeVenue";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      {/* <HomeHero /> */}
      <HomeInfoSection />
      {/* <HomeTimeVenue /> */}
      <HomeOfferings />
      <HomeSpeakers />
      <HomeEvents />
      {/* <HomeAdditionalText /> */}
      <HomeSupporters />
    </>
  );
}
