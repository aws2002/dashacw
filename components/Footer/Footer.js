import Link from "next/link";
import React from "react";
import data from "../Data";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className=" bg-black pb-5 lg:px-0 px-4">
      <div className=" container">
        <div className=" grid grid-cols-12">
          <div className="lg:col-span-4 col-span-6  py-8 lg:order-1 order-1">
            <h4 className=" font-bold text-2xl">EXAMPLE</h4>
            <div className="bg-main h-1 w-2/4 mt-1"></div>
            <ul className="mt-2">
              {[
                { id: 1, name: "Home", href: "" },
                { id: 2, name: "Main", href: "" },
                { id: 3, name: "Home", href: "" },
                { id: 4, name: "Main", href: "" },
              ].map(({ id, name, href }) => (
                <li className="inline-block mr-6 italic" key={id}>
                  <a href={href}>{name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4 col-span-full mx-auto -mt-8 lg:order-2 order-3">
            <div>
              <Link href="/">
                <a className="flex justify-center">
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

              <ul className=" mt-2">
                {data.footerLinks.social.map(({ id, icon }) => (
                  <motion.li
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    className=" inline-flex mr-6 bg-main w-12 h-12 justify-center rounded-full items-center"
                    key={id}
                  >
                    <a href="">{icon}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" lg:col-span-4 col-span-6 py-8 rtl lg:order-3 order-2 ">
            <h4 className=" font-bold text-2xl">EXAMPLE</h4>
            <div className="bg-main h-1 w-2/4 mt-1"></div>
            <ul className="mt-2">
              {[
                { id: 1, name: "Home", href: "" },
                { id: 2, name: "Main", href: "" },
                { id: 3, name: "Home", href: "" },
                { id: 4, name: "Main", href: "" },
              ].map(({ id, name, href }) => (
                <li className="inline-block ml-6 italic" key={id}>
                  <a href={href}>{name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className=" text-center uppercase mt-2 border-t-2 pt-2 border-[#9B9B9B]">
        <p className=" text-sm font-light italic">
          COPYRIGHT © 2022 KM2 ESPORTS CORP. ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}
