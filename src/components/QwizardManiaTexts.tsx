import {
  AlertCircle,
  CheckCircle,
  Calendar,
  Award,
  FileCheck,
} from "lucide-react";
import React from "react";

const QwizardManiaTexts = () => {
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold text-[#323232] mb-3">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          Qwizard Mania is a dynamic, team-based contest designed to test
          knowledge beyond textbooks. Questions span general science, the
          history of discoveries, Nobel Prize trivia etc, encouraging both
          breadth and depth of understanding.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 my-4">
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
              <h4 className="font-semibold text-amber-900 mb-2">Prize Pool</h4>
              <p className="text-amber-800 font-bold text-lg mb-1">
                Total: 30,000 BDT
              </p>
              <p className="text-amber-700 text-sm">Across 2 categories</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-5 mb-4">
        <div className="flex items-start gap-3 mb-3">
          <Award className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
          <h4 className="font-semibold text-green-900">Prizes Per Category</h4>
        </div>
        <div className="space-y-2 text-green-800 text-sm">
          <p>
            🥇 <strong>1st Prize:</strong> 7,000 BDT
          </p>
          <p>
            🥈 <strong>2nd Prize:</strong> 5,000 BDT
          </p>
          <p>
            🥉 <strong>3rd Prize:</strong> 3,000 BDT
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
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
            <h4 className="font-semibold text-red-900 mb-2">Important Rule</h4>
            <p className="text-red-800 text-sm">
              Use of Mobile Phone or External Help is strictly prohibited.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QwizardManiaTexts;
