import Link from "next/link";

const HomeTimeVenue = () => {
  return (
    <section className="w-full bg-dark-accent py-12 sm:py-16">
      <div className="container mx-auto flex flex-col gap-8 sm:gap-10 px-4">
        {/* Heading */}
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-snug">
          Student, innovator, entrepreneur, educator, or dreamer — no matter who
          you are,
        </h2>

        {/* Main Title */}
        <h2 className="uppercase font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
          Innoverse is <br />
          <span className="text-primary">Your Universe</span>
        </h2>

        {/* Description */}
        <p className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-white lg:max-w-[85%] leading-relaxed">
          Innoverse sparks curiosity and fuels a love for science and
          technology. Whether you’re an innovator, entrepreneur, educator, or
          dreamer, this carnival is your space to explore, connect, and be
          inspired.
        </p>

        {/* Info Cards */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 lg:justify-between">
          {/* Date & Venue */}
          <div className="bg-white text-secondary px-6 lg:justify-center sm:px-8 py-5 rounded-lg xs:rounded-full w-fit  lg:rounded-lg flex flex-col xs:flex-row lg:flex-col gap-4 xs:gap-10 lg:gap-4 border-2 border-black">
            <div className="flex gap-3 sm:gap-4 items-center">
              <img
                src="/home/calendar-icon.svg"
                alt=""
                className="w-6 sm:w-8 min-w-[30px]"
              />
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
                November 7, 2025
              </h3>
            </div>
            <div className="flex gap-3 sm:gap-4 items-center">
              <img
                src="/home/venue-icon.svg"
                alt=""
                className="w-6 sm:w-8 min-w-[30px]"
              />
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
                Venue: BUET
              </h3>
            </div>
          </div>

          {/* Highlight Box */}
          <div className="flex-1 bg-primary text-white px-6 sm:px-8 py-5 rounded-lg border-2 border-black">
            <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl">
              Mark Your Universe!
            </h1>
            <p className="text-black font-semibold text-base sm:text-lg md:text-xl mt-2 leading-relaxed">
              Mark your calendars! Innoverse Bangladesh 2025 is set to bring
              together students, innovators, entrepreneurs, and educators for a
              landmark day of discovery, creativity, and connection.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="w-full my-10 sm:my-12 flex items-center justify-center">
          <Link
            href="/register"
            className="bg-gradient-to-r from-[#79BF0D] to-[#92F000] transition-all hover:-translate-y-1 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-lg sm:text-xl md:text-2xl font-bold rounded-full shadow-lg"
          >
            REGISTER NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeTimeVenue;
