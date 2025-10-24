"use client";

import type React from "react";
import { useState } from "react";
import { submitRegistration } from "@/app/actions/StartupRegistration";
import uploadToImageKit from "@/app/actions/imagekit";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface FormData {
  // Company Details
  companyName: string;
  phoneNumber: string;
  email: string;
  officeAddress: string;
  website: string;
  socialMedia: string;
  industry: string;
  // Representative Details
  representativeName: string;
  personalPhone: string;
  personalEmail: string;
  presentAddress: string;
  // Product Details
  productStage: string;
  // Proposal
  description: string;
  videoLink: string;
}

export function StartupRegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    phoneNumber: "",
    email: "",
    officeAddress: "",
    website: "",
    socialMedia: "",
    industry: "",
    representativeName: "",
    personalPhone: "",
    personalEmail: "",
    presentAddress: "",
    productStage: "",
    description: "",
    videoLink: "",
  });

  const router = useRouter();

  const [pitchDeckFile, setPitchDeckFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [dragActive, setDragActive] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Update word count for description
    if (name === "description") {
      const words = value
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0).length;
      setWordCount(words);
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, productStage: e.target.value }));
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
        setError("Please upload a PDF or PowerPoint file");
        return;
      }
      // Validate file size (10MB)
      if (file.size > 10 * 1024 * 1024) {
        setError("File size must be less than 10MB");
        return;
      }
      setPitchDeckFile(file);
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (wordCount > 100) {
        setError("Description must not exceed 100 words");
        setIsLoading(false);
        return;
      }

      let pitchDeckUrl = "";

      // ✅ Upload to ImageKit
      if (pitchDeckFile) {
        pitchDeckUrl = await uploadToImageKit(pitchDeckFile);
      }

      // ✅ Submit data to Google Sheets or backend
      const res = await submitRegistration({
        ...formData,
        pitchDeckUrl,
      });
      // console.log("Registration success:", res);

      // ✅ Reset form
      setSuccess(true);
      setFormData({
        companyName: "",
        phoneNumber: "",
        email: "",
        officeAddress: "",
        website: "",
        socialMedia: "",
        industry: "",
        representativeName: "",
        personalPhone: "",
        personalEmail: "",
        presentAddress: "",
        productStage: "",
        description: "",
        videoLink: "",
      });
      setPitchDeckFile(null);
      setWordCount(0);

      setTimeout(() => setSuccess(false), 5000);
      toast.success(res.message || "Registration successful!");

      // store a short-lived flag
      localStorage.setItem("registration_access", "true");
      localStorage.setItem("registration_message", res.message);

      // redirect after short delay
      setTimeout(() => {
        router.push("/success");
      }, 1500);
    } catch (err) {
      console.error(err);
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred during submission"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 max-w-5xl mx-auto font-roboto"
    >
      {success && (
        <div className="rounded-lg p-4 bg-secondary-background border-2 border-primary">
          <p className="font-semibold text-dark-accent">
            Registration submitted successfully! We will review your application
            soon.
          </p>
        </div>
      )}

      {error && (
        <div className="rounded-lg p-4 bg-red-100 border-2 border-red-500">
          <p className="font-semibold text-red-700">{error}</p>
        </div>
      )}

      <div className="rounded-lg border-2 border-dim-background p-6 bg-white shadow-sm">
        <h2 className="text-2xl font-bold mb-2 text-dark-accent">
          Company/Startup Details
        </h2>
        <p className="text-sm mb-6 text-secondary">
          Provide information about your startup
        </p>
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium mb-2 text-dark-accent">
                Company/Startup Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
                placeholder="Enter company name"
                className="w-full px-4 py-3 border-2 border-dim-background rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white text-dark-accent placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-dark-accent">
                Phone Number <span className="text-primary">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                placeholder="Enter phone number"
                className="w-full px-4 py-3 border-2 border-dim-background rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white text-dark-accent placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-dark-accent">
                Email Address <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter email address"
                className="w-full px-4 py-3 border-2 border-dim-background rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white text-dark-accent placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-dark-accent">
                Office Address <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="officeAddress"
                value={formData.officeAddress}
                onChange={handleInputChange}
                required
                placeholder="Enter office address"
                className="w-full px-4 py-3 border-2 border-dim-background rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white text-dark-accent placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-dark-accent">
                Startup Website
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="https://example.com"
                className="w-full px-4 py-3 border-2 border-dim-background rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white text-dark-accent placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-dark-accent">
                Social Media Page <span className="text-primary">*</span>
              </label>
              <input
                type="url"
                name="socialMedia"
                value={formData.socialMedia}
                onChange={handleInputChange}
                required
                placeholder="Enter social media URL"
                className="w-full px-4 py-3 border-2 border-dim-background rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white text-dark-accent placeholder:text-gray-400"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2 text-dark-accent">
                Industry / Sector <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                required
                placeholder="Enter industry or sector"
                className="w-full px-4 py-3 border-2 border-dim-background rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white text-dark-accent placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border-2 border-dim-background p-6 bg-white shadow-sm">
        <h2 className="text-2xl font-bold mb-2 text-dark-accent">
          Company Representative Personal Information
        </h2>
        <p className="text-sm mb-6 text-secondary">
          Provide details about the startup representative
        </p>
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium mb-2 text-dark-accent">
                Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="representativeName"
                value={formData.representativeName}
                onChange={handleInputChange}
                required
                placeholder="Enter full name"
                className="w-full px-4 py-3 border-2 border-dim-background rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white text-dark-accent placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-dark-accent">
                Personal Contact Number <span className="text-primary">*</span>
              </label>
              <input
                type="tel"
                name="personalPhone"
                value={formData.personalPhone}
                onChange={handleInputChange}
                required
                placeholder="Enter contact number"
                className="w-full px-4 py-3 border-2 border-dim-background rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white text-dark-accent placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-dark-accent">
                Email Address <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                name="personalEmail"
                value={formData.personalEmail}
                onChange={handleInputChange}
                required
                placeholder="Enter email address"
                className="w-full px-4 py-3 border-2 border-dim-background rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white text-dark-accent placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-dark-accent">
                Present Address <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="presentAddress"
                value={formData.presentAddress}
                onChange={handleInputChange}
                required
                placeholder="Enter present address"
                className="w-full px-4 py-3 border-2 border-dim-background rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white text-dark-accent placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border-2 border-dim-background p-6 bg-white shadow-sm">
        <h2 className="text-2xl font-bold mb-2 text-dark-accent">
          Product Details
        </h2>
        <p className="text-sm mb-6 text-secondary">Select your product stage</p>
        <div>
          <label className="block text-sm font-medium mb-2 text-dark-accent">
            Product Stage <span className="text-primary">*</span>
          </label>
          <select
            value={formData.productStage}
            onChange={handleSelectChange}
            required
            className="w-full px-4 py-3 border-2 border-dim-background rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white text-dark-accent cursor-pointer"
          >
            <option value="">Select product stage</option>
            <option value="Prototype">Prototype</option>
            <option value="Minimum Viable Product">
              Minimum Viable Product
            </option>
            <option value="Commercial Product">Commercial Product</option>
          </select>
        </div>
      </div>

      <div className="rounded-lg border-2 border-dim-background p-6 bg-white shadow-sm">
        <h2 className="text-2xl font-bold mb-2 text-dark-accent">
          Proposal Submission
        </h2>
        <p className="text-sm mb-6 text-secondary">
          Please prepare your pitch deck with demo (video & images) and project
          explanation
        </p>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-dark-accent">
              Describe your startup in 100 words{" "}
              <span className="text-primary">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              placeholder="Describe your startup..."
              maxLength={500}
              rows={5}
              className="w-full px-4 py-3 border-2 border-dim-background rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white text-dark-accent placeholder:text-gray-400 resize-none"
            />
            <p
              className={`text-xs mt-2 font-medium ${
                wordCount > 100 ? "text-red-600" : "text-secondary"
              }`}
            >
              {wordCount}/100 words
            </p>
          </div>

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
            <label className="block text-sm font-medium mb-2 text-dark-accent">
              Attach your video link
            </label>
            <input
              type="url"
              name="videoLink"
              value={formData.videoLink}
              onChange={handleInputChange}
              placeholder="https://youtube.com/watch?v=..."
              className="w-full px-4 py-3 border-2 border-dim-background rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white text-dark-accent placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4 pb-8">
        <button
          type="submit"
          disabled={isLoading}
          className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          {isLoading ? "Submitting..." : "Submit Registration"}
        </button>
      </div>
    </form>
  );
}
