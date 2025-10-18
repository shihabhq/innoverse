"use client";

import type React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Calculator,
  FlaskConical,
  Code,
  Brain,
  FileText,
  Presentation,
  Bot,
  Zap,
} from "lucide-react";

const competitions = [
  { name: "Math Maestro", slug: "math-maestro", icon: Calculator },
  { name: "Science Olympiad", slug: "science-olympiad", icon: FlaskConical },
  { name: "Programming Contest", slug: "programming-contest", icon: Code },
  { name: "Qwizard Mania", slug: "qwizard-mania", icon: Brain },
  {
    name: "Research Article Contest",
    slug: "research-article-contest",
    icon: FileText,
  },
  { name: "3-Minute Research", slug: "3-minute-research", icon: Presentation },
  { name: "RoboSoccer", slug: "robosoccer", icon: Bot },
  { name: "Line Follower Robot (LFR)", slug: "line-follower-robot", icon: Zap },
];

export default function CompetitionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#f6f6f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar - Hidden on mobile */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-[#79bf0d] p-4">
                <h2 className="text-white font-bold text-lg">Competitions</h2>
              </div>
              <nav className="p-2">
                {competitions.map((competition) => {
                  const Icon = competition.icon;
                  const isActive =
                    pathname === `/competitions/${competition.slug}`;

                  return (
                    <Link
                      key={competition.slug}
                      href={`/competitions/${competition.slug}`}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? "bg-[#e2ffb4] text-[#323232] font-semibold"
                          : "text-gray-700 hover:bg-[#e5ecd9]"
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm leading-tight">
                        {competition.name}
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
