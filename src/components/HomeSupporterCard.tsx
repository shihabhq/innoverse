import React from "react";

const HomeSupporterCard = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className="bg-[#F2F2E8] transition-all hover:-translate-y-1 p-4 md:min-w-[260px] h-[165px] py-4 px-10 flex items-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] justify-center rounded-lg">
      <img src={imgSrc} className=" w-[100px] xs:w-fit max-w-[180px] " alt="" />
    </div>
  );
};

export default HomeSupporterCard;
