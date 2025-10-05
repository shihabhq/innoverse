import { ReactNode } from "react";

const RegistrationLeftHeader = ({
  title,
  text,
}: {
  title: string | ReactNode;
  text: string;
}) => {
  return (
    <>
      <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-balance">
        {title}
      </h1>
      <p className="text-lg lg:text-2xl mb-12 text-balance">{text}</p>
    </>
  );
};

export default RegistrationLeftHeader;
