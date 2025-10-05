import type React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="mt-4 p-4 bg-red-50 rounded-md">
      <p className="text-sm text-red-600 text-center">{message}</p>
    </div>
  );
};

export default ErrorMessage;
