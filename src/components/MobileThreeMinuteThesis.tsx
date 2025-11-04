import {
  AlertCircle,
  CheckCircle,
  Clock,
  Presentation,
  Calendar,
  Award,
  FileCheck,
} from "lucide-react";
import React from "react";

const MobileThreeMinuteThesis = () => {
  return (
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

        {/* Registration & Prize Info */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-purple-900 mb-2">
                  Important Dates
                </h4>
                <div className="space-y-1">
                  <p className="text-purple-800 text-sm">
                    <strong>Registration Deadline:</strong>
                  </p>
                  <p className="text-purple-800 font-bold">November 6, 2025</p>
                  <p className="text-purple-800 text-sm mt-2">
                    <strong>Preliminary Round:</strong>
                  </p>
                  <p className="text-purple-800 font-bold">November 7, 2025</p>
                </div>
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
                <p className="text-amber-800 font-bold text-lg mb-2">
                  Total: 15,000 BDT
                </p>
                <div className="space-y-1 text-sm text-amber-800">
                  <p>🥇 1st Prize: 7,000 BDT</p>
                  <p>🥈 2nd Prize: 5,000 BDT</p>
                  <p>🥉 3rd Prize: 3,000 BDT</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <FileCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">
                  Participation Certificate
                </h4>
                <p className="text-blue-800 text-sm">
                  All participants will receive certificates
                </p>
              </div>
            </div>
          </div>
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
  );
};

export default MobileThreeMinuteThesis;
