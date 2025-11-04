import { AlertCircle, Calculator, CheckCircle, Clock, Target, Trophy } from 'lucide-react';
import React from 'react'

const MobileMathMaestroesTexts = () => {
  return (
    <section
      id="math-maestro"
      className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-[#79bf0d] rounded-lg flex items-center justify-center">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-[#323232]">Math Maestro</h1>
      </div>

      <div className="prose prose-sm max-w-none space-y-6">
        {/* Overview */}
        <div>
          <h2 className="text-xl font-semibold text-[#323232] mb-3">
            Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Math Maestro is a two-round competition designed to test
            problem-solving, analytical thinking, and teamwork. The event
            combines the rigor of a Math Olympiad with the excitement of a Math
            Auction.
          </p>
        </div>

        {/* Competition Details */}
        <div className="bg-[#e5ecd9] rounded-lg p-5">
          <h3 className="text-lg font-semibold text-[#323232] mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-[#79bf0d]" />
            Competition Details
          </h3>

          <div className="space-y-4">
            {/* Round 1 */}
            <div>
              <h4 className="font-semibold text-[#323232] mb-2">
                Round 1: Math Olympiad
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Format:</strong> Math Olympiad
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Participation:</strong> Individual
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Categories:</strong> Junior (Class 6–8), Secondary
                    (Class 9–10), Senior (Class 11–12)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Qualification:</strong> Top 6 contestants from each
                    category qualify for Round 2 (18 finalists total)
                  </span>
                </li>
              </ul>
            </div>

            {/* Team Formation */}
            <div>
              <h4 className="font-semibold text-[#323232] mb-2">
                Team Formation
              </h4>
              <p className="text-gray-700">
                Teams are formed by the organizers after Round 1. Finalists are
                grouped into six balanced teams, each consisting of winners from
                each category.
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 ml-4">
                <li>• 1 Junior (6–8)</li>
                <li>• 1 Secondary (9–10)</li>
                <li>• 1 Senior (11–12)</li>
              </ul>
              <p className="text-gray-700 mt-2">
                Teams are announced on Day 1 after evaluation. These newly
                formed teams proceed to Round 2.
              </p>
            </div>
          </div>
        </div>

        {/* Round 2 */}
        <div className="bg-[#e2ffb4] rounded-lg p-5">
          <h3 className="text-lg font-semibold text-[#323232] mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-[#79bf0d]" />
            Round 2: Math Auction
          </h3>

          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Format:</strong> Problem-solving with strategic bidding
            </p>
            <p>
              <strong>Teams:</strong> 6 teams of 3 participants each
            </p>

            {/* Problems */}
            <div>
              <p className="font-semibold mb-2">Problems:</p>
              <ul className="space-y-1 ml-4">
                <li>• 24 problems prepared (8 Easy, 8 Medium, 8 Hard)</li>
                <li>
                  • Each team must collect 6 problems (2 Easy, 2 Medium, 2 Hard)
                </li>
                <li>
                  • Distribution rule prevents skewed choices (e.g., all Easy)
                </li>
              </ul>
            </div>

            {/* Bidding Rules */}
            <div>
              <p className="font-semibold mb-2">Bidding Rules:</p>
              <ul className="space-y-1 ml-4">
                <li>
                  • Easy = 10 points, Medium = 20 points, Hard = 30 points
                </li>
                <li>• Each team starts with 400 points (currency = points)</li>
                <li>• Bids must increase gradually (by 10–20 points)</li>
                <li>
                  • Teams cannot overspend; unused currency cannot be carried
                  forward
                </li>
              </ul>
            </div>

            {/* Process */}
            <div>
              <p className="font-semibold mb-2">Process:</p>
              <ul className="space-y-1 ml-4">
                <li>• Each problem is shown for 30 seconds before bidding</li>
                <li>• Maximum 2 minutes allowed for bidding</li>
                <li>
                  • The winning team receives the problem in a sealed envelope,
                  opened only when the contest begins
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Special Cases & Solutions */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-yellow-900 mb-2">
                Special Cases & Solutions
              </h4>
              <ul className="space-y-2 text-yellow-800 text-sm">
                <li>
                  1. If a team spends all currency early:
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>
                      • Teams unable to collect 6 problems will be assigned
                      remaining ones by moderators.
                    </li>
                    <li>
                      • A penalty percentage will be applied during evaluation.
                    </li>
                  </ul>
                </li>
                <li>
                  2. If bidding ends with leftover teams without enough
                  problems:
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>
                      • Unclaimed problems will be reintroduced for a special
                      bidding session.
                    </li>
                    <li>• Ensures all teams secure a balanced distribution.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Time Management */}
        <div className="bg-[#dff6e0] border border-green-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-green-900 mb-2">
                Time Management
              </h4>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• Viewing each problem: 30 seconds</li>
                <li>• Maximum bidding per problem: 2 minutes</li>
                <li>
                  • Teams solve their collected problems only after the official
                  contest begins
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileMathMaestroesTexts
