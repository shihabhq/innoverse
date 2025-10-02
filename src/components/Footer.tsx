import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="w-full mt-20 bg-dark-accent px-3 sm:px-6">
        <div className="flex py-4 border-l-4 sm:border-l-[10px] border-l-[#F2F2E8] gap-4 lg:gap-10 items-center">
          <h2 className="font-extrabold ml-4 lg:ml-10 text-white sm:whitespace-nowrap text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[42px] 2xl:text-[50px] 3xl:text-6xl">
            National Science & Technology Carnival{" "}
            <span className="text-primary">2025</span>
          </h2>
          <div className="flex-col hidden sm:flex items-center justify-center font-extrabold uppercase text-[#60A657]/20 text-[12px] sm:text-xl md:text-2xl lg:text-3xl 2xl:text-[44px] 3xl:text-5xl">
            <h3 className="tracking-[.13em]">Innoverse</h3>
            <h3>Bangladesh</h3>
          </div>
        </div>
      </div>

      <footer className="w-[90%] mx-auto items-end text-dark-accent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 px-3 sm:px-6 py-6 sm:py-8 lg:pt-12 lg:pb-24">
        {/* Column 1 */}
        <div>
          <div>
            <img
              src="/shared/black-logo.png"
              alt="whiteboard Dark Logo"
              className="w-full max-w-[160px] sm:max-w-[180px] lg:max-w-[220px]"
            />
          </div>
          <div>
            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-2 sm:mt-0">
              Innoverse <br /> Bangladesh 2025
            </h2>
          </div>
          <div className="mt-4 sm:mt-5 lg:mt-6">
            <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">
              About Us
            </h2>
            <p className="mt-2 text-base sm:text-lg">
              Whiteboard Initiatives is a youth-led non-profit empowering teens
              through STEM, education, and social impact program.
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex w-full flex-col items-start sm:items-center gap-6 sm:gap-8 lg:gap-10">
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 w-full sm:w-auto">
            <div>
              <h2 className="font-extrabold text-2xl sm:text-3xl">
                Our Partners
              </h2>
              <ul className="list-disc font-medium text-xl sm:text-2xl list-inside mt-2 space-y-1">
                <li>a2i</li>
                <li>ictd</li>
                <li>undp</li>
              </ul>
            </div>
            <div>
              <h2 className="font-extrabold text-2xl sm:text-3xl">
                Quick Links
              </h2>
              <div className="flex flex-col gap-2 sm:gap-2 lg:gap-2 mt-3 sm:mt-4 text-lg sm:text-xl lg:text-2xl font-medium">
                <div className="flex gap-2 items-center">
                  <span>
                    <img
                      className="min-w-5 sm:min-w-6 w-5 sm:w-6"
                      src="/shared/phone-icon.svg"
                      alt=""
                    />
                  </span>
                  <p>+8801336-872870</p>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="mt-1">
                    <img
                      className="min-w-5 sm:min-w-6 w-5 sm:w-6"
                      src="/shared/location-icon.svg"
                      alt=""
                    />
                  </span>
                  <p>
                    3rd Floor, Auto One AC Market, New Eskaton Road,
                    Banglamotor, Dhaka.
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <span>
                    <img
                      className="min-w-5 sm:min-w-6 w-5 sm:w-6"
                      src="/shared/email-icon.svg"
                      alt=""
                    />
                  </span>
                  <p className="break-all">whiteboardinitiatives@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <div className="flex flex-col items-start gap-6 sm:gap-7 lg:gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-secondary font-extrabold text-2xl sm:text-3xl lg:text-4xl">
                Don&apos;t miss out —
              </h2>
              <h3 className="text-black font-semibold text-xl sm:text-2xl">
                be a part of this amazing event!
              </h3>
            </div>
            <Link
              href="/register"
              className="flex items-center px-6 sm:px-7 lg:px-8 py-3 sm:py-3.5 lg:py-4 text-white bg-[linear-gradient(-93deg,#92F000,#79BF0D)] font-semibold text-lg sm:text-xl lg:text-2xl rounded-full hover:-translate-y-1 transition-transform"
            >
              <span className="mr-2">Register Now</span>{" "}
              <ArrowRight size={20} className="sm:w-6 sm:h-6" />
            </Link>
            <div className="w-full">
              <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-black mb-4 sm:mb-5 lg:mb-6">
                FOLLOW US —{" "}
              </h2>
              <div className="w-full flex gap-6 sm:gap-8 lg:gap-12 justify-start lg:justify-between items-center">
                <a href="https://www.facebook.com/whiteboardinitiatives">
                  <img
                    src="/shared/fb-logo.svg"
                    className="w-8 sm:w-9 lg:w-10"
                    alt=""
                  />
                </a>
                <a href="https://www.twitter.com/whiteboardinitiatives">
                  <img
                    src="/shared/twitterx-logo.svg"
                    className="w-8 sm:w-9 lg:w-10"
                    alt=""
                  />
                </a>
                <a href="https://www.instagram.com/whiteboardinitiatives">
                  <img
                    src="/shared/insta-logo.svg"
                    className="w-8 sm:w-9 lg:w-10"
                    alt=""
                  />
                </a>
                <a href="https://www.linkedin.com/company/whiteboardinitiatives">
                  <img
                    src="/shared/linkedin-logo.svg"
                    className="w-8 sm:w-9 lg:w-10"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-dark-accent font-bold text-lg sm:text-xl lg:text-2xl text-gray-300 text-center py-4 sm:py-5 lg:py-6">
        © 2025 wbinitiatives. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
