import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function CardNews({ news }) {
  return (
    <div className="lg:col-span-1 col-span-full" key={news.id}>
      <Image
        src={"/assets/img1.png"}
        alt=""
        width={600}
        height={300}
        loading="eager"
        priority
      />
      <div className=" p-5">
        <h4 className=" font-medium tracking-wide text-2xl mb-2 font-universalSerif">
        {news.name}
        </h4>
        <p className=" mb-6  italic lg:text-lg lg:pr-20 opacity-80">
          {news.simplifiedDescription}
        </p>
        <Link href={`/latestNews/${news.slug}`}>
          <a className="btn font-universalSerif tracking-wider transition-all hover:opacity-90">
            READ MORE
          </a>
        </Link>
      </div>
    </div>
  );
}
