import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
export default function CardRoster({ id, name, img, slug }) {
  const imageAnimate = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: { type: "spring", bounce: 0.4, duration: 1 },
    },
  };
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      className="lg:col-span-1 col-span-2 card--roster"
      key={id}
    >
      <motion.div
        className="card w-full h-full relative z-50"
        variants={imageAnimate}
      >
        <div className="relative">
          <picture className=" relative top-2">
            <Image
              src={img}
              alt=""
              width={315}
              height={450}
              loading="eager"
              objectFit="cover"
              priority
            />
          </picture>
          {/* <picture>
            <img src={img} alt="" />
          </picture> */}
        </div>
        <div className=" absolute bottom-5  lg:left-8 text-center lg:right-8 left-3 right-3">
          <div className="name--roster lg:p-2 p-1">
            <span className="font-medium lg:text-lg text-xs uppercase font-universalSerif tracking-wider">
              {name}
            </span>
            {/* <i></i> */}
          </div>
        </div>
        <div className="card--content absolute z-50 flex top-2/4 lg:left-8 lg:right-8 left-3 right-3">
          <Link href={`/wrestlerBio/${slug}`}>
            <a className="transition-all hover:opacity-90 bg-main py-2 w-full text-center font-medium font-universalSerif tracking-wider  lg:text-lg text-xs">
              VIEW PROFILE
            </a>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
