import { AlertCircle, CheckCircle, FileText } from 'lucide-react';
import React from 'react'

const MobileResearchArticleContestTexts = () => {
  return (
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
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
              <span>
                <strong>Registration Deadline:</strong> November 6, 2025
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
              <span>
                <strong>Submission Deadline:</strong> November 9, 2025
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
              <span>
                <strong>Total Prize Pool:</strong>{" "}
                <span className="text-3xl">15,000 BDT</span>
                <ul className="list-disc list-inside ml-5 mt-1 text-gray-600">
                  <li>🥇 1st Place – 7,000 BDT</li>
                  <li>🥈 2nd Place – 5,000 BDT</li>
                  <li>🥉 3rd Place – 3,000 BDT</li>
                </ul>
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
                Roman, Font Size: 12pt (Heading and Subheadings can be adjusted
                according to it)
              </li>

              <li>
                Participants can add necessary images with proper reference or
                source, but should not exceed the suggested page limit.
              </li>
              <li>
                A screening panel evaluates and shortlists the best submissions
                for final judging.
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
                <li>• Articles must be the participant&apos;s original work</li>
                <li>
                  • Articles generated using AI or LLMs will be disqualified
                </li>
                <li>• Plagiarism will result in penalties</li>
                <li>
                  • Submissions must reflect the capability of school/college
                  students. Guidance from a teacher or a senior student is
                  permitted, but the core work must be the student&apos;s
                  own.Participants need to submit the details (Name, Contact
                  Details, Institution, Relation with the student) of the mentor
                  they have taken help from in the cover page.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileResearchArticleContestTexts
