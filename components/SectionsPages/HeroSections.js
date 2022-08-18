import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
export default function HeroSections() {
  const [t, il18n] = useTranslation();
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
        className="lg:-mt-[-200px]  bg-slate-400 w-6 h-6 lg:h-7 lg:w-7 rounded-full btn-dots"
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
    {
      id: "3",
    },
    {
      id: "4",
    },
  ];
  return (
    <section className="heroSections relative overflow-hidden">
      <div className=" container">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className=" z-50  absolute cursor-pointer lg:top-[45%] top-[41%] lg:left-4 left-2 transition-all hover:text-main hover:shadow-lg p-3 rounded-full"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <picture>
            <img src="./assets/L-Arrow.png" className=" lg:w-10 w-7" alt="" />
          </picture>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className=" z-50  absolute cursor-pointer lg:top-[45%] top-[41%] lg:right-4 right-2 transition-all hover:text-main hover:shadow-lg p-3 rounded-full"
          onClick={() => sliderRef.current.slickNext()}
        >
          <picture>
            <img src="./assets/R-Arrow.png" className=" lg:w-10 w-7" alt="" />
          </picture>
        </motion.div>
      </div>

      <div className=" grid grid-cols-1 ">
        <Slider {...settings} ref={sliderRef}>
          {dataHeroSections.map(({ id, img, name, text, saveUp }) => (
            <div key={id} className=" h-screen bg3 bg-cover bg-no-repeat">
              <div className=" grid grid-cols-12 ">
                <div className=" col-span-12 mb-16 pt-10 text-center lg:order-2 order-1">
                  <h1 className="font-universalSerif lg:text-[65px] text-[28px] mb-4 text-white ">
                    JUSTIN TURNBULL
                    <span className="block text-main text-shadow">VS</span>
                    BRIAN PILLMAN JR
                  </h1>
                  <button className="transition-all hover:opacity-90 btn text-2xl border border-b-4 font-medium border-black font-universalSerif tracking-wider">
                    {" "}
                    {t("home.btn1")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
