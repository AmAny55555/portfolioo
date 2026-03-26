"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { navLinks } from "@/lib/constants/nav-links";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="w-full pt-3 sm:pt-4">
      <div className="w-full px-3 sm:px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="bg-white border border-[#D9E2EC] rounded-xl sm:rounded-2xl shadow-sm">

       
          <div className="h-16 sm:h-20 px-3 sm:px-4 md:px-6 lg:px-8 flex items-center justify-between">

      
            <div className="flex flex-col leading-tight">
              <span className="text-[#0B3C5D] font-bold text-base sm:text-lg md:text-2xl">
                المستقبل تك
              </span>
              <span className="text-[10px] sm:text-xs text-gray-400 font-medium tracking-wide">
                Al Mostaqbal Tech
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[#1F1F1F] font-medium text-sm lg:text-base">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative group transition"
                >
                  {link.label}
                  <span className="absolute -bottom-1 right-0 h-[2px] w-0 bg-[#1DA1F2] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

         
            <div className="hidden md:block">
              <button className="bg-[#FF7A00] text-white px-4 lg:px-5 py-2 rounded-full text-sm lg:text-base font-semibold shadow-sm hover:opacity-90 hover:shadow-md transition">
                اطلب خدمة الآن
              </button>
            </div>

      
            <button
              className="md:hidden text-[#0B3C5D] text-2xl sm:text-3xl"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="فتح القائمة"
            >
              {isOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
            </button>
          </div>

          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } border-t border-[#D9E2EC]`}
          >
            <nav
              onClick={closeMenu}
              className="flex flex-col gap-4 px-4 pt-4 pb-8 text-[#1F1F1F] font-medium"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="py-1 hover:text-[#1DA1F2] transition"
                >
                  {link.label}
                </Link>
              ))}

              <button className="bg-[#FF7A00] text-white py-3 rounded-full font-semibold hover:opacity-90 transition mt-4">
                اطلب خدمة الآن
              </button>
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
}