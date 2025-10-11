"use client";

import RegistrationLeftDetailText from "@/components/RegistrationLeftDetailText";
import RegistrationLeftHeader from "@/components/RegistrationLeftHeader";
import StepIndicator from "@/components/StepIndicator";
import type React from "react";
import { useEffect, useState } from "react";
import Step1PersonalInfo from "@/components/Step1PersonalInfo";
import Step2EventSelection from "@/components/Step2EventSelection";
import Step3Payment from "@/components/Step3Payment";
import EventSummaryCard from "@/components/EventSummaryCard";
import ErrorMessage from "@/components/ErrorMessage";
import { RegistrationData } from "@/types/types";

const steps = [
  { label: "Personal Info", number: 1 },
  { label: "Events", number: 2 },
  { label: "Payment", number: 3 },
];

type TeamMember = {
  fullName: string;
  gender: string;
  grade: string;
  tshirtSize: string;
  phoneNumber: string;
  instituteName: string;
};

type Competition = {
  name: string;
  selected: boolean;
  price: number;
};

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    grade: "",
    gender: "male",
    tshirtSize: "",
    contactNumber: "",
    instituteName: "",
    email: "",
    address: "",
    guardianContact: "",
  });

  const [emailError, setEmailError] = useState("");
  const [step1Error, setStep1Error] = useState("");
  const [step2Error, setStep2Error] = useState("");
  const [step3Error, setStep3Error] = useState("");

  const juniorSoloCompetitions = [
    { name: "Science Olympiad", selected: false, price: 100 },
    { name: "Competitive Programming", selected: false, price: 100 },

    { name: "3-Minute Research", selected: false, price: 100 },
  ];
  const juniorTeamCompetitions = [
    { name: "Quizard Mania", selected: false, price: 200 },
  ];

  const seniorSoloCompetitions = [
    { name: "Science Olympiad", selected: false, price: 100 },
    { name: "Competitive Programming", selected: false, price: 100 },
    { name: "Research Article", selected: false, price: 100 },
    { name: "3-Minute Research", selected: false, price: 100 },
  ];
  const undergradSoloCompetitions = [
    { name: "Research Article", selected: false, price: 100 },
    { name: "3-Minute Research", selected: false, price: 100 },
  ];

  const seniorTeamCompetitions = [
    { name: "Quizard Mania", selected: false, price: 200 },
  ];
  const undergradTeamCompetitions = [
    { name: "Quizard Mania", selected: false, price: 200 },
    { name: "Robo Soccer", selected: false, price: 200 },
    { name: "Project Showcasing", selected: false, price: 200 },
  ];

  const [soloCompetitions, setSoloCompetitions] = useState<Competition[] | []>([
    { name: "Science Olympiad", selected: false, price: 100 },
    { name: "Research Article", selected: false, price: 100 },
    { name: "3-Minute Research", selected: false, price: 100 },
  ]);

  const [teamCompetitions, setTeamCompetitions] = useState<Competition[] | []>([
    { name: "Quizard Mania", selected: false, price: 200 },
    { name: "Robo Soccer", selected: false, price: 200 },
    { name: "Project Showcasing", selected: false, price: 200 },
  ]);
  const [mixedCompetitions, setMixedCompetitions] = useState<
    Competition[] | []
  >([
    {
      name: "Math Maestros",
      selected: false,
      price: 100,
    },
  ]);

  useEffect(() => {
    if (["6", "7", "8", "9", "10"].includes(formData.grade)) {
      if (
        formData.grade === "8" ||
        formData.grade === "9" ||
        formData.grade === "10"
      ) {
        setSoloCompetitions([
          ...juniorSoloCompetitions,
          { name: "Research Article", selected: false, price: 100 },
        ]);
      } else {
        setSoloCompetitions(juniorSoloCompetitions);
      }
      setTeamCompetitions(juniorTeamCompetitions);
      setMixedCompetitions([
        {
          name: "Math Maestros",
          selected: false,
          price: 100,
        },
      ]);
    }
    if (["11", "12"].includes(formData.grade)) {
      setSoloCompetitions(seniorSoloCompetitions);
      setTeamCompetitions(seniorTeamCompetitions);
      setMixedCompetitions([
        {
          name: "Math Maestros",
          selected: false,
          price: 100,
        },
      ]);
    }
    if (formData.grade === "13") {
      setSoloCompetitions(undergradSoloCompetitions);
      setTeamCompetitions(undergradTeamCompetitions);
      setMixedCompetitions([]);
    }
  }, [formData.grade]);

  const [teamName, setTeamName] = useState("");
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      fullName: "",
      gender: "male",
      grade: "",
      tshirtSize: "",
      phoneNumber: "",
      instituteName: "",
    },
  ]);

  const [soloDropdownOpen, setSoloDropdownOpen] = useState(false);
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);
  const [mixedDropdownOpen, setMixedDropdownOpen] = useState(false);

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [paymentPhone, setPaymentPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"bkash" | "nagad">(
    "bkash"
  );
  const [transactionId, setTransactionId] = useState("");

  const handleFormDataChange = (
    field: keyof typeof formData,
    value: string
  ) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormData({ ...formData, email });

    if (email && !email.includes("@")) {
      setEmailError("Please enter valid email address.");
    } else {
      setEmailError("");
    }
  };

  const validateStep1 = () => {
    const requiredFields = [
      formData.fullName,
      formData.grade,
      formData.tshirtSize,
      formData.contactNumber,
      formData.instituteName,
      formData.email,
      formData.address,
    ];

    const allFieldsFilled = requiredFields.every(
      (field) => field.trim() !== ""
    );
    const emailValid = formData.email.includes("@") && !emailError;

    return allFieldsFilled && emailValid;
  };

  const validateStep2 = () => {
    const hasSoloSelected = soloCompetitions.some((comp) => comp.selected);
    const hasTeamSelected = teamCompetitions.some((comp) => comp.selected);

    if (!hasSoloSelected && !hasTeamSelected) {
      setStep2Error(
        "Please select at least one competition (solo or team) before proceeding."
      );
      return false;
    }

    if (hasTeamSelected) {
      if (!teamName.trim()) {
        setStep2Error("Please enter a team name for your team competitions.");
        return false;
      }

      const hasValidMember = teamMembers.some((member) => {
        return (
          member.fullName.trim() !== "" &&
          member.grade.trim() !== "" &&
          member.tshirtSize.trim() !== "" &&
          member.phoneNumber.trim() !== "" &&
          member.instituteName.trim() !== ""
        );
      });

      if (!hasValidMember) {
        setStep2Error(
          "Please fill in complete details for at least one team member."
        );
        return false;
      }
    }

    return true;
  };

  const handleNext = () => {
    if (currentStep === 1) {
      setStep1Error("");
      if (!validateStep1()) {
        setStep1Error(
          "Please fill in all required fields correctly before proceeding."
        );
        return;
      }
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (currentStep === 2) {
      setStep2Error("");
      if (!validateStep2()) {
        return;
      }
      setCurrentStep(3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleSoloCompetition = (index: number) => {
    const updated = [...soloCompetitions];
    updated[index].selected = !updated[index].selected;
    setSoloCompetitions(updated);
  };
  const toggleMixedCompetition = (index: number) => {
    const updated = [...mixedCompetitions];
    updated[index].selected = !updated[index].selected;
    setMixedCompetitions(updated);
  };

  const toggleTeamCompetition = (index: number) => {
    const updated = [...teamCompetitions];
    updated[index].selected = !updated[index].selected;
    setTeamCompetitions(updated);
  };

  const updateTeamMember = (
    memberIndex: number,
    field: keyof TeamMember,
    value: string
  ) => {
    const updated = [...teamMembers];
    updated[memberIndex][field] = value;
    setTeamMembers(updated);
  };

  const addTeamMember = () => {
    if (teamMembers.length < 4) {
      setTeamMembers([
        ...teamMembers,
        {
          fullName: "",
          gender: "male",
          grade: "",
          tshirtSize: "",
          phoneNumber: "",
          instituteName: "",
        },
      ]);
    }
  };

  const removeTeamMember = (memberIndex: number) => {
    if (teamMembers.length > 1) {
      const updated = teamMembers.filter((_, index) => index !== memberIndex);
      setTeamMembers(updated);
    }
  };

  const removeSoloCompetition = (index: number) => {
    const updated = [...soloCompetitions];
    updated[index].selected = false;
    setSoloCompetitions(updated);
  };

  const removeTeamCompetition = (index: number) => {
    const updated = [...teamCompetitions];
    updated[index].selected = false;
    setTeamCompetitions(updated);
  };
  const removeMixedCompetition = (index: number) => {
    const updated = [...mixedCompetitions];
    updated[index].selected = false;
    setMixedCompetitions(updated);
  };

  const calculateSubtotal = () => {
    const soloTotal = soloCompetitions
      .filter((c) => c.selected)
      .reduce((sum, c) => sum + c.price, 0);
    const teamTotal = teamCompetitions
      .filter((c) => c.selected)
      .reduce((sum, c) => sum + c.price, 0);
    const mixedTotal = mixedCompetitions
      .filter((c) => c.selected)
      .reduce((sum, c) => sum + c.price, 0);
    return soloTotal + teamTotal + mixedTotal;
  };

  const subtotal = calculateSubtotal();
  const totalAmount = subtotal - discount;

  const hasTeamCompetitionSelected = teamCompetitions.some(
    (comp) => comp.selected
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (currentStep === 3) {
      setStep3Error("");
      if (!paymentPhone.trim() || !transactionId.trim()) {
        setStep3Error(
          "Please enter your payment phone number and transaction ID."
        );
        return;
      }

      const competitionCodeMap: { [key: string]: string } = {
        "Science Olympiad": "sc_olym",
        "Competitive Programming": "programming",
        "Research Article": "r_article",
        "3-Minute Research": "3m-res",
      };

      const teamCompetitionCodeMap: { [key: string]: string } = {
        // "Math Auction": "m_auction",
        "Robo Soccer": "robo_soccer",
        "Qwizard Mania": "q_mania",
        "Project Showcasing": "pr_show",
      };

      const mixedCompetitionCodeMap: { [key: string]: string } = {
        "Math Maestros": "m_maestros",
      };

      const registrationData: RegistrationData = {
        participant: {
          full_name: formData.fullName,
          gender: formData.gender === "male" ? "M" : "F",
          email: formData.email,
          grade: formData.grade,
          phone: formData.contactNumber,
          institution: formData.instituteName,
          address: formData.address,
          t_shirt_size: formData.tshirtSize.toUpperCase(),
        },
        payment: {
          amount: totalAmount.toFixed(2),
          method: paymentMethod,
          phone: paymentPhone,
          trx_id: transactionId,
        },
      };

      if (formData.guardianContact.trim()) {
        registrationData.participant.guardian_contact =
          formData.guardianContact;
      }

      const selectedSoloCompetitions = soloCompetitions
        .filter((c) => c.selected)
        .map((c) => competitionCodeMap[c.name]);

      const selectedMixedCompetitions = mixedCompetitions
        .filter((c) => c.selected)
        .map((c) => mixedCompetitionCodeMap[c.name]);

      registrationData.competition = [
        ...(selectedSoloCompetitions || []),
        ...(selectedMixedCompetitions || []),
      ];

      const selectedTeamCompetitions = teamCompetitions.filter(
        (c) => c.selected
      );
      if (selectedTeamCompetitions.length > 0) {
        registrationData.team_competition = {
          team: {
            team_name: teamName,
            participant: teamMembers
              .filter(
                (member) =>
                  member.fullName.trim() &&
                  member.grade.trim() &&
                  member.tshirtSize.trim() &&
                  member.phoneNumber.trim() &&
                  member.instituteName.trim()
              )
              .map((member) => ({
                full_name: member.fullName,
                gender: member.gender === "male" ? "M" : "F",
                phone: member.phoneNumber,
                grade: member.grade,
                institution: member.instituteName,
                t_shirt_size: member.tshirtSize.toUpperCase(),
              })),
          },
          competition: selectedTeamCompetitions.map(
            (c) => teamCompetitionCodeMap[c.name]
          ),
        };
      }

      console.log(
        "Registration Data:",
        JSON.stringify(registrationData, null, 2)
      );
      alert("Registration complete! Check console for details.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-roboto">
      {/* Left Panel - Welcome Section */}
      <div className="lg:w-[45%] bg-primary text-white p-8 lg:p-16 flex flex-col justify-start">
        <div className="max-w-xl ">
          {currentStep === 1 && (
            <RegistrationLeftHeader
              title={
                <>
                  Hello, <br /> Welcome
                </>
              }
              text="Let's start with your basic details."
            />
          )}
          {currentStep === 2 && (
            <RegistrationLeftHeader
              title="Event Selection (Solo & Team)"
              text="Choose the competitions or activities you want to join."
            />
          )}
          {currentStep === 3 && (
            <EventSummaryCard
              soloCompetitions={soloCompetitions}
              teamCompetitions={teamCompetitions}
              mixedCompetition={mixedCompetitions}
              onRemoveSolo={removeSoloCompetition}
              onRemoveMix={removeMixedCompetition}
              onRemoveTeam={removeTeamCompetition}
            />
          )}

          <div className="space-y-6 mb-12">
            {currentStep === 1 && (
              <>
                <RegistrationLeftDetailText text="Fill in your name, email, and contact number so we can keep you updated." />
                <RegistrationLeftDetailText text="Make sure the information is correct — this will be used for all event communications." />
                <RegistrationLeftDetailText text="The Information you provide will be used as your basic credentials during the event." />
              </>
            )}

            {currentStep === 2 && (
              <>
                <RegistrationLeftDetailText text="You can register for solo events, team events, or both." />
                <RegistrationLeftDetailText text="For team events, you'll need to provide your team name and member details." />
                <RegistrationLeftDetailText text="Pick wisely — this decides where you'll shine!" />
              </>
            )}
          </div>

          {currentStep !== 3 && (
            <div className="border-t border-white/30 pt-8">
              {currentStep === 1 && (
                <p className="text-sm lg:text-base leading-relaxed">
                  ***Double-check your email and phone number. If they&apos;re
                  wrong, you might miss important event updates.
                </p>
              )}
              {currentStep === 2 && (
                <p className="text-sm lg:text-base leading-relaxed">
                  ***Once you select events and proceed to payment, you cannot
                  change your choices.
                </p>
              )}
            </div>
          )}

          {currentStep === 1 && (
            <div className="mt-12">
              <p className="text-base lg:text-lg font-medium">
                Don&apos;t worry, your data is safe with us.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Right Panel - Form Section */}
      <div className="lg:w-[55%] bg-primary-background p-8 lg:p-10 flex flex-col">
        <StepIndicator currentStep={currentStep} steps={steps} />

        <div className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-accent mb-8 text-balance">
              {currentStep === 3 ? "Payment" : "Registration"}
            </h2>

            {currentStep === 1 && (
              <Step1PersonalInfo
                formData={formData}
                emailError={emailError}
                onFormDataChange={handleFormDataChange}
                onEmailChange={handleEmailChange}
              />
            )}

            {currentStep === 2 && (
              <Step2EventSelection
                soloCompetitions={soloCompetitions}
                teamCompetitions={teamCompetitions}
                soloDropdownOpen={soloDropdownOpen}
                mixedDropdownOpen={mixedDropdownOpen}
                mixedCompetitions={mixedCompetitions}
                teamDropdownOpen={teamDropdownOpen}
                teamName={teamName}
                teamMembers={teamMembers}
                hasTeamCompetitionSelected={hasTeamCompetitionSelected}
                onToggleSoloDropdown={() =>
                  setSoloDropdownOpen(!soloDropdownOpen)
                }
                onToggleTeamDropdown={() =>
                  setTeamDropdownOpen(!teamDropdownOpen)
                }
                onToggleMixedDropdown={() =>
                  setMixedDropdownOpen(!mixedDropdownOpen)
                }
                onToggleSoloCompetition={toggleSoloCompetition}
                onToggleMixedCompetition={toggleMixedCompetition}
                onToggleTeamCompetition={toggleTeamCompetition}
                onTeamNameChange={setTeamName}
                onUpdateTeamMember={updateTeamMember}
                onAddTeamMember={addTeamMember}
                onRemoveTeamMember={removeTeamMember}
              />
            )}

            {currentStep === 3 && (
              <Step3Payment
                subtotal={subtotal}
                selectedMethod={paymentMethod}
                setSelectedMethod={setPaymentMethod}
                discount={discount}
                totalAmount={totalAmount}
                couponCode={couponCode}
                paymentPhone={paymentPhone}
                transactionId={transactionId}
                onCouponCodeChange={setCouponCode}
                onApplyDiscount={setDiscount}
                onPaymentPhoneChange={setPaymentPhone}
                onTransactionIdChange={setTransactionId}
              />
            )}

            <ErrorMessage
              message={step1Error && currentStep === 1 ? step1Error : ""}
            />
            <ErrorMessage
              message={step2Error && currentStep === 2 ? step2Error : ""}
            />
            <ErrorMessage
              message={step3Error && currentStep === 3 ? step3Error : ""}
            />

            <div className="flex justify-center gap-4 mt-8">
              {currentStep > 1 && (
                <button
                  onClick={handlePrevious}
                  className="bg-gray-400 hover:bg-gray-500 text-white px-12 py-4 text-lg font-semibold rounded-md transition-colors duration-200 uppercase"
                >
                  {currentStep === 3 ? "BACK" : "PREVIOUS"}
                </button>
              )}
              {currentStep < 3 ? (
                <button
                  onClick={handleNext}
                  className="bg-lime-500 hover:bg-lime-600 text-white px-16 py-4 text-lg font-semibold rounded-md transition-colors duration-200 uppercase"
                >
                  NEXT
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="bg-lime-500 hover:bg-lime-600 text-white px-16 py-4 text-lg font-semibold rounded-md transition-colors duration-200 uppercase"
                >
                  SUBMIT
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
