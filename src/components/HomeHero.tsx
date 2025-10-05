import Link from "next/link";

const HomeHero = () => {
  return (
    <section className="w-full min-h-[80vh] relative md:flex items-center my-12">
      <div className="w-full flex items-center justify-center md:absolute inset-0 md:opacity-20 md:py-6">
        <img
          src="/home/innoverse-logo.svg"
          className="w-fit max-w-[330px] md:max-w-full  md:w-full h-full bg-center"
          alt=""
        />
      </div>
      <div className="w-full z-20 flex items-center justify-start">
        <div className=" px-10 sm:w-[80%] mx-auto">
          <h2 className="font-extrabold hidden md:block text-7xl uppercase">
            Innoverse <br />
            Bangladesh 2025
          </h2>
          <h3 className="mt-4 text-xl hidden md:block font-bold">
            Bangladesh’s biggest national science and technology carnival is
            here!{" "}
          </h3>
          <div className="mt-6 ">
            <h3 className="text-xl font-bold">
              Jointly organized by{" "}
              <span className="text-secondary">WhiteBoard Initiatives</span> &{" "}
              <span className="text-secondary">a2i</span>
            </h3>
            <h3 className="text-xl font-semibold">
              Powered By{" "}
              <span className="font-extrabold">
                ICT Division of Bangladesh.
              </span>{" "}
            </h3>
          </div>
          <div className="mt-6 flex justify-between flex-wrap xs:justify-start items-center gap-2 sm:gap-6">
            <Link
              href="/register"
              className="flex items-center px-4 sm:px-7 lg:px-8 py-3  text-white bg-[linear-gradient(-93deg,#92F000,#79BF0D)] font-semibold text-lg sm:text-xl lg:text-2xl rounded-full hover:-translate-y-1 transition-transform"
            >
              <span className="mr-2">Register Now</span>{" "}
            </Link>
            <Link
              href="/learn-more"
              className="flex items-center px-4 sm:px-7 lg:px-8 py-3  text-white bg-[linear-gradient(90deg,#0A0A0A,#4A4A4A)] font-semibold text-lg sm:text-xl lg:text-2xl rounded-full hover:-translate-y-1 transition-transform"
            >
              <span className="mr-2">Learn More</span>{" "}
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="rotate-[-90deg] absolute -right-30 md:-right-50 bottom-100 md:bottom-60 text-secondary  md:font-light text-7xl md:text-9xl lg:text-[120px] opacity-10">
        <h2>
          WHITEBOARD <br /> INITIATIVES
        </h2>
      </div> */}
    </section>
  );
};

export default HomeHero;
