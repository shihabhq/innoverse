import { CheckCircle } from 'lucide-react';
import React from 'react'

const ProgrammingContestTexts = () => {
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold text-[#323232] mb-3">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          The Competitive Programming Contest is one of the flagship events of
          Innoverse, designed to showcase Bangladesh&apos;s brightest young
          problem solvers. Structured in competitive programming (CP) style and
          aligned with international standards, this contest aims to nurture the
          next generation of coders, preparing them for national and
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
              <strong>Rounds:</strong> Preliminary Round (Online) → Final Round
              (Onsite)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
            <span>
              <strong>Preliminary Round Starts:</strong> November 1, 2025 Time:
              7:00 PM – 10:00 PM
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
            {/* <li>
                <strong>Vjudge.net:</strong> International platform
              </li> */}
          </ul>
          {/* <h3 className="font-semibold text-base lg:text-xl text-red-500 text-center">
              To Be Anounced Soon
            </h3> */}
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
    </>
  );
}

export default ProgrammingContestTexts
