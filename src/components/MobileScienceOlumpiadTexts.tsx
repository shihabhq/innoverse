import {
  CheckCircle,
  FlaskConical,
  Calendar,
  Award,
  Medal,
} from "lucide-react";
import React from "react";

const MobileScienceOlumpiadTexts = () => {
  return (
    <section
      id="science-olympiad"
      className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-[#79bf0d] rounded-lg flex items-center justify-center">
          <FlaskConical className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-[#323232]">Science Olympiad</h1>
      </div>

      <div className="prose prose-sm max-w-none space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-[#323232] mb-3">
            Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Science Olympiad is a written competition designed to test
            students&apos; understanding of core sciences and their ability to
            think analytically beyond classroom knowledge. It emphasizes
            problem-solving, reasoning, and conceptual clarity.
          </p>
        </div>

        {/* Registration & Prize Info */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-purple-900 mb-1">
                  Registration Deadline
                </h4>
                <p className="text-purple-800 text-lg font-bold">
                  November 8, 2025
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-amber-900 mb-2">
                  Prize Pool
                </h4>
                <p className="text-amber-800 font-bold text-lg mb-1">
                  Total: 30,000 BDT
                </p>
                <p className="text-amber-700 text-sm">Across 3 categories</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-5">
            <div className="flex items-start gap-3 mb-3">
              <Medal className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <h4 className="font-semibold text-green-900">
                Prizes Per Category
              </h4>
            </div>
            <div className="space-y-2 text-green-800 text-sm">
              <p>
                🥇 <strong>1st Prize:</strong> 5,000 BDT
              </p>
              <p>
                🥈 <strong>2nd Prize:</strong> 3,000 BDT
              </p>
              <p>
                🥉 <strong>3rd Prize:</strong> 1,000 BDT
              </p>
              <p>
                🏅 <strong>4th Prize:</strong> 500 BDT
              </p>
              <p>
                🏅 <strong>5th Prize:</strong> 500 BDT
              </p>
              <p className="mt-3 pt-3 border-t border-green-200">
                <strong>6th - 30th Position:</strong> Medal & Certificate
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#e5ecd9] rounded-lg p-5">
          <h3 className="text-lg font-semibold text-[#323232] mb-4">Format</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
              <span>
                <strong>Participation:</strong> Individual contest
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
              <span>
                <strong>Categories:</strong> Junior (6-8), Secondary (9-10),
                Senior (11-12)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
              <span>
                <strong>Rounds:</strong> Written Round
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-[#e2ffb4] rounded-lg p-5">
          <h3 className="text-lg font-semibold text-[#323232] mb-4">
            Competition Details
          </h3>
          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Total Questions:</strong> 8-12
            </p>
            <p>
              <strong>Subjects Covered:</strong> Physics, Chemistry, Biology
            </p>

            <div>
              <p className="font-semibold mb-2">Question Types:</p>
              <ul className="space-y-1 ml-4">
                <li>• Direct conceptual problems</li>
                <li>• Calculation-based problems</li>
                <li>• Open-ended analytical reasoning questions</li>
              </ul>
            </div>

            <p>
              <strong>Difficulty Balance:</strong> Questions vary in length and
              complexity; harder questions carry more marks
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-3">Grading System</h4>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li>• Each question has a fixed mark distribution</li>
            <li>• Greater weight is given to problem-solving and reasoning</li>
            <li>
              • Partial credit is awarded where logical steps are correct, even
              if the final answer is incomplete
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MobileScienceOlumpiadTexts;
