import React from "react";

const HomeSupporterCard = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className="bg-white transition-all hover:-translate-y-1 p-4 md:min-w-[260px] h-[165px] py-4 px-10 flex items-center shadow-sm justify-center ">
      <img src={imgSrc} className=" w-[100px] xs:w-fit max-w-[180px] " alt="" />
    </div>
  );
};

export default HomeSupporterCard;
