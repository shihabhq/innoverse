"use client";

import type React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

const experiences = [
  { name: "Maze Gallery", slug: "maze-gallery", icon: Maze },
  { name: "Planetarium", slug: "planetarium", icon: Globe },
  { name: "VR Section", slug: "vr-section", icon: Headphones },
  { name: "Drone Flying Zone", slug: "drone-flying-zone", icon: Drone },
  { name: "Paint Zone", slug: "paint-zone", icon: Palette },
  { name: "Live Gaming Zone", slug: "live-gaming-zone", icon: Gamepad2 },
  { name: "The Battle of Alliance", slug: "battle-of-alliance", icon: Trophy },
  { name: "Boxing Simulation Zone", slug: "boxing-simulation-zone", icon: Zap },
  {
    name: "Shooting and Archery Arena",
    slug: "shooting-archery-arena",
    icon: Target,
  },
];

export default function DynamicExperiencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-primary-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar - Hidden on mobile */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-primary p-4">
                <h2 className="text-white font-bold text-lg">Experiences</h2>
              </div>
              <nav className="p-2">
                {experiences.map((experience) => {
                  const Icon = experience.icon;
                  const isActive =
                    pathname === `/dynamic-experiences/${experience.slug}`;

                  return (
                    <Link
                      key={experience.slug}
                      href={`/dynamic-experiences/${experience.slug}`}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? "bg-secondary-background text-dark-accent font-semibold"
                          : "text-gray-700 hover:bg-dim-background"
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm leading-tight">
                        {experience.name}
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">{children}</main>
        </div>
      </div>
    </div>
  );
}
