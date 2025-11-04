import { AlertCircle, CheckCircle, Users } from "lucide-react";
import React from "react";

const RoboSoccerTexts = () => {
  return (
    <>
      {/* Overview */}
      <div>
        <h2 className="text-xl font-semibold text-[#323232] mb-3">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          Robosoccer is a competitive robotics event where students design,
          build, and program autonomous or manually controlled robots capable of
          playing soccer. The event blends mechanical design, electronics, and
          control strategy in a dynamic, tournament-style environment,
          challenging teams to engineer precision, speed, and teamwork.
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
            <span>Teams must present valid institutional identification.</span>
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
              Each team must own and operate its own soccer bot and controller.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
            <span>
              Sharing of bots or use of pre-built robots is strictly prohibited.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
            <span>Only registered team members can operate the bot.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-[#60a657] mt-0.5 flex-shrink-0" />
            <span>Bot controllers can be switched only during halftime.</span>
          </li>
        </ul>
      </div>

      {/* Robot Specifications */}
      <div className="bg-[#e2ffb4] rounded-lg p-5 font-roboto">
        <h3 className="text-lg font-semibold text-[#323232] mb-4">
          Robot Specifications
        </h3>
        <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
          <div className="flex justify-between border-b border-gray-300 pb-2">
            <span className="font-semibold">Dimensions:</span>
            <span>Maximum 30 cm × 30 cm × 20 cm</span>
          </div>
          <div className="flex justify-between border-b border-gray-300 pb-2">
            <span className="font-semibold">Weight:</span>
            <span>Up to 3 kg (Each 100g above incurs a one-goal penalty)</span>
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
                Bots may push or kick the ball but cannot grab or enclose it.
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
          <li>• Matches are 1 vs 1</li>
          <li>• Group Stage: Round Robin (5 teams per group)</li>
          <li>• Knockout Stage: Top 2 from each group qualify</li>
          <li>• Each match: 2 rounds (1:15 each) with 30-sec halftime</li>
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
                • Continuous entanglement (10 sec) → Reset to initial positions.
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
        <h4 className="font-semibold text-teal-900 mb-3">Winner Declaration</h4>
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
        <h4 className="font-semibold text-orange-900 mb-3">Code of Conduct</h4>
        <ul className="space-y-1 text-orange-800 text-sm">
          <li>• Teams must report within 2 minutes of call.</li>
          <li>• Late arrivals forfeit matches.</li>
          <li>
            • Any act of misconduct or false identity leads to disqualification.
          </li>
          <li>• The decision of the judges is final and binding.</li>
        </ul>
      </div>
    </>
  );
};

export default RoboSoccerTexts;
