import React from "react";
import Layout from "../components/Layouts/Layout";
import { GiMuscleUp, GiMuscularTorso } from "react-icons/gi";
import CardNews from "../components/SectionsPages/CardNews";
export default function NewsArchive() {
  return (
    <Layout>
      <section className="news--archive px-4 my-20">
        <div className=" container lg:px-20 px-4">
        <div className=" text-center mb-28">
        <h2 className="lg:text-5xl text-2xl uppercase">
            <picture>
              <img src="./assets/Accademie.png" className=" lg:w-14 w-10 inline mr-3" alt="" />
            </picture>
            {/* <GiMuscleUp className=" inline text-5xl" />{" "} */}
            <span className="border-b-4 border-main pb-2 font-universalSerif tracking-wider">
            NEWS ARCHIVE
            </span>{" "}
            <picture>
              <img src="./assets/Accademie.png" className=" lg:w-14 w-10 inline mr-3" alt="" />
            </picture>
          </h2>
        </div>
          <div className=" grid grid-cols-2 gap-x-32 gap-y-10">
            {[
              { id: "1" },
              { id: "2" },
              { id: "3" },
              { id: "4" },
              { id: "5" },
              { id: "6" },
              { id: "7" },
              { id: "8" },
            ].map(({ id }) => {
              return <CardNews id={id} key={id} />;
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
