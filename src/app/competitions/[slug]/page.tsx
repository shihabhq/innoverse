import { notFound } from "next/navigation";
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
import MathMaestroTexts from "@/components/MathMaestroTexts";
import ScienceOlympiadTexts from "@/components/ScienceOlympiadTexts";
import ProgrammingContestTexts from "@/components/ProgrammingContestTexts";
import QwizardManiaTexts from "@/components/QwizardManiaTexts";
import ThreeMinuteThesisTexts from "@/components/ThreeMinuteThesisTexts";
import RoboSoccerTexts from "@/components/RoboSoccerTexts";
import ResearchArticleTexts from "@/components/ResearchArticleTexts";
import LFRTexts from "@/components/LFRTexts";

const competitions = {
  "math-maestro": {
    name: "Math Maestro",
    icon: Calculator,
    content: <MathMaestroTexts />,
  },
  "science-olympiad": {
    name: "Science Olympiad",
    icon: FlaskConical,
    content: <ScienceOlympiadTexts />,
  },
  "programming-contest": {
    name: "Competitive Programming Contest",
    icon: Code,
    content: <ProgrammingContestTexts />,
  },
  "qwizard-mania": {
    name: "Qwizard Mania",
    icon: Brain,
    content: <QwizardManiaTexts />,
  },
  "research-article-contest": {
    name: "Research Article Contest",
    icon: FileText,
    content: <ResearchArticleTexts />,
  },
  "3-minute-thesis-presentation": {
    name: "3-Minute Thesis Presentation",
    icon: Presentation,
    content: <ThreeMinuteThesisTexts />,
  },
  robosoccer: {
    name: "RoboSoccer",
    icon: Bot,
    content: <RoboSoccerTexts />,
  },
  "line-follower-robot": {
    name: "Line Follower Robot (LFR)",
    icon: Zap,
    content: <LFRTexts />,
  },
};

export default async function CompetitionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const competition = competitions[slug as keyof typeof competitions];

  if (!competition) {
    notFound();
  }

  const Icon = competition.icon;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-[#79bf0d] rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-[#323232]">
          {competition.name}
        </h1>
      </div>

      <div className="prose prose-sm max-w-none space-y-6">
        {competition.content}
      </div>
    </div>
  );
}
