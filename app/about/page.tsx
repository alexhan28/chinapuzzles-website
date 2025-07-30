
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the passionate team of developers, designers, and cultural enthusiasts dedicated to creating ChinaPuzzles and sharing the beauty of Chinese culture.",
};

export default function AboutPage() {
  return (
    <MaxWidthWrapper className="mt-28 sm:mt-40">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
          About Us
        </h1>
        <div className="prose prose-lg text-zinc-300 max-w-none prose-p:text-zinc-300">
          <p>
            We are a passionate team of developers, designers, and cultural enthusiasts dedicated to bridging the gap between ancient traditions and modern entertainment. Our mission is to create engaging and educational experiences that celebrate the richness of Chinese history and art.
          </p>
          <p>
            The ChinaPuzzles project was born from a shared love for intricate puzzles and the fascinating stories woven into Chinese culture. We believe that learning can be a joyful adventure, and we strive to craft puzzles that are not only challenging but also beautiful and meaningful.
          </p>
          <p>
            From the bustling streets of Shanghai to the serene landscapes of Guilin, our inspirations are as diverse as China itself. We hope our puzzles bring you as much joy and discovery as we experienced while creating them.
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
