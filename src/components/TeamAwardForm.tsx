"use client";

import uploadToImageKit from "@/app/actions/imagekit";
import { useRouter } from "next/navigation";
import type React from "react";

import { useState } from "react";
import { toast } from "sonner";
import { showCustomError } from "./ShowCustomError";

interface TeamMember {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  institution: string;
  grade: string;
  tShirtSize: string;
}

interface ProjectData {
  projectName: string;
  projectType: string;
  projectDescription: string;
  pitchDeck: File | null;
  videoLink: string;
}

const GRADES = [
  { name: "Class 6", value: "6" },
  { name: "Class 7", value: "7" },
  { name: "Class 8", value: "8" },
  { name: "Class 9", value: "9" },
  { name: "Class 10", value: "10" },
  { name: "Class 11", value: "11" },
  { name: "Class 12", value: "12" },
  { name: "Undergraduate", value: "13" },
];
const T_SHIRT_SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
const PROJECT_TYPES = [
  { value: "robotics", label: "Robotics" },
  { value: "ai", label: "Artificial Intelligence" },
  { value: "cs", label: "Computer Science & Programming" },
  { value: "data_science", label: "Data Science & Analytics" },
  { value: "environment", label: "Environment & Sustainability" },
  { value: "health", label: "Health & Life Sciences" },
  { value: "engineering", label: "Engineering & Design" },
  { value: "education", label: "Education & Social Development" },
  { value: "media", label: "Media & Communication" },
  { value: "other", label: "Other" },
];

