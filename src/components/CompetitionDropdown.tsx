import { Competition } from "@/app/register/page";
import type React from "react";

interface CompetitionDropdownProps {
  title: string;
  competitions: Competition[];
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (index: number) => void;
  bgColor?: string;
  hoverColor?: string;
  researchSelected?: boolean;
  description?: string;
}

const CompetitionDropdown: React.FC<CompetitionDropdownProps> = ({
  title,
  competitions,
  isOpen,
  onToggle,
  onSelect,
  bgColor = "bg-secondary-background",
  researchSelected,
  description,
  hoverColor = "hover:bg-lime-200",
}) => {
  return (
    <div
      className={`rounded-lg cursor-pointer overflow-hidden ${
        !bgColor.includes("lime") ? "" : ""
      }`}
    >
      <button
        onClick={onToggle}
        className={`w-full px-4 py-4 flex items-center justify-between text-left transition-colors`}
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
              {competition.price && (
                <span className="text-gray-600 font-medium">
                  {competition.price} BDT
                </span>
              )}
            </div>
          ))}
          {competitions.length > 1 && description && (
            <p className="text-gray-500 text-sm font-medium">{description}</p>
          )}
          {researchSelected && (
            <div className="mt-4 text-yellow-700 bg-yellow-100 border border-yellow-400 rounded-lg p-3 text-sm">
              ⚠️ You will receive an email shortly to submit your research proposal to us.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CompetitionDropdown;
