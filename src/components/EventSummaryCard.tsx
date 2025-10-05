import type React from "react";

interface Competition {
  name: string;
  selected: boolean;
  price: number;
}

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
          <h3 className="text-lg font-semibold text-lime-600 mb-4">
            Solo Event
          </h3>
          <div className="space-y-3">
            {selectedSolo.map((competition, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 flex items-start justify-between gap-4"
              >
                <div className="flex gap-4 flex-1">
                  <div className="w-12 h-12 bg-lime-200 rounded-lg flex items-center justify-center flex-shrink-0"></div>
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
                  <span className="font-semibold text-gray-800">
                    ৳{competition.price}
                  </span>
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
            ))}
          </div>
        </div>
      )}

      {selectedTeam.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-lime-600 mb-4">
            Team Event
          </h3>
          <div className="space-y-3">
            {selectedTeam.map((competition, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 flex items-start justify-between gap-4"
              >
                <div className="flex gap-4 flex-1">
                  <div className="w-12 h-12 bg-lime-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-lime-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
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
                  <span className="font-semibold text-gray-800">
                    ৳{competition.price}
                  </span>
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
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventSummaryCard;
