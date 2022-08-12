// /* This example requires Tailwind CSS v2.0+ */
// import React, { useState } from "react";
// import { Fragment } from "react";
// import { Popover, Transition } from "@headlessui/react";
// import {
//   BookmarkAltIcon,
//   CalendarIcon,
//   ChartBarIcon,
//   CursorClickIcon,
//   MenuIcon,
//   PhoneIcon,
//   PlayIcon,
//   RefreshIcon,
//   ShieldCheckIcon,
//   SupportIcon,
//   ViewGridIcon,
//   XIcon,
// } from "@heroicons/react/outline";
// import { ChevronDownIcon } from "@heroicons/react/solid";
// import Image from "next/image";

// const solutions = [
//   {
//     name: "Analytics",
//     description:
//       "Get a better understanding of where your traffic is coming from.",
//     href: "#",
//     icon: ChartBarIcon,
//   },
//   {
//     name: "Engagement",
//     description: "Speak directly to your customers in a more meaningful way.",
//     href: "#",
//     icon: CursorClickIcon,
//   },
//   {
//     name: "Security",
//     description: "Your customers' data will be safe and secure.",
//     href: "#",
//     icon: ShieldCheckIcon,
//   },
//   {
//     name: "Integrations",
//     description: "Connect with third-party tools that you're already using.",
//     href: "#",
//     icon: ViewGridIcon,
//   },
//   {
//     name: "Automations",
//     description:
//       "Build strategic funnels that will drive your customers to convert",
//     href: "#",
//     icon: RefreshIcon,
//   },
// ];
// const callsToAction = [
//   { name: "Watch Demo", href: "#", icon: PlayIcon },
//   { name: "Contact Sales", href: "#", icon: PhoneIcon },
// ];
// const resources = [
//   {
//     name: "Help Center",
//     description:
//       "Get all of your questions answered in our forums or contact support.",
//     href: "#",
//     icon: SupportIcon,
//   },
//   {
//     name: "Guides",
//     description:
//       "Learn how to maximize our platform to get the most out of it.",
//     href: "#",
//     icon: BookmarkAltIcon,
//   },
//   {
//     name: "Events",
//     description:
//       "See what meet-ups and other events we might be planning near you.",
//     href: "#",
//     icon: CalendarIcon,
//   },
//   {
//     name: "Security",
//     description: "Understand how we take your privacy seriously.",
//     href: "#",
//     icon: ShieldCheckIcon,
//   },
// ];
// const recentPosts = [
//   { id: 1, name: "Boost your conversion rate", href: "#" },
//   {
//     id: 2,
//     name: "How to use search engine optimization to drive traffic to your site",
//     href: "#",
//   },
//   { id: 3, name: "Improve your customer experience", href: "#" },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navbar() {
//   const [navActive, setnavActive] = useState(false);

//   const changeNav = () => {
//     if (window.scrollY >= 80) {
//       setnavActive(true);
//     } else {
//       setnavActive(false);
//     }
//   };
//   if (typeof window !== "undefined") {
//     window.addEventListener("scroll", changeNav);
//   }

//   return (
//     <>

//       <Popover
//         className={
//           navActive
//             ? " shadow-md px-4 w-full z-50 sticky -top-1 bg-black"
//             : "relative  shadow-md px-4 bg-black"
//         }
//       >
//         <div className=" container">
//           <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
//             <div className="flex justify-start lg:w-0 lg:flex-1">
//               <a href="#" className=" rounded-md flex justify-center">
//                 osama
//               </a>
//             </div>
//             <div className="-mr-2 -my-2 md:hidden">
//               <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//                 <span className="sr-only">Open menu</span>
//                 <MenuIcon className="h-6 w-6" aria-hidden="true" />
//               </Popover.Button>
//             </div>
//             <Popover.Group as="nav" className="hidden md:flex space-x-10">
//               <Popover className="relative">
//                 {({ open }) => (
//                   <>
//                     <Popover.Button
//                       className={classNames(
//                         open ? "text-gray-900" : "text-gray-500",
//                         "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                       )}
//                     >
//                       <span>Solutions</span>
//                       <ChevronDownIcon
//                         className={classNames(
//                           open ? "text-gray-600" : "text-gray-400",
//                           "ml-2 h-5 w-5 group-hover:text-gray-500"
//                         )}
//                         aria-hidden="true"
//                       />
//                     </Popover.Button>

