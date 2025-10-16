import { Competition } from "@/app/register/page";
import type React from "react";

interface EventSummaryCardProps {
  soloCompetitions: Competition[];
  teamCompetitions: Competition[];

  onRemoveSolo: (index: number) => void;

  onRemoveTeam: (index: number) => void;
}

const EventSummaryCard: React.FC<EventSummaryCardProps> = ({
  soloCompetitions,
  teamCompetitions,
  onRemoveSolo,
  onRemoveTeam,
}) => {
  const selectedSolo = soloCompetitions.filter((c) => c.selected);
  const selectedTeam = teamCompetitions.filter((c) => c.selected);

  return (
    <div className="bg-white rounded-lg p-8 text-gray-800">
      <h2 className="text-2xl font-bold mb-6">
        Check and confirm selected Events
      </h2>

      {selectedSolo.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-lime-600 mb-2">
            Solo Event
          </h3>
          <p className="mb-4 text-gray-500 text-sm font-medium">
            Note: The first selected Solo competition Costs{" "}
            <span className="font-bold">200 BDT</span> and additional
            competition costs <span className="text-bold">50 BDT</span> Each
          </p>
          <div className="space-y-3">
            {selectedSolo.map((competition, index) => {
              const Icon = competition.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 flex items-start justify-between gap-4"
                >
                  <div className="flex gap-4 flex-1">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">
                        {competition.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Showcase your skills and knowledge.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {competition.price && (
                      <span className="font-semibold text-gray-800">
                        ৳{competition.price}
                      </span>
                    )}
                    <button
                      onClick={() =>
                        onRemoveSolo(soloCompetitions.indexOf(competition))
                      }
                      className="text-red-500 hover:text-red-600"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {selectedTeam.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-lime-600 mb-4">
            Team Event
          </h3>
          <div className="space-y-3">
            {selectedTeam.map((competition, index) => {
              const Icon = competition.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 flex items-start justify-between gap-4"
                >
                  <div className="flex gap-4 flex-1">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">
                        {competition.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Collaborate to solve challenging problems.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {competition.price && (
                      <span className="font-semibold text-gray-800">
                        ৳{competition.price}
                      </span>
                    )}
                    <button
                      onClick={() =>
                        onRemoveTeam(teamCompetitions.indexOf(competition))
                      }
                      className="text-red-500 hover:text-red-600"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventSummaryCard;
