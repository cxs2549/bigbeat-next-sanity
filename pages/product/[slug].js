/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { CheckIcon, StarIcon } from "@heroicons/react/solid"
import { ShieldCheckIcon } from "@heroicons/react/outline"
import { client, urlFor } from "../../lib/client"
import Also from "../../components/Product/Sale"
import { useStateContext } from "../../context/StateContext"

const reviews = { average: 4, totalCount: 1624 }

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Example({ product }) {
  const { onAdd } = useStateContext()

  return (
    <div className="">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4">
            <h1 className="text-3xl font-extrabold tracking-tight  sm:text-4xl">
              {product.name}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <p className="text-lg  font-medium sm:text-xl">
                ${product.price}
              </p>

              <div className="ml-4 pl-4 border-l border-gray-300">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <div>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            reviews.average > rating
                              ? "text-yellow-400"
                              : "text-gray-300",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                  </div>
                  <p className="ml-2 text-sm dark:text-gray-200">
                    {reviews.totalCount} reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center">
              <CheckIcon
                className="flex-shrink-0 w-5 h-5 text-green-500"
                aria-hidden="true"
              />
              <p className="ml-2 text-sm dark:text-gray-200">
                In stock and ready to ship
              </p>
            </div>
          </section>
        </div>

        {/* Product image */}
        <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img
              src={urlFor(product.image)}
              alt={product.imageAlt}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        {/* Product form */}
        <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
          <section aria-labelledby="options-heading">
            

            <form>
              <div className="mt-10">
                <button
                  onClick={() => onAdd(product, 1)}
                  type="button"
                  className="w-full bg-[#FE5754] border border-transparent rounded-full py-3 px-8 flex items-center justify-center text-base font-semibold text-white  focus:outline-none focus:ring-0"
                >
                  Add to Bag
                </button>
              </div>
              <div className="mt-6 text-center">
                <a href="#" className="group inline-flex text-base font-medium">
                  <ShieldCheckIcon
                    className="flex-shrink-0 mr-2 h-6 w-6 dark:text-gray-200 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="dark:text-gray-200 ">
                    Lifetime Guarantee
                  </span>
                </a>
                <div className="mt-4 space-y-6">

                  <p className="text-base dark:text-gray-200 text-left">
                    The {product.name} comes with an amalgamation of style &
                    performance. Get ready to enjoy your favorite tunes
                    with Super Extra Bass and crystal-clear sound performance. Experience powerful, dynamic sound with
                    punchy bass and clear, natural vocals with the responsive
                    40mm Neodymium drivers.
                  </p>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8  lg:gap-x-8">
        <Also />
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == 'product']{slug {
        current
    }}`

  const products = await client.fetch(query)
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }))

  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0]`
  const product = await client.fetch(query)

  return {
    props: { product },
  }
}