export function TeamAwardForm() {
  const [members, setMembers] = useState<TeamMember[]>([
    {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      institution: "",
      grade: "",
      tShirtSize: "",
    },
  ]);
  const [dragActive, setDragActive] = useState(false);
  const [pitchDeckFile, setPitchDeckFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const [project, setProject] = useState<ProjectData>({
    projectName: "",
    projectType: "",
    projectDescription: "",
    pitchDeck: null,
    videoLink: "",
  });

  const [errors, setErrors] = useState<string>("");
  const [wordCount, setWordCount] = useState(0);

  const handleMemberChange = (
    index: number,
    field: keyof TeamMember,
    value: string | File
  ) => {
    const newMembers = [...members];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setMembers(newMembers);
  };

  const handleAddMember = () => {
    if (members.length < 4) {
      setMembers([
        ...members,
        {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          institution: "",
          grade: "",
          tShirtSize: "",
        },
      ]);
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const validTypes = [
        "application/pdf",
        "application/vnd.ms-powerpoint",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      ];
      if (!validTypes.includes(file.type)) {
        setErrors("Please upload a PDF or PowerPoint file");
        return;
      }
      // Validate file size (10MB)
      if (file.size > 10 * 1024 * 1024) {
        setErrors("File size must be less than 10MB");
        return;
      }
      setPitchDeckFile(file);
      setErrors("");
      handleProjectChange("pitchDeck", file);
    }
  };

  const handleRemoveMember = (index: number) => {
    if (members.length > 1) {
      setMembers(members.filter((_, i) => i !== index));
    }
  };

  const handleProjectChange = (
    field: keyof ProjectData,
    value: string | File
  ) => {
    if (field === "projectDescription") {
      const words = (value as string)
        .trim()
        .split(/\s+/)
        .filter((w) => w.length > 0).length;
      setWordCount(words);
      if (words > 100) {
        setErrors("Project description cannot exceed 100 words");
        return;
      }
      setErrors("");
    }
    setProject({ ...project, [field]: value });
  };

  const validateForm = () => {
    // Validate members
    for (let i = 0; i < members.length; i++) {
      const member = members[i];
      if (
        !member.firstName.trim() ||
        !member.lastName.trim() ||
        !member.email.trim() ||
        !member.phone.trim() ||
        !member.institution.trim() ||
        !member.grade ||
        !member.tShirtSize
      ) {
        setErrors(`Please fill all required fields for Member ${i + 1}`);
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(member.email)) {
        setErrors(`Invalid email for Member ${i + 1}`);
        return false;
      }
    }

    // Validate project
    if (!project.projectName.trim()) {
      setErrors("Project name is required");
      return false;
    }
    if (!project.projectType) {
      setErrors("Project type is required");
      return false;
    }
    if (!project.projectDescription.trim()) {
      setErrors("Project description is required");
      return false;
    }
    if (wordCount > 100) {
      setErrors("Project description cannot exceed 100 words");
      return false;
    }
    if (!project.pitchDeck) {
      setErrors("Pitch deck PDF is required");
      return false;
    }

    setErrors("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors("");

    if (!validateForm()) {
      return;
    }

    try {
      let pitchDeckUrl = "";

      // ✅ Upload to ImageKit
      if (pitchDeckFile) {
        pitchDeckUrl = await uploadToImageKit(pitchDeckFile);
      }

      const formData = {
        team: {
          team_name: project.projectName,
          members: members.map((member) => ({
            full_name: `${member.firstName} ${member.lastName}`,
            email: member.email,
            phone: member.phone,
            institution: member.institution,
            grade: member.grade,
            t_shirt_size: member.tShirtSize,
          })),
        },
        project: {
          project_name: project.projectName,
          project_type: project.projectType,
          project_description: project.projectDescription,
          pitch_deck: pitchDeckUrl,
          video_link: project.videoLink || null,
        },
      };
      // console.log(JSON.stringify(formData, null, 2));

      const response = await fetch(
        "https://innoversebd.bdix.cloud/api/tanvin-award/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        console.error("Validation Errors:", result);

        // Recursive function to safely extract the first error message
        const findFirstError = (obj: unknown): string | null => {
          if (!obj) return null;

          // If it's an array, return the first string element
          if (Array.isArray(obj)) {
            const first = obj[0];
            return typeof first === "string" ? first : null;
          }

          // If it's an object, go deeper into its properties
          if (typeof obj === "object") {
            for (const key of Object.keys(obj as Record<string, unknown>)) {
              const val = (obj as Record<string, unknown>)[key];
              const nested = findFirstError(val);
              if (nested) {
                return `${key}: ${nested}`;
              }
            }
          }

          return null;
        };

        const firstErrorMessage =
          findFirstError(result.errors) || "Unknown validation error.";

        showCustomError(firstErrorMessage);
        return;
      }

      toast.success(result.message || "Registration successful!");

      // store a short-lived flag
      localStorage.setItem("registration_access", "true");
      localStorage.setItem("registration_message", result.message);

      // redirect after short delay
      setTimeout(() => {
        router.push("/success");
      }, 1500);

      setMembers([
        {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          institution: "",
          grade: "",
          tShirtSize: "",
        },
      ]);
      setProject({
        projectName: "",
        projectType: "",
        projectDescription: "",
        pitchDeck: null,
        videoLink: "",
      });
      setWordCount(0);
    } catch (err) {
      console.error(err);
      setErrors(
        err instanceof Error
          ? err.message
          : "An error occurred during submission"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-primary-background py-12 px-4 ">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-[#323232] mb-2">
          Project Showcasing Registration
        </h1>
        <p className="text-[#60a657] text-lg ">
          Join our ecosystem and showcase your innovative project to win the
          lucrative award!
        </p>
      </div>
      <div className="max-w-4xl mx-auto font-roboto">
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Team Members Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 ">
                Team Members
              </h2>

              <div className="mb-6 mt-2 text-yellow-700 bg-yellow-100 border border-yellow-400 rounded-lg p-3 text-sm">
                ⚠️ The Member 1 is the Team Leader. Maximum team size is up to 4
                members.
              </div>

              <div className="space-y-6">
                {members.map((member, index) => (
                  <div
                    key={index}
                    className=" rounded-lg p-6 border border-dark-accent/10"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-gray-700">
                        Member {index + 1}
                      </h3>
                      {members.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveMember(index)}
                          className="text-red-500 hover:text-red-700 font-semibold text-sm"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          value={member.firstName}
                          placeholder="First Name"
                          onChange={(e) =>
                            handleMemberChange(
                              index,
                              "firstName",
                              e.target.value
                            )
                          }
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-lime-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={member.lastName}
                          onChange={(e) =>
                            handleMemberChange(
                              index,
                              "lastName",
                              e.target.value
                            )
                          }
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-lime-500"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={member.email}
                        onChange={(e) =>
                          handleMemberChange(index, "email", e.target.value)
                        }
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-lime-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Contact Number
                        </label>
                        <input
                          type="tel"
                          placeholder="Contact Number"
                          value={member.phone}
                          onChange={(e) =>
                            handleMemberChange(index, "phone", e.target.value)
                          }
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-lime-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Institution Name
                        </label>
                        <input
                          type="text"
                          value={member.institution}
                          placeholder="Institution Name"
                          onChange={(e) =>
                            handleMemberChange(
                              index,
                              "institution",
                              e.target.value
                            )
                          }
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-lime-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Grade
                        </label>
                        <select
                          value={member.grade}
                          onChange={(e) =>
                            handleMemberChange(index, "grade", e.target.value)
                          }
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-lime-500"
                        >
                          <option value="">Select Grade</option>
                          {GRADES.map((grade) => (
                            <option key={grade.value} value={grade.value}>
                              {grade.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          T-Shirt Size
                        </label>
                        <select
                          value={member.tShirtSize}
                          onChange={(e) =>
                            handleMemberChange(
                              index,
                              "tShirtSize",
                              e.target.value
                            )
                          }
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-lime-500"
                        >
                          <option value="">Select Size</option>
                          {T_SHIRT_SIZES.map((size) => (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {members.length < 4 && (
                <div className="flex items-center justify-center">
                  <button
                    type="button"
                    onClick={handleAddMember}
                    className="mt-4 w-fit border border-primary cursor-pointer py-3 px-6 bg-transparent text-primary font-semibold rounded-lg  transition"
                  >
                    + Add Member
                  </button>
                </div>
              )}
            </div>

            {/* Project Information Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Project Information
              </h2>
              <div className=" rounded-lg p-6 border-2 border-dark-accent/10 grid grid-cols-2 gap-4 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Name
                  </label>
                  <input
                    type="text"
                    value={project.projectName}
                    onChange={(e) =>
                      handleProjectChange("projectName", e.target.value)
                    }
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-lime-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    value={project.projectType}
                    onChange={(e) =>
                      handleProjectChange("projectType", e.target.value)
                    }
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-lime-500"
                  >
                    <option value="">Select Project Type</option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Proposal Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Submit Your Proposal
              </h2>
              <div className="bg-lime-50 rounded-lg p-6 border-2 border-lime-200 space-y-4">
                <p className="text-sm text-gray-600 mb-4">
                  Please prepare your pitch deck that clearly represents your
                  project, with demo of the project (video & images) and
                  explanation of the project
                </p>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Description (Max 100 words)
                  </label>
                  <textarea
                    placeholder="Describe your project..."
                    value={project.projectDescription}
                    onChange={(e) =>
                      handleProjectChange("projectDescription", e.target.value)
                    }
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-lime-500 resize-none"
                    rows={4}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Word count: {wordCount}/100
                  </p>
                </div>

                {/* <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Attach your Pitch Deck (PDF - Max 10MB)
                  </label>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        if (file.size > 10 * 1024 * 1024) {
                          setErrors("PDF file size cannot exceed 10MB");
                          return;
                        }
                        setErrors("");
                        handleProjectChange("pitchDeck", file);
                      }
                    }}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-lime-500"
                  />
                  {project.pitchDeck && (
                    <p className="text-xs text-green-600 mt-1">
                      ✓ {project.pitchDeck.name}
                    </p>
                  )}
                </div> */}

                <div>
                  <label className="block text-sm font-medium mb-2 text-dark-accent">
                    Attach your pitch deck (PDF, PPT, max 10MB){" "}
                    <span className="text-primary">*</span>
                  </label>
                  <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200 ${
                      dragActive
                        ? "border-primary bg-secondary-background"
                        : "border-dim-background bg-white hover:border-primary hover:bg-dim-background/30"
                    }`}
                    onDragEnter={() => setDragActive(true)}
                    onDragLeave={() => setDragActive(false)}
                    onDrop={() => setDragActive(false)}
                  >
                    <input
                      type="file"
                      accept=".pdf,.ppt,.pptx"
                      onChange={handleFileChange}
                      required
                      className="hidden"
                      id="pitch-deck-input"
                    />
                    <label
                      htmlFor="pitch-deck-input"
                      className="cursor-pointer block"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <svg
                          className="w-12 h-12 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p className="font-semibold text-dark-accent text-lg">
                          {pitchDeckFile
                            ? pitchDeckFile.name
                            : "Click to upload or drag and drop"}
                        </p>
                        <p className="text-sm text-secondary">
                          PDF or PowerPoint (max 10MB)
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Attach your Video Link (Optional)
                  </label>
                  <input
                    type="url"
                    placeholder="https://youtube.com/..."
                    value={project.videoLink}
                    onChange={(e) =>
                      handleProjectChange("videoLink", e.target.value)
                    }
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-lime-500"
                  />
                </div>
              </div>
            </div>

            {/* Error Message */}
            {errors && (
              <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
                <p className="text-red-600 text-sm font-semibold">{errors}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-fit cursor-pointer py-3 px-6 bg-lime-500 text-white font-bold text-lg rounded-lg hover:bg-lime-600 transition"
            >
              {isLoading ? "Submitting..." : "Submit Registration"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
