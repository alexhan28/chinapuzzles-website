
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
        Welcome to <span className="text-blue-600">ChinaPuzzles</span>
      </h1>
      <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
        Dive into a world of ancient wisdom and modern challenges. ChinaPuzzles offers a unique collection of puzzles that blend traditional Chinese culture with engaging, thought-provoking gameplay.
      </p>
      <Link href="/contact">
        <span className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg mt-5">
          Contact Us
        </span>
      </Link>
    </MaxWidthWrapper>
  );
}
