import Link from "next/link";
import React from "react";
import data from "../Data";
export default function Footer() {
  return (
    <footer className=" bg-black pb-5 px-4">
      <div className=" container">
        <div className=" grid grid-cols-12">
          <div className="lg:col-span-4 col-span-6  py-8 lg:order-1 order-1">
            <h4 className=" font-bold text-2xl">EXAMPLE</h4>
            <div className="bg-main h-1 w-2/4 mt-1"></div>
            <ul className="mt-2">
              <li className="inline-block mr-6">
                <a href="">test</a>
              </li>
              <li className=" inline-block mr-6">
                <a href="">test</a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-4 col-span-full mx-auto -mt-8 lg:order-2 order-3">
            <div>
              <Link href="/">
                <a>
                  <picture className=" flex justify-center">
                    <img
                      src="https://i.im.ge/2022/08/14/OXJlnW.ACW-Logo.png"
                      className=" w-32"
                      alt=""
                    />
                  </picture>
                </a>
              </Link>

              <ul className=" mt-2">
                {data.footerLinks.social.map(({ id, icon }) => (
                  <li className=" inline-block mr-6" key={id}>
                    <a href="">{icon}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" lg:col-span-4 col-span-6 py-8 rtl lg:order-3 order-2 ">
            <h4 className=" font-bold text-2xl">EXAMPLE</h4>
            <div className="bg-main h-1 w-2/4 mt-1"></div>
            <ul className="mt-2">
              <li className="inline-block ml-6">
                <a href="">test</a>
              </li>
              <li className=" inline-block ml-6">
                <a href="">test</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
