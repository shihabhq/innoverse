import { StartupRegistrationForm } from "@/components/StartupRegistrationForm";

export default function RegistrationPage() {
  return (
    <main className="min-h-screen bg-[#f6f6f6] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-[#323232] mb-2">
            Startup Registration
          </h1>
          <p className="text-[#60a657] text-lg">
            Join our ecosystem and showcase your innovative startup
          </p>
        </div>

        {/* Registration Form */}
        <StartupRegistrationForm />

        {/* Footer Info */}
        <div className="mt-12 text-center text-sm text-[#60a657]">
          <p>
            We review all applications carefully. You will receive updates via
            email.
          </p>
        </div>
      </div>
    </main>
  );
}
