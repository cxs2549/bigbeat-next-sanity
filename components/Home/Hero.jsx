/* eslint-disable @next/next/no-img-element */

export default function Example() {
  return (
    <div className="">
      <div>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 sm:translate-y-8 bottom-0 h-1/2 bg-gray-100 dark:bg-neutral-900" />
            <svg
              className="absolute hidden sm:block top-8  -ml-3"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
              />
            </svg>
            <svg
              className="absolute hidden sm:block bottom-8  -ml-3 right-0"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
              />
            </svg>
            <div className="max-w-[1400px] mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="/headphones/bathys.png"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-neutral-500 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className=" text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-neutral-200 text-sm lg:text-base tracking-wide font-normal uppercase">
                      Now in stock
                    </span>
                    <span className="block text-white">
                      FOCAL Bathys Wireless
                    </span>
                  </h1>
                  <p className="mt-6 max-w-lg  text-xl text-neutral-100 ">
                    The first set of wireless headphones with active
                    noise cancelling and high-fidelity sound.
                  </p>
                  <div className="mt-10  mx-auto   sm:justify-center">
                    <div className="space-y-4 sm:space-y-0  sm:inline-grid sm:grid-cols-2 sm:gap-2">
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-sm uppercase font-bold rounded-full shadow-sm text-white bg-[#FE5754]/75  sm:px-8 active:translate-y-1 max-w-[160px] transition-transform duration-150"
                      >
                        Shop now
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-sm uppercase font-bold  shadow-sm text-white bg-neutral-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8 active:translate-y-1 max-w-[170px] rounded-full transition-transform duration-150"
                      >
                        Watch demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
        </div>

        {/* More main page content here... */}
      </div>
    </div>
  )
}
