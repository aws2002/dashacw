import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { motion } from "framer-motion";
import Image from "next/image";
export default function HeroSections() {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: true,
    appendDots: (dots) => <ul> {dots} </ul>,
    customPaging: () => (
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="lg:-mt-20 -mt-[360px] bg-slate-400 rounded-full w-4 h-4 btn-dots"
      ></motion.div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const dataHeroSections = [
    {
      id: "1",
    },
    {
      id: "2",
    },
  ];
  return (
    <section className="heroSections relative bg-bottom  bg3   bg-cover bg-no-repeat overflow-hidden">
      <div className=" container">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className=" z-50  absolute cursor-pointer lg:top-1/2 top-[41%] lg:left-4 left-2 transition-all hover:text-main hover:shadow-lg p-3 rounded-full"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <picture>
            <img src="./assets/L-Arrow.png" className=" lg:w-10 w-7" alt="" />
          </picture>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className=" z-50  absolute cursor-pointer lg:top-1/2 top-[41%] lg:right-4 right-2 transition-all hover:text-main hover:shadow-lg p-3 rounded-full"
          onClick={() => sliderRef.current.slickNext()}
        >
          <picture>
            <img src="./assets/R-Arrow.png" className=" lg:w-10 w-7" alt="" />
          </picture>
        </motion.div>
      </div>

      <div className=" grid grid-cols-1 pt-4">
        <Slider {...settings} ref={sliderRef}>
          {dataHeroSections.map(({ id, img, name, text, saveUp }) => (
            <div key={id}>
              <div className=" grid grid-cols-12">
                <div className=" lg:col-span-3 lg:order-1 w-full  order-2 col-span-6 -mr-10 relative lg:top-8 top-14">
                  <Image
                    src={"/assets/L-image@2x.png"}
                    alt=""
                    width={440}
                    height={710}
                    objectFit="cover"
                    loading="eager"
                    priority
                  />
                </div>
                <div className=" lg:col-span-6 mb-16 col-span-full pt-6  text-center lg:order-2 order-1">
                  <h1 className="font-universalSerif lg:text-[65px] text-[30px] mb-4 text-white font-extrabold tracking-wider">
                    JUSTIN TURNBULL
                    <span className="block text-main text-shadow">VS</span>
                    BRIAN PILLMAN JR
                  </h1>
                  <button className="transition-all hover:opacity-90 btn text-2xl border border-b-4 font-medium border-black font-universalSerif tracking-wider">
                    {" "}
                    MORE INFO
                  </button>
                </div>
                <div className=" lg:col-span-3 col-span-6 lg:order-3 order-3 -ml-10 relative lg:top-8 top-14">
                  <Image
                    src={"/assets/R-Image@2x.png"}
                    alt=""
                    width={440}
                    height={640}
                    objectFit="cover"
                    loading="eager"
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
