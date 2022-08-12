import React from "react";
import { motion } from "framer-motion";

export default function CardRoster({ id }) {
  const imageAnimate={
    offscreen:{x:-100, opacity:0},
    onscreen:{
    x:0,
    opacity:1,
    rotate:[0,10,0],
    transition: {type:"spring",
    bounce:0.4,
    duration:1}
  }
}
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      className="lg:col-span-1 col-span-2"
      key={id}
    >
      <motion.div className=" card w-full relative" variants={imageAnimate}>
        <picture>
          <img src="./assets/Image 1.png" alt="" />
        </picture>
        <div className="card--content absolute z-50 flex top-2/4 left-14">
          <a href="" className=" bg-main btn">
            VIEW PROFILE
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
