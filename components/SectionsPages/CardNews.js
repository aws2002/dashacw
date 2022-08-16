import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function CardNews({ id }) {
  return (
    <div className="lg:col-span-1 col-span-full" key={id}>
      <Image
        src={"/assets/img1.png"}
        alt=""
        width={600}
        height={300}
        loading="eager"
        priority
      />
      <div className=" p-5">
        <h4 className=" font-bold text-2xl mb-2">EXAMPLE TITLE</h4>
        <p className=" font-normal mb-6 text-gray-400 italic lg:pr-28">
          lorem ipsum is simply dummy text of the printing and typesetting
          industry lorem ipsum has been the industrys standard dummy text ever
          since th 1500s, when an unknown printer took
        </p>
        <Link href="/latestNews/1">
          <a className="btn">READ MORE</a>
        </Link>
      </div>
    </div>
  );
}
