import { MapPin, Calendar, Clock } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen md:py-16">
      <section className="relative px-6 py-20 md:py-32 max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center">
          A New Stage For <span className="text-primary">Innovation</span>
        </h1>
        <p
          className="max-w-5xl text-center mx-auto py-10 text-lg md:text-xl leading-relaxed mb-8 text-pretty"
          style={{ color: "var(--color-dark-accent)" }}
        >
          It is with great pride that we present{" "}
          <span
            className="font-semibold"
            style={{ color: "var(--color-primary)" }}
          >
            City Bank Presents Innoverse Bangladesh 2025: National Science &
            Technology Carnival
          </span>
          , the nation&apos;s largest celebration of innovation, research, and
          youth-driven excellence. Jointly organized by WhiteBoard Initiatives,
          in Collaboration with a2i & Muslim Tech Fest, Supported by ICT
          Division, this landmark two-day carnival will unite students,
          researchers, entrepreneurs, start-ups, and industry leaders in a
          vibrant festival of ideas, discovery, and future-shaping
          conversations.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
          {/* Card 1 - Location */}
          <div className="relative h-full mx-auto w-full max-w-[280px]">
            <div className="absolute -bottom-3 -left-3 w-full h-full border-[6px] border-orange-600 rotate-2"></div>

            <div className="relative bg-primary-background border-[6px] border-cyan-400   p-8 rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="flex flex-col h-full min-h-[260px]">
                <p className="text-base text-center uppercase font-medium text-gray-800 mb-4">
                  See you at
                </p>
                <h2 className="text-8xl text-center font-bold mb-auto leading-tight">
                  BUET
                </h2>
                <div className="mt-8 flex justify-end">
                  <MapPin className="w-9 h-9" strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Date */}
          <div className="relative mx-auto h-full w-full max-w-[280px]">
            <div className="absolute -bottom-3 -left-3 w-full h-full border-[6px] border-cyan-400 rotate-2"></div>

            <div className="relative bg-primary-background border-[6px] border-yellow-400 p-8 rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="flex flex-col h-full min-h-[260px]">
                <p className="text-base text-center uppercase font-medium text-gray-800 mb-4">
                  A Date In Your Diary
                </p>
                <h2 className="text-5xl text-center font-bold mb-auto leading-tight">
                  14 - 15 November, <br /> 2025
                </h2>
                <div className="mt-8 flex justify-end">
                  <Calendar className="w-9 h-9" strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Time */}
          <div className="relative mx-auto w-full max-w-[280px]">
            <div className="absolute -bottom-3 -left-3 w-full h-full border-[6px] border-yellow-400 rotate-2"></div>

            <div className="relative bg-primary-background border-[6px] border-red-400 p-8 rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="flex flex-col h-full min-h-[260px]">
                <p className="text-base text-center uppercase font-medium text-gray-800 mb-4">
                  The fun starts at
                </p>
                <h2 className="text-5xl font-bold mb-auto leading-tight">
                  8am - 6pm
                </h2>
                <div className="mt-8 flex justify-end">
                  <Clock className="w-9 h-9" strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
