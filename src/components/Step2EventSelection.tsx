import type React from "react";
import CompetitionDropdown from "./CompetitionDropdown";
import TeamMemberForm from "./TeamMemberForm";

interface Competition {
  name: string;
  selected: boolean;
  price: number;
}

interface TeamMember {
  fullName: string;
  gender: string;
  grade: string;
  tshirtSize: string;
  phoneNumber: string;
  instituteName: string;
}

interface Step2EventSelectionProps {
  soloCompetitions: Competition[];
  teamCompetitions: Competition[];
  mixedCompetitions: Competition[];
  soloDropdownOpen: boolean;
  teamDropdownOpen: boolean;
  mixedDropdownOpen: boolean;
  teamName: string;
  teamMembers: TeamMember[];

  hasTeamCompetitionSelected: boolean;
  onToggleSoloDropdown: () => void;
  onToggleMixedDropdown: () => void;
  onToggleMixedCompetition: (index: number) => void;
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
  teamMembers,
  mixedCompetitions,
  onToggleMixedDropdown,
  mixedDropdownOpen,
  onToggleMixedCompetition,
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
  return (
    <div className="space-y-4">
      <div className="p-2 transition-all bg-white/95 rounded-md border hover:bg-white/60 border-gray-200 cursor-pointer">
        <CompetitionDropdown
          title="Solo Competitions"
          competitions={soloCompetitions}
          isOpen={soloDropdownOpen}
          onToggle={onToggleSoloDropdown}
          onSelect={onToggleSoloCompetition}
          bgColor="bg-secondary-background"
          hoverColor="hover:bg-secondary-background/80"
        />
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
        />
        {hasTeamCompetitionSelected && (
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Team Info
            </h3>

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
                onRemove={onRemoveTeamMember}
                showRemove={index > 0}
              />
            ))}

            {teamMembers.length < 4 && (
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
      {mixedCompetitions.length > 0 && (
        <div className="p-2 transition-all bg-white/95 rounded-md border hover:bg-white/60 border-gray-200 cursor-pointer ">
          <CompetitionDropdown
            title="Mixed Competitions"
            competitions={mixedCompetitions}
            isOpen={mixedDropdownOpen}
            onToggle={onToggleMixedDropdown}
            onSelect={onToggleMixedCompetition}
            bgColor="bg-secondary-background"
            hoverColor="hover:bg-secondary-background/80"
          />
        </div>
      )}
    </div>
  );
};

export default Step2EventSelection;
