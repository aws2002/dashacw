import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { motion } from "framer-motion";
export default function HeroSections() {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
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
        className="lg:-mt-28 -mt-80 bg-slate-400 rounded-full w-3 h-3 btn-dots"
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
    <section className="heroSections relative bg-bottom  mb-10 bg-[url('http://drive.google.com/uc?export=view&id=1_Bxi2JyfXu1lO4ciXHc4VJDFVb75XmJp')] overflow-hidden bg-cover bg-no-repeat lg:h-[88vh]">
      <div className=" container">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className=" z-50 bg-white absolute cursor-pointer top-1/2 lg:left-24 left-2 transition-all hover:text-main hover:shadow-lg p-3 rounded-full"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <GrFormPrevious className=" text-3xl " />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className=" z-50 bg-white absolute cursor-pointer top-1/2 lg:right-24 right-2 transition-all hover:text-main hover:shadow-lg p-3 rounded-full"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <GrFormNext className=" text-3xl " />
        </motion.div>
      </div>

      <div className=" grid grid-cols-1">
        <Slider {...settings} ref={sliderRef}>
          {dataHeroSections.map(({ id, img, name, text, saveUp }) => (
            <div key={id} className="">
              <div className=" grid grid-cols-12">
                <div className=" lg:col-span-4 lg:order-1 order-2 col-span-6">
                  <picture>
                    <img
                      src="http://drive.google.com/uc?export=view&id=1TPQDyFvn_UvyksW6Mts56dKHxAEBnq4d"
                      loading="lazy"
                      className="h-full"
                      alt=""
                    />
                  </picture>
                </div>
                <div className=" lg:col-span-4 mb-10 pt-4 col-span-full lg:mt-20 text-center lg:order-2 order-1">
                  <h1 className=" lg:text-5xl text-4xl mb-10 text-white font-extrabold  letter-spacing">
                    JUSTIN TURNBULL
                    <span className="block text-main text-shadow my-4">VS</span>
                    BRIAN PILLMAN JR
                  </h1>
                  <button className="btn"> MORE INFO</button>
                </div>
                <div className=" lg:col-span-4 col-span-6 lg:order-3 order-3">
                  <picture>
                    <img
                      src="http://drive.google.com/uc?export=view&id=1OYIxFZHIafXvtYUKrjwGqa5vi8LeiRAj"
                      className="h-full"
                      loading="lazy"
                      alt=""
                    />
                  </picture>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
