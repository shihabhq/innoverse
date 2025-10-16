import { notFound } from "next/navigation";
import { experiences } from "../data";
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

const iconMap = {
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

export default function ExperiencePage({
  params,
}: {
  params: { slug: string };
}) {
  const experience = experiences.find((exp) => exp.slug === params.slug);

  if (!experience) {
    notFound();
  }

  const Icon = iconMap[experience.slug as keyof typeof iconMap];

  return (
    <div className="w-full">
      {/* Image Section */}
      <div className="relative h-96 w-full bg-dim-background overflow-hidden">
        <img
          src={experience.image || "/placeholder.svg"}
          alt={experience.title}
          className="w-full h-full object-cover"
        />
        {experience.isPartnerOnly && (
          <div className="absolute top-6 right-6 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
            Partner Only
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-8 md:p-12 max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            {Icon && <Icon className="w-6 h-6 text-white" />}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-dark-accent text-balance">
            {experience.title}
          </h1>
        </div>

        <p className="text-xl text-secondary font-semibold mb-6">
          {experience.tagline}
        </p>
        <div className="prose prose-lg max-w-none">
          <p className="text-dark-accent leading-relaxed text-lg whitespace-pre-line">
            {experience.description}
          </p>
        </div>
      </div>
    </div>
  );
}
