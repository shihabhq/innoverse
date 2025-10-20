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
              combines the rigor of a Math Olympiad with the excitement of a
              Math Auction.
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
                      <strong>Qualification:</strong> Top 6 contestants from
                      each category qualify for Round 2 (18 finalists total)
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
                  Teams are formed by the organizers after Round 1. Finalists
                  are grouped into six balanced teams, each consisting of
                  winners from each category.
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
                    • Each team must collect 6 problems (2 Easy, 2 Medium, 2
                    Hard)
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
                  <li>
                    • Each team starts with 400 points (currency = points)
                  </li>
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
                    • The winning team receives the problem in a sealed
                    envelope, opened only when the contest begins
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
                        • A penalty percentage will be applied during
                        evaluation.
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
                      <li>
                        • Ensures all teams secure a balanced distribution.
                      </li>
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
                    • Teams solve their collected problems only after the
                    official contest begins
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Science Olympiad */}
      <section
        id="science-olympiad"
        className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-[#79bf0d] rounded-lg flex items-center justify-center">
            <FlaskConical className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-[#323232]">
            Science Olympiad
          </h1>
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

          <div className="bg-[#e5ecd9] rounded-lg p-5">
            <h3 className="text-lg font-semibold text-[#323232] mb-4">
              Format
            </h3>
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
                <strong>Difficulty Balance:</strong> Questions vary in length
                and complexity; harder questions carry more marks
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-3">Grading System</h4>
            <ul className="space-y-2 text-blue-800 text-sm">
              <li>• Each question has a fixed mark distribution</li>
              <li>
                • Greater weight is given to problem-solving and reasoning
              </li>
              <li>
                • Partial credit is awarded where logical steps are correct,
                even if the final answer is incomplete
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Competitive Programming Contest */}
      <section
        id="programming-contest"
        className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-[#79bf0d] rounded-lg flex items-center justify-center">
            <Code className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-[#323232]">
            Competitive Programming Contest
          </h1>
        </div>

        <div className="prose prose-sm max-w-none space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-[#323232] mb-3">
              Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Competitive Programming Contest is one of the flagship events
              of Innoverse, designed to showcase Bangladesh&apos;s brightest
              young problem solvers. Structured in competitive programming (CP)
              style and aligned with international standards, this contest aims
              to nurture the next generation of coders, preparing them for
              national and international platforms such as BdOI and IOI.
            </p>
          </div>

          <div className="bg-[#e5ecd9] rounded-lg p-5">
            <h3 className="text-lg font-semibold text-[#323232] mb-4">
              Format
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Style:</strong> Competitive Programming Contest (CP)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Participation:</strong> Individual contest
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Category:</strong> High School (Classes 6-12)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Rounds:</strong> Preliminary Round (Online) → Final
                  Round (Onsite)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Preliminary Rount Starts:</strong> November 1, 2025
                  Time: 7:00 PM – 10:00 PM
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-[#e2ffb4] rounded-lg p-5">
            <h3 className="text-lg font-semibold text-[#323232] mb-4">
              Contest Progression
            </h3>
            <ol className="space-y-2 text-gray-700 list-decimal list-inside">
              <li>Contestants log in to the selected online judge platform</li>
              <li>Contest dashboard remains locked until official start</li>
              <li>
                Problem set is released simultaneously for all participants
              </li>
              <li>Contestants solve problems within 3 hours</li>
              <li>
                Correct submissions earn full points; wrong submissions incur
                penalties
              </li>
              <li>Leaderboard updates automatically throughout the contest</li>
            </ol>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-900 mb-3">
                Contest Platform
              </h4>
              {/* <ul className="space-y-2 text-purple-800 text-sm">
                <li>
                  <strong>Toph.co:</strong> Popular Bangladeshi platform
                </li>
                <li>
                  <strong>Vjudge.net:</strong> International platform
                </li>
              </ul> */}
              <h3 className="font-semibold text-base lg:text-xl text-red-500 text-center">
                To Be Anounced Soon
              </h3>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-3">
                Contest Structure
              </h4>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>
                  <strong>Problems:</strong> 6 (easy to hard)
                </li>
                <li>
                  <strong>Duration:</strong> 3 hours
                </li>
                <li>
                  <strong>Scoring:</strong> Full points for correct solution, No
                  subtasks and Wrong submission may lead to a penalty decided by
                  online judge
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">
                  Problem Setting & Technical Support
                </h4>
                <p className="text-blue-800 text-sm">
                  <strong>Problem Setters:</strong> IOI Medalists, BdOI
                  Nationalists, BdOI Campers
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Qwizard Mania */}
      <section
        id="qwizard-mania"
        className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-[#79bf0d] rounded-lg flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-[#323232]">Qwizard Mania</h1>
        </div>

        <div className="prose prose-sm max-w-none space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-[#323232] mb-3">
              Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Qwizard Mania is a dynamic, team-based contest designed to test
              knowledge beyond textbooks. Questions span general science, the
              history of discoveries, Nobel Prize trivia etc, encouraging both
              breadth and depth of understanding.
            </p>
          </div>

          <div className="bg-[#e5ecd9] rounded-lg p-5">
            <h3 className="text-lg font-semibold text-[#323232] mb-4">
              Format
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Participation:</strong> Team Based
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Categories:</strong> Secondary(9-10), Higher Secondary
                  (11-12)
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-[#e2ffb4] rounded-lg p-5">
            <h3 className="text-lg font-semibold text-[#323232] mb-4">
              Competition Details
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>Teams must consist of 3 members</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>
                  Qwizard Mania will be conducted in 2 rounds: Written Round and
                  Buzzer Round
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>
                  Each round will have elimination stages leading to the final
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-red-900 mb-2">
                  Important Rule
                </h4>
                <p className="text-red-800 text-sm">
                  Use of Mobile Phone or External Help is strictly prohibited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Article Contest */}
      <section
        id="research-article-contest"
        className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-[#79bf0d] rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-[#323232]">
            Research Article Contest
          </h1>
        </div>

        <div className="prose prose-sm max-w-none space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-[#323232] mb-3">
              Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Research Article Contest encourages school and college
              students to explore scientific thinking by writing research-style
              articles on STEM-related topics. It fosters originality,
              creativity, and academic writing skills among young learners.
            </p>
          </div>

          <div className="bg-[#e5ecd9] rounded-lg p-5">
            <h3 className="text-lg font-semibold text-[#323232] mb-4">
              Format
            </h3>
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
                  <strong>Eligibility:</strong> Class 8-12
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Submission Type:</strong> Online (PDF format only)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Submission Deadline:</strong> November 4, 2025
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-[#e2ffb4] rounded-lg p-5">
            <h3 className="text-lg font-semibold text-[#323232] mb-4">
              Submission Guidelines
            </h3>

            <div className="space-y-4 text-gray-700 text-sm">
              <ol className="list-decimal list-inside space-y-3">
                <li>
                  Participants submit their{" "}
                  <span className="underline">article</span> online within the
                  deadline.
                </li>

                <li>
                  Articles should follow the required structure:
                  <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                    <li>Title & Author Information</li>
                    <li>Abstract (short summary)</li>
                    <li>Background / Problem Statement</li>
                    <li>Approach / Methodology</li>
                    <li>Key Findings, Insights, or Proposed Ideas</li>
                    <li>Limitations / Challenges</li>
                    <li>Future Goals or Aspirations</li>
                    <li>Sources / References (optional but recommended)</li>
                  </ul>
                  <p className="italic mt-3 text-[13px]">
                    The format{" "}
                    <span className="font-semibold text-red-500">
                      is not needed
                    </span>{" "}
                    to be followed rigorously. However, participants are
                    encouraged to cover all these points{" "}
                    <span className="underline font-semibold">
                      through their whole Article
                    </span>{" "}
                    for extra points.
                  </p>
                </li>

                <li>
                  <span className="font-semibold">Page Limit:</span> 4–6 Pages
                  including a Cover Page containing{" "}
                  <span className="font-medium">
                    Participants’ Name, Institution, Class, Mail ID, Research
                    Article Title, Date of Submission.
                  </span>{" "}
                  Submission exceeding the limit{" "}
                  <span className="text-red-500 font-medium">
                    may be disqualified.
                  </span>
                </li>

                <li>
                  <span className="font-semibold">Font Details:</span> Times New
                  Roman, Font Size: 12pt (Heading and Subheadings can be
                  adjusted according to it)
                </li>

                <li>
                  Participants can add necessary images with proper reference or
                  source, but should not exceed the suggested page limit.
                </li>
                <li>
                  A screening panel evaluates and shortlists the best
                  submissions for final judging.
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-red-900 mb-2">
                  Important Rules
                </h4>
                <ul className="space-y-2 text-red-800 text-sm">
                  <li>
                    • Articles must be the participant&apos;s original work
                  </li>
                  <li>
                    • Articles generated using AI or LLMs will be disqualified
                  </li>
                  <li>• Plagiarism will result in penalties</li>
                  <li>
                    • Submissions must reflect the capability of school/college
                    students. Guidance from a teacher or a senior student is
                    permitted, but the core work must be the student&apos;s
                    own.Participants need to submit the details (Name, Contact
                    Details, Institution, Relation with the student) of the
                    mentor they have taken help from in the cover page.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Minute Thesis */}
      <section
        id="3-minute-research"
        className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-[#79bf0d] rounded-lg flex items-center justify-center">
            <Presentation className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-[#323232]">
            3-Minute Thesis Presentation
          </h1>
        </div>

        <div className="prose prose-sm max-w-none space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-[#323232] mb-3">
              Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The 3-Minute Thesis Contest challenges undergraduate students to
              present their thesis, research project, or paper in just three
              minutes. The aim is to communicate complex ideas clearly and
              effectively to a non-specialist audience.
            </p>
          </div>

          <div className="bg-[#e5ecd9] rounded-lg p-5">
            <h3 className="text-lg font-semibold text-[#323232] mb-4">
              Format
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Eligibility:</strong> Individual contest
                  (Undergraduate level)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Presentation Length:</strong> 3 minutes maximum
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Content:</strong> Must be based on participant&apos;s
                  own research, thesis, or academic project
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Submission Deadline:</strong> November 2, 2025
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-[#e2ffb4] rounded-lg p-5">
            <h3 className="text-lg font-semibold text-[#323232] mb-4">
              Contest Progression
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#323232] mb-2">
                  Round 1: Online Submission
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Participants submit research work in PDF format</li>
                  <li>• Screening panel shortlists finalists for live round</li>
                  <li>
                    • Must include: Background, Methodology, Findings,
                    Significance
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#323232] mb-2">
                  Round 2: Live Presentation
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>
                    • Finalists deliver 3-minute presentation using slides (PDF
                    preferred)
                  </li>
                  <li>• Warning bell at 2:30 minutes</li>
                  <li>• Automatic cutoff at 3:00 minutes</li>
                  <li>• 1 minute Q&A session after each presentation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-red-900 mb-2">Rules</h4>
                <ul className="space-y-2 text-red-800 text-sm">
                  <li>• Research must be participant&apos;s original work</li>
                  <li>• Plagiarism = immediate disqualification</li>
                  <li>
                    • Presentations exceeding 3 minutes will be disqualified
                  </li>
                  <li>• No animations, props, or excessive text allowed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RoboSoccer */}
      <section
        id="robosoccer"
        className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-[#79bf0d] rounded-lg flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-[#323232]">RoboSoccer</h1>
        </div>

        <div className="prose prose-sm max-w-none space-y-6">
          {/* Overview */}
          <div>
            <h2 className="text-xl font-semibold text-[#323232] mb-3">
              Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Robosoccer is a competitive robotics event where students design,
              build, and program autonomous or manually controlled robots
              capable of playing soccer. The event blends mechanical design,
              electronics, and control strategy in a dynamic, tournament-style
              environment, challenging teams to engineer precision, speed, and
              teamwork.
            </p>
          </div>

          {/* Eligibility */}
          <div className="bg-[#e5ecd9] rounded-lg p-5">
            <h3 className="text-lg font-semibold text-[#323232] mb-4">
              Eligibility
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>Open for all participants.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>
                  Teams must present valid institutional identification.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>Cross-institutional teams are allowed.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>A participant cannot be part of multiple teams.</span>
              </li>
            </ul>
          </div>

          {/* Team Composition */}
          <div className="bg-[#e5ecd9] rounded-lg p-5">
            <h3 className="text-lg font-semibold text-[#323232] mb-4">
              Team Composition
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <Users className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Team Size:</strong> Maximum 4 members per team.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>
                  Each team must own and operate its own soccer bot and
                  controller.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>
                  Sharing of bots or use of pre-built robots is strictly
                  prohibited.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>Only registered team members can operate the bot.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>
                  Bot controllers can be switched only during halftime.
                </span>
              </li>
            </ul>
          </div>

          {/* Robot Specifications */}
          <div className="bg-[#e2ffb4] rounded-lg p-5 font-roboto">
            <h3 className="text-lg font-semibold text-[#323232] mb-4">
              Robot Specifications
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700 font-roboto">
              <div className="flex justify-between border-b border-gray-300 pb-2">
                <span className="font-semibold">Dimensions:</span>
                <span>Maximum 30 cm × 30 cm × 20 cm</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-2">
                <span className="font-semibold">Weight:</span>
                <span>
                  Up to 3 kg (Each 100g above incurs a one-goal penalty)
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-2">
                <span className="font-semibold">Power Source:</span>
                <ul className="list-disc ml-4">
                  <li>On-board power supply only (maximum 24V)</li>
                  <li>No external or wired power allowed</li>
                </ul>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-2">
                <span className="font-semibold">Control:</span>
                <span>
                  Wireless only (RF, NRF, Bluetooth, Joystick, or mobile app)
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-2">
                <span className="font-semibold">Mechanics:</span>
                <ul className="list-disc ml-4">
                  <li>
                    Bots may push or kick the ball but cannot grab or enclose
                    it.
                  </li>
                  <li>
                    Servo-based kicking and rubber pads for ball bouncing are
                    prohibited.
                  </li>
                </ul>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-2">
                <span className="font-semibold">Bracket & Material:</span>
                <ul className="list-disc ml-4">
                  <li>
                    Bracket length ≤ 8 cm, width ≤ 20 cm; must remain open-type.
                  </li>
                  <li>
                    Permissible materials: SS, acrylic, wood, PVC, or cardboard.
                  </li>
                  <li>No sharp, damaging, or hazardous parts allowed.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Arena & Equipment */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-900 mb-3">
              Arena & Equipment
            </h4>
            <ul className="space-y-1 text-yellow-800 text-sm">
              <li>• Arena designed to mimic a mini soccer field.</li>
              <li>• Referees and volunteers will supervise each match.</li>
              <li>• Only event volunteers can touch bots during gameplay.</li>
            </ul>
          </div>

          {/* Match Format */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-3">Match Format</h4>
            <ul className="space-y-2 text-blue-800 text-sm">
              <li>• Matches are 1 vs 1.</li>
              <li>• Group Stage: Round Robin (5 teams per group).</li>
              <li>• Knockout Stage: Top 2 from each group qualify.</li>
              <li>• Each match: 2 rounds (1:15 each) with 30-sec halftime.</li>
            </ul>
          </div>

          {/* Scoring Rules */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 font-roboto">
            <h4 className="font-semibold text-green-900 mb-3">Scoring Rules</h4>
            <div className="space-y-2 text-green-800 text-sm">
              <div className="flex justify-between">
                <span>Each valid goal:</span>
                <span className="font-semibold">+3 points</span>
              </div>
              <div className="flex justify-between">
                <span>Each foul:</span>
                <span className="font-semibold">-1 point</span>
              </div>
              <div className="flex justify-between">
                <span>Arena damage:</span>
                <span className="font-semibold">-1 point</span>
              </div>
              <div className="flex justify-between">
                <span>Bot overweight penalty:</span>
                <span className="font-semibold">-1 goal per 100g</span>
              </div>
              <div className="flex justify-between">
                <span>Repair penalty:</span>
                <span className="font-semibold">-1 per 10 seconds used</span>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              <strong>Final Score:</strong> (Goals × 3) – (Repair Penalty + Foul
              Penalty)
            </p>
          </div>

          {/* Fouls & Penalties */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-red-900 mb-2">
                  Fouls & Penalties
                </h4>
                <ul className="space-y-1 text-red-800 text-sm">
                  <li>• Touching the bot during play.</li>
                  <li>
                    • Continuous entanglement (10 sec) → Reset to initial
                    positions.
                  </li>
                  <li>• Intentional obstruction or defensive stalling.</li>
                  <li>• Exceeding restart limits or causing arena damage.</li>
                  <li>• 3 fouls → Opponent gets a penalty kick.</li>
                  <li>
                    • Offensive behavior towards officials → Immediate
                    disqualification.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Penalty Shootout Rules */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-900 mb-3">
              Penalty Shootout Rules
            </h4>
            <ul className="space-y-1 text-purple-800 text-sm">
              <li>
                • If a bot is inactive for 30 sec → Opponent receives a penalty
                shot.
              </li>
              <li>• 15-second limit per penalty attempt (clock paused).</li>
              <li>• Each team gets 3 penalty attempts in tiebreakers.</li>
              <li>• Team with more goals wins.</li>
              <li>• If still tied → team with fewer fouls wins.</li>
            </ul>
          </div>

          {/* Inspection & Compliance */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-3">
              Inspection & Compliance
            </h4>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• All bots undergo inspection 1 hour before matches.</li>
              <li>• Size, weight, and voltage compliance required.</li>
              <li>• Battery safety and mechanical structure checked.</li>
              <li>• No grabbing or restricted mechanisms allowed.</li>
              <li>• Failure to comply results in disqualification.</li>
            </ul>
          </div>

          {/* Winner Declaration */}
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
            <h4 className="font-semibold text-teal-900 mb-3">
              Winner Declaration
            </h4>
            <ul className="space-y-1 text-teal-800 text-sm">
              <li>• The team with the highest score wins the match.</li>
              <li>• In case of a tie, penalty shootout rules apply.</li>
              <li>
                • For uneven group qualifications, priority follows: Higher goal
                difference → Lower fouls → Lower restarts.
              </li>
            </ul>
          </div>

          {/* Code of Conduct */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h4 className="font-semibold text-orange-900 mb-3">
              Code of Conduct
            </h4>
            <ul className="space-y-1 text-orange-800 text-sm">
              <li>• Teams must report within 2 minutes of call.</li>
              <li>• Late arrivals forfeit matches.</li>
              <li>
                • Any act of misconduct or false identity leads to
                disqualification.
              </li>
              <li>• The decision of the judges is final and binding.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Line Follower Robot */}
      <section
        id="line-follower-robot"
        className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-[#79bf0d] rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-[#323232]">
            Line Follower Robot (LFR)
          </h1>
        </div>

        <div className="prose prose-sm max-w-none space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-[#323232] mb-3">
              Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Line Follower Robot (LFR) competition challenges students to
              design, build, and program fully autonomous robots capable of
              detecting and following a pre-defined line path with precision,
              speed, and intelligence. This segment blends hardware design,
              sensor calibration, and control logic — testing innovation,
              efficiency, and adaptability under real-world constraints.
            </p>
          </div>

          <div className="bg-[#e5ecd9] rounded-lg p-5">
            <h3 className="text-lg font-semibold text-[#323232] mb-4">
              Format
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Eligibility:</strong> Open for All
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Team Size:</strong> 3-4 members per team
                  (Cross-institution teams are allowed)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Bot Ownership:</strong> Each team must design and
                  program its own robot. No shared or commercially pre-built
                  robots are allowed.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Autonomy:</strong> Robots must operate fully
                  autonomously, no manual or wireless control permitted once the
                  run begins.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-[#e2ffb4] rounded-lg p-5 font-roboto">
            <h3 className="text-lg font-semibold text-[#323232] mb-4">
              Robot Specifications
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <div className="flex justify-between border-b border-gray-300 pb-2">
                <span className="font-semibold">Dimensions:</span>
                <span>Max 25 cm (L) × 25 cm (W) × 25 cm (H)</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-2">
                <span className="font-semibold">Weight:</span>
                <span>Max 2 kg</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-2">
                <span className="font-semibold">Power Supply:</span>
                <span>Onboard battery (no wired power allowed)</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-2">
                <span className="font-semibold">Voltage Limit:</span>
                <span>≤ 16.8V (maximum 4S Battery)</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-2">
                <span className="font-semibold">Drive Type:</span>
                <span>Wheeled robot only</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-2">
                <span className="font-semibold">Programmable Switches:</span>
                <span>Up to 4 allowed</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-2">
                <span className="font-semibold">Communication:</span>
                <span>Wireless communication strictly prohibited</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-2">
                <span className="font-semibold">Construction:</span>
                <span>Self-built and programmed by team</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-2">
                <span className="font-semibold">Environment:</span>
                <span>Variable lighting conditions</span>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-900 mb-3">
              Arena Specifications
            </h4>
            <ul className="space-y-2 text-purple-800 text-sm">
              <li>• Shape & Size: Rectangular (approx. 12 ft × 10 ft)</li>
              <li>• Line Width: 25 mm</li>
              <li>
                • Surface: Black line on white background or white line on black
                background
              </li>
              <li>
                • Track Features: Straight and curved paths (min. radius 15 cm),
                sharp turns (≥ 30°), zigzag sections, crossovers and loops
              </li>
              <li>• Line gaps: ≤ 15 cm</li>
              <li>• Obstacles, walls, or bridges may appear in final round</li>
              <li>• Start & finish boxes: 25 cm × 25 cm</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-3">
              Competition Flow
            </h4>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-blue-900 text-sm mb-1">
                  Stage 1: Inspection & Setup
                </p>
                <ul className="space-y-1 text-blue-800 text-sm ml-4">
                  <li>• Robots submitted for inspection before each round</li>
                  <li>• Size, weight, and voltage are checked</li>
                  <li>• 1 minute for calibration before the run</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-blue-900 text-sm mb-1">
                  Stage 2: Preliminary Round
                </p>
                <ul className="space-y-1 text-blue-800 text-sm ml-4">
                  <li>• Simple track with smooth curves and no obstacles</li>
                  <li>• Run Time: 3 minutes + 1 min calibration</li>
                  <li>• Max Restarts: 4 per run</li>
                  <li>• No checkpoints may be skipped</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-blue-900 text-sm mb-1">
                  Stage 3: Final Round
                </p>
                <ul className="space-y-1 text-blue-800 text-sm ml-4">
                  <li>
                    • Complex track with obstacles, bridges, inverted lines, and
                    discontinuities
                  </li>
                  <li>• Run Time: 3 minutes + 1 min calibration</li>
                  <li>• Max Restarts: 5 per run</li>
                  <li>• 1 checkpoint may be skipped with penalty</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 font-roboto">
            <h4 className="font-semibold text-green-900 mb-3">
              Scoring System
            </h4>
            <div className="space-y-2 text-green-800 text-sm">
              <div className="flex justify-between">
                <span>Leaving Start Point (S):</span>
                <span className="font-semibold">+20</span>
              </div>
              <div className="flex justify-between">
                <span>Stopping at End Point (E):</span>
                <span className="font-semibold">+20</span>
              </div>
              <div className="flex justify-between">
                <span>Each Checkpoint Crossed (C):</span>
                <span className="font-semibold">+150</span>
              </div>
              <div className="flex justify-between">
                <span>Each Restart (R):</span>
                <span className="font-semibold">-70</span>
              </div>
              <div className="flex justify-between">
                <span>Bonus: Completed Without Restart (B):</span>
                <span className="font-semibold">+150</span>
              </div>
              <div className="flex justify-between">
                <span>Time Efficiency (T):</span>
                <span className="font-semibold">
                  (Total Time - Elapsed Time) × 1
                </span>
              </div>
            </div>
            <p className="mt-3 font-semibold text-green-900 text-sm">
              Total Score = T + S + E + C + R + B
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-red-900 mb-2">
                  Disqualification Criteria
                </h4>
                <ul className="space-y-1 text-red-800 text-sm">
                  <li>• Failure to meet size/weight/voltage limits</li>
                  <li>• Wireless/manual intervention during the run</li>
                  <li>• Robot fails to move for 30+ seconds</li>
                  <li>• Damaging the arena or other robots</li>
                  <li>• Disrespectful conduct towards judges or volunteers</li>
                  <li>• Use of unsafe or prohibited components</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

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
