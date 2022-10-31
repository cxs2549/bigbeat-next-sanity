/* eslint-disable @next/next/no-img-element */
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from "react"
import { Dialog, Disclosure, Transition } from "@headlessui/react"
import { XIcon } from "@heroicons/react/outline"
import { ChevronDownIcon, PlusSmIcon } from "@heroicons/react/solid"
import { urlFor } from "../../lib/client"
import Link from "next/link"

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "Black" },
      { value: "beige", label: "White" },
      { value: "blue", label: "Blue" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
    ],
  },
  {
    id: "category",
    name: "Brand",
    options: [
      { value: "new-arrivals", label: "Beats" },
      { value: "tees", label: "Sony" },
      { value: "crewnecks", label: "Samsung" },
      { value: "sweatshirts", label: "Apple" },
      { value: "pants-shorts", label: "Skullcandy" },
    ],
  },
  {
    id: "sizes",
    name: "Size",
    options: [
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
    ],
  },
]

// const products = [
//   {
//     id: 1,
//     name: "Nomad Pouch",
//     href: "#",
//     price: "$50",
//     availability: "White and Black",
//     imageSrc: "/headphones/airdopes.png",
//     imageAlt:
//       "White fabric pouch with white zipper, black zipper pull, and black elastic loop.",
//   },
//   {
//     id: 2,
//     name: "Zip Tote Basket",
//     href: "#",
//     price: "$140",
//     availability: "Washed Black",
//     imageSrc: "/headphones/rockerz.png",
//     imageAlt:
//       "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
//   },
//   {
//     id: 3,
//     name: "Medium Stuff Satchel",
//     href: "#",
//     price: "$220",
//     availability: "Blue",
//     imageSrc: "/headphones/immortal.png",
//     imageAlt:
//       "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
//   },
//   {
//     id: 4,
//     name: "Medium Stuff Satchel",
//     href: "#",
//     price: "$220",
//     availability: "Blue",
//     imageSrc: "/headphones/basshead.png",
//     imageAlt:
//       "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
//   },
//   {
//     id: 5,
//     name: "Medium Stuff Satchel",
//     href: "#",
//     price: "$220",
//     availability: "Blue",
//     imageSrc: "/headphones/rugby.png",
//     imageAlt:
//       "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
//   },
//   {
//     id: 6,
//     name: "Medium Stuff Satchel",
//     href: "#",
//     price: "$220",
//     availability: "Blue",
//     imageSrc: "/headphones/storm.png",
//     imageAlt:
//       "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
//   },
//   {
//     id: 7,
//     name: "Medium Stuff Satchel",
//     href: "#",
//     price: "$220",
//     availability: "Blue",
//     imageSrc: "/headphones/basshead-2.png",
//     imageAlt:
//       "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
//   },
//   {
//     id: 8,
//     name: "Medium Stuff Satchel",
//     href: "#",
//     price: "$220",
//     availability: "Blue",
//     imageSrc: "/headphones/storm.png",
//     imageAlt:
//       "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
//   },

//   // More products...
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Example({products}) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="ml-auto bg-white dark:bg-neutral-800 relative max-w-xs w-full h-full shadow-xl py-4 pb-6 flex flex-col overflow-y-auto">
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 p-2 flex items-center justify-center text-gray-400 hover:text-gray-500"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4">
                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.name}
                      className="border-t border-gray-200 dark:border-neutral-700 pt-4 pb-4"
                    >
                      {({ open }) => (
                        <fieldset>
                          <legend className="w-full px-2">
                            <Disclosure.Button className="w-full p-2 flex items-center justify-between  hover:text-gray-500">
                              <span className="text-sm font-medium ">
                                {section.name}
                              </span>
                              <span className="ml-6 h-7 flex items-center">
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? "-rotate-180" : "rotate-0",
                                    "h-5 w-5 transform"
                                  )}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </legend>
                          <Disclosure.Panel className="pt-4 pb-2 px-4">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`${section.id}-${optionIdx}-mobile`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`${section.id}-${optionIdx}-mobile`}
                                    className="ml-3 text-sm text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </fieldset>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-[1400px] lg:px-8">
          <div className="border-b border-gray-200 dark:border-neutral-700 pb-8">
            <h1 className="text-4xl font-extrabold tracking-tight ">Browse</h1>
          </div>

          <div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <aside>
              <h2 className="sr-only">Filters</h2>

              <button
                type="button"
                className="inline-flex items-center lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="text-sm font-medium">Filters</span>
                <PlusSmIcon
                  className="flex-shrink-0 ml-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </button>

              <div className="hidden lg:block">
                <form className="divide-y divide-gray-200 dark:divide-neutral-700 space-y-10">
                  {filters.map((section, sectionIdx) => (
                    <div
                      key={section.name}
                      className={sectionIdx === 0 ? null : "pt-10"}
                    >
                      <fieldset>
                        <legend className="block text-sm font-medium ">
                          {section.name}
                        </legend>
                        <div className="pt-6 space-y-3">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type="checkbox"
                                className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`${section.id}-${optionIdx}`}
                                className="ml-3 text-sm"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  ))}
                </form>
              </div>
            </aside>

            {/* Product grid */}
            <div className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">
              {/* Replace with your content */}
              <div className="">
                <div className="max-w-7xl mx-auto pb-16 overflow-hidden">
                  <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
                    {products.map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.slug.current}`}
                        className="group text-sm"
                      >
                        <div>
                          <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75">
                            <img
                              src={urlFor(product.image)}
                              alt={product.imageAlt}
                              className="w-full h-full object-center object-cover cursor-pointer"
                            />
                          </div>
                          <h3 className="mt-4 font-medium ">
                            {product.name}
                          </h3>
                          
                          <p className="mt-2 font-semibold ">
                            ${product.price}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
