import type React from "react";

interface Competition {
  name: string;
  selected: boolean;
  price: number;
}

interface CompetitionDropdownProps {
  title: string;
  competitions: Competition[];
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (index: number) => void;
  bgColor?: string;
  hoverColor?: string;
}

const CompetitionDropdown: React.FC<CompetitionDropdownProps> = ({
  title,
  competitions,
  isOpen,
  onToggle,
  onSelect,
  bgColor = "bg-secondary-background",
  hoverColor = "hover:bg-lime-200",
}) => {
  return (
    <div
      className={`${bgColor} rounded-lg overflow-hidden ${
        !bgColor.includes("lime") ? "" : ""
      }`}
    >
      <button
        onClick={onToggle}
        className={`w-full px-4 py-4 flex items-center justify-between text-left ${hoverColor} transition-colors`}
      >
        <span className="text-xl font-bold ">{title}</span>
        <svg
          className={`w-6 h-6  transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 space-y-3 shadow-md">
          {competitions.map((competition, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id={`${title}-${index}`}
                  checked={competition.selected}
                  onChange={() => onSelect(index)}
                  className="w-5 h-5 text-lime-500 border-gray-300 rounded focus:ring-lime-500 cursor-pointer"
                />
                <label
                  htmlFor={`${title}-${index}`}
                  className="text-gray-700 font-semibold cursor-pointer"
                >
                  {competition.name}
                </label>
              </div>
              <span className="text-gray-600 font-medium">
                {competition.price} BDT
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompetitionDropdown;
