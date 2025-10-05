import type React from "react";

interface FormSelectProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder,
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <select
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-[#F5F1E8] appearance-none cursor-pointer"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 0.75rem center",
          backgroundSize: "1.25rem",
        }}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
