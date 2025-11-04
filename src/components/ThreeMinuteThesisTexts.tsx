import { AlertCircle, CheckCircle, Clock } from 'lucide-react';
import React from 'react'

const ThreeMinuteThesisTexts = () => {
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold text-[#323232] mb-3">Overview</h2>
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
              <strong>Content:</strong> Must be based on participant&apos;s own
              research, thesis, or academic project
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
                • Must include: Background, Methodology, Findings, Significance
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
              <li>• Presentations exceeding 3 minutes will be disqualified</li>
              <li>• No animations, props, or excessive text allowed</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThreeMinuteThesisTexts
