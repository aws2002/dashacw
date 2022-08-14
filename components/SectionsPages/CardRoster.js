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
          <img src="./assets/Image 1.png" alt="" />
        </picture>
        <div className=" absolute bottom-5  lg:left-8 text-center lg:right-8 left-3 right-3">
          <div className="name--roster lg:p-2 p-1">
            <span className="font-medium lg:text-lg text-xs">
              JIMMY
            </span>
            {/* <i></i> */}
          </div>
        </div>
        <div className="card--content absolute z-50 flex top-2/4 lg:left-8 lg:right-8 left-3 right-3">
          <Link href="/wrestlerBio/1">
            <a className=" bg-main py-2 w-full text-center font-medium   lg:text-xl text-xs">
              VIEW PROFILE
            </a>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
