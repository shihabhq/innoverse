import React from "react";

const RegistrationLeftDetailText = ({ text }: { text: string }) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white mt-1" />
      <p className="text-sm lg:text-xl leading-relaxed">{text}</p>
    </div>
  );
};

export default RegistrationLeftDetailText;
