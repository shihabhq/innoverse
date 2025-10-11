import React from "react";

const HomeHeroSection = () => {
  return (
    <section className="w-full relative min-h-screen overflow-hidden">
      <div className="max-w-[1400px] @container mx-auto py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
        {/* Main Title */}
        <h2 className="uppercase font-bold leading-none text-left text-[35px] xs:text-[40px] sm:text-[60px] md:text-[80px] lg:text-[120px] xl:text-[155px] 2xs:whitespace-nowrap">
          Innoverse Bangladesh
        </h2>

        {/* Year */}
        <h2 className="text-primary text-[80px] sm:text-[90px] md:text-[120px] lg:text-[150px] xl:text-[180px] leading-none font-bold tracking-[0.3rem] sm:tracking-[0.6rem] md:tracking-[0.9rem] lg:tracking-[1.2rem]">
          2025
        </h2>

        {/* VR Man Image - Positioned differently on mobile/tablet */}
        <div className="hidden sm:block absolute bottom-1 left-1/2 -translate-x-1/2 w-[90%] lg:w-[800px]">
          <img src="/home/vr-man3.png" className="w-full" alt="VR Man" />
        </div>

        {/* Mobile/Tablet VR Man - Centered and smaller */}
        <div className="block sm:hidden  mx-auto w-full xs:w-[90%]">
          <img src="/home/vr-man3.png" className="w-full" alt="VR Man" />
        </div>

        {/* Organizers Info */}
        <div className="mt-2 md:mt-6 z-10 relative">
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">
            Jointly organized by{" "}
            <span className="text-secondary">WhiteBoard Initiatives</span> &{" "}
            <span className="text-secondary">a2i</span>
          </h3>
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
            Powered By{" "}
            <span className="font-extrabold">ICT Division of Bangladesh.</span>
          </h3>
        </div>

        {/* Start Date Box */}
        <div className="flex lg:flex-row sm:flex-col justify-start gap-4 lg:items-center z-20 mt-2 md:mt-10">
          <div className="p-3 z-20 sm:p-4 bg-primary text-white rounded-sm w-full sm:w-[250px] ">
            <h2 className="text-5xl md:text-6xl xl:text-7xl font-extrabold">
              10+
            </h2>
            <h3 className="text-lg font-semibold">Dynamic Experiences</h3>
          </div>
          <div className="p-3 z-20 sm:p-4 bg-primary text-white rounded-sm w-full sm:w-[260px] ">
            <h2 className="text-5xl md:text-6xl xl:text-7xl font-extrabold">
              8+
            </h2>
            <h3 className="text-lg font-semibold">Challenging Competitions</h3>
          </div>
        </div>

        {/* Statistics Boxes - Stacked on mobile, positioned on desktop */}
        <div className="absolute top-[15%] md:top-[30%] right-[5%] lg:right-[8%] xl:right-[10%] flex flex-col gap-3 sm:gap-4 z-10">
          <div className="p-3 sm:p-4 bg-primary text-white mt-4 rounded-sm w-fit z-10 relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold">
              Starts At
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold">
              7 NOV, 2025
            </h2>
          </div>
          <div className="p-3 hidden sm:block sm:p-4 bg-primary text-white mt-4 rounded-sm w-fit z-10 relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold">
              VENUE At
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold">
              BUET
            </h2>
          </div>
        </div>
        <div className="p-3 block sm:hidden absolute left-4 top-[30%] sm:p-4 bg-primary text-white mt-4 rounded-sm w-fit z-10 ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold">
            VENUE At
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold">
            BUET
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
