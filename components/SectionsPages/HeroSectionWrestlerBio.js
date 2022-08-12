import { motion } from "framer-motion";
export default function HeroSectionWrestlerBio() {
  const box={
    hidden:{
      x:"-100vw"
    },
    visible:{
      
    }
  }
  return (
    <section className="bg-[url('/assets/Herobg.png')] pt-8 bg-bottom overflow-hidden bg-cover bg-no-repeat lg:h-[87vh]">
      <div className=" container px-10">
        <div className=" grid grid-cols-2">
          <div className=" col-span-1">
            <picture>
              <img src="../assets/Image 1.png" alt="" />
            </picture>
          </div>
          <div className=" col-span-1">
            <div className=" border-[15px] border-main p-10">
              <h1 className=" font-extrabold text-5xl">JUSTIN TURNBULL</h1>
              <motion.ul className=" mt-10 text-2xl text-gray-300">
                {[
                  { id: 1, filed: "WEIGHT: ", dataFiled: "13O" },
                  { id: 2, filed: "HEIGHT:", dataFiled: "EXAMPLE" },
                  { id: 3, filed: "PRO -DEBUT:", dataFiled: "EXAMPLE" },
                  { id: 4, filed: "HOMETOWN:", dataFiled: "EXAMPLE" },
                ].map(({ id, filed, dataFiled }) => (
                  <motion.li className=" font-extrabold mb-4" key={id}>
                    {filed} <span className=" text-white">{dataFiled}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <div className=" mt-10">
                <h4 className=" font-extrabold text-5xl">ACW RECORD</h4>
                <p className=" font-extrabold text-8xl">
                  5<span>-</span>1<span>-</span>0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
