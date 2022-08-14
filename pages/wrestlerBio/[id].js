import React from "react";
import Layout from "../../components/Layouts/Layout";
import { motion } from "framer-motion";
import { BsPlayCircleFill } from "react-icons/bs";
import Modal from "../../components/Tools/Modal";
import HeroSectionWrestlerBio from "../../components/SectionsPages/HeroSectionWrestlerBio";
export default function WrestlerBio() {
  const [selectedId, setSelectedId] = React.useState(false);
  return (
    <Layout>
      <section className="wrestler--bio mb-20 ">
        <HeroSectionWrestlerBio />
        <div className=" container mt-10 px-4">
          <div>
            <h2 className=" text-3xl font-bold my-3">LINKS</h2>
            <div className=" bg-main w-1/4 h-2"></div>
            <ul className=" mt-10">
              {[
                { id: 1, name: "website" },
                { id: 2, name: "twitter" },
                { id: 3, name: "instagram" },
                { id: 4, name: "facebook" },
              ].map(({ id, name }) => (
                <li className=" inline-block mb-10 mr-4" key={id}>
                  <a
                    href=""
                    className=" mt-10 uppercase bg-main lg:px-10 px-2 py-3 text-xl font-bold transition-all hover:opacity-90"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" my-10">
            <h2 className=" text-3xl font-bold my-3">BIO</h2>
            <div className=" bg-main w-1/4 h-2"></div>
            <p className=" lg:pr-60 mt-4 italic text-gray-400 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              assumenda, similique eveniet aliquam eligendi sequi ad quo esse
              dolor tempora quos. Quod iusto exercitationem id dolorum dolor
              voluptatibus voluptates tenetur? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eaque similique quibusdam quod optio
              numquam voluptatibus non unde repudiandae nobis aliquam dolor
              doloribus ab illo, aperiam quam. Beatae dolore impedit natus.
            </p>
          </div>
          <div>
            <h2 className=" text-3xl font-bold my-3">TITLES HELD</h2>
            <div className=" bg-main w-1/4 h-2"></div>
            <ul className=" mt-10">
              {[
                { id: 1, name: "TITLES HELD" },
                { id: 2, name: "EXAMPLE" },
                { id: 3, name: "EXAMPLE" },
                { id: 4, name: "ACW WORLD HEAVYWEIGHT" },
              ].map(({ id, name }) => (
                <li className=" inline-block mb-10 mr-4" key={id}>
                  <a
                    href=""
                    className=" mt-10 uppercase bg-main lg:px-10 px-2 py-3 text-xl font-bold transition-all hover:opacity-90"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" mt-20">
            <h2 className=" text-3xl font-bold my-3">MEDIA</h2>
            <div className=" bg-main w-1/4 h-2"></div>
            <div className=" grid grid-cols-2 mt-16 gap-16">
              <div className=" lg:col-span-1 col-span-full">
                <div className=" grid grid-cols-3">
                  <div
                    className="col-span-full cursor-pointer relative v-wrestler"
                    onClick={() => {
                      setSelectedId((pervValue) => {
                        return true;
                      });
                    }}
                  >
                    <div className="absolute top-[35%] lg:left-[230px] left-[140px] text-8xl v">
                      <BsPlayCircleFill />
                    </div>
                    <picture>
                      <img
                        loading="lazy"
                        src="../assets/Vid4.png"
                        className=" w-full"
                        alt=""
                      />
                    </picture>
                  </div>
                </div>
              </div>
              <div className=" lg:col-span-1 col-span-full">
                <div className=" grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => {
                    return (
                      <div className=" col-span-1" key={id}>
                        <picture>
                          <img
                            loading="lazy"
                            src="../assets/sans titre-0856.png"
                            alt=""
                          />
                        </picture>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal isToggled={selectedId} setToggle={setSelectedId}>
          <motion.div>osama</motion.div>
        </Modal>
      </section>
    </Layout>
  );
}
