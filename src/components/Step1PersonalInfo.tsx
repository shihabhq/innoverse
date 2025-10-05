import type React from "react";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import RadioGroup from "./RadioGroup";

interface FormData {
  fullName: string;
  grade: string;
  gender: string;
  district: string;
  tshirtSize: string;
  contactNumber: string;
  instituteName: string;
  clubReference: string;
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
  { value: "class-9", label: "Class - 9" },
  { value: "class-10", label: "Class - 10" },
  { value: "class-11", label: "Class - 11" },
  { value: "class-12", label: "Class - 12" },
];

const DISTRICT_OPTIONS = [
  { value: "dhaka", label: "Dhaka" },
  { value: "chittagong", label: "Chittagong" },
  { value: "sylhet", label: "Sylhet" },
  { value: "rajshahi", label: "Rajshahi" },
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
          <FormSelect
            label="Present District"
            value={formData.district}
            onChange={(e) => onFormDataChange("district", e.target.value)}
            options={DISTRICT_OPTIONS}
            placeholder="Select district"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            name="Institute Name"
            placeholder="Institute Name"
            value={formData.instituteName}
            onChange={(e) => onFormDataChange("instituteName", e.target.value)}
          />

          <FormInput
            name="Club Reference (Optional)"
            placeholder="Club Reference"
            value={formData.clubReference}
            onChange={(e) => onFormDataChange("clubReference", e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Step1PersonalInfo;
