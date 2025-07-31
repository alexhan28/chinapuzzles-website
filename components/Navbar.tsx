
"use client";

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";


const Navbar = () => {

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
              href="/contact"
              className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
