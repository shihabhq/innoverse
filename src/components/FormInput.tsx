import type React from "react";

interface FormInputProps {
  type?: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  name,
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="mb-1 text-sm">
        {name}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-[#F5F1E8]"
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FormInput;
