import { HomeEvent } from "@/types/types";
import React from "react";
import HomeEventsCard from "./HomeEventsCard";
import Link from "next/link";

const soloEvents: HomeEvent[] = [
  {
    title: "Math Maestro",
    description: "Collaborate to answer challenging science questions.",
    src: "/home/events/math.svg",
  },
  {
    title: "Science Olympiad",
    description: "Collaborate to answer challenging science questions.",
    src: "/home/events/science.svg",
  },
  {
    title: "Qwizard Mania",
    description: "Collaborate to answer challenging science questions.",
    src: "/home/events/mania.svg",
  },
  {
    title: "Research Article",
    description: "Collaborate to answer challenging science questions.",
    src: "/home/events/research.svg",
  },
  {
    title: "3-Minute Research",
    description: "Collaborate to answer challenging science questions.",
    src: "/home/events/research.svg",
  },
  {
    title: "Robo Soccer",
    description: "Collaborate to answer challenging science questions.",
    src: "/home/events/robo-soccer.svg",
  },
  {
    title: "LFR",
    description: "Collaborate to answer challenging science questions.",
    src: "/home/events/lfr.svg",
  },
  {
    title: "Programming  Contest",
    description: "Collaborate to answer challenging science questions.",
    src: "/home/events/coding.svg",
  },
];

const teamEvents: HomeEvent[] = [
  {
    title: "Robo Soccer",
    description: "Collaborate to answer challenging science questions.",
    src: "/home/events/robo-soccer.svg",
  },
  {
    title: "Project Showcasing",
    description: "Collaborate to answer challenging science questions.",
    src: "/home/events/project.svg",
  },
  {
    title: "Science Quiz",
    description: "Collaborate to answer challenging science questions.",
    src: "/home/events/quiz.svg",
  },
];

const HomeEvents = () => {
  return (
    <section className="bg-primary-background py-12 sm:py-30 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl lg:text-7xl font-extrabold leading-snug">
          Discover, <span className="text-primary">Create</span> and Compete!
        </h2>

        {/* Subheading */}
        <h4 className="font-medium text-center mt-4 sm:mt-6 max-w-md sm:max-w-3xl md:max-w-4xl mx-auto text-base px-4 sm:text-xl leading-relaxed">
          Innoverse offers a diverse range of competitions designed to{" "}
          <span className="font-extrabold text-secondary">
            challenge and inspire
          </span>
          . Whether you prefer to work{" "}
          <span className="font-extrabold text-secondary">
            solo or as part of a team
          </span>
          , there&apos;s an event tailored to your talents.
        </h4>

        {/* Solo Events */}
        <div className="mt-12">
          <h2 className="text-center font-extrabold text-3xl sm:text-5xl lg:text-6xl mb-6 sm:mb-8">
            <span className="text-secondary">Solo</span> Events:
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {soloEvents.map((event) => (
            <HomeEventsCard key={event.title} {...event} />
          ))}
        </div>

        {/* Team Events */}
        <div className="mt-16 sm:mt-24">
          <h2 className="text-center font-extrabold text-3xl sm:text-5xl lg:text-6xl mb-6 sm:mb-8">
            <span className="text-secondary">Team</span> Events:
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:items-center lg:justify-center lg:gap-12 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {teamEvents.map((event) => (
            <HomeEventsCard key={event.title} {...event} />
          ))}
        </div>
      </div>
      <div className="pt-16 flex items-center justify-center">
        <Link
          href={"/dynamic-experiences"}
          className="py-4 px-8 bg-primary text-white rounded-sm transition-all hover:-translate-y-1 font-extrabold text-xl  uppercase"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default HomeEvents;
