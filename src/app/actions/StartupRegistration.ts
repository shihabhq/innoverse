"use server";

interface RegistrationData {
  companyName: string;
  phoneNumber: string;
  email: string;
  officeAddress: string;
  website: string;
  socialMedia: string;
  industry: string;
  representativeName: string;
  personalPhone: string;
  personalEmail: string;
  presentAddress: string;
  productStage: string;
  description: string;
  pitchDeckUrl: string;
  videoLink: string;
}

export async function submitRegistration(data: RegistrationData) {
  try {
    const GOOGLE_APPS_SCRIPT_URL =
      process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;

    if (!GOOGLE_APPS_SCRIPT_URL) {
      throw new Error("Google Apps Script URL is not configured");
    }

    console.log(data);

    // Remove mode: "no-cors" to get proper responses
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      redirect: "follow", // Google Apps Script uses redirects
    });

    // Check if response is ok
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Google Sheets response:", result);

    if (!result.success) {
      throw new Error(result.error || "Failed to submit registration");
    }

    return { success: true, message: "Registration submitted successfully" };
  } catch (error) {
    console.error("Registration submission error:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Failed to submit registration. Please try again."
    );
  }
}
