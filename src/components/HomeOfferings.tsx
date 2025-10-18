import { HomeExperience } from "@/types/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import HomeExperienceCard from "./HomeExperienceCard";

const experiences: HomeExperience[] = [
  {
    title: "Maze Gallery",
    description:
      "Step into a living vision of tomorrow. The Maze Gallery invites you to walk through the Bangladesh of 2077...",
    imgSrc: "/home/experiences/maze.svg",
    link: "/dynamic-experiences/maze-gallery",
  },
  {
    title: "Planetarium",
    description:
      "Enter the dome and look up — your journey begins among the stars...",
    imgSrc: "/home/experiences/planet.svg",
    link: "/dynamic-experiences/planetarium",
  },
  {
    title: "VR Zone",
    description:
      "Put on your headset and leave the ordinary behind. From walking on Mars to diving deep beneath the ocean...",
    imgSrc: "/home/experiences/simulation.svg",
    link: "/dynamic-experiences/vr-section",
  },
  {
    title: "Drone Flying",
    description:
      "Ready to fly? In the Drone Zone, you'll learn to pilot drones in a safe, netted arena...",
    imgSrc: "/home/experiences/drone.svg",
    link: "/dynamic-experiences/drone-flying-zone",
  },
  {
    title: "Paint Zone",
    description:
      "Unleash your creativity on a massive digital canvas. The Paint Zone turns art into interaction..",
    imgSrc: "/home/experiences/paint.svg",
    link: "/dynamic-experiences/paint-zone",
  },
  {
    title: "Live Gaming Zone",
    description:
      "Journey through the night sky and explore the wonders of the universe.",
    imgSrc: "/home/experiences/gaming.svg",
    link: "/dynamic-experiences/live-gaming-zone",
  },
  {
    title: "The Battle of Alliance",
    description:
      "An exclusive showdown between partnered clubs — where teamwork, logic, and competitive spirit collide.",
    imgSrc: "/home/experiences/tic-tac.svg",
    link: "/dynamic-experiences/battle-of-alliance",
  },
  {
    title: "Boxing Simulation Zone",
    description: "It's you versus the machine — can you beat the data?",
    imgSrc: "/home/experiences/boxing.svg",
    link: "/dynamic-experiences/boxing-simulation-zone",
  },
];

const HomeOfferings = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-snug">
          Dive Into the{" "}
          <span className="text-secondary">Innoverse Dynamic Experiences</span>
        </h2>

        {/* Subheading */}
        <h4 className="font-medium text-center mt-4 sm:mt-6 max-w-4xl md:max-w-5xl mx-auto text-base sm:text-xl  leading-relaxed">
          Step into The Innoverse Experience—where interactive exhibits and live
          demonstrations spark{" "}
          <span className="text-secondary">curiosity and wonder</span>, blending
          education with entertainment.
        </h4>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 2xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-12 sm:pt-20">
          {experiences.map((exp) => {
            return (
              <HomeExperienceCard
                key={exp.title}
                title={exp.title}
                description={exp.description}
                imgSrc={exp.imgSrc}
                link={exp.link}
              />
            );
          })}
        </div>
        <div className="pt-16 pb-6 flex items-center justify-center">
          <Link
            href={"/dynamic-experiences"}
            className="py-4 px-8 bg-white rounded-sm transition-all hover:-translate-y-1 text-secondary font-extrabold text-xl shadow-sm uppercase"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeOfferings;
