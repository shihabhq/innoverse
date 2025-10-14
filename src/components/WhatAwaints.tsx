import { Award, BookOpen, Lightbulb, Mic, Rocket, Trophy } from "lucide-react";
import React from "react";

const features = [
  {
    icon: Rocket,
    title: "Innovation Expo",
    description:
      "Explore groundbreaking projects and technologies shaping Bangladesh's future",
  },
  {
    icon: Lightbulb,
    title: "InnoVentures' Vault",
    description:
      "Premier platform for entrepreneurs to pitch ideas to investors and mentors",
  },
  {
    icon: Award,
    title: "Shahid Tanvin Innovation Award",
    description:
      "Celebrating young visionaries with creativity and societal commitment",
  },
  {
    icon: BookOpen,
    title: "Cybersecurity Seminar",
    description:
      "Engage with experts on Bangladesh's digital future and security",
  },
  {
    icon: Mic,
    title: "SketchTalk",
    description:
      "Powerful story-driven sessions from changemakers and innovators",
  },
  {
    icon: Trophy,
    title: "Core Competitions",
    description: "Compete in exciting challenges and showcase your skills",
  },
];

const WhatAwaints = () => {
  return (
    <section
      className="py-16 px-4 md:py-24"
      style={{ backgroundColor: "var(--color-dim-background)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-7xl font-bold inline-flex items-center gap-2 mb-4"
            style={{ color: "var(--color-dark-accent)" }}
          >
            What Awaits You at Innoverse 2025
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-md shadow-sm transition-all duration-300 transform hover:-translate-y-1"
                style={{ backgroundColor: "white" }}
              >
                <div
                  className="mb-6 p-4 rounded-xl inline-block"
                  style={{
                    backgroundColor: "var(--color-secondary-background)",
                  }}
                >
                  <Icon
                    className="w-10 h-10"
                    style={{ color: "var(--color-primary)" }}
                  />
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: "var(--color-dark-accent)" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: "var(--color-dark-accent)" }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatAwaints;
