/* This example requires Tailwind CSS v2.0+ */
const incentives = [
    {
      name: 'Free Shipping',
      description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
      imageSrc: '/free-shipping.png',
    },
    {
      name: '24/7 Customer Support',
      description: 'Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.',
      imageSrc: '/customer-support.png',
    },
    {
      name: 'Fast Checkout',
      description: "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
      imageSrc: '/checkout.png',
    },
    {
      name: 'Gift Cards',
      description: "Buy them for your friends, especially if they don't like our store. Free money for us, it's great.",
      imageSrc: '/gift-card.png',
    },
  ]
  
  export default function Example() {
    return (
      <div className="bg-gray-50 dark:bg-neutral-900 mt-20">
        <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
            {incentives.map((incentive) => (
              <div key={incentive.name}>
                <img src={incentive.imageSrc} alt="" className="h-16 w-auto dark:invert" />
                <h3 className="mt-6 text-sm font-medium ">{incentive.name}</h3>
                <p className="mt-2 text-sm dark:text-gray-200">{incentive.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  