
"use client";

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold text-white">
            <span>ChinaPuzzles</span>
          </Link>

          <div className="hidden items-center space-x-4 sm:flex">
            <Link
              href="/about"
              className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/product"
              className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Product
            </Link>
            <Link
              href="/contact"
              className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="sm:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </MaxWidthWrapper>

      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-14 left-0 w-full bg-zinc-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/about"
              className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </Link>
            <Link
              href="/product"
              className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Product
            </Link>
            <Link
              href="/contact"
              className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
