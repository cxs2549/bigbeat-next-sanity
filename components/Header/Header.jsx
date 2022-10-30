/* eslint-disable @next/next/no-img-element */
import React from "react"
import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import {
  AiOutlineEllipsis,
  AiOutlineUser,
  AiOutlineShopping,
  AiOutlineHeart,
} from "react-icons/ai"
import {
  AnnotationIcon,
  ChatAlt2Icon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/react/outline"
import { ChevronDownIcon } from "@heroicons/react/solid"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
import { useStateContext } from "../../context/StateContext"
import Bag from './Bag'

const solutions = [
  {
    name: "Inbox",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: AnnotationIcon,
  },
  {
    name: "Messaging",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: AnnotationIcon,
  },
  {
    name: "Live Chat",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ChatAlt2Icon,
  },
  {
    name: "Knowledge Base",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
]
const navigation = [
  { name: "Discover", href: "#" },
  { name: "Shop", href: "#" },
  { name: "About", href: "#" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}
const Header = () => {
  const { data: session } = useSession()
  const { totalQuantities, showCart, setShowCart } = useStateContext()

  return (
    <header className="">
      <Popover className="relative">
        <div className="flex  relative justify-between items-center max-w-[1400px] mx-auto px-4 h-16 sm:px-6  md:space-x-10 lg:px-8">
          {/* logo */}
          <div className="flex z-10 cursor-pointer justify-start">
            <Link href="/">
              <img className="h-8 w-auto sm:h-10" src="/logo.png" alt="" />
            </Link>
          </div>
          {/* mobile icons */}
          <div className="flex-1 text-gray-500 dark:text-gray-200 flex gap-5 mr-2 justify-end md:hidden">
          <div className="relative cursor-pointer">
              <AiOutlineShopping onClick={() => setShowCart(true)} size={24} />
              <div className="absolute bg-[#FE5754] shadow-md  text-white rounded-full w-4 grid place-items-center text-xs font-bold bottom-0 translate-y-2 -translate-x-0.5 h-4">{totalQuantities}</div>
            </div>
            {session && <AiOutlineHeart size={24} />}
            <AiOutlineUser size={22} />
          </div>
          {/* menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-500   focus:outline-none focus:ring-0">
              <span className="sr-only">Open menu</span>
              <AiOutlineEllipsis className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          {/* links */}
          <Popover.Group as="nav" className="hidden md:flex gap-8 xl:gap-10 absolute max-w-fit justify-center right-1/2 translate-x-1/2 z-20">
          {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium  "
              >
                {item.name}
              </a>
            ))}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "" : "",
                      "group  rounded-md inline-flex items-center text-base font-medium  focus:outline-none focus:ring-0 "
                    )}
                  >
                    <span>Support</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-40 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid bg-white gap-6 dark:bg-neutral-900 px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                            >
                              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-[#FE5754] text-white sm:h-12 sm:w-12">
                                <item.icon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="ml-4">
                                <p className="text-base font-medium ">
                                  {item.name}
                                </p>
                                
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            
          </Popover.Group>
          {/* icons/sign in buttons */}
          {!session && (
            <div className="hidden md:flex gap-8 items-center justify-end   ">
          {/* icons */}
          <div className=" md:flex gap-5 text-gray-500 dark:text-gray-200 justify-end hidden">
            <div className="relative cursor-pointer">
              <AiOutlineShopping onClick={() => setShowCart(true)} size={22} />
              <div className="absolute bg-[#FE5754]  text-white rounded-full w-4 grid place-items-center text-xs font-bold bottom-0 translate-y-2 -translate-x-0.5 h-4">{totalQuantities}</div>
            </div>
            {session && <AiOutlineHeart size={22} />}
            <AiOutlineUser size={22} />
          </div>
              <div>
                <a
                  href="#"
                  onClick={() => signIn()}
                  className="whitespace-nowrap text-base font-medium   active:translate-y-1 transition-transform duration-150"
                >
                  Sign in
                </a>
                <a
                  href="#"
                  onClick={() => signIn()}
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-[#FE5754] hover:bg-opacity-90 active:translate-y-1 transition-transform duration-150"
                >
                  Sign up
                </a>
              </div>
            </div>
          )}
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-neutral-800 divide-y-2 divide-gray-50 dark:divide-neutral-700">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src="/logo.png" alt="Workflow" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-400  focus:outline-none focus:ring-0 ">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-7">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-[#FE5754] text-white">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium ">
                          {item.name}
                        </div>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium "
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {!session && (
                  <div>
                    <div className="mt-6">
                      <a
                        href="#"
                        onClick={() => signIn()}
                        className="w-full flex items-center justify-center px-4 py-2  rounded-full border text-base font-medium   "
                      >
                        Sign in
                      </a>
                    </div>
                    <div className="mt-2">
                      <a
                        href="#"
                        onClick={() => signIn()}
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-[#FE5754] "
                      >
                        Sign up
                      </a>
                    </div>
                  </div>
                )}
                {session && (
                  <div className="mt-6">
                    <a
                      href="#"
                      onClick={() => signOut()}
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white   bg-[#FE5754]"
                    >
                      Sign out
                    </a>
                  </div>
                )}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <Bag open={showCart} setOpen={setShowCart} />
    </header>
  )
}

export default Header
