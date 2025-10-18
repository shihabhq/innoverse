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
  Users,
  Trophy,
  Clock,
  AlertCircle,
  CheckCircle,
  Target,
} from "lucide-react";

const competitions = {
  "math-maestro": {
    name: "Math Maestro",
    icon: Calculator,
    content: (
      <>
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

        <div className="bg-[#e5ecd9] rounded-lg p-5">
          <h3 className="text-lg font-semibold text-[#323232] mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-[#79bf0d]" />
            Competition Details
          </h3>

          <div className="space-y-4">
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
                    <strong>Categories:</strong> Junior (6-8), Secondary (9-10),
                    Senior (11-12)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Qualification:</strong> Top 6 from each category
                    advance (18 finalists total)
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#323232] mb-2">
                Team Formation
              </h4>
              <p className="text-gray-700">
                After Round 1, finalists are grouped into 6 balanced teams, each
                consisting of:
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 ml-4">
                <li>• 1 Junior (6-8)</li>
                <li>• 1 Secondary (9-10)</li>
                <li>• 1 Senior (11-12)</li>
              </ul>
            </div>
          </div>
        </div>

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

            <div>
              <p className="font-semibold mb-2">Problems:</p>
              <ul className="space-y-1 ml-4">
                <li>• 24 problems prepared (8 Easy, 8 Medium, 8 Hard)</li>
                <li>
                  • Each team must collect 6 problems (2 Easy, 2 Medium, 2 Hard)
                </li>
                <li>• Distribution rule prevents skewed choices</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">Bidding Rules:</p>
              <ul className="space-y-1 ml-4">
                <li>
                  • Easy = 10 points, Medium = 20 points, Hard = 30 points
                </li>
                <li>• Each team starts with 400 points</li>
                <li>• Bids must increase gradually (by 10-20 points)</li>
                <li>• Teams cannot overspend</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">Process:</p>
              <ul className="space-y-1 ml-4">
                <li>• Each problem shown for 30 seconds before bidding</li>
                <li>• Maximum 2 minutes allowed for bidding</li>
                <li>• Winning team receives problem in sealed envelope</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-yellow-900 mb-2">
                Special Cases
              </h4>
              <ul className="space-y-2 text-yellow-800 text-sm">
                <li>
                  • If a team spends all currency early, remaining problems will
                  be assigned by moderators with penalty
                </li>
                <li>
                  • Unclaimed problems will be reintroduced for special bidding
                  session
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    ),
  },
  "science-olympiad": {
    name: "Science Olympiad",
    icon: FlaskConical,
    content: (
      <>
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
      </>
    ),
  },
  "programming-contest": {
    name: "Programming Contest",
    icon: Code,
    content: (
      <>
        <div>
          <h2 className="text-xl font-semibold text-[#323232] mb-3">
            Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Programming Contest is one of the flagship events of Innoverse,
            designed to showcase Bangladesh&apos;s brightest young problem
            solvers. Structured in competitive programming (CP) style and
            aligned with international standards, this contest aims to nurture
            the next generation of coders, preparing them for national and
            international platforms such as BdOI and IOI.
          </p>
        </div>

        <div className="bg-[#e5ecd9] rounded-lg p-5">
          <h3 className="text-lg font-semibold text-[#323232] mb-4">Format</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
              <span>
                <strong>Style:</strong> Competitive Programming (CP)
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
          </ul>
        </div>

        <div className="bg-[#e2ffb4] rounded-lg p-5">
          <h3 className="text-lg font-semibold text-[#323232] mb-4">
            Contest Progression
          </h3>
          <ol className="space-y-2 text-gray-700 list-decimal list-inside">
            <li>Contestants log in to the selected online judge platform</li>
            <li>Contest dashboard remains locked until official start</li>
            <li>Problem set is released simultaneously for all participants</li>
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
            <ul className="space-y-2 text-purple-800 text-sm">
              <li>
                <strong>Toph.co:</strong> Popular Bangladeshi platform
              </li>
              <li>
                <strong>Vjudge.net:</strong> International platform
              </li>
            </ul>
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
                <strong>Scoring:</strong> Full points for correct solution
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
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
        </div>
      </>
    ),
  },
  "qwizard-mania": {
    name: "Qwizard Mania",
    icon: Brain,
    content: (
      <>
        <div>
          <h2 className="text-xl font-semibold text-[#323232] mb-3">
            Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Qwizard Mania is a dynamic, team-based contest designed to test
            knowledge beyond textbooks. Questions span general science, the
            history of discoveries, Nobel Prize trivia, and self-study topics,
            encouraging both breadth and depth of understanding.
          </p>
        </div>

        <div className="bg-[#e5ecd9] rounded-lg p-5">
          <h3 className="text-lg font-semibold text-[#323232] mb-4">Format</h3>
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
                <strong>Categories:</strong> Junior (6-8), Senior (9-12)
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
              <span>Teams must consist of 2 members</span>
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
      </>
    ),
  },
  "research-article-contest": {
    name: "Research Article Contest",
    icon: FileText,
    content: (
      <>
        <div>
          <h2 className="text-xl font-semibold text-[#323232] mb-3">
            Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Research Article Contest encourages school and college students
            to explore scientific thinking by writing research-style articles on
            STEM-related topics. It fosters originality, creativity, and
            academic writing skills among young learners.
          </p>
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
                <strong>Eligibility:</strong> Class 8-12
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
              <span>
                <strong>Submission Type:</strong> Online (PDF format only)
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-[#e2ffb4] rounded-lg p-5">
          <h3 className="text-lg font-semibold text-[#323232] mb-4">
            Submission Guidelines
          </h3>
          <div className="space-y-4 text-gray-700">
            <p>Articles should follow the required structure:</p>
            <ol className="space-y-1 list-decimal list-inside ml-2">
              <li>Title & Author Information</li>
              <li>Abstract (short summary)</li>
              <li>Background / Problem Statement</li>
              <li>Approach / Methodology</li>
              <li>Key Findings, Insights, or Proposed Ideas</li>
              <li>Limitations / Challenges</li>
              <li>Future Goals or Aspirations</li>
              <li>Sources / References (optional but recommended)</li>
            </ol>

            <div className="mt-4 space-y-2 text-sm">
              <p>
                <strong>Page Limit:</strong> 4-6 pages including cover page
              </p>
              <p>
                <strong>Font:</strong> Times New Roman, 12pt
              </p>
              <p>
                <strong>Cover Page Must Include:</strong> Name, Institution,
                Class, Email, Article Title, Date
              </p>
            </div>
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
                <li>• Articles must be the participant&apos;s original work</li>
                <li>
                  • Articles generated using AI or LLMs will be disqualified
                </li>
                <li>• Plagiarism will result in penalties</li>
                <li>
                  • Core work must be the student&apos;s own (guidance
                  permitted)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    ),
  },
  "3-minute-thesis-presentation": {
    name: "3-Minute Thesis Presentation",
    icon: Presentation,
    content: (
      <>
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
          <h3 className="text-lg font-semibold text-[#323232] mb-4">Format</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
              <span>
                <strong>Eligibility:</strong> Individual contest (Undergraduate
                level)
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
      </>
    ),
  },
  robosoccer: {
    name: "RoboSoccer",
    icon: Bot,
    content: (
      <>
        <div>
          <h2 className="text-xl font-semibold text-[#323232] mb-3">
            Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Soccer Bot is a competitive robotics event where teams of
            undergraduate students design, build, and program autonomous or
            manually controlled robots capable of playing soccer. The event
            blends mechanical design, electronics, and control strategy in a
            dynamic, tournament-style environment.
          </p>
        </div>

        <div className="bg-[#e5ecd9] rounded-lg p-5">
          <h3 className="text-lg font-semibold text-[#323232] mb-4">
            Eligibility & Team Composition
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
              <span>
                <strong>Eligibility:</strong> Open for all
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Users className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
              <span>
                <strong>Team Size:</strong> Maximum 5 members per team
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
              <span>Cross-institutional teams are allowed</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
              <span>Each team must own and operate its own soccer bot</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#e2ffb4] rounded-lg p-5">
          <h3 className="text-lg font-semibold text-[#323232] mb-4">
            Robot Specifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span className="font-semibold">Dimensions:</span>
              <span>30×30×20 cm (max)</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span className="font-semibold">Weight:</span>
              <span>Up to 3 kg</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span className="font-semibold">Power:</span>
              <span>Max 24V onboard</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span className="font-semibold">Control:</span>
              <span>Wireless only</span>
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            <strong>Note:</strong> Each 100g above weight limit incurs a
            one-goal penalty
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-3">Match Format</h4>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li>• Matches are 1 vs 1</li>
            <li>• Group Stage: Round Robin (5 teams per group)</li>
            <li>• Knockout Stage: Top 2 from each group qualify</li>
            <li>• Each match: 2 rounds (1:15 each) with 30-sec halftime</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
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
              <span>Overweight penalty:</span>
              <span className="font-semibold">-1 goal per 100g</span>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-red-900 mb-2">
                Fouls & Penalties
              </h4>
              <ul className="space-y-1 text-red-800 text-sm">
                <li>• Touching bot during play</li>
                <li>• Continuous entanglement (10 sec) → Reset</li>
                <li>• 3 fouls → Opponent gets penalty kick</li>
                <li>• Offensive behavior → Immediate disqualification</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    ),
  },
  "line-follower-robot": {
    name: "Line Follower Robot (LFR)",
    icon: Zap,
    content: (
      <>
        <div>
          <h2 className="text-xl font-semibold text-[#323232] mb-3">
            Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Line Follower Robot (LFR) competition challenges undergraduate
            and polytechnic students to design, build, and program fully
            autonomous robots capable of detecting and following a pre-defined
            line path with precision, speed, and intelligence. This segment
            blends hardware design, sensor calibration, and control logic.
          </p>
        </div>

        <div className="bg-[#e5ecd9] rounded-lg p-5">
          <h3 className="text-lg font-semibold text-[#323232] mb-4">Format</h3>
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
                <strong>Team Size:</strong> 3-5 members per team
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
              <span>Cross-institution teams are allowed</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
              <span>
                <strong>Autonomy:</strong> Fully autonomous, no manual control
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-[#e2ffb4] rounded-lg p-5">
          <h3 className="text-lg font-semibold text-[#323232] mb-4">
            Robot Specifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span className="font-semibold">Dimensions:</span>
              <span>25×25×25 cm (max)</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span className="font-semibold">Weight:</span>
              <span>Max 2 kg</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span className="font-semibold">Voltage:</span>
              <span>≤ 16.8V (4S max)</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span className="font-semibold">Drive Type:</span>
              <span>Wheeled only</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span className="font-semibold">Switches:</span>
              <span>Up to 4 allowed</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-2">
              <span className="font-semibold">Communication:</span>
              <span>Prohibited</span>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h4 className="font-semibold text-purple-900 mb-3">
            Arena Specifications
          </h4>
          <ul className="space-y-2 text-purple-800 text-sm">
            <li>• Shape: Rectangular (approx. 12 ft × 10 ft)</li>
            <li>• Line Width: 25 mm</li>
            <li>
              • Track Features: Curves, sharp turns, zigzags, crossovers, loops
            </li>
            <li>• Line gaps: ≤ 15 cm</li>
            <li>• Final round may include obstacles, walls, or bridges</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-3">Competition Flow</h4>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-blue-900 text-sm mb-1">
                Stage 1: Preliminary Round
              </p>
              <ul className="space-y-1 text-blue-800 text-sm ml-4">
                <li>• Simple track with smooth curves</li>
                <li>• Run Time: 3 minutes + 1 min calibration</li>
                <li>• Max Restarts: 4</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-blue-900 text-sm mb-1">
                Stage 2: Final Round
              </p>
              <ul className="space-y-1 text-blue-800 text-sm ml-4">
                <li>• Complex track with obstacles and bridges</li>
                <li>• Run Time: 3 minutes + 1 min calibration</li>
                <li>• Max Restarts: 5</li>
                <li>• 1 checkpoint may be skipped with penalty</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-900 mb-3">Scoring System</h4>
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
              <span>Bonus: No Restart (B):</span>
              <span className="font-semibold">+150</span>
            </div>
            <div className="flex justify-between">
              <span>Time Efficiency (T):</span>
              <span className="font-semibold">(Total - Elapsed) × 1</span>
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
                <li>• Wireless/manual intervention during run</li>
                <li>• Robot fails to move for 30+ seconds</li>
                <li>• Damaging arena or other robots</li>
                <li>• Use of unsafe or prohibited components</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    ),
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
