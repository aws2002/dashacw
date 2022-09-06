import React from "react";
import Layout from "../../components/Layouts/Layout";
import { motion } from "framer-motion";
import { BsPlayCircleFill } from "react-icons/bs";
import Modal from "../../components/Tools/Modal";
import { useRouter } from "next/router";
import HeroSectionWrestlerBio from "../../components/SectionsPages/HeroSectionWrestlerBio";
export default function WrestlerBio({ rosters }) {
  const [selectedId, setSelectedId] = React.useState(false);
  const { query } = useRouter();
  const { slug } = query;
  const findRosters = rosters.find((x) => x.slug === slug);
  if (!findRosters) {
    return <Layout>Rosters Not Found</Layout>;
  }
  return (
    <Layout>
      <section className="wrestler--bio mb-20">
        <HeroSectionWrestlerBio rosters={findRosters}/>
        <div className=" container mt-10 px-4">
          <div className=" my-10">
            <h2 className=" text-3xl  my-3 font-universalSerif">LINKS</h2>
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
                    className="border border-b-4 font-universalSerif border-black mt-10 uppercase bg-main lg:px-10 px-2 py-3 text-xl transition-all hover:opacity-90"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" my-10">
            <h2 className=" text-3xl my-3  font-universalSerif">BIO</h2>
            <div className=" bg-main w-1/4 h-2"></div>
            <p className=" lg:pr-60 mt-4 italic text-gray-400 text-2xl font-medium">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Sed Do
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut
              Enim Ad Minim Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
              Elit Sed Do Eiusmod Tempor
            </p>
          </div>
          <div className=" my-10">
            <h2 className=" text-3xl my-3 font-universalSerif">TITLES HELD</h2>
            <div className=" bg-main w-1/4 h-2"></div>
            <ul className=" mt-10 lg:mr-40">
              {[
                { id: 1, name: "TITLES HELD" },
                { id: 2, name: "ROH TV TITLE" },
                { id: 3, name: "AAA TAG-TEAM" },
                { id: 4, name: "ACW WORLD HEAVYWEIGHT" },
                { id: 5, name: "EXAMPLE" },
                { id: 6, name: "EXAMPLE" },
              ].map(({ id, name }) => (
                <li className=" inline-block italic mb-10 mr-4" key={id}>
                  <a
                    href=""
                    className=" mt-10 uppercase bg-main lg:px-10 px-2 py-3 text-xl transition-all hover:opacity-90"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" my-10">
            <h2 className=" text-3xl my-3 font-universalSerif">MEDIA</h2>
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
                        src="/assets/Vid4.png"
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
                            src="/assets/sans titre-0856.png"
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

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:4000/rosters`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { rosters: data } };
}
