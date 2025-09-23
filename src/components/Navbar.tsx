"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Dynamic Experience", href: "/dynamic-experience" },
  { name: "Competitions", href: "/competitions" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 bg-[linear-gradient(77deg,#F2F2E8,#FFFFFF)] shadow-lg z-50">
      <div className="flex items-center justify-between px-4 py-4 lg:px-8">
        {/* ------------------- MOBILE HEADER ------------------- */}
        <div className="flex w-full items-center justify-between md:hidden">
          {/* Left: Logo */}
          <Link href={"/"}>
            <img src="/shared/logo.svg" alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* Center: Whiteboard Initiatives */}
          <Link href={'/ '} className="flex flex-col items-center justify-center">
            <h2 className="text-lg font-extrabold uppercase tracking-[0.1em] leading-[1.2]">
              Whiteboard
            </h2>
            <h2 className="text-xs tracking-[0.44em] leading-[1.2]">
              Initiatives
            </h2>
          </Link>

          {/* Right: Hamburger */}
          <button
            className="text-primary"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ------------------- DESKTOP HEADER ------------------- */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Logo + Text */}
          <Link href={"/"} className="flex items-center gap-2">
            <img src="/shared/logo.svg" alt="Logo" />
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-lg font-extrabold uppercase tracking-[0.1em] leading-[1.2]">
                Whiteboard
              </h2>
              <h2 className="text-sm tracking-[0.44em] leading-[1.2]">
                Initiatives
              </h2>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center justify-center flex-1">
            <div className="flex items-center justify-center gap-4 lg:gap-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`group flex text-center flex-col items-center text-lg lg:text-2xl font-extrabold transition-colors duration-300 ${
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
          </div>

          {/* CTA Button */}
          <div className="hover:-translate-y-1 transition-transform">
            <Link
              href={"/register"}
              className="shadow-[-4px_6px_14.7px_rgba(0,0,0,0.25)] hover:shadow-[-4px_6px_14.7px_rgba(0,0,0,0.35)] transition-all font-extrabold text-lg lg:text-xl rounded-full bg-primary lg:px-6 lg:py-3 px-4 py-3 text-white"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>

      {/* ------------------- MOBILE DROPDOWN ------------------- */}
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
                  isActive ? "text-primary" : "text-gray-700 hover:text-primary"
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
    </nav>
  );
};

export default Navbar;
