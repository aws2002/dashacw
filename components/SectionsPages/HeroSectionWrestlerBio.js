import { motion } from "framer-motion";
import Image from "next/image";
export default function HeroSectionWrestlerBio({rosters}) {
  const list = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      x: -10,
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };
  return (
    <section className="bg-bottom  font-universalSerif overflow-hidden bg-cover bg-no-repeat">
      <div className={"bgWrap"}>
      <Image
        alt="Mountains"
        src="/assets/Herobg.png"
        layout="fill"
        objectFit="fill"
        quality={100}
      />
    </div>
      <div className=" container pt-10 px-4">
        <div className=" grid grid-cols-2">
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            layout
            className=" lg:col-span-1 col-span-full lg:order-1 order-2 relative top-2"
          >
            <Image
              src={"/assets/Image 1.png"}
              width={440}
              height={610}
              alt=""
              objectFit={"cover"}
              objectPosition="center"
            />
          </motion.div>
          <motion.div
            className="lg:col-span-1 col-span-full lg:order-2 order-1 lg:px-16 mb-4"
            animate="visible"
            variants={list}
            initial="hidden"
          >
            <div className=" border-[15px] border-main py-14 px-8">
              <motion.h1
                variants={list}
                className=" font-extrabold lg:text-4xl text-xl"
              >
                {rosters.name}
              </motion.h1>
              <ul className=" mt-6 text-lg text-gray-300">
                {[
                  { id: 1, filed: "WEIGHT: ", dataFiled: "13O" },
                  { id: 2, filed: "HEIGHT:", dataFiled: "EXAMPLE" },
                  { id: 3, filed: "PRO -DEBUT:", dataFiled: "EXAMPLE" },
                  { id: 4, filed: "HOMETOWN:", dataFiled: "EXAMPLE" },
                ].map(({ id, filed, dataFiled }) => (
                  <motion.li
                    variants={list}
                    className=" font-extrabold mb-3"
                    key={id}
                  >
                    {filed} <span className=" text-white">{dataFiled}</span>
                  </motion.li>
                ))}
              </ul>
              <div className=" mt-14">
                <motion.h4
                  variants={list}
                  className=" font-extrabold lg:text-5xl text-3xl"
                >
                  ACW RECORD
                </motion.h4>
                <motion.p
                  variants={list}
                  className=" font-extrabold lg:text-8xl text-6xl"
                >
                  5<span className=" text-main px-4">-</span>1<span className=" text-main px-4">-</span>0
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
