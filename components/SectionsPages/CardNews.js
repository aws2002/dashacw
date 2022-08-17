
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
        <h4 className=" font-medium tracking-wide text-2xl mb-2 font-universalSerif">EXAMPLE TITLE</h4>
        <p className=" mb-6  italic text-lg lg:pr-12 pr-5 opacity-80">
          lorem ipsum is simply dummy text of the printing and typesetting
          industry lorem ipsum has been the industry&aposs standard dummy text ever
          since th 1500s, when an unknown printer took
        </p>
        <Link href="/latestNews/1">
          <a className="btn font-universalSerif tracking-wider">READ MORE</a>
        </Link>
      </div>
    </div>
  );
}
