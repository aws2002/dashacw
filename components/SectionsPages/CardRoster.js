import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CardRoster({ id }) {
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
      <motion.div className=" card w-full relative" variants={imageAnimate}>
        <picture>
          <img  loading="lazy" src="https://i.im.ge/2022/08/14/OXJ6YM.Image-1.png" alt="" />
        </picture>
        <div className=" absolute bottom-5  lg:left-10 text-center lg:right-10 left-5 right-5">
          <div className="name--roster p-2">
            <span className="font-medium lg:text-lg text-sm">
              JIMMY TURNBULL
            </span>
            {/* <i></i> */}
          </div>
        </div>
        <div className="card--content absolute z-50 flex top-2/4 lg:left-10 lg:right-10 left-5 right-5">
          <Link href="/wrestlerBio/1">
            <a className=" bg-main btn lg:text-xl text-xs">VIEW PROFILE</a>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
