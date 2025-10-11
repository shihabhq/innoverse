import type React from "react";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import RadioGroup from "./RadioGroup";

interface FormData {
  fullName: string;
  grade: string;
  gender: string;

  tshirtSize: string;
  contactNumber: string;
  instituteName: string;

  email: string;
  address: string;
  guardianContact: string;
}

interface Step1PersonalInfoProps {
  formData: FormData;
  emailError: string;
  onFormDataChange: (field: keyof FormData, value: string) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const GRADE_OPTIONS = [
  { value: "6", label: "Class - 6" },
  { value: "7", label: "Class - 7" },
  { value: "8", label: "Class - 8" },
  { value: "9", label: "Class - 9" },
  { value: "10", label: "Class - 10" },
  { value: "11", label: "Class - 11" },
  { value: "12", label: "Class - 12" },
  { value: "13", label: "Undergraduate" },
];

const TSHIRT_OPTIONS = [
  { value: "s", label: "S" },
  { value: "m", label: "M" },
  { value: "l", label: "L" },
  { value: "xl", label: "XL" },
  { value: "xxl", label: "XXL" },
];

const GENDER_OPTIONS = [
  { id: "male", label: "Male", value: "male" },
  { id: "female", label: "Female", value: "female" },
];

const Step1PersonalInfo: React.FC<Step1PersonalInfoProps> = ({
  formData,
  emailError,
  onFormDataChange,
  onEmailChange,
}) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-lg">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            name="Full Name"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) => onFormDataChange("fullName", e.target.value)}
          />
          <FormInput
            name="Personal Contact Number"
            type="tel"
            placeholder="Contact Number (Personal)"
            value={formData.contactNumber}
            onChange={(e) => onFormDataChange("contactNumber", e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormSelect
            label="Grade"
            value={formData.grade}
            onChange={(e) => onFormDataChange("grade", e.target.value)}
            options={GRADE_OPTIONS}
            placeholder="Select grade"
          />

          <RadioGroup
            label="Gender"
            name="gender"
            options={GENDER_OPTIONS}
            selectedValue={formData.gender}
            onChange={(value) => onFormDataChange("gender", value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            name="Institute Name"
            placeholder="Institute Name"
            value={formData.instituteName}
            onChange={(e) => onFormDataChange("instituteName", e.target.value)}
          />

          <FormSelect
            label="T-shirt Size"
            value={formData.tshirtSize}
            onChange={(e) => onFormDataChange("tshirtSize", e.target.value)}
            options={TSHIRT_OPTIONS}
            placeholder="Select size"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            name="Email"
            type="email"
            placeholder="youremail@gmail"
            value={formData.email}
            onChange={onEmailChange}
            error={emailError}
          />
          <FormInput
            name="Guardian Contact Number"
            type="tel"
            placeholder="(If Under 18 age)"
            value={formData.guardianContact}
            onChange={(e) =>
              onFormDataChange("guardianContact", e.target.value)
            }
          />
        </div>
        <FormInput
          name="Address"
          placeholder="Address"
          value={formData.address}
          onChange={(e) => onFormDataChange("address", e.target.value)}
        />
      </form>
    </div>
  );
};

export default Step1PersonalInfo;
