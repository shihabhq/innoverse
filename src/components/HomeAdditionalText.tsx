import Link from "next/link";

const HomeAdditionalText = () => {
  return (
    <section className="bg-[#7ED321] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 md:ml-6 leading-tight">
          Be There When History Sparks
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-6 sm:mb-8 leading-relaxed">
          Don&apos;t miss your chance to be part of Bangladesh&apos;s biggest
          science & technology carnival.{" "}
          <span className="hidden sm:inline">
            <br />
          </span>
          Register now to unlock a world of opportunities, from competition to
          networking and exploration.
        </p>

        {/* Quote Box */}
        <blockquote className="border-l-4 border-white pl-3 sm:pl-4 md:pl-6 py-4 sm:py-6 my-6 sm:my-8">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold text-dark-accent leading-snug sm:leading-normal">
            &quot;Whether you want to{" "}
            <span className="font-extrabold text-white">
              compete, showcase, network, or just explore,
            </span>{" "}
            there&apos;s a space for YOU.&quot;
          </p>
        </blockquote>

        {/* Bottom Text */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
          Innoverse 2025 is more than just an event; it&apos;s a movement
          towards a more innovative and technologically advanced Bangladesh.
          Your presence contributes to making history.
        </p>

        {/* Button */}
        <div className="flex justify-center md:justify-start">
          <Link
            href="#register"
            className="inline-block bg-[linear-gradient(90deg,#0A0A0A,#4A4A4A)] text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-md hover:opacity-90 transition-opacity duration-200"
          >
            REGISTER NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeAdditionalText;
