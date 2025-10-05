import type React from "react";

interface RadioOption {
  id: string;
  label: string;
  value: string;
}

interface RadioGroupProps {
  label: string;
  name: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  name,
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="flex gap-6 pt-2">
        {options.map((option) => (
          <div key={option.id} className="flex items-center gap-2">
            <input
              type="radio"
              id={option.id}
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="w-4 h-4 text-lime-500 border-gray-300 focus:ring-lime-500 cursor-pointer"
            />
            <label
              htmlFor={option.id}
              className="text-sm font-normal cursor-pointer text-gray-700"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
