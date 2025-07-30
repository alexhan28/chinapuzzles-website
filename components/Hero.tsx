
import MaxWidthWrapper from "./MaxWidthWrapper";

const Hero = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
        style={{ backgroundImage: "url(/images/background.jpg)" }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>
      <MaxWidthWrapper className="relative z-10 flex flex-col items-center">
        <h1 className="font-montserrat text-5xl md:text-7xl font-bold tracking-tight text-white">
          Culture. Business. Insight.
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-zinc-300">
          Collect the puzzle pieces. Unlock a complete glimpse of China.
        </p>
        <a
          href="#details"
          className="mt-8 inline-block rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white uppercase tracking-widest transition hover:bg-white hover:text-black"
        >
          Explore Program
        </a>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
