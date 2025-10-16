"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const flag = localStorage.getItem("registration_access");
    const msg = localStorage.getItem("registration_message");

    if (flag === "true" && msg) {
      setMessage(msg);
      setIsValid(true);
    } else {
      router.replace("/"); // redirect if accessed directly
    }

    // 🧹 When user leaves this page, remove access
    const handleUnload = () => {
      localStorage.removeItem("registration_access");
      localStorage.removeItem("registration_message");
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, [router]);

  if (!isValid) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-center p-6">
      <h1 className="text-3xl font-semibold text-green-700 mb-4">
        🎉 Registration Successful!
      </h1>
      <p className="text-lg text-gray-700 max-w-md">{message}</p>

      <button
        onClick={() => router.push("/")}
        className="mt-6 px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
      >
        Go Home
      </button>
    </div>
  );
}
