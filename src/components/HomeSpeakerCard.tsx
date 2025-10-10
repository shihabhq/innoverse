import { HomeSpeaker } from "@/types/types";
import Link from "next/link";

const HomeSpeakerCard = (speaker: HomeSpeaker) => {
  return (
    <div className="rounded-lg z-20 flex transition-all hover:-translate-y-1 w-[300px] sm:w-[400px] flex-col gap-5 bg-white py-6 px-4 shadow-[0px_4px_4px_0_rgba(0,0,0,0.25)]">
      <div className="flex w-full items-center justify-center">
        <img
          src={speaker.image}
          className="rounded-full border-8 border-secondary"
          alt=""
        />
      </div>
      <h3 className="text-center flex-1 lg:whitespace-nowrap text-black text-2xl font-semibold">
        {speaker.name}
      </h3>
      <p className="text-center font-medium  text-dark-accent text-sm sm:text-base px-4">
        {speaker.description}
      </p>
      <div className="flex items-center justify-center gap-4">
        {speaker.linkedInLink && (
          <Link
            href={speaker.linkedInLink}
            className="hover:-translate-y-0.5 transition-all"
          >
            <img src={"/shared/linkedin-logo.svg"} className="max-w-[28px]" />
          </Link>
        )}
        {speaker.facebookLink && (
          <Link
            href={speaker.facebookLink}
            className="hover:-translate-y-0.5 transition-all"
          >
            <img src={"/shared/fb-logo.svg"} className="max-w-[32px]" />
          </Link>
        )}
        {speaker.twitterLink && (
          <Link
            href={speaker.twitterLink}
            className="hover:-translate-y-0.5 transition-all"
          >
            <img src={"/shared/twitterx-logo.svg"} className="max-w-[28px]" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default HomeSpeakerCard;
