/* eslint-disable react/no-unescaped-entities */
/* This example requires Tailwind CSS v2.0+ */

  export default function Example() {
    return (
      <div className=" relative overflow-hidden">
  
        {/* Callout */}
        <section
          aria-labelledby="sale-heading"
          className="relative  max-w-7xl mx-auto px-4 pb-8 flex flex-col items-center text-center sm:px-6 lg:px-8"
        >
          <div className="max-w-2xl mx-auto lg:max-w-none">
            <h2
              id="sale-heading"
              className="text-4xl font-extrabold tracking-tight  sm:text-5xl lg:text-6xl"
            >
              Get 25% off during our fall sale
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-xl darktext-gray-200">
              Most of our products are limited releases that won't come back. Get your favorite items while they're in
              stock.
            </p>
            <a
              href="#"
              className="mt-6 inline-block w-full bg-[#FE5754]   border border-transparent rounded-full py-3 px-8 font-semibold text-white  sm:w-auto"
            >
              Get access to our fall sale
            </a>
          </div>
        </section>
  
       
      </div>
    )
  }
  