//                     <Transition
//                       as={Fragment}
//                       enter="transition ease-out duration-200"
//                       enterFrom="opacity-0 translate-y-1"
//                       enterTo="opacity-100 translate-y-0"
//                       leave="transition ease-in duration-150"
//                       leaveFrom="opacity-100 translate-y-0"
//                       leaveTo="opacity-0 translate-y-1"
//                     >
//                       <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
//                         <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
//                           <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
//                             {solutions.map((item) => (
//                               <a
//                                 key={item.name}
//                                 href={item.href}
//                                 className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
//                               >
//                                 <item.icon
//                                   className="flex-shrink-0 h-6 w-6 text-indigo-600"
//                                   aria-hidden="true"
//                                 />
//                                 <div className="ml-4">
//                                   <p className="text-base font-medium text-gray-900">
//                                     {item.name}
//                                   </p>
//                                   <p className="mt-1 text-sm text-gray-500">
//                                     {item.description}
//                                   </p>
//                                 </div>
//                               </a>
//                             ))}
//                           </div>
//                           <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
//                             {callsToAction.map((item) => (
//                               <div key={item.name} className="flow-root">
//                                 <a
//                                   href={item.href}
//                                   className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
//                                 >
//                                   <item.icon
//                                     className="flex-shrink-0 h-6 w-6 text-gray-400"
//                                     aria-hidden="true"
//                                   />
//                                   <span className="ml-3">{item.name}</span>
//                                 </a>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </Popover.Panel>
//                     </Transition>
//                   </>
//                 )}
//               </Popover>

//               <a
//                 href="#"
//                 className="text-base font-medium text-gray-500 hover:text-gray-900"
//               >
//                 Pricing
//               </a>
//               <a
//                 href="#"
//                 className="text-base font-medium text-gray-500 hover:text-gray-900"
//               >
//                 Docs
//               </a>

//               <Popover className="relative">
//                 {({ open }) => (
//                   <>
//                     <Popover.Button
//                       className={classNames(
//                         open ? "text-gray-900" : "text-gray-500",
//                         "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                       )}
//                     >
//                       <span>More</span>
//                       <ChevronDownIcon
//                         className={classNames(
//                           open ? "text-gray-600" : "text-gray-400",
//                           "ml-2 h-5 w-5 group-hover:text-gray-500"
//                         )}
//                         aria-hidden="true"
//                       />
//                     </Popover.Button>

//                     <Transition
//                       as={Fragment}
//                       enter="transition ease-out duration-200"
//                       enterFrom="opacity-0 translate-y-1"
//                       enterTo="opacity-100 translate-y-0"
//                       leave="transition ease-in duration-150"
//                       leaveFrom="opacity-100 translate-y-0"
//                       leaveTo="opacity-0 translate-y-1"
//                     >
//                       <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
//                         <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
//                           <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
//                             {resources.map((item) => (
//                               <a
//                                 key={item.name}
//                                 href={item.href}
//                                 className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
//                               >
//                                 <item.icon
//                                   className="flex-shrink-0 h-6 w-6 text-indigo-600"
//                                   aria-hidden="true"
//                                 />
//                                 <div className="ml-4">
//                                   <p className="text-base font-medium text-gray-900">
//                                     {item.name}
//                                   </p>
//                                   <p className="mt-1 text-sm text-gray-500">
//                                     {item.description}
//                                   </p>
//                                 </div>
//                               </a>
//                             ))}
//                           </div>
//                           <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
//                             <div>
//                               <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
//                                 Recent Posts
//                               </h3>
//                               <ul role="list" className="mt-4 space-y-4">
//                                 {recentPosts.map((post) => (
//                                   <li
//                                     key={post.id}
//                                     className="text-base truncate"
//                                   >
//                                     <a
//                                       href={post.href}
//                                       className="font-medium text-gray-900 hover:text-gray-700"
//                                     >
//                                       {post.name}
//                                     </a>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>
//                             <div className="mt-5 text-sm">
//                               <a
//                                 href="#"
//                                 className="font-medium text-indigo-600 hover:text-indigo-500"
//                               >
//                                 {" "}
//                                 View all posts{" "}
//                                 <span aria-hidden="true">&rarr;</span>
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                       </Popover.Panel>
//                     </Transition>
//                   </>
//                 )}
//               </Popover>
//             </Popover.Group>
//             <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 ">
//               {[
//                 {
//                   id: 1,
//                   name: "Sign in",
//                   style:
//                     "ml-4 whitespace-nowrap inline-flex text-white items-center justify-center px-4 transition-all hover:bg-white hover:text-main hover:border hover:border-main py-2 border border-transparent rounded-md shadow-sm text-base font-medium bg-main",
//                   href: "#",
//                 },
//                 {
//                   id: 2,
//                   name: "Sign up",
//                   style:
//                     "transition-all hover:bg-main hover:text-white ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 text-main border-main  border-transparent rounded-md shadow-sm text-base font-medium  border",
//                   href: "#",
//                 },
//               ].map(({ id, name, style, href }) => (
//                 <a key={id} href={href} className={style}>
//                   {name}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//         <Transition
//           as={Fragment}
//           enter="duration-200 ease-out"
//           enterFrom="opacity-0 scale-95"
//           enterTo="opacity-100 scale-100"
//           leave="duration-100 ease-in"
//           leaveFrom="opacity-100 scale-100"
//           leaveTo="opacity-0 scale-95"
//         >
//           <Popover.Panel
//             focus
//             className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
//           >
//             <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
//               <div className="pt-5 pb-6 px-5">
//                 <div className="flex items-center justify-between">

