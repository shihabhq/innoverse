import { HomeEvent } from "@/types/types";
import Link from "next/link";

const HomeEventsCard = (event: HomeEvent) => {
  return (
    <div className="relative max-w-[240px] justify-self-center hover:scale-[1.01] transition-transform">
      <div className="absolute border-2  border-black h-full w-full p-4 -left-2 -bottom-2 rounded-lg"></div>
      <div className="flex flex-col min-h-[250px] md:min-h-fit bg-primary-background items-center border-2 border-black rounded-lg px-2 py-4 gap-3 relative z-10">
        <img src={event.src} className="w-[80px] h-[80px]" alt="" />
        <Link href={event.href} className="hover:underline font-extrabold text-lg text-center lg:whitespace-nowrap">{event.title}</Link>
        <p className="text-center font-medium text-sm line-clamp-4">{event.description}</p>
      </div>
    </div>
  );
};

export default HomeEventsCard;
