import React from "react";
import Layout from "../components/Layouts/Layout";
import CardRoster from "../components/SectionsPages/CardRoster";
import { GiMuscleUp, GiMuscularTorso } from "react-icons/gi";
import BGImage from "../components/Tools/BGImage";
export default function RosterViewAll({rosters}) {
  return (
    <Layout>
      <section className="py-20">
        <BGImage hrefBg={"/assets/bg2.png"} />
        <div className=" container lg:px-20 px-4">
          <div className=" text-center mb-10">
            <h2 className=" font-extrabold lg:text-4xl text-2xl uppercase">
              <GiMuscleUp className=" inline text-5xl text-animation2" />{" "}
              <span className=" border-b-4 border-main pb-2 font-universalSerif tracking-wider	">
                OUR ROSTER
              </span>{" "}
              <GiMuscleUp className="text-5xl inline" />
            </h2>
          </div>
          <div className=" grid grid-cols-4 gap-10">
            {rosters.map(({ id, name, img }) => {
              return <CardRoster id={id} key={id} name={name} img={img} />;
            })}
          </div>
        </div>
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
