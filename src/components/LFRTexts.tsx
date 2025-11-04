import { AlertCircle, Award, Calendar, CheckCircle, FileCheck, Users } from 'lucide-react';
import React from 'react'

const LFRTexts = () => {
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold text-[#323232] mb-3">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          The Line Follower Robot (LFR) competition challenges students to
          design, build, and program fully autonomous robots capable of
          detecting and following a pre-defined line path with precision, speed,
          and intelligence. This segment blends hardware design, sensor
          calibration, and control logic — testing innovation, efficiency, and
          adaptability under real-world constraints.
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
              <p className="text-amber-800 font-bold text-lg mb-2">
                Total: 25,000 BDT
              </p>
              <div className="space-y-1 text-sm text-amber-800">
                <p>🥇 1st Prize: 12,000 BDT</p>
                <p>🥈 2nd Prize: 8,000 BDT</p>
                <p>🥉 3rd Prize: 5,000 BDT</p>
              </div>
            </div>
          </div>
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
              <strong>Bot Ownership:</strong> Each team must design and program
              its own robot. No shared or commercially pre-built robots are
              allowed.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
            <span>
              <strong>Autonomy:</strong> Robots must operate fully autonomously,
              no manual or wireless control permitted once the run begins.
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
        <h4 className="font-semibold text-blue-900 mb-3">Competition Flow</h4>
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
    </>
  );
}

export default LFRTexts
