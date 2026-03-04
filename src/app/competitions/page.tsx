"use client";

import {
  Calculator,
  FlaskConical,
  Code,
  Brain,
  FileText,
  Presentation,
  Bot,
  Zap,
  Users,
  Trophy,
  Clock,
  AlertCircle,
  CheckCircle,
  Target,
} from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MobileMathMaestroesTexts from "@/components/MobileMathMaestroesTexts";
import MobileScienceOlumpiadTexts from "@/components/MobileScienceOlumpiadTexts";
import MobileProgrammingContestsTexts from "@/components/MobileProgrammingContestsTexts";
import MobileQwizardManiaTexts from "@/components/MobileQwizardManiaTexts";
import MobileThreeMinuteThesis from "@/components/MobileThreeMinuteThesis";
import MobileResearchArticleContestTexts from "@/components/MobileResearchArticleContestTexts";
import MobileRoboSoccerTexts from "@/components/MobileRoboSoccerTexts";
import MobileLFRTexts from "@/components/MobileLFRTexts";

export default function CompetitionsPage() {
  const router = useRouter();

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 1024) {
        router.push("/competitions/math-maestro");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [router]);

  return (
    <div className="space-y-12 lg:hidden">
      {/* Mobile: Show all competitions in sequence */}

      {/* Math Maestro */}
      <MobileMathMaestroesTexts />

      {/* Science Olympiad */}
      <MobileScienceOlumpiadTexts />

      {/* Competitive Programming Contest */}
      <MobileProgrammingContestsTexts />

      {/* Qwizard Mania */}
      <MobileQwizardManiaTexts />

      {/* Research Article Contest */}
      <MobileResearchArticleContestTexts />

      {/* 3-Minute Thesis */}
      <MobileThreeMinuteThesis />

      {/* RoboSoccer */}
      <MobileRoboSoccerTexts />

      {/* Line Follower Robot */}
      <MobileLFRTexts />

      {/* Desktop redirect message */}
      <div className="hidden lg:flex items-center justify-center min-h-[400px] bg-white rounded-lg shadow-sm p-8 border border-gray-200">
        <div className="text-center">
          <div className="w-16 h-16 bg-[#79bf0d] rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-[#323232] mb-2">
            Select a Competition
          </h2>
          <p className="text-gray-600">
            Choose a competition from the sidebar to view its details
          </p>
        </div>
      </div>
    </div>
  );
}
