"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Dynamic Experience", href: "/dynamic-experiences" },
  { name: "Competitions", href: "/competitions" },
  { name: "Shaheed Tanvin Award", href: "/award" },
  { name: "Expo", href: "/expo" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <nav
      className={`w-full fixed top-0 z-50 bg-primary-background transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between px-4 lg:px-0">
          {/* MOBILE HEADER */}
          <div className="flex w-full items-center justify-between mdl:hidden">
            <Link href={"/"} className="flex items-center gap-2">
              <img src="/contents/black-logo.png" alt="Logo" className="w-14" />
              <img
                className="w-24"
                src="/home/innoverse-logo.webp"
                alt="Innoverse"
              />
            </Link>

            <button
              className="text-primary p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* DESKTOP HEADER */}
          <div className="hidden mdl:flex items-center justify-between w-full">
            <div className="flex items-center gap-5">
              <Link href={"/"} className="flex items-center gap-2">
                <img
                  src="/contents/black-logo.png"
                  className="w-20"
                  alt="Logo"
                />
              </Link>
              <Link href={"/"}>
                <img
                  className="w-30"
                  src="/home/innoverse-logo.webp"
                  alt="Innoverse"
                />
              </Link>
            </div>

            <div className="flex items-center gap-6 justify-end flex-1">
              <div className="flex items-center justify-center gap-3 xl:gap-6">
                {navLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`group flex text-center flex-col items-center text-sm xl:text-lg font-bold transition-colors duration-300 whitespace-nowrap ${
                        isActive ? "text-primary" : "hover:text-primary"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`h-0.5 xl:h-1 rounded-full block transition-all duration-300 ${
                          isActive
                            ? "w-full bg-primary"
                            : "w-0 bg-primary group-hover:w-full"
                        }`}
                      ></span>
                    </Link>
                  );
                })}
              </div>
              <Link
                href={"/register"}
                className="shadow-sm transition-all font-bold text-sm xl:text-lg rounded-sm bg-primary px-3 xl:px-6 py-2.5 hover:-translate-y-1 text-white whitespace-nowrap"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>

        {/* MOBILE DROPDOWN */}
        {isOpen && (
          <div className="mdl:hidden bg-[linear-gradient(77deg,#F2F2E8,#FFFFFF)] shadow-lg border-t border-gray-200">
            <div className="px-4 py-6 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-base font-bold py-3 px-4 rounded-lg transition-all ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-gray-700 hover:text-primary hover:bg-gray-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4">
                <Link
                  href={"/register"}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center font-bold text-base rounded-lg bg-primary px-6 py-3.5 text-white shadow-md hover:shadow-lg transition-all active:scale-95"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
