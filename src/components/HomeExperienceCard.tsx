import { HomeExperience } from "@/types/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HomeExperienceCard = ({
  title,
  description,
  imgSrc,
  link,
}: HomeExperience) => {
  return (
    <div className="p-5 z-20 sm:p-6 md:p-7 relative shadow-[-8px_8px_30px_0_rgba(0,0,0,0.2)] border-2 flex flex-col gap-3 border-secondary rounded-lg">
      {/* Image */}
      <img className="w-16 sm:w-20 md:w-[90px]" src={imgSrc} alt={title} />

      {/* Title */}
      <h3 className="font-extrabold text-base sm:text-xl md:text-2xl">{title}</h3>

      {/* Description */}
      <p className="text-[12px] sm:text-base md:text-lg font-semibold leading-relaxed">
        {description}
      </p>

      {/* Arrow Link */}
      <div className="absolute right-2 bottom-2">
        <Link href={link}>
          <ArrowRight
            size={28}
            className=" p-1 text-white rounded-full bg-secondary shadow-[-2px_4px_12px_0_rgba(0,0,0,0.25)] transition-all hover:-translate-y-1"
          />
        </Link>
      </div>
     
    </div>
  );
};

export default HomeExperienceCard;
