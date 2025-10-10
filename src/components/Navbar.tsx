"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Dynamic Experience", href: "/dynamic-experience" },
  { name: "Competitions", href: "/competitions" },
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

  return (
    <nav
      className={`w-full fixed top-0 z-50 bg-primary-background transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between py-2 px-4 lg:px-0">
          {/* MOBILE HEADER */}
          <div className="flex w-full items-center justify-between py-1 mdl:hidden">
            <Link href={"/"}>
              <img src="/contents/black-logo.png" alt="Logo" className="w-16" />
            </Link>

            <Link
              href={"/"}
              className="flex flex-col items-center justify-center"
            >
              <img className="w-28" src="/home/innoverse-logo.png" alt="" />
            </Link>

            <button
              className="text-primary"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* DESKTOP HEADER */}
          <div className="hidden mdl:flex items-center justify-between w-full">
            <div className="flex items-center gap-5">
              <Link href={"/"} className="flex items-center gap-2">
                <img src="/contents/black-logo.png" className="w-20" />
              </Link>
              <Link href={"/"}>
                <img className="w-30" src="/home/innoverse-logo.png" alt="" />
              </Link>
            </div>

            <div className="flex items-center gap-6 justify-end flex-1">
              <div className="flex items-center justify-center gap-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`group flex text-center flex-col items-center text-lg font-bold transition-colors duration-300 ${
                        isActive ? "text-primary" : "hover:text-primary"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`h-1 rounded-full block transition-all duration-300 ${
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
                className="shadow-sm transition-all font-bold text-lg rounded-sm bg-primary lg:px-6 py-2.5 hover:-translate-y-1 px-4 text-white"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>

        {/* MOBILE DROPDOWN */}
        {isOpen && (
          <div className="md:hidden bg-[linear-gradient(77deg,#F2F2E8,#FFFFFF)] shadow-md px-6 py-4 space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg text-center font-extrabold transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href={"/register"}
              onClick={() => setIsOpen(false)}
              className="block w-full text-center font-extrabold text-lg rounded-full bg-primary px-6 py-3 text-white shadow-md"
            >
              Register Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
