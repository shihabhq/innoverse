import { Check } from "lucide-react";

interface Step {
  label: string;
  number: number;
}

interface StepIndicatorProps {
  currentStep: number;
  steps: Step[];
}

export default function StepIndicator({
  currentStep,
  steps,
}: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div className="flex items-center" key={step.label}>
          {/* Step Circle and Label */}
          <div key={step.label} className="flex flex-col items-center gap-2">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                currentStep > step.number
                  ? "bg-[#60a657] text-white shadow-lg"
                  : currentStep === step.number
                  ? "bg-[#79bf0d] text-white shadow-lg ring-4 ring-[#e2ffb4]"
                  : "bg-[#e5ecd9] text-gray-500"
              }`}
            >
              {currentStep > step.number ? (
                <Check className="w-6 h-6" />
              ) : (
                step.number
              )}
            </div>
            <span
              className={`text-sm font-medium transition-colors ${
                currentStep >= step.number ? "text-[#323232]" : "text-gray-400"
              }`}
            >
              {step.label}
            </span>
          </div>

          {/* Connector Line (don't show after last step) */}
          {index < steps.length - 1 && (
            <div
              className={`w-24 h-1 rounded-full transition-all duration-300 -mx-0 ${
                currentStep > step.number ? "bg-[#60a657]" : "bg-[#e5ecd9]"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
