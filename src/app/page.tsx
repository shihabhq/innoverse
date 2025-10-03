import HomeAdditionalText from "@/components/HomeAdditionalText";
import HomeEvents from "@/components/HomeEvents";
import HomeHero from "@/components/HomeHero";
import HomeOfferings from "@/components/HomeOfferings";
import HomeSpeakers from "@/components/HomeSpeakers";
import HomeSupporters from "@/components/HomeSupporters";
import HomeTimeVenue from "@/components/HomeTimeVenue";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeTimeVenue />
      <HomeOfferings />
      <HomeSpeakers />
      <HomeEvents />
      <HomeAdditionalText />
      <HomeSupporters />
    </>
  );
}