//                     <Image
//                       src={"/assets/logoscv.svg"}
//                       width={200}
//                       alt=""
//                       height={50}
//                     />

//                   <div className="-mr-2">
//                     <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//                       <span className="sr-only">Close menu</span>
//                       <XIcon className="h-6 w-6" aria-hidden="true" />
//                     </Popover.Button>
//                   </div>
//                 </div>
//                 <div className="mt-6">
//                   <nav className="grid gap-y-8">
//                     {solutions.map((item) => (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
//                       >
//                         <item.icon
//                           className="flex-shrink-0 h-6 w-6 text-indigo-600"
//                           aria-hidden="true"
//                         />
//                         <span className="ml-3 text-base font-medium text-gray-900">
//                           {item.name}
//                         </span>
//                       </a>
//                     ))}
//                   </nav>
//                 </div>
//               </div>
//               <div className="py-6 px-5 space-y-6">
//                 <div className="grid grid-cols-2 gap-y-4 gap-x-8">
//                   <a
//                     href="#"
//                     className="text-base font-medium text-gray-900 hover:text-gray-700"
//                   >
//                     Pricing
//                   </a>

//                   <a
//                     href="#"
//                     className="text-base font-medium text-gray-900 hover:text-gray-700"
//                   >
//                     Docs
//                   </a>
//                   {resources.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="text-base font-medium text-gray-900 hover:text-gray-700"
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//                 <div>
//                   <a
//                     href="#"
//                     className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
//                   >
//                     Sign up
//                   </a>
//                   <p className="mt-6 text-center text-base font-medium text-gray-500">
//                     Existing customer?{" "}
//                     <a
//                       href="#"
//                       className="text-indigo-600 hover:text-indigo-500"
//                     >
//                       Sign in
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </Popover.Panel>
//         </Transition>
//       </Popover>
//     </>
//   );
// }

import React, { useState, Fragment } from "react";
import data from "../Data";
import { BiMenu } from 'react-icons/bi';
import { Menu, Transition } from "@headlessui/react";
export default function Navbar() {
  const [navActive, setnavActive] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setnavActive(true);
    } else {
      setnavActive(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNav);
  }

  return (
    <header
      className={
        navActive
          ? " bg-black  border-b-8 w-full z-[1000] sticky -top-1 border-main lg:py-0 py-3"
          : "bg-black border-b-8 border-main lg:py-0 py-4"
      }
    >
      <div className=" grid grid-cols-12">
        <div className="col-span-4 flex items-center ">
          <div className=" grid grid-cols-4 ">
            {data.footerLinks.social.map(({ id, icon }) => (
              <div
                className="lg:col-span-1 mb-2 col-span-2  inline-flex mr-3 bg-main w-12 h-12 justify-center items-center rounded-full"
                key={id}
              >
                <a href="">{icon}</a>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-4  mx-auto lg:top-5 top-10 relative ">
          <div>
            <picture className=" flex justify-center ">
              <img
                src="../assets/ACW_Logo.png"
                className="w-32 z-[1000]"
                alt=""
              />
            </picture>
          </div>
        </div>
        <div className="col-span-4  rtl flex items-center">
          <div className="text-right w-full ">
            <Menu as="div" className="relative inline-block text-left z-50">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md transition-all px-4 py-2 text-sm hover:bg-opacity-90">
                  <span className="uppercase text-5xl"><BiMenu/></span>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className=" top-[84px] pt-10 w-screen absolute px-1 right-0 mt-2 shadow-lg bg-black ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-5">
                    <Menu.Item>
                      <div
                        className={
                          "group cursor-pointer text-center rounded-md px-2 py-2 text-sm font-semibold"
                        }
                      >
                        <p className=" text-2xl font-bold transition-all hover:text-main">Home</p>
                      </div>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
}
