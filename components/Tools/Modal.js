import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
export default function Modal({ isToggled, children, setToggle }) {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    customPaging: () => (
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className=" -mt-12  bg-slate-400 w-6 h-6 lg:h-7 lg:w-7 rounded-full btn-dots"
      ></motion.div>
    ),
    pauseOnHover: true,
    appendDots: (dots) => <ul> {dots} </ul>,

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
  const data = [
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
    <AnimatePresence>
      {isToggled && (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.3,
              },
            }}
            onClick={() => setToggle(false)}
            className="top-0 left-0 fixed bg-black w-screen h-screen bg-opacity-70 z-[1000]"
          />
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              scale: 0,
              transition: {
                delay: 0.3,
              },
            }}
            className="w-full px-4 my-20 flex justify-center items-center fixed container inset-0 bg-main p-5 z-[1000] overflow-hidden"
          >
            <motion.div
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.3,
                },
              }}
              exit={{
                x: 100,
                opacity: 0,
                transition: {
                  duration: 0.3,
                },
              }}
            >
              <section className="heroSections relative overflow-hidden">
                <div className=" container">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    className=" z-50  absolute cursor-pointer lg:top-[45%] top-[41%] lg:left-4 left-2 transition-all hover:text-main hover:shadow-lg p-3 rounded-full"
                    onClick={() => sliderRef.current.slickPrev()}
                  >
                    <Image
                      src="/assets/L-Arrow.png"
                      width={35}
                      height={60}
                      alt=""
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    className=" z-50  absolute cursor-pointer lg:top-[45%] top-[41%] lg:right-4 right-2 transition-all hover:text-main hover:shadow-lg p-3 rounded-full"
                    onClick={() => sliderRef.current.slickNext()}
                  >
                    <Image
                      src="/assets/R-Arrow.png"
                      width={35}
                      height={60}
                      alt=""
                    />
                  </motion.div>
                </div>

                <div className=" grid grid-cols-1 ">
                  <Slider {...settings} ref={sliderRef}>
                    {data.map(({id}) => (
                      <div key={id}>
                        <div className=" col-span-12 mb-16 pt-10 text-center lg:order-2 order-1">
                          {children}
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </section>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
