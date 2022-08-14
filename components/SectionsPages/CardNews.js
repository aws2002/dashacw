import React from "react";
import Link from "next/link";
export default function CardNews({ id }) {
  return (
    <div className="lg:col-span-1 col-span-full" key={id}>
      <picture className=" w-full">
        <img
          loading="lazy"
          src="https://i.im.ge/2022/08/14/OXJWsW.img1.png"
          alt=""
        />
      </picture>
      <div className=" p-5">
        <h4 className=" font-bold text-2xl mb-2">EXAMPLE TITLE</h4>
        <p className=" font-medium mb-6 text-gray-400">
          lorem ipsum is simply dummy text of the printing and typesetting
          industry lorem ipsum has been the industry standard dummy text ever
          since th 1500s, when an unknown printer took
        </p>
        <Link href="/latestNews/1">
          <a className="btn">READ MORE</a>
        </Link>
      </div>
    </div>
  );
}
