import type React from "react";
import CompetitionDropdown from "./CompetitionDropdown";
import TeamMemberForm from "./TeamMemberForm";
import { Competition, TeamMember } from "@/app/register/page";
import { useEffect, useState } from "react";

interface Step2EventSelectionProps {
  soloCompetitions: Competition[];
  teamCompetitions: Competition[];
  soloDropdownOpen: boolean;
  teamDropdownOpen: boolean;
  teamName: string;
  teamMembers: TeamMember[];
  grade: string;
  hasTeamCompetitionSelected: boolean;
  onToggleSoloDropdown: () => void;
  onToggleTeamDropdown: () => void;
  onToggleSoloCompetition: (index: number) => void;
  onToggleTeamCompetition: (index: number) => void;
  onTeamNameChange: (name: string) => void;
  onUpdateTeamMember: (
    index: number,
    field: keyof TeamMember,
    value: string
  ) => void;
  onAddTeamMember: () => void;
  onRemoveTeamMember: (index: number) => void;
}

const Step2EventSelection: React.FC<Step2EventSelectionProps> = ({
  soloCompetitions,
  teamCompetitions,
  soloDropdownOpen,
  teamDropdownOpen,
  teamName,
  grade,
  teamMembers,
  hasTeamCompetitionSelected,
  onToggleSoloDropdown,
  onToggleTeamDropdown,
  onToggleSoloCompetition,
  onToggleTeamCompetition,
  onTeamNameChange,
  onUpdateTeamMember,
  onAddTeamMember,
  onRemoveTeamMember,
}) => {
  const [totalMember, setTotalMember] = useState<1 | 3>(1);
  useEffect(() => {
    const qwizardSelected = teamCompetitions.find(
      (c) => c.name === "Qwizard Mania"
    )?.selected;

    const total = qwizardSelected ? 1 : 3;

    setTotalMember(total);
  }, [teamCompetitions]);
  const researchSelected = soloCompetitions.some(
    (item) =>
      (item.name === "Research Article" ||
        item.name === "3-Minute Thesis Presentation") &&
      item.selected
  );
  const quizSelected = teamCompetitions.some(
    (item) => item.name === "Qwizard Mania" && item.selected
  );

  return (
    <div className="space-y-4">
      <div className="p-2 transition-all bg-white/95 rounded-md border hover:bg-white/60 border-gray-200 cursor-pointer">
        <CompetitionDropdown
          title="Solo Competitions"
          competitions={soloCompetitions}
          isOpen={soloDropdownOpen}
          onToggle={onToggleSoloDropdown}
          onSelect={onToggleSoloCompetition}
          researchSelected={researchSelected}
          bgColor="bg-secondary-background"
          hoverColor="hover:bg-secondary-background/80"
          warning={
            (researchSelected &&
              "You'll receive a link to submit your research article with the confirmation email afterwards.") ||
            ""
          }
          description="Note: The first selected Solo competition Costs 200 BDT and additional competition costs 50 BDT Each"
        />
        {/* {researchSelected && (
          <div className="mt-4 text-yellow-700 bg-yellow-100 border border-yellow-400 rounded-lg p-3 text-sm">
            ⚠️ You need to submit your research via email to us.
          </div>
        )} */}
      </div>

      <div className="p-2 transition-all bg-white/95 rounded-md border hover:bg-white/60 border-gray-200 cursor-pointer ">
        <CompetitionDropdown
          title="Team Competitions"
          competitions={teamCompetitions}
          isOpen={teamDropdownOpen}
          onToggle={onToggleTeamDropdown}
          onSelect={onToggleTeamCompetition}
          bgColor="bg-secondary-background"
          hoverColor="hover:bg-secondary-background/80"
          warning={
            (quizSelected &&
              "Quizard Mania is only for a total of 3 members. The Member 01 and Member 03 will be your teammates in this Competition.") ||
            ""
          }
        />
        {hasTeamCompetitionSelected && (
          <div className="bg-white rounded-lg p-3 sm:p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 ">Team Info</h3>
            <div className="text-sm text-gray-500 mb-4">
             You are the team leader. We have already taken your information in the previous step. Please provide the details of your team and team members.
            </div>

            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Team Name:
              </label>
              <input
                type="text"
                placeholder="Enter team name"
                value={teamName}
                onChange={(e) => onTeamNameChange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-lime-50"
              />
            </div>

            {teamMembers.map((member, index) => (
              <TeamMemberForm
                key={index}
                member={member}
                memberIndex={index}
                onUpdate={onUpdateTeamMember}
                grade={grade}
                onRemove={onRemoveTeamMember}
                showRemove={index > 0}
              />
            ))}

            {teamMembers.length < 3 && (
              <button
                onClick={onAddTeamMember}
                className="text-lime-600 hover:text-lime-700 font-medium text-sm flex items-center gap-1"
              >
                <span className="text-xl">+</span> Add Member
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Step2EventSelection;
