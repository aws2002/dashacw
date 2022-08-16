import React, { useState, Fragment } from "react";
import data from "../Data";
import { BiMenu } from "react-icons/bi";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
          ? " bg-black   w-full z-[1000] sticky -top-1 lg:py-0 py-3"
          : "bg-black  border-main lg:py-0 py-2"
      }
    >
      <div className=" grid grid-cols-12">
        <div className="col-span-4 flex items-center">
          <div className=" grid grid-cols-4 ml-4">
            {data.footerLinks.social.map(({ id, icon }) => (
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="lg:col-span-1 lg:mb-0 mb-2 col-span-2  inline-flex mr-3 bg-main w-12 h-12 justify-center items-center rounded-full"
                key={id}
              >
                <Link href="">
                  <a>{icon}</a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="col-span-4 mx-auto lg:top-5 top-10 relative z-[100] cursor-pointer">
          <Link href="/">
            <a className="">
              <Image
                src={"/assets/ACW_Logo.png"}
                alt="logo"
                width={115}
                height={100}
                loading="eager"
                priority
              />
            </a>
          </Link>
        </div>
        <div className="col-span-4 flex items-center rtl">
          <div className=" grid grid-cols-12">
            <div className=" lg:col-span-2 col-span-full order-2 lg:order-1">
              <div className="text-right">
                <div>
                  <Menu
                    as="div"
                    className="relative inline-block text-left z-50"
                  >
                    <div>
                      <Menu.Button className="inline-flex w-full items-center justify-center rounded-md transition-all px-4 py-2 text-sm hover:bg-opacity-90">
                        <span className="uppercase text-5xl lg:mx-1 mx-8">
                          <BiMenu />
                        </span>
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
                      <Menu.Items className=" -z-50 top-[75px] py-10 w-screen absolute px-1 right-0 mt-2 shadow-lg bg-black ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {[
                          { id: 1, href: "/", titel: "Home" },
                          { id: 2, href: "/fqa", titel: "fqa" },
                        ].map(({ id, href, titel }) => (
                          <div className="pt-2" key={id}>
                            <Menu.Item>
                              <Link href={href}>
                                <div
                                  className={
                                    "group cursor-pointer text-center rounded-md px-2 py-2 text-sm font-semibold"
                                  }
                                >
                                  <p className=" text-2xl font-bold transition-all hover:text-main uppercase">
                                    {titel}
                                  </p>
                                </div>
                              </Link>
                            </Menu.Item>
                          </div>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
            <div className="lg:col-span-10 col-span-full flex items-center px-4 lg:order-2 order-1">
              <ul className=" uppercase font-bold text-lg">
                <li className=" inline-block ml-2 cursor-pointer">ES</li>
                <li className=" inline-block ml-2 cursor-pointer border-x-4 border-main px-3">
                  FR
                </li>
                <li className=" inline-block ml-2 cursor-pointer">EN</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
