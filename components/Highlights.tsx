
import MaxWidthWrapper from "./MaxWidthWrapper";

const Highlights = () => {
  return (
    <div className="bg-zinc-900 py-24 sm:py-32">
      <MaxWidthWrapper>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-montserrat uppercase">
            Program Highlight
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex flex-col items-start">
            <div className="relative w-full">
              <img
                src="/images/aranya.png"
                alt=""
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time dateTime="2024" className="text-gray-400">
                  Featured
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-300">
                    FEATURED PLACE: ARANYA
                </h3>
                <p className="mt-5 line-clamp-4 text-sm leading-6 text-gray-400">
                  A coastal cultural enclave recognized by TIME as one of the World’s Greatest Places of 2024, Aranya is celebrated for its surreal blend of architecture, art, and contemplative living.
                </p>
              </div>
            </div>
          </article>

          <article className="flex flex-col items-start">
            <div className="relative w-full">
              <img
                src="/images/Enterprise.jpg"
                alt=""
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time dateTime="2024" className="text-gray-400">
                  Visits
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-300">
                    TOP-TIER/UNICORN COMPANY VISITS
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">
                  Gain firsthand access to leading forces behind China’s dynamic economy — from established enterprises to high-growth startups.
                </p>
              </div>
            </div>
          </article>

          <article className="flex flex-col items-start">
            <div className="relative w-full">
              <img
                src="/images/roundtable.png"
                alt=""
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time dateTime="2024" className="text-gray-400">
                  Interaction
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-300">
                    GUEST SPEAKER: ROUND TABLES
                </h3>
                <p className="mt-5 line-clamp-4 text-sm leading-6 text-gray-400">
                  Learn directly from those shaping China’s business and cultural landscape. Our guest speaker sessions feature outstanding entrepreneurs, investors, scholars, and global professionals.
                </p>
              </div>
            </div>
          </article>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Highlights;
