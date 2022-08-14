import { motion } from "framer-motion";
export default function HeroSectionWrestlerBio() {
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
    <section className="bg-[url('http://drive.google.com/uc?export=view&id=1TJLBMv8S2Xq2rBWqSp0Ai8bNaRCNksit')] pt-8 bg-bottom overflow-hidden bg-cover bg-no-repeat lg:h-[87vh]">
      <div className=" container px-10">
        <div className=" grid grid-cols-2">
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            layout
            className=" col-span-1"
          >
            <picture>
              <img
                src="http://drive.google.com/uc?export=view&id=1TPQDyFvn_UvyksW6Mts56dKHxAEBnq4d"
                alt=""
              />
            </picture>
          </motion.div>
          <motion.div
            className="col-span-1"
            animate="visible"
            variants={list}
            initial="hidden"
          >
            <div className=" border-[15px] border-main p-10">
              <motion.h1 variants={list} className=" font-extrabold text-5xl">
                JUSTIN TURNBULL
              </motion.h1>
              <ul className=" mt-10 text-2xl text-gray-300">
                {[
                  { id: 1, filed: "WEIGHT: ", dataFiled: "13O" },
                  { id: 2, filed: "HEIGHT:", dataFiled: "EXAMPLE" },
                  { id: 3, filed: "PRO -DEBUT:", dataFiled: "EXAMPLE" },
                  { id: 4, filed: "HOMETOWN:", dataFiled: "EXAMPLE" },
                ].map(({ id, filed, dataFiled }) => (
                  <motion.li
                    variants={list}
                    className=" font-extrabold mb-4"
                    key={id}
                  >
                    {filed} <span className=" text-white">{dataFiled}</span>
                  </motion.li>
                ))}
              </ul>
              <div className=" mt-10">
                <motion.h4 variants={list} className=" font-extrabold text-5xl">
                  ACW RECORD
                </motion.h4>
                <motion.p variants={list} className=" font-extrabold text-8xl">
                  5<span>-</span>1<span>-</span>0
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
