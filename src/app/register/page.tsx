"use client";

import type React from "react";
import { useState } from "react";

type TeamMember = {
  fullName: string;
  gender: string;
  grade: string;
  tshirtSize: string;
  phoneNumber: string;
  instituteName: string;
};

type TeamCompetition = {
  name: string;
  selected: boolean;
  price: number;
};

type SoloCompetition = {
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
    district: "",
    tshirtSize: "",
    contactNumber: "",
    instituteName: "",
    clubReference: "",
    email: "",
    address: "",
    guardianContact: "",
  });

  const [emailError, setEmailError] = useState("");
  const [step1Error, setStep1Error] = useState("");
  const [step2Error, setStep2Error] = useState("");
  const [step3Error, setStep3Error] = useState("");

  const [soloCompetitions, setSoloCompetitions] = useState<SoloCompetition[]>([
    { name: "Research Abstract", selected: false, price: 100 },
    { name: "Science Olympiad", selected: false, price: 100 },
    { name: "Programming Contest", selected: false, price: 100 },
  ]);

  const [teamCompetitions, setTeamCompetitions] = useState<TeamCompetition[]>([
    { name: "Math Auction", selected: false, price: 200 },
    { name: "Robo Soccer", selected: false, price: 200 },
    { name: "Programming Contest", selected: false, price: 200 },
  ]);

  const [teamName, setTeamName] = useState("");
  // Updated TeamMember state to match the new type
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

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [paymentPhone, setPaymentPhone] = useState("");
  const [transactionId, setTransactionId] = useState("");

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
      formData.district,
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

    // Must select at least one competition
    if (!hasSoloSelected && !hasTeamSelected) {
      setStep2Error(
        "Please select at least one competition (solo or team) before proceeding."
      );
      return false;
    }

    // If team competition selected, validate team details
    if (hasTeamSelected) {
      if (!teamName.trim()) {
        setStep2Error("Please enter a team name for your team competitions.");
        return false;
      }

      // Check if at least one team member has all required fields filled
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
    } else if (currentStep === 2) {
      setStep2Error("");
      if (!validateStep2()) {
        return;
      }
      setCurrentStep(3);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
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
    const soloTotal = soloCompetitions
      .filter((c) => c.selected)
      .reduce((sum, c) => sum + c.price, 0);
    const teamTotal = teamCompetitions
      .filter((c) => c.selected)
      .reduce((sum, c) => sum + c.price, 0);
    return soloTotal + teamTotal;
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

      // Map competition names to codes
      const competitionCodeMap: { [key: string]: string } = {
        "Research Abstract": "res_abs",
        "Science Olympiad": "sci_oly",
        "Programming Contest": "prog_cont",
      };

      const teamCompetitionCodeMap: { [key: string]: string } = {
        "Math Auction": "m_auction",
        "Robo Soccer": "robo_soccer",
        "Programming Contest": "prog_show",
      };

      // Build the JSON object
      const registrationData: any = {
        participant: {
          full_name: formData.fullName,
          gender: formData.gender === "male" ? "M" : "F",
          email: formData.email,
          grade: formData.grade,
          phone: formData.contactNumber,
          institution: formData.instituteName,
          address: formData.address,
          t_shirt_size: formData.tshirtSize.toUpperCase(),
          club_reference: formData.clubReference,
        },
        payment: {
          amount: totalAmount.toFixed(2),
          phone: paymentPhone,
          trx_id: transactionId,
        },
      };

      // Add guardian contact if provided
      if (formData.guardianContact.trim()) {
        registrationData.participant.guardian_contact =
          formData.guardianContact;
      }

      // Add solo competitions
      const selectedSoloCompetitions = soloCompetitions
        .filter((c) => c.selected)
        .map((c) => competitionCodeMap[c.name]);
      if (selectedSoloCompetitions.length > 0) {
        registrationData.competition = selectedSoloCompetitions;
      }

      // Add team competitions
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
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel - Welcome Section */}
      <div className="lg:w-[45%] bg-lime-500 text-white p-8 lg:p-16 flex flex-col justify-center">
        <div className="max-w-xl">
          {currentStep === 1 && (
            <>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-balance">
                Hello, welcome!
              </h1>
              <p className="text-lg lg:text-xl mb-12 text-balance">
                Let&apos;s start with your basic details.
              </p>
            </>
          )}
          {currentStep === 2 && (
            <>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
                Event Selection (Solo & Team)
              </h1>
              <p className="text-lg lg:text-xl mb-12 text-balance">
                Choose the competitions or activities you want to join.
              </p>
            </>
          )}
          {currentStep === 3 && (
            <>
              <div className="bg-white rounded-lg p-8 text-gray-800">
                <h2 className="text-2xl font-bold mb-6">
                  Check and confirm selected Events
                </h2>

                {/* Solo Events */}
                {soloCompetitions.some((c) => c.selected) && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-lime-600 mb-4">
                      Solo Event
                    </h3>
                    <div className="space-y-3">
                      {soloCompetitions
                        .filter((c) => c.selected)
                        .map((competition, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 rounded-lg p-4 flex items-start justify-between gap-4"
                          >
                            <div className="flex gap-4 flex-1">
                              <div className="w-12 h-12 bg-lime-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg
                                  className="w-6 h-6 text-lime-600"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-800">
                                  {competition.name}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  Showcase your skills and knowledge.
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="font-semibold text-gray-800">
                                ৳{competition.price}
                              </span>
                              <button
                                onClick={() =>
                                  removeSoloCompetition(
                                    soloCompetitions.indexOf(competition)
                                  )
                                }
                                className="text-red-500 hover:text-red-600"
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* Team Events */}
                {teamCompetitions.some((c) => c.selected) && (
                  <div>
                    <h3 className="text-lg font-semibold text-lime-600 mb-4">
                      Team Event
                    </h3>
                    <div className="space-y-3">
                      {teamCompetitions
                        .filter((c) => c.selected)
                        .map((competition, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 rounded-lg p-4 flex items-start justify-between gap-4"
                          >
                            <div className="flex gap-4 flex-1">
                              <div className="w-12 h-12 bg-lime-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg
                                  className="w-6 h-6 text-lime-600"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                  />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-800">
                                  {competition.name}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  Collaborate to solve challenging problems.
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="font-semibold text-gray-800">
                                ৳{competition.price}
                              </span>
                              <button
                                onClick={() =>
                                  removeTeamCompetition(
                                    teamCompetitions.indexOf(competition)
                                  )
                                }
                                className="text-red-500 hover:text-red-600"
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          <div className="space-y-6 mb-12">
            {currentStep === 1 && (
              <>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white mt-1" />
                  <p className="text-base lg:text-lg leading-relaxed">
                    Fill in your name, email, and contact number so we can keep
                    you updated.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white mt-1" />
                  <p className="text-base lg:text-lg leading-relaxed">
                    Make sure the information is correct — this will be used for
                    all event communications.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white mt-1" />
                  <p className="text-base lg:text-lg leading-relaxed">
                    Make sure the information is correct — this will be used for
                    all event communications.
                  </p>
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white mt-1" />
                  <p className="text-base lg:text-lg leading-relaxed">
                    You can register for solo events, team events, or both.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white mt-1" />
                  <p className="text-base lg:text-lg leading-relaxed">
                    For team events, you&apos;ll need to provide your team name
                    and member details.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white mt-1" />
                  <p className="text-base lg:text-lg leading-relaxed">
                    Pick wisely — this decides where you&apos;ll shine!
                  </p>
                </div>
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
      <div className="lg:w-[55%] bg-[#F5F1E8] p-8 lg:p-16 flex flex-col">
        <div className="flex items-center justify-center gap-8 mb-8">
          <div className="flex flex-col items-center gap-2">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentStep >= 1 ? "bg-gray-400" : "bg-gray-300"
              }`}
            >
              {currentStep > 1 && (
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <span
              className={`text-sm font-medium ${
                currentStep >= 1 ? "text-gray-700" : "text-gray-500"
              }`}
            >
              Personal Info
            </span>
          </div>

          <div
            className={`w-16 h-[2px] ${
              currentStep >= 2 ? "bg-gray-400" : "bg-gray-300"
            }`}
          />

          <div className="flex flex-col items-center gap-2">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentStep >= 2 ? "bg-gray-400" : "bg-gray-300"
              }`}
            >
              {currentStep > 2 && (
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <span
              className={`text-sm ${
                currentStep >= 2 ? "font-medium text-gray-700" : "text-gray-500"
              }`}
            >
              Events
            </span>
          </div>

          <div
            className={`w-16 h-[2px] ${
              currentStep >= 3 ? "bg-gray-400" : "bg-gray-300"
            }`}
          />

          <div className="flex flex-col items-center gap-2">
            <div
              className={`w-10 h-10 rounded-full ${
                currentStep >= 3 ? "bg-gray-400" : "bg-gray-300"
              }`}
            />
            <span
              className={`text-sm ${
                currentStep >= 3 ? "font-medium text-gray-700" : "text-gray-500"
              }`}
            >
              Payment
            </span>
          </div>
        </div>

        {/* Form Card */}
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-600 mb-8 text-balance">
              {currentStep === 3 ? "Payment" : "Registration"}
            </h2>

            {currentStep === 1 && (
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-[#F5F1E8]"
                    />
                  </div>

                  {/* Grade and Gender Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Grade
                      </label>
                      <select
                        value={formData.grade}
                        onChange={(e) =>
                          setFormData({ ...formData, grade: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-[#F5F1E8] appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 0.75rem center",
                          backgroundSize: "1.25rem",
                        }}
                      >
                        <option value="">Select grade</option>
                        <option value="class-9">Class - 9</option>
                        <option value="class-10">Class - 10</option>
                        <option value="class-11">Class - 11</option>
                        <option value="class-12">Class - 12</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Gender
                      </label>
                      <div className="flex gap-6 pt-2">
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            checked={formData.gender === "male"}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                gender: e.target.value,
                              })
                            }
                            className="w-4 h-4 text-lime-500 border-gray-300 focus:ring-lime-500 cursor-pointer"
                          />
                          <label
                            htmlFor="male"
                            className="text-sm font-normal cursor-pointer text-gray-700"
                          >
                            Male
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            checked={formData.gender === "female"}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                gender: e.target.value,
                              })
                            }
                            className="w-4 h-4 text-lime-500 border-gray-300 focus:ring-lime-500 cursor-pointer"
                          />
                          <label
                            htmlFor="female"
                            className="text-sm font-normal cursor-pointer text-gray-700"
                          >
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* District and T-shirt Size Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Present District
                      </label>
                      <select
                        value={formData.district}
                        onChange={(e) =>
                          setFormData({ ...formData, district: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-[#F5F1E8] appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 0.75rem center",
                          backgroundSize: "1.25rem",
                        }}
                      >
                        <option value="">Select district</option>
                        <option value="dhaka">Dhaka</option>
                        <option value="chittagong">Chittagong</option>
                        <option value="sylhet">Sylhet</option>
                        <option value="rajshahi">Rajshahi</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        T-shirt Size
                      </label>
                      <select
                        value={formData.tshirtSize}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            tshirtSize: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-[#F5F1E8] appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 0.75rem center",
                          backgroundSize: "1.25rem",
                        }}
                      >
                        <option value="">Select size</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                      </select>
                    </div>
                  </div>

                  {/* Contact Number */}
                  <div className="space-y-2">
                    <input
                      type="tel"
                      placeholder="Contact Number (Personal)"
                      value={formData.contactNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contactNumber: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-[#F5F1E8]"
                    />
                  </div>

                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Address"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-[#F5F1E8]"
                    />
                  </div>

                  <div className="space-y-2">
                    <input
                      type="tel"
                      placeholder="Contact Number of Guardian (If Under 18 age)"
                      value={formData.guardianContact}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          guardianContact: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-[#F5F1E8]"
                    />
                  </div>

                  {/* Institute Name */}
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Institute Name"
                      value={formData.instituteName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          instituteName: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-[#F5F1E8]"
                    />
                  </div>

                  {/* Club Reference */}
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Club Reference"
                      value={formData.clubReference}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          clubReference: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-[#F5F1E8]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="email@gmail"
                      value={formData.email}
                      onChange={handleEmailChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-[#F5F1E8]"
                    />
                    {emailError && (
                      <p className="text-sm text-red-600">{emailError}</p>
                    )}
                  </div>
                </form>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                {/* Solo Competitions Dropdown */}
                <div className="bg-lime-100 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setSoloDropdownOpen(!soloDropdownOpen)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-lime-200 transition-colors"
                  >
                    <span className="text-lg font-semibold text-gray-800">
                      Solo Competitions
                    </span>
                    <svg
                      className={`w-6 h-6 text-gray-800 transition-transform ${
                        soloDropdownOpen ? "rotate-180" : ""
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

                  {soloDropdownOpen && (
                    <div className="px-6 pb-6 space-y-3">
                      {soloCompetitions.map((competition, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-2"
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              id={`solo-${index}`}
                              checked={competition.selected}
                              onChange={() => toggleSoloCompetition(index)}
                              className="w-5 h-5 text-lime-500 border-gray-300 rounded focus:ring-lime-500 cursor-pointer"
                            />
                            <label
                              htmlFor={`solo-${index}`}
                              className="text-gray-700 cursor-pointer"
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

                {/* Team Competitions Dropdown */}
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                  <button
                    onClick={() => setTeamDropdownOpen(!teamDropdownOpen)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-gray-800">
                      Team Competitions
                    </span>
                    <svg
                      className={`w-6 h-6 text-gray-800 transition-transform ${
                        teamDropdownOpen ? "rotate-180" : ""
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

                  {teamDropdownOpen && (
                    <div className="px-6 pb-6 space-y-3">
                      {teamCompetitions.map((competition, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-2"
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              id={`team-${index}`}
                              checked={competition.selected}
                              onChange={() => toggleTeamCompetition(index)}
                              className="w-5 h-5 text-lime-500 border-gray-300 rounded focus:ring-lime-500 cursor-pointer"
                            />
                            <label
                              htmlFor={`team-${index}`}
                              className="text-gray-700 cursor-pointer"
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

                {hasTeamCompetitionSelected && (
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Team Info
                    </h3>

                    {/* Team Name */}
                    <div className="mb-6">
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        Team Name:
                      </label>
                      <input
                        type="text"
                        placeholder="Enter team name"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-lime-50"
                      />
                    </div>

                    {/* Team Members */}
                    {teamMembers.map((member, memberIndex) => (
                      <div
                        key={memberIndex}
                        className="space-y-4 mb-6 pb-6 border-b border-gray-200 last:border-b-0"
                      >
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-gray-700">
                            Member {String(memberIndex + 1).padStart(2, "0")}:
                          </label>
                          {memberIndex > 0 && (
                            <button
                              onClick={() => removeTeamMember(memberIndex)}
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
                            onChange={(e) =>
                              updateTeamMember(
                                memberIndex,
                                "fullName",
                                e.target.value
                              )
                            }
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-white"
                          />

                          <select
                            value={member.gender}
                            onChange={(e) =>
                              updateTeamMember(
                                memberIndex,
                                "gender",
                                e.target.value
                              )
                            }
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-white appearance-none cursor-pointer"
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "right 0.75rem center",
                              backgroundSize: "1.25rem",
                            }}
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>

                          <select
                            value={member.grade}
                            onChange={(e) =>
                              updateTeamMember(
                                memberIndex,
                                "grade",
                                e.target.value
                              )
                            }
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-white appearance-none cursor-pointer"
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "right 0.75rem center",
                              backgroundSize: "1.25rem",
                            }}
                          >
                            <option value="">Grade</option>
                            <option value="class-9">Class - 9</option>
                            <option value="class-10">Class - 10</option>
                            <option value="class-11">Class - 11</option>
                            <option value="class-12">Class - 12</option>
                          </select>

                          <select
                            value={member.tshirtSize}
                            onChange={(e) =>
                              updateTeamMember(
                                memberIndex,
                                "tshirtSize",
                                e.target.value
                              )
                            }
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-white appearance-none cursor-pointer"
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "right 0.75rem center",
                              backgroundSize: "1.25rem",
                            }}
                          >
                            <option value="">T-shirt Size</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                          </select>

                          <input
                            type="tel"
                            placeholder="Phone Number"
                            value={member.phoneNumber}
                            onChange={(e) =>
                              updateTeamMember(
                                memberIndex,
                                "phoneNumber",
                                e.target.value
                              )
                            }
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-white"
                          />

                          <input
                            type="text"
                            placeholder="Institute Name"
                            value={member.instituteName}
                            onChange={(e) =>
                              updateTeamMember(
                                memberIndex,
                                "instituteName",
                                e.target.value
                              )
                            }
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent bg-white"
                          />
                        </div>
                      </div>
                    ))}

                    {/* Add Member Button */}
                    {teamMembers.length < 4 && (
                      <button
                        onClick={addTeamMember}
                        className="text-lime-600 hover:text-lime-700 font-medium text-sm flex items-center gap-1"
                      >
                        <span className="text-xl">+</span> Add Member
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}

            {currentStep === 3 && (
              <div className="bg-white rounded-lg p-8 shadow-lg border-4 border-blue-400">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Payment Summary
                </h3>

                {/* Payment Method Icons */}
                <div className="flex gap-4 mb-6">
                  <div className="w-20 h-20 bg-pink-100 rounded-lg flex items-center justify-center">
                    <span className="text-pink-600 font-bold text-sm">
                      bKash
                    </span>
                  </div>
                  <div className="w-20 h-20 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-sm">
                      Nagad
                    </span>
                  </div>
                </div>

                {/* Payment Instructions */}
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 flex-shrink-0" />
                    <p className="text-gray-700">
                      Open Bkash app or dial{" "}
                      <span className="font-semibold">*247#</span> / Nagad app
                      or dial <span className="font-semibold">*167#</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 flex-shrink-0" />
                    <p className="text-gray-700">
                      Send amount{" "}
                      <span className="font-semibold text-lime-600">[085]</span>{" "}
                      to this number{" "}
                      <span className="font-semibold text-lime-600">
                        01234567899
                      </span>
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 flex-shrink-0" />
                    <p className="text-gray-700">
                      Copy transaction id after successful send money
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 flex-shrink-0" />
                    <p className="text-gray-700">
                      Paste transaction id and payment phone number below
                    </p>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="flex justify-between items-center py-3 border-t border-gray-200">
                  <span className="text-gray-700 font-medium">Subtotal</span>
                  <span className="text-gray-800 font-semibold">
                    ৳{subtotal}
                  </span>
                </div>

                {/* Coupon Code */}
                <div className="py-3 border-t border-gray-200">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50"
                  />
                </div>

                {/* Discount */}
                <div className="flex justify-between items-center py-3 border-t border-gray-200">
                  <span className="text-gray-700 font-medium">Discount</span>
                  <span className="text-gray-800 font-semibold">
                    ৳{discount}
                  </span>
                </div>

                {/* Total Amount */}
                <div className="flex justify-between items-center py-4 border-t-2 border-gray-300">
                  <span className="text-gray-800 font-bold text-lg">
                    Total Amount
                  </span>
                  <span className="text-lime-600 font-bold text-xl">
                    ৳{totalAmount}
                  </span>
                </div>

                {/* Phone Number */}
                <div className="mt-6">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={paymentPhone}
                    onChange={(e) => setPaymentPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50 mb-4"
                  />
                  <input
                    type="text"
                    placeholder="Trx ID"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50"
                  />
                </div>

                {/* Warning Message */}
                <div className="mt-6 p-4 bg-red-50 rounded-md">
                  <p className="text-sm text-red-600 text-center">
                    All payments are non-refundable. Please review your
                    selections carefully before proceeding.
                  </p>
                </div>
              </div>
            )}

            {step1Error && currentStep === 1 && (
              <div className="mt-4 p-4 bg-red-50 rounded-md">
                <p className="text-sm text-red-600 text-center">{step1Error}</p>
              </div>
            )}

            {step2Error && currentStep === 2 && (
              <div className="mt-4 p-4 bg-red-50 rounded-md">
                <p className="text-sm text-red-600 text-center">{step2Error}</p>
              </div>
            )}

            {step3Error && currentStep === 3 && (
              <div className="mt-4 p-4 bg-red-50 rounded-md">
                <p className="text-sm text-red-600 text-center">{step3Error}</p>
              </div>
            )}

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
