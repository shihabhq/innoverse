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
import {
  Bot,
  Brain,
  Calculator,
  Code,
  FileText,
  FlaskConical,
  LucideIcon,
  Presentation,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { showCustomError } from "@/components/ShowCustomError";

const steps = [
  { label: "Personal Info", number: 1 },
  { label: "Events", number: 2 },
  { label: "Payment", number: 3 },
];

export type TeamMember = {
  fullName: string;
  gender: string;
  grade: string;
  tshirtSize: string;
  phoneNumber: string;
  email: string;
  instituteName: string;
};

export type Competition = {
  icon: LucideIcon;
  name: string;
  selected: boolean;
  price?: number;
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
  const router = useRouter();

  const [emailError, setEmailError] = useState("");
  const [step1Error, setStep1Error] = useState("");
  const [step2Error, setStep2Error] = useState("");
  const [step3Error, setStep3Error] = useState("");

  const juniorSoloCompetitions: Competition[] = [
    { name: "Science Olympiad", selected: false, icon: FlaskConical },
    { name: "Competitive Programming Contest", selected: false, icon: Code },
    {
      icon: Calculator,
      name: "Math Maestros",
      selected: false,
    },
    // { name: "3-Minute Research", selected: false, price: 100 },
  ];
  const juniorTeamCompetitions = [
    { name: "Robo Soccer", selected: false, price: 600, icon: Bot },
    { name: "Line Follower Robot", selected: false, price: 600, icon: Zap },
    // { name: "Qwizard Mania", selected: false, price: 600, icon: Brain },
  ];

  const seniorSoloCompetitions = [
    {
      icon: Calculator,
      name: "Math Maestros",
      selected: false,
    },
    { name: "Science Olympiad", selected: false, icon: FlaskConical },
    { name: "Competitive Programming Contest", selected: false, icon: Code },
    { name: "Research Article", selected: false, icon: Presentation },
    // { name: "3-Minute Research", selected: false, price: 100 },
  ];
  const seniorTeamCompetitions = [
    { name: "Robo Soccer", selected: false, price: 600, icon: Bot },
    { name: "Line Follower Robot", selected: false, price: 600, icon: Zap },
    { name: "Qwizard Mania", selected: false, price: 600, icon: Brain },
  ];
  const undergradSoloCompetitions = [
    { name: "3-Minute Thesis", selected: false, price: 200, icon: FileText },
  ];

  const undergradTeamCompetitions = [
    { name: "Robo Soccer", selected: false, price: 600, icon: Bot },
    { name: "Line Follower Robot", selected: false, price: 600, icon: Zap },
  ];

  const [soloCompetitions, setSoloCompetitions] = useState<Competition[] | []>([
    { name: "Science Olympiad", selected: false, icon: FlaskConical },
    { name: "Competitive Programming Contest", selected: false, icon: Code },
  ]);

  const [teamCompetitions, setTeamCompetitions] = useState<Competition[] | []>([
    { name: "Qwizard Mania", selected: false, price: 600, icon: Brain },
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
          { name: "Research Article", selected: false, icon: FileText },
        ]);
      } else {
        setSoloCompetitions(juniorSoloCompetitions);
      }
      if (formData.grade === "9" || formData.grade === "10") {
        setTeamCompetitions([
          ...juniorTeamCompetitions,
          { name: "Qwizard Mania", selected: false, price: 600, icon: Brain },
        ]);
      } else {
        setTeamCompetitions(juniorTeamCompetitions);
      }
    }
    if (["11", "12"].includes(formData.grade)) {
      setSoloCompetitions(seniorSoloCompetitions);
      setTeamCompetitions(seniorTeamCompetitions);
    }
    if (formData.grade === "13") {
      setSoloCompetitions(undergradSoloCompetitions);
      setTeamCompetitions(undergradTeamCompetitions);
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
      email: "",
      instituteName: "",
    },
  ]);

  const [soloDropdownOpen, setSoloDropdownOpen] = useState(false);
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);
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
        const allFieldsFilled =
          member.fullName.trim() !== "" &&
          member.grade.trim() !== "" &&
          member.tshirtSize.trim() !== "" &&
          member.phoneNumber.trim() !== "" &&
          member.instituteName.trim() !== "" &&
          member.email.trim() !== "";

        const validEmail = member.email.includes("@"); // ✅ new check

        return allFieldsFilled && validEmail;
      });

      if (!hasValidMember) {
        setStep2Error(
          "Please fill in complete details (including a valid email) for at least one team member."
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
          email: "",
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

  const calculateSubtotal = () => {
    const soloTotalLength = soloCompetitions.filter((c) => c.selected).length;

    let soloTotal = 0;
    if (soloTotalLength === 1) {
      soloTotal = 200;
    } else if (soloTotalLength > 1) {
      soloTotal = 200 + (soloTotalLength - 1) * 50;
    }

    const teamTotal = teamCompetitions
      .filter((c) => c.selected)
      .reduce((sum, c) => sum + c.price!, 0);

    return soloTotal + teamTotal;
  };

  const subtotal = calculateSubtotal();
  const totalAmount = subtotal - discount;

  const hasTeamCompetitionSelected = teamCompetitions.some(
    (comp) => comp.selected
  );

const handleSubmit = async (e: React.FormEvent) => {
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
      "Competitive Programming Contest": "programming",
      "Math Maestros": "m_maestros",
      "Research Article": "r_article",
      "3-Minute Thesis": "3m-res",
    };

    const teamCompetitionCodeMap: { [key: string]: string } = {
      "Robo Soccer": "robo_soccer",
      "Line Follower Robot": "lfr",
      "Qwizard Mania": "q_mania",
      "Project Showcasing": "pr_show",
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
      registrationData.participant.guardian_contact = formData.guardianContact;
    }
    if (couponCode) {
      registrationData.coupon = { coupon_code: couponCode };
    }

    const selectedSoloCompetitions = soloCompetitions
      .filter((c) => c.selected)
      .map((c) => competitionCodeMap[c.name]);

    registrationData.competition = [...(selectedSoloCompetitions || [])];

    const selectedTeamCompetitions = teamCompetitions.filter((c) => c.selected);
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
                member.instituteName.trim() &&
                member.email.trim()
            )
            .map((member) => ({
              full_name: member.fullName,
              gender: member.gender === "male" ? "M" : "F",
              phone: member.phoneNumber,
              grade: member.grade,
              institution: member.instituteName,
              email: member.email,
              t_shirt_size: member.tshirtSize.toUpperCase(),
            })),
        },
        competition: selectedTeamCompetitions.map(
          (c) => teamCompetitionCodeMap[c.name]
        ),
      };
    }

    try {
      const response = await fetch(
        "https://innoversebd.bdix.cloud/api/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registrationData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        console.error("Validation Errors:", result);
        const firstErrorKey = Object.keys(result.errors || {})[0];
        const firstErrorMessage =
          result.errors?.[firstErrorKey]?.[0] || "Unknown validation error.";

        showCustomError(`${firstErrorKey}: ${firstErrorMessage}`);
        return;
      }

      toast.success(result.message || "Registration successful!");

      // Store registration data
      localStorage.setItem("registration_access", "true");
      localStorage.setItem("registration_message", result.message);

      // Flag to prevent double redirect
      let hasRedirected = false;

      const performRedirect = () => {
        if (!hasRedirected) {
          hasRedirected = true;
          router.push("/success");
        }
      };

      // Safety timeout - ALWAYS redirects after 3 seconds
      const safetyTimeout = setTimeout(performRedirect, 3000);

      // Push to dataLayer for GTM
      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
          event: "registration_complete",
          eventCallback: function () {
            // Clear safety timeout and redirect immediately when GTM fires
            clearTimeout(safetyTimeout);
            performRedirect();
          },
          eventTimeout: 2000, // GTM's internal timeout
          registration_data: {
            amount: totalAmount.toFixed(2),
            method: paymentMethod,
            competitions: registrationData.competition?.length || 0,
            team_competitions:
              registrationData.team_competition?.competition?.length || 0,
          },
        });
      }
      // If no dataLayer exists, safety timeout will handle redirect
    } catch (error) {
      console.error("Registration Failed:", error);
      showCustomError("Registration failed. Please try again later.");
    }
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
              onRemoveSolo={removeSoloCompetition}
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
                <RegistrationLeftDetailText text="For team events, you'll need to provide your team name and member details. You are the Team leader." />
                {formData.grade !== "13" && (
                  <RegistrationLeftDetailText text="For Qwizard Mania, The Member 01 and Member 02 will be your teammates for this round. For Line Follower Robot and Robo Soccer, The team member limit is a total 4." />
                )}
                <RegistrationLeftDetailText text="One Member can register with one email once as a leader. If you choose a different team to participate for different team competition, please tell another team member to register as a team leader and add you as a team member." />
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
      <div className="lg:w-[55%] bg-primary-background p-4 sm:p-8 lg:p-10 flex flex-col">
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
                teamDropdownOpen={teamDropdownOpen}
                grade={formData.grade}
                teamName={teamName}
                teamMembers={teamMembers}
                hasTeamCompetitionSelected={hasTeamCompetitionSelected}
                onToggleSoloDropdown={() =>
                  setSoloDropdownOpen(!soloDropdownOpen)
                }
                onToggleTeamDropdown={() =>
                  setTeamDropdownOpen(!teamDropdownOpen)
                }
                onToggleSoloCompetition={toggleSoloCompetition}
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
