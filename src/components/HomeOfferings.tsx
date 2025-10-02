import { HomeExperience } from "@/types/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import HomeExperienceCard from "./HomeExperienceCard";

const experiences: HomeExperience[] = [
  {
    title: "Hall Of Fame",
    description:
      "Put on the headset and dive into new worlds — immersive adventures await you.",
    imgSrc: "/home/experiences/hall-of-fame.svg",
    link: "/home/somewhere",
  },
  {
    title: "E-Sports Corner",
    description:
      "Feel the thrill of live gaming battles and test your skills in the arena.",
    imgSrc: "/home/experiences/e-sports.svg",
    link: "/home/somewhere-else",
  },
  {
    title: "Drone Training",
    description:
      "Look up as drones paint the sky with dazzling formations and light displays.",
    imgSrc: "/home/experiences/drone.svg",
    link: "/home/somewhere-else",
  },
  {
    title: "Robo Soccer",
    description:
      "Look up as drones paint the sky with dazzling formations and light displays.",
    imgSrc: "/home/experiences/robo-soccer.svg",
    link: "/home/somewhere-else",
  },
  {
    title: "Simulation zone",
    description:
      "Science comes alive with explosive experiments and jaw-dropping chemistry tricks.",
    imgSrc: "/home/experiences/simulation.svg",
    link: "/home/somewhere-else",
  },
  {
    title: "Tech Exibition zone",
    description:
      "Get up close with rockets and discover the future of space exploration.",
    imgSrc: "/home/experiences/exibition.svg",
    link: "/home/somewhere-else",
  },
  {
    title: "Maze Gallery",
    description: "Enter the maze, solve the puzzles, and find your way to go.",
    imgSrc: "/home/experiences/maze.svg",
    link: "/home/somewhere-else",
  },
  {
    title: "Gaming Arena",
    description:
      "Journey through the night sky and explore the wonders of the universe.",
    imgSrc: "/home/experiences/gaming.svg",
    link: "/home/somewhere-else",
  },
  {
    title: "Paint Zone",
    description:
      "Zoom into the unseen world — discover tiny lifeforms and hidden details all around us.",
    imgSrc: "/home/experiences/paint.svg",
    link: "/home/somewhere-else",
  },
  {
    title: "Wall Magazine",
    description:
      "Zoom into the unseen world — discover tiny lifeforms and hidden details all around us.",
    imgSrc: "/home/experiences/wall-magazine.svg",
    link: "/home/somewhere-else",
  },
];

const HomeOfferings = () => {
  return (
    <section className="pt-10 sm:pt-12 pb-16 sm:pb-20 bg-secondary-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug">
          Dive Into the{" "}
          <span className="text-secondary">Innoverse Experience</span>
        </h2>

        {/* Subheading */}
        <h4 className="font-medium text-center mt-4 sm:mt-6 max-w-4xl md:max-w-5xl lg:max-w-7xl mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
          Step into The Innoverse Experience—where interactive exhibits and live
          demonstrations spark{" "}
          <span className="text-secondary">curiosity and wonder</span>, blending
          education with entertainment.
        </h4>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 pt-12 sm:pt-20">
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
      </div>
    </section>
  );
};

export default HomeOfferings;
