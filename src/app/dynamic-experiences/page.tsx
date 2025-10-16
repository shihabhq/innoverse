"use client";

import type React from "react";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { experiences } from "./data";
import {
  Haze as Maze,
  Globe,
  Headphones,
  Bone as Drone,
  Palette,
  Gamepad2,
  Trophy,
  Zap,
  Target,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "maze-gallery": Maze,
  planetarium: Globe,
  "vr-section": Headphones,
  "drone-flying-zone": Drone,
  "paint-zone": Palette,
  "live-gaming-zone": Gamepad2,
  "battle-of-alliance": Trophy,
  "boxing-simulation-zone": Zap,
  "shooting-archery-arena": Target,
};

export default function DynamicExperiencesPage() {
  const router = useRouter();

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 1024) {
        router.push("/dynamic-experiences/maze-gallery");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [router]);

  return (
    <div className="space-y-8 lg:hidden">
      {/* Mobile: Show all experiences in sequence */}
      {experiences.map((experience) => {
        const Icon = iconMap[experience.slug];

        return (
          <section
            key={experience.slug}
            id={experience.slug}
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
          >
            {/* Icon and Title */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                {Icon && <Icon className="w-6 h-6 text-white" />}
              </div>
              <h1 className="text-2xl font-bold text-dark-accent">
                {experience.title}
              </h1>
            </div>

            {/* Image */}
            <div className="relative mb-6 rounded-lg overflow-hidden h-64 bg-dim-background">
              <img
                src={experience.image || "/placeholder.svg"}
                alt={experience.title}
                className="w-full h-full object-cover"
              />
              {experience.isPartnerOnly && (
                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Partner Only
                </div>
              )}
            </div>

            {/* Content */}
            <div className="space-y-4">
              <p className="text-secondary font-semibold text-lg">
                {experience.tagline}
              </p>
              <p className="text-dark-accent leading-relaxed whitespace-pre-line">
                {experience.description}
              </p>
            </div>
          </section>
        );
      })}
    </div>
  );
}
