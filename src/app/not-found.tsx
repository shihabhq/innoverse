import Link from "next/link";

export default function NotFound() {
  return (
    <section className="w-full h-[80vh] flex items-center justify-center px-4 sm:px-6">
      <div className="text-center">
        {/* Big 404 */}
        <h1
          className="text-[8rem] sm:text-[10rem] md:text-[20rem] font-concert font-extrabold 
          bg-gradient-to-b from-[#7ccc00] to-[#f2f2e8] 
          bg-clip-text text-transparent leading-[1]"
        >
          404
        </h1>

        {/* Oops */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-8xl -mt-16 sm:-mt-20 md:-mt-40 font-bold text-dark-accent">
          Oops!
        </h2>

        {/* Message */}
        <p className="text-base sm:text-lg md:text-3xl text-dark-accent mt-4">
          Page Not Found
        </p>
        <p className="text-sm sm:text-base md:text-xl text-gray-500 mt-2">
          Sorry about that! Please visit our homepage{" "}
          <br className="sm:hidden md:block" />
          to get to where you need to go.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-6 bg-[linear-gradient(-93deg,#92F000,#79BF0D)] inline-block shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-medium hover:-translate-y-1 transition-all"
        >
          Back to Homepage
        </Link>
      </div>
    </section>
  );
}
