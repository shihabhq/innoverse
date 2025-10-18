import type React from "react";
import FormSelect from "./FormSelect";
import { TeamMember } from "@/app/register/page";
import { useEffect, useState } from "react";

interface TeamMemberFormProps {
  member: TeamMember;
  grade: string;
  memberIndex: number;
  onUpdate: (index: number, field: keyof TeamMember, value: string) => void;
  onRemove: (index: number) => void;
  showRemove: boolean;
}

const GRADE_OPTIONS = [
  { value: "9", label: "Class - 9" },
  { value: "10", label: "Class - 10" },
  { value: "11", label: "Class - 11" },
  { value: "12", label: "Class - 12" },
];

const juniorGrade_Options = [
  { value: "6", label: "Class - 6" },
  { value: "7", label: "Class - 7" },
  { value: "8", label: "Class - 8" },
  { value: "9", label: "Class - 9" },
  { value: "10", label: "Class - 10" },
];

const seniorGrade_Options = [
  { value: "11", label: "Class - 11" },
  { value: "12", label: "Class - 12" },
];

const underGraduateGrade_Options = [
  { value: "11", label: "Class - 11" },
  { value: "12", label: "Class - 12" },
  { value: "13", label: "Undergraduate" },
];

const GENDER_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const TSHIRT_OPTIONS = [
  { value: "s", label: "S" },
  { value: "m", label: "M" },
  { value: "l", label: "L" },
  { value: "xl", label: "XL" },
  { value: "xxl", label: "XXL" },
];

const TeamMemberForm: React.FC<TeamMemberFormProps> = ({
  member,
  memberIndex,
  grade,
  onUpdate,
  onRemove,
  showRemove,
}) => {
  const [gradeOptions, setGradeOptions] = useState<
    { value: string; label: string }[] | []
  >([]);
  useEffect(() => {
    if (["6", "7", "8", "9", "10"].includes(grade)) {
      setGradeOptions(juniorGrade_Options);
    }
    if (["11", "12"].includes(grade)) {
      setGradeOptions(seniorGrade_Options);
    }
    if (grade === "13") {
      setGradeOptions(underGraduateGrade_Options);
    }
  }, [grade]);
  return (
    <div className="space-y-4 mb-6 pb-6 border-b border-gray-200 last:border-b-0">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">
          Member {String(memberIndex + 1).padStart(2, "0")}:
        </label>
        {showRemove && (
          <button
            onClick={() => onRemove(memberIndex)}
            className="text-red-600 hover:text-red-700 text-sm font-medium"
          >
            Remove
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Full name"
          value={member.fullName}
          onChange={(e) => onUpdate(memberIndex, "fullName", e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-white"
        />

        <FormSelect
          value={member.gender}
          onChange={(e) => onUpdate(memberIndex, "gender", e.target.value)}
          options={GENDER_OPTIONS}
        />

        <FormSelect
          value={member.grade}
          onChange={(e) => onUpdate(memberIndex, "grade", e.target.value)}
          options={gradeOptions}
          placeholder="Grade"
        />

        <FormSelect
          value={member.tshirtSize}
          onChange={(e) => onUpdate(memberIndex, "tshirtSize", e.target.value)}
          options={TSHIRT_OPTIONS}
          placeholder="T-shirt Size"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={member.phoneNumber}
          onChange={(e) => onUpdate(memberIndex, "phoneNumber", e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-white"
        />

        <input
          type="text"
          placeholder="Institute Name"
          value={member.instituteName}
          onChange={(e) =>
            onUpdate(memberIndex, "instituteName", e.target.value)
          }
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-white"
        />
      </div>
      <input
        type="email"
        placeholder="Email Address"
        value={member.email}
        onChange={(e) => onUpdate(memberIndex, "email", e.target.value)}
        className="px-4 py-2 border w-full col-span-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-white"
      />
    </div>
  );
};

export default TeamMemberForm;